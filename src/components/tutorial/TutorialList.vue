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
import TutorialItem from './TutorialItem.vue';
import _ from 'lodash';

export default {
  components: {
    TutorialItem,
  },
  props: ['tutorials'],
  data() {
    return {
      tutorialItem: {},
    };
  },
  computed: {
    languageGroups() {
      const formatData = this.tutorialData;

      _.forEach(formatData, (value, key) => {
        value.text = key;
        value.language = value.language || 'Other';
        value.url = value.url || key;
        if (!_.startsWith(value.url, 'http')) {
          value.url = `http://${value.url}`;
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
