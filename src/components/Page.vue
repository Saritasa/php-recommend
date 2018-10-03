<template>
  <div class="page">
    <div class="section title">
      <h1>Saritasa recommended stuff for PHP</h1>
    </div>

    <div class="section tag-cloud">
      <tag-cloud ref="tagCloud"
                 :on-word-click="onWordClick"/>
    </div>

    <div class="section search-box">
      <search-box ref="searchBox"
                  :search-change="searchChange"/>
      <div class="section breadcrumb">
        <span v-for="(selectedTag, index) in selectedTags"
              :key="index"
              class="selected-tag">
          {{ selectedTag }}
          <span class="icon"
                @click="clearTag(index)"><v-icon small>close</v-icon></span>
        </span>
      </div>
    </div>

    <div class="result-count">
      <span>{{ resultCount }} results found.</span>
      <span v-if="explainCount > 0">({{ explainCount }} matched in 'explain' content)</span>
    </div>
    <div class="section resource">
      <resource-sections
        v-for="(item, name) in resources"
        :key="name"
        :name="name"
        :resource="item"
      />
    </div>

    <div class="section footer">
      <quick-link/>
    </div>
  </div>
</template>

<script>
import TagCloud from '@/components/tag-cloud/TagCloud';
import SearchBox from '@/components/search/SearchBox';
import ResourceSections from '@/components/ResourceSections';
import QuickLink from '@/components/footer/QuickLink';
import Yaml from 'yamljs';
import _ from 'lodash';

export default {
  components: {
    TagCloud,
    SearchBox,
    ResourceSections,
    QuickLink,
  },
  data() {
    return {
      yamlData:     Yaml.load('/static/list.yaml'),
      resources:    {},
      resultCount:  0,
      explainCount: 0,
      selectedTags: [],
    };
  },
  created() {
    // Add 'url' to website item if it hasn't
    _.forEach(this.yamlData, (val, k) => {
      _.forEach(val.websites, (item, key) => {
        let url = item.url || key;

        if (!_.startsWith(url, 'http')) {
          url = `http://${url}`;
        }
        this.yamlData[k].websites[key].url = url;
      });
    });

    this.searchChange();
  },
  methods: {
    onWordClick(clickedWord) {
      if (_.indexOf(this.selectedTags, clickedWord) === -1) {
        this.selectedTags.push(clickedWord);
        this.$refs.tagCloud.selectedTags = this.selectedTags;
        this.searchChange(window.event, this.$refs.searchBox.keyword);
      }
    },
    /**
       * Get array of words in a phrase. Not include special chars.
       * A word can be group of alphabets or group of digits.
       * Each words will became lowercase word.
       *
       * @param phrase A string
       */
    pureWords(phrase) {
      if (phrase === undefined) {
        return phrase;
      }

      let result = phrase;

      if (_.isArray(phrase)) {
        result = _.join(_.flattenDeep(phrase), ' ');
      }

      return _.words(result.toLowerCase(), /[-\w]+/g);
    },
    toLowerTags(tags) {
      const result = [];

      _.forEach(tags, (tag, key) => {
        result[key] = tag.toLowerCase();
      });

      return result;
    },
    /**
       * Split text to array of words and marks (, . @ / so on).
       * E.x: The text "quick, brown @fox" will be split to ['quick', ',', ' ', 'brown', ' ', '@', 'fox']
       *
       * @param text
       */
    fragString(text) {
      return text.split(/([^a-zA-Z])/g);
    },
    highlight(keywords, sentence) {
      const pureKeywords = this.pureWords(keywords);

      const sentenceWords = this.fragString(sentence);

      _.forEach(sentenceWords, (val, key) => {
        if (_.indexOf(pureKeywords, val.toLowerCase()) !== -1) {
          sentenceWords[key] = `<span class="highlighted-word">${val}</span>`;
        }
      });

      return _.join(sentenceWords, '');
    },
    searchChange(event, kw) {
      const keyword = kw === undefined ? '' : kw;

      const val = _.trim(keyword);
      const words = this.pureWords(val);

      this.resultCount = 0;
      this.explainCount = 0;

      const filteredResources = {};

      _.forEach(this.yamlData, (resource, resourceKey) => {
        //
        const filteredLists = {};

        _.forEach(resource, (list, listKey) => {
          // listKey = 'packages', 'websites'...
          const filteredItems = {};

          _.forEach(list, (item, itemKey) => {
            let highlightKey = itemKey;
            //
            let matched = false;
            const matchedItem = _.clone(item);

            // 1. Filter by selected tags in cloud
            let noTag = false;

            if (this.selectedTags.length > 0) {
              _.forEach(this.selectedTags, selectedTag => {
                if (_.indexOf(this.toLowerTags(item.tags), selectedTag.toLowerCase()) === -1) {
                  noTag = true;
                }
              });
            }

            if (noTag === true) {
              return;
            }

            // 2. Filter by keywords
            if (words.length === 0) {
              matched = true;
            } else {
              // 2.1 Check with article key. E.x: 'saritasa/common', 'dingo/api'
              if (_.intersection(words, this.pureWords(itemKey)).length > 0) {
                highlightKey = this.highlight(words, itemKey);
                matched = true;
              }

              // 2.2 Check with article content
              _.forEach(item, (text, label) => {
                if (_.intersection(words, this.pureWords(text)).length > 0) {
                  // Except 'explain' and 'url' because they aren't shown as text
                  if (label !== 'explain' && label !== 'url' && label !== 'tags') {
                    matchedItem[label] = this.highlight(words, text);
                  } else {
                    matchedItem[label] = text;
                    if (label === 'explain') {
                      this.explainCount++;
                    }
                  }
                  matched = true;
                }
              });
            }

            if (matched === true) {
              filteredItems[highlightKey] = matchedItem;
              this.resultCount++;
            }
          });
          if (_.size(filteredItems) > 0) {
            filteredLists[listKey] = filteredItems;
          }
        });
        if (_.size(filteredLists) > 0) {
          filteredResources[resourceKey] = filteredLists;
        }
      });

      this.resources = '';
      Object.keys(this.resources).forEach(prop => {
        delete this.resources[prop];
        this.resources[prop] = undefined;
      });

      this.resources = filteredResources;
      if (this.$refs.tagCloud !== undefined) {
        // TagCloud was loaded
        this.$refs.tagCloud.searchResult = filteredResources;
      }

      return false;
    },
    clearTag(tagIndex) {
      this.$delete(this.selectedTags, tagIndex);
      this.searchChange(window.event, this.$refs.searchBox.keyword);
    },
  },
};
</script>

<style lang="scss">
  .section.title {
    text-align: center;
  }
  .section.search-box {
    margin-bottom: 10px;
  }
  .section.breadcrumb {
    padding: 0 10px 0 0;
    display: inline-block;
    .selected-tag {
      position: relative;
      margin-right: 12px;
      padding: 4px 20px 4px 10px;
      white-space: nowrap;
      background-color: #27a927;
      color: #fff;
      line-height: 22px;
      height: 22px;
      display: inline-block;
      &:before {
        content:"";
        position: absolute;
        top: 0;
        left: 100%;
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 10px solid #27a927;
      }
      .icon {
        position: absolute;
        top: 3px;
        right: -5px;
        color: #000;
        line-height: 30px;
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
  .result-count {
    background-color: #efeded;
    padding: 10px;
    font-weight: bold;
  }
  .section.footer {
    border-top: 1px solid #cacaca;
    border-bottom: 1px solid #cacaca;
    margin-top: 20px;
  }
</style>
