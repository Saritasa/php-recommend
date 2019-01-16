<template>
  <div class="resources-list" v-if="items.length">
    <div v-for="(resources, language) in itemsGroupedByLanguage"
         :key="language"
    >
    <h4>
      <i>{{ language }}</i>
    </h4>
    <resource
      v-for="(resource, key) in resources"
      :key="key"
      :item="resource"
    />
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

<style>
  .resources-list {
    padding: 5pt;
  }
</style>
