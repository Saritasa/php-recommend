<template>
  <div class="search-result-wrapper">
    {{ title }}
    <package-list :packages="dataList"></package-list>
  </div>
</template>

<script>
import PackageList from './package/PackageList.vue'

export default {
  components: {
    PackageList
  },
  data () {
    return {
      title: 'Search Result',
      dataList: {
        1: {link: 'sdsdf.com', text: 'Traffic', description: 'desc desc', explain: 'exp exp'},
        2: {link: 'google.com', text: 'Google', description: 'google desc', explain: 'google exp'}
      }
    }
  }
}
</script>
