<template>
  <div v-if="items.length">
    <h3>{{ title }}</h3>
    <div v-for="(resources, language) in itemsGroupedByLanguage" :key="language">
      <v-subheader v-if="language">{{ language }}</v-subheader>

      <ul class="resources-list">
        <resource
          v-for="(resource, key) in resources"
          :key="key"
          :item="resource"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import Resource from './ResourceItem';

export default {
  components: {
    Resource,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    itemsGroupedByLanguage() {
      return _.groupBy(this.items, 'language');
    },
  },
};
</script>

<style lang="scss">
  .resources-list {
    padding-top: 5pt;
    padding-bottom: 10pt;
    font-size: larger;
  }
</style>
