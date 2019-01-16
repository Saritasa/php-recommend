<template>
  <li>
    <a :href="item.url">
      <span v-html="item.name"></span>
    </a>
    <template v-if="item.desc">
      - <span v-html="markdown(item.desc)" class="resource-description"/>
    </template>
    <v-tooltip bottom close-delay="600" v-if="item.explanation">
      <v-icon slot="activator" size="18" color="blue darken-2">help_outline</v-icon>
      <span v-html="markdown(item.explanation)"></span>
    </v-tooltip>
  </li>
</template>

<script>
import marked from 'marked';

export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  methods: {
    markdown(value) {
      return marked.inlineLexer(value, []);
    },
  },
};
</script>

<style>
  .resource-description {
    padding-right: 3pt;
  }
</style>
