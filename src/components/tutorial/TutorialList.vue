<template>
  <div class="tutorial-list">
    <div v-for="(group, key) in languageGroups"
         :key="key">
      <h4><i>{{ key }}</i></h4>
      <tutorial-item
        v-for="(tutorialItem, key) in group"
        :key="key"
        :item-name="tutorialItem.text"
        :item="tutorialItem"
      />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import TutorialItem from './TutorialItem';

export default {
  components: {
    TutorialItem,
  },
  props: {
    tutorials: {
      type:    Object,
      default: null,
    },
  },
  data() {
    return {
      tutorialItem: {},
    };
  },
  computed: {
    languageGroups() {
      const formatData = this.tutorialData;

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
    tutorialData() {
      return this.tutorials;
    },
  },
  watch: {
    tutorialData(val) {
      return val;
    },
  },
};
</script>
