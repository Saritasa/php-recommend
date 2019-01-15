<template>
  <div class="tags-cloud-container">
    <template v-if="preparedTags.length">
      <vue-word-cloud
        :words="preparedTags"
        :color="getColor"
        :animation-overlap="4"
        :animation-duration="1500"
        font-family="Indie Flower"
      >
        <template slot-scope="{text, weight}">
          <div :title="text + ': ' + weight"
               style="cursor: pointer;"
               @click="$emit('wordClick', text)"
          >
            {{ text }}
          </div>
        </template>
      </vue-word-cloud>
    </template>
    <template v-else>
      <div class="empty-results">
        No matched tags found
      </div>
    </template>
  </div>
</template>

<script>
import VueWordCloud from 'vuewordcloud';

export default {
  components: {
    VueWordCloud,
  },
  props: {
    tags: {
      type: Map,
      required: true,
    },
  },
  data() {
    return {
      colors: [
        '#d99cd1', '#c99cd1', '#b99cd1', '#a99cd1', '#403030',
        '#f97a7a', '#31a50d', '#d1b022', '#74482a', '#ffd077',
        '#3bc4c7', '#3a9eea', '#ff4e69', '#461e47',
      ],
      preparedTags: [],
    };
  },
  mounted() {
    this.reInit();
  },
  methods: {
    /**
     * Returns random color from collection.
     */
    getColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },

    /**
     * ReInit component.
     */
    reInit() {
      this.preparedTags = this.prepareTags(this.tags);
    },

    /**
     * Convert given tags to needed form for `vue word cloud` component.
     *
     * @param { Map<string, Tag> } tags - Tags collection
     *
     * @return { Array }
     */
    prepareTags(tags) {
      const preparedTags = [];

      tags.forEach(tag => preparedTags.push([tag.getName(), tag.getValue()]));

      return preparedTags;
    },
  },
};
</script>

<style>
    .tags-cloud-container {
        width: 100%;
        height: 500px;
    }
    .empty-results {
        top: 40%;
        position: relative;
        left: 40%;
        font-size: 40px;
        color: #25bfbf;
    }
</style>
