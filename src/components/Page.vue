<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <h1>Recommended stuff for PHP team</h1>
    </v-layout>
    <v-layout>
      <tag-cloud ref="cloud" @wordClick="onWordClick"/>
    </v-layout>
    <v-layout row align-center>
      <v-flex shrink xs4>
        <v-text-field v-model="keyword" clearable clear-icon="clear" type="text"
                      label="Search text or tag" >
          <v-icon slot="prepend" large>search</v-icon>
        </v-text-field>
      </v-flex>
      <v-flex grow>
        <v-chip v-for="(selectedTag, index) in selectedTags" close
                :key="index"
                @input="() => removeTag(index)"
        >
          {{ selectedTag }}
        </v-chip>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex v-if="resultsCount">{{ resultsCount }} results found.</v-flex>
      <v-flex v-else>
        <v-card class="elevation-20" color="#FFCC80">
          <v-card-text>No matching results</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout :row="false" wrap>
      <v-flex>
        <resource-sections :tech-stack="stack" v-for="(stack, index) in resources" :key="index" />
      </v-flex>
    </v-layout>
    <v-layout>
      <quick-link class="section footer"/>
    </v-layout>
  </v-container>
</template>

<script>
import Utils from 'yamljs/lib/Utils';
import YamlDataConverter from '../services/YamlDataConverter';
import TagsService from '../services/TagsService';
import TagCloud from './tag-cloud/TagCloud';
import ResourceSections from './ResourceSections';
import QuickLink from './footer/QuickLink';
import Tag from '../entities/Tag';
import 'vuetify/dist/vuetify.min.css';

export default {
  components: {
    TagCloud,
    ResourceSections,
    QuickLink,
  },
  data() {
    return {
      tagService: new TagsService([]),
      keyword: null,
      selectedTags: [],
    };
  },
  computed: {
    resources() {
      return this.tagService.getTechnologyStacks();
    },
    resultsCount() {
      return this.tagService.getMatchedCount();
    },
    tags() {
      return this.tagService.getTags();
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
    Utils.getStringFromFile(`${process.env.BASE_URL}list.yaml`, content => {
      const recommendations = YamlDataConverter.parse(content);
      this.tagService = new TagsService(recommendations);
      this.onClearSearch();
    });
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
      this.$refs.cloud.setTags(this.tagService.getTags());
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
  .section.footer {
    border-top: 1px solid #cacaca;
    margin-top: 20px;
    width: 100%;
  }
</style>
