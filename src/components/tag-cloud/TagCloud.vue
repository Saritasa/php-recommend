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
  methods: {
    /**
     * Returns random color from collection.
     */
    getColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },

    /**
     * Convert given tags to needed form for `vue word cloud` component.
     *
     * @param { Map<string, Tag> } tagsMap - Tags collection
     */
    setTags(tagsMap) {
      const preparedTags = [];
      tagsMap.forEach(tag => preparedTags.push([tag.getName(), tag.getValue()]));
      this.preparedTags = preparedTags;
    },
  },
};
</script>

<style>
  .tags-cloud-container {
    width: 100%;
    height: 500px;
    padding-bottom: 50px;
  }
  .empty-results {
    top: 40%;
    position: relative;
    left: 40%;
    font-size: 40px;
    color: #25bfbf;
  }
</style>
