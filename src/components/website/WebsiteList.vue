<template>
  <div class="website-list">
    <div v-for="(group, key) in languageGroups" v-bind:key="key">
      <h4><i>{{key}}</i></h4>
      <website-item
          v-for="(websiteItem, key) in group"
          :key="key"
          :itemName="websiteItem.text"
          :item="websiteItem"
      ></website-item>
    </div>
  </div>
</template>

<script>
import WebsiteItem from './WebsiteItem.vue'
import _ from 'lodash'

export default {
  components: {
    WebsiteItem
  },
  props: ['websites'],
  data () {
    return {
      websiteItem: {}
    }
  },
  watch: {
    websiteData: function (val) {
      return val
    }
  },
  computed: {
    languageGroups () {
      let formatData = this.websiteData
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
    websiteData () {
      return this.websites
    }
  }
}
</script>
