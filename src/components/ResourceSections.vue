<template>
  <div class="resource-wrapper">
    <h2>{{ this.name }}</h2>
    <h3 v-if="this.getSize(this.resource.packages) > 0">Packages</h3>
    <package-list :packages="this.resource.packages"></package-list>
    <h3 v-if="this.getSize(this.resource.websites) > 0">Websites</h3>
    <website-list :websites="this.resource.websites"></website-list>
    <h3 v-if="this.getSize(this.resource.tutorials) > 0">Tutorials</h3>
    <tutorial-list :tutorials="this.resource.tutorials"></tutorial-list>
  </div>
</template>

<script>
import PackageList from './package/PackageList.vue'
import WebsiteList from './website/WebsiteList.vue'
import TutorialList from './tutorial/TutorialList.vue'
import _ from 'lodash'

export default {
  components: {
    PackageList,
    WebsiteList,
    TutorialList
  },
  props: ['name', 'resource'],
  data () {
    return {
      title: 'Search Resource'
    }
  },
  watch: {
    resourcesData: function (val) {
      return val
    }
  },
  computed: {
    resourcesData () {
      return this.resource
    }
  },
  methods: {
    getSize (obj) {
      return _.size(obj)
    }
  }
}
</script>
