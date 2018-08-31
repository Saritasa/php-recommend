<template>
  <div class="package-list">
    <package-item
        v-bind:data="packages"
        v-for="(packageItem, index) in packages"
        :key="index"
        :item="packageItem"
    ></package-item>
  </div>
</template>

<script>
import PackageItem from './PackageItem.vue'

export default {
  components: {
    PackageItem
  },
  props: ['packages'],
  data () {
    return {
      packageItem: {link: '', text: '', description: '', explain: ''}
    }
  }
}
</script>
