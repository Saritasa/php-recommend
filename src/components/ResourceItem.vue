<template>
  <li>
    <a :href="item.url">
      <span v-html="hlSearch(item.name)"></span>
    </a>
    <template v-if="item.desc">
      - <span v-html="hlSearch(markdown(item.desc))" class="resource-description"/>
    </template>

    <v-tooltip bottom close-delay="600" v-if="item.explanation">
      <v-icon slot="activator" size="18" color="blue darken-2">help_outline</v-icon>
      <span v-html="hlSearch(markdown(item.explanation))"></span>
    </v-tooltip>
  </li>
</template>

<script>
import marked from 'marked';
import { mapState } from 'vuex';

export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  computed: mapState(['searchText']),
  methods: {
    markdown(value) {
      return marked.inlineLexer(value, []);
    },
    /**
     * Highlight search results, if any
     *
     * @param {string} value text, that probably contains search term
     * @returns {string}
     */
    hlSearch(value) {
      if (!value || !this.searchText) {
        return value;
      }
      let result = value;
      this.searchText.split(/\W+/, 20).forEach(term => {
        result = result.replace(new RegExp(`[^<]${term}[^>]`, 'i'), found => `<b class="search-result">${found}</b>`);
      });
      return result;
    },
  },
};
</script>

<style>
  .resource-description {
    padding-right: 3pt;
  }
  .search-result {
    font-weight: bold
  }
</style>
