<template>
  <div class="website-list">
    <div v-for="(group, key) in languageGroups"
         :key="key">
      <h4><i>{{ key }}</i></h4>
      <website-item
        v-for="(websiteItem, key) in group"
        :key="key"
        :item-name="websiteItem.text"
        :item="websiteItem"
      />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import WebsiteItem from './WebsiteItem';

export default {
  components: {
    WebsiteItem,
  },
  props: {
    websites: {
      type:    Object,
      default: null,
    },
  },
  data() {
    return {
      websiteItem: {},
    };
  },
  computed: {
    languageGroups() {
      const formatData = this.websiteData;

      _.forEach(formatData, (value, key) => {
        formatData[key].text = key;
        formatData[key].language = value.language || 'Other';
        formatData[key].url = value.url || key;
        if (!_.startsWith(value.url, 'http')) {
          formatData[key].url = `http://${value.url}`;
        }
      });

      return _.groupBy(formatData, 'language');
    },
    websiteData() {
      return this.websites;
    },
  },
  watch: {
    websiteData(val) {
      return val;
    },
  },
};
</script>
