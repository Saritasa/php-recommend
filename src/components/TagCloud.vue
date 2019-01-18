<template>
  <div class="tags-cloud-container">
    <template v-if="preparedTags.length">
      <vue-word-cloud
        :words="preparedTags"
        :color="getRandomColor"
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
import { mapState } from 'vuex';

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
    };
  },
  computed: {
    ...mapState(['filteredTags']),
    /**
     * Convert given tags map to format required by `vue word cloud` component.
     */
    preparedTags() {
      const result = [];
      this.filteredTags.forEach(tag => result.push([tag.name, tag.resultsCount]));
      return result;
    },
  },
  methods: {
    /**
     * Returns random color from collection.
     */
    getRandomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
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
