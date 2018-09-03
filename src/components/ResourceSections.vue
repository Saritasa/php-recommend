<template>
  <div class="resource-wrapper">
    <h2>{{ this.name }}</h2>
    <h3>Packages</h3>
    <package-list :packages="this.resource.packages"></package-list>
    <h3>Websites</h3>
    <website-list :websites="this.resource.websites"></website-list>
    <h3>Tutorials</h3>
    <tutorial-list :tutorials="this.resource.tutorials"></tutorial-list>
  </div>
</template>

<script>
import PackageList from './package/PackageList.vue'
import WebsiteList from './website/WebsiteList.vue'
import TutorialList from './tutorial/TutorialList.vue'

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
  }
}
</script>
