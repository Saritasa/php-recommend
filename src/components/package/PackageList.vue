<template>
  <div class="package-list">
    <package-item
        v-for="(packageItem, index) in packages"
        :key="index"
        :itemName="index"
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
      packageItem: {}
    }
  }
}
</script>
