<template>
  <div class="package-list">
    <package-item
      v-for="(packageItem, index) in packages"
      :key="index"
      :item="packageItem"
    />
  </div>
</template>

<script>
import PackageItem from './PackageItem';

export default {
  components: {
    PackageItem,
  },
  props: {
    packages: {
      type:    Array,
      default: () => [],
    },
  },
};
</script>
