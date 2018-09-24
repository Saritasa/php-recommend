<template>
  <div class="search-result-wrapper">
    {{ title }}
    <package-list :data="dataList"></package-list>
  </div>
</template>

<script>
import PackageList from '../package/PackageList.vue'

export default {
  components: {
    PackageList
  },
  data () {
    return {
      title: 'Search Result',
      dataList: {
        1: {link: 'sdsdf.com', text: 'Traffic', description: 'desc desc', explain: 'exp exp'},
        2: {link: 'sdsdf.com', text: 'Traffic', description: 'desc desc', explain: 'exp exp'}
      }
    }
  }
}
</script>
