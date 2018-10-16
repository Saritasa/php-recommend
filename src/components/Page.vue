<template>
  <div class="page">
    <div class="section title">
      <h1>Saritasa recommended stuff for PHP</h1>
    </div>

    <div class="section tag-cloud">
      <tag-cloud ref="cloud"
                 :tags="tags"
                 @wordClick="onWordClick"
      />
    </div>

    <div class="section search-box">
      <search-box v-model="keyword"
                  @clearSearch="onClearSearch"
      />
      <div class="section breadcrumb">
        <span v-for="(selectedTag, index) in selectedTags"
              :key="index"
              class="selected-tag"
        >
          {{ selectedTag }}
          <span class="icon"
                @click="removeTag(index)"
          >
            <v-icon small>close</v-icon>
          </span>
        </span>
      </div>
    </div>

    <div class="result-count">
      <span>{{ resultsCount }} results found.</span>
    </div>
    <div v-if="resources.length"
         class="section resource"
    >
      <resource-sections
        v-for="(stack, index) in resources"
        :key="index"
        :item="stack"
      />
    </div>
    <div v-else>
      No matched results found
    </div>

    <div class="section footer">
      <quick-link/>
    </div>
  </div>
</template>

<script>
import YamlDataConverter from '../services/YamlDataConverter';
import TagsService from '../services/TagsService';
import TagCloud from './tag-cloud/TagCloud';
import SearchBox from './search/SearchBox';
import ResourceSections from './ResourceSections';
import QuickLink from './footer/QuickLink';
import Tag from '../entities/Tag';

export default {
  components: {
    TagCloud,
    SearchBox,
    ResourceSections,
    QuickLink,
  },
  data() {
    return {
      tagService:   null,
      keyword:      null,
      selectedTags: [],
    };
  },
  computed: {
    tags() {
      return this.tagService.getTags();
    },
    resources() {
      return this.tagService.getTechnologyStacks();
    },
    resultsCount() {
      return this.tagService.getMatchedCount();
    },
  },
  watch: {
    keyword(keyword) {
      this.keyword = keyword;
      this.tagService.setKeyWord(keyword);
      this.rescan();
    },
  },
  created() {
    const yamlConverter = new YamlDataConverter();

    this.tagService = new TagsService(yamlConverter.parse(`${process.env.BASE_URL}list.yaml`));
    this.tagService.rescan();
  },
  methods: {
    /**
     * Action after click on lick in some tag.
     *
     * @param {string} tagName - Tag on which was click
     */
    onWordClick(tagName) {
      if (this.selectedTags.indexOf(tagName) !== -1) {
        return;
      }
      this.tagService.addTag(new Tag(tagName));
      this.selectedTags.push(tagName);
      this.rescan();
    },

    /**
     * Action after clicking on "Clear" button of search box.
     */
    onClearSearch() {
      this.keyword = null;
      this.tagService.setKeyWord(this.keyword);
      this.rescan();
    },

    /**
     * Rescan tags/technology stacks according which search string and selected tags.
     */
    rescan() {
      this.tagService.rescan();
      this.$refs.cloud.reInit();
    },

    /**
     * Remove early selected tag and rescan.
     *
     * @param {number} index - Tag index in component tags collection.
     */
    removeTag(index) {
      this.tagService.removeTag(this.selectedTags[index]);
      this.selectedTags.splice(index, 1);
      this.rescan();
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
    position: relative;
    z-index: 1;
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
    .resources-list {
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
