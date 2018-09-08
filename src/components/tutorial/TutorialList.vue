<template>
  <div class="tutorial-list">
    <div v-for="(group, key) in languageGroups" v-bind:key="key">
      <h4><i>{{key}}</i></h4>
      <tutorial-item
          v-for="(tutorialItem, key) in group"
          :key="key"
          :itemName="tutorialItem.text"
          :item="tutorialItem"
      ></tutorial-item>
    </div>
  </div>
</template>

<script>
import TutorialItem from './TutorialItem.vue'
import _ from 'lodash'

export default {
  components: {
    TutorialItem
  },
  props: ['tutorials'],
  data () {
    return {
      tutorialItem: {}
    }
  },
  watch: {
    tutorialData: function (val) {
      return val
    }
  },
  computed: {
    languageGroups () {
      let formatData = this.tutorialData
      _.forEach(formatData, function (value, key) {
        value.text = key
        value.language = value.language || 'Other'
        value.url = value.url || key
        if (!_.startsWith(value.url, 'http')) {
          value.url = 'http://' + value.url
        }
      })

      return _.groupBy(formatData, 'language')
    },
    tutorialData () {
      return this.tutorials
    }
  }
}
</script>
