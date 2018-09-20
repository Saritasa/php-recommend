<template>
  <div class="page">
    <div class="section title">
      <h1>Saritasa recommended packages for PHP</h1>
    </div>

    <div class="section tag-cloud">
      <tag-cloud ref="tagCloud" :onWordClick="onWordClick"></tag-cloud>
    </div>

    <div class="section breadcrumb">
      <span class="selected-tag" v-bind:key="index" v-for="(selectedTag, index) in selectedTags">
        {{ selectedTag }}<span class="icon" @click="clearTag(index)"><v-icon small>close</v-icon></span>
      </span>
    </div>

    <div class="section search-box">
      <search-box ref="searchBox" :searchChange="searchChange"></search-box>
    </div>

    <div class="section resource">
      <resource-sections
        v-for="(item, name) in this.resources"
        v-bind:key="name"
        :name="name"
        :resource="item"
      >
      </resource-sections>
    </div>
  </div>
</template>

<script>
import TagCloud from '@/components/tag-cloud/TagCloud.vue'
import SearchBox from '@/components/search/SearchBox.vue'
import ResourceSections from '@/components/ResourceSections.vue'
import Yaml from 'yamljs'
import _ from 'lodash'

export default {
  components: {
    TagCloud,
    SearchBox,
    ResourceSections
  },
  data () {
    return {
      yamlData: Yaml.load('/static/list.yaml'),
      resources: {},
      selectedTags: []
    }
  },
  methods: {
    onWordClick (clickedWord, vm) {
      if (_.indexOf(this.selectedTags, clickedWord) === -1) {
        this.selectedTags.push(clickedWord)
        this.$refs.tagCloud.selectedTags = this.selectedTags
        this.searchChange(window.event, this.$refs.searchBox.keyword)
      }
      // this.$refs.tagCloud.wordClick(this.selectedTags)
    },
    /**
     * Get array of words in a phrase. Not include special chars.
     * A word can be group of alphabets or group of digits.
     *
     * @param phrase A string
     */
    pureWords (phrase) {
      if (phrase === undefined) {
        return phrase
      }
      if (_.isArray(phrase)) {
        phrase = _.join(_.flattenDeep(phrase), ' ')
      }

      return _.words(phrase.toLowerCase(), /[-\w]+/g)
    },
    /**
     * Split text to array of words and marks (, . @ / so on).
     * E.x: The text "quick, brown @fox" will be split to ['quick', ',', ' ', 'brown', ' ', '@', 'fox']
     *
     * @param text
     */
    defragString (text) {
      return text.split(/([^a-zA-Z])/g)
    },
    highlight (keywords, sentence) {
      keywords = this.pureWords(keywords)

      let sentenceWords = this.defragString(sentence)
      _.forEach(sentenceWords, (val, key) => {
        if (_.indexOf(keywords, val.toLowerCase()) !== -1) {
          sentenceWords[key] = '<span class="highlighted-word">' + val + '</span>'
        }
      })

      return _.join(sentenceWords, '')
    },
    searchChange (event, keyword) {
      keyword = keyword === undefined ? '' : keyword
      let val = _.trim(keyword)
      let words = this.pureWords(val)

      let filteredResources = {}
      _.forEach(this.yamlData, (resource, resourceKey) => {
        //
        let filteredLists = {}
        _.forEach(resource, (list, listKey) => {
          // listKey = 'packages', 'websites'...
          let filteredItems = {}
          _.forEach(list, (item, itemKey) => {
            //
            let matched = false
            let matchedItem = _.clone(item)

            // 1. Filter by selected tags in cloud
            let noTag = false
            if (this.selectedTags.length > 0) {
              _.forEach(this.selectedTags, (selectedTag) => {
                if (_.indexOf(this.pureWords(item['tags']), selectedTag) === -1) {
                  noTag = true
                }
              })
            }
            if (noTag === true) {
              return
            }

            // 2. Filter by keywords
            // 2.1 Check with article key. E.x: 'saritasa/common', 'dingo/api'
            if (_.intersection(words, this.pureWords(itemKey)).length > 0) {
              itemKey = this.highlight(words, itemKey)
              matched = true
            }

            // 2.2 Check with article content
            _.forEach(item, (text, label) => {
              if (_.intersection(words, this.pureWords(text)).length > 0) {
                // Except 'explain' and 'url' because they aren't shown as text
                if (label !== 'explain' && label !== 'url' && label !== 'tags') {
                  matchedItem[label] = this.highlight(words, text)
                } else {
                  matchedItem[label] = text
                }
                matched = true
              }
            })
            if (matched === true || words.length === 0) {
              filteredItems[itemKey] = matchedItem
            }
          })
          if (_.size(filteredItems) > 0) {
            filteredLists[listKey] = filteredItems
          }
        })
        if (_.size(filteredLists) > 0) {
          filteredResources[resourceKey] = filteredLists
        }
      })

      this.resources = ''
      Object.keys(this.resources).forEach(function (prop) {
        delete this.resources[prop]
        this.resources[prop] = undefined
      })

      this.resources = filteredResources
      return false
    },
    clearTag (tagIndex) {
      this.$delete(this.selectedTags, tagIndex)
      this.searchChange(window.event, this.$refs.searchBox.keyword)
    }
  },
  created () {
    // Add 'url' to website item if it hasn't
    _.forEach(this.yamlData, (val) => {
      _.forEach(val['websites'], (item, key) => {
        val['websites'][key]['url'] = item.url || key
        if (!_.startsWith(val['websites'][key]['url'], 'http')) {
          val['websites'][key]['url'] = 'http://' + val['websites'][key]['url']
        }
      })
    })

    this.resources = this.yamlData
  }
}
</script>

<style lang="scss">
  .section.title {
    text-align: center;
  }
  .section.breadcrumb {
    width: 50%;
    margin: 0 auto;
    padding: 10px;
    .selected-tag {
      position: relative;
      margin-right: 12px;
      padding: 4px 20px 4px 10px;
      background-color: #27a927;
      color: #fff;
      line-height: 26px;
      &:before {
        content:"";
        position: absolute;
        top: 0;
        left: 100%;
        width: 0;
        height: 0;
        border-top: 13px solid transparent;
        border-bottom: 13px solid transparent;
        border-left: 10px solid #27a927;
      }
      .icon {
        position: absolute;
        top: 3px;
        right: -5px;
        color: #000;
        line-height: 26px;
        cursor: pointer;
      }
    }
  }
  .section.resource {
    .resource-wrapper {
      padding: 10px;
      margin-bottom: 5px;
      &:nth-child(odd) {
        background-color: #e6e3e3;
      }
      &:nth-child(even) {
        background-color: #eaeaea;
      }
    }
    .package-list, .website-list, .tutorial-list {
      padding-bottom: 15px;
    }
    h1, h2, h3, h4 {
      margin: 2px 0;
    }
    h1 {
      padding-left: 2px;
    }
    h2 {
      padding-left: 12px;
    }
    h3 {
      padding-left: 22px;
    }
    h4 {
      padding-left: 32px;
    }
    li {
      padding-left: 42px;
      line-height: 28px;
      a {
        text-decoration: none;
      }
      i {
        font-size: 20px !important;
      }
    }
    .highlighted-word {
      color: #d87b25;
      font-weight: bold;
    }
  }
</style>
