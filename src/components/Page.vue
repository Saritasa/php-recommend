<template>
  <div class="page">
    <div class="section title">
      <h1>Saritasa recommended packages for PHP</h1>
    </div>

    <div class="section tag-cloud">
      <tag-cloud ref="tagCloud"></tag-cloud>
    </div>

    <div class="section search-box">
      <search-box ref="searchBox" :keywordChange="keywordChange"></search-box>
    </div>

    <div class="section resource">
      <resource-sections
        v-for="(item, name) in this.filterResource"
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
      filterResource: Yaml.load('/static/list.yaml')
    }
  },
  methods: {
    keywordChange () {
      console.log('dasda')
    }
  },
  mounted () {
    this.$watch(
      '$refs.searchBox.skeyword',
      (val) => {
        // let result = _.clone(this.yamlData)
        let result = Yaml.load('/static/list.yaml')
        console.log(result)
        let words = _.words([_.lowerCase(val)], /[-\w]+/g)
        let cloudWords = this.$refs.tagCloud.countedWords
        console.log(words)

        // Filter words not in tag cloud
        words = _.intersection(words, _.keys(cloudWords))
        // console.log(words)
        // console.log(result)

        _.forEach(result, (sub, resourceKey) => {
          console.log(resourceKey)
          _.forEach(sub, (items, subKey) => {
            console.log(subKey)
            let matches = []
            _.filter(items, (item, key) => {
              if (_.intersection(words, _.words([_.lowerCase(key)], /[-\w]+/g)).length > 0) {
                matches[key] = item
                return true
              }
              _.forEach(item, (text, label) => {
                console.log(label)
                console.log(_.intersection(words, _.words([_.lowerCase(text)], /[-\w]+/g)).length)
                if (_.intersection(words, _.words([_.lowerCase(text)], /[-\w]+/g)).length > 0) {
                  matches[key] = item
                  return true
                }
              })
              return false
              /**/
            })
            console.log('matches:\r\n')
            console.log(matches)
            sub[subKey] = matches
            /*
            for (let i = _.size(items) - 1; i >= 0; i--) {
              console.log('aasdasd')
              console.log(_.slice(items, i, 1))
              let matched = false
              let key = _.keys(_.nth(items, i))[0]
              let item = items[i][key]
              if (_.intersection(words, _.words([key.toLowerCase()], /[-\w]+/g)).length > 0) {
                matched = true
              }
              _.forEach(item, (text, label) => {
                if (_.intersection(words, _.words([text.toLowerCase()], /[-\w]+/g)).length > 0) {
                  matched = true
                }
              })

              if (!matched) {
                items = _.slice(items, i, 1)
              }
              // return true
              // console.log(item)
              // console.log(_.intersection(words, _.split(item.toLowerCase(), ' ')).length)
              // return _.intersection(words, _.split(item.toLowerCase(), ' ')).length === 0
            }
            */
          })
        })

        this.filterResource = _.clone(result)
        result = null
      }
    )
  }
}
</script>

<style lang="scss">
  .section.title {
    text-align: center;
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
  }
</style>
