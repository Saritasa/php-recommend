<template>
  <div class="package-list">
    <package-item
      v-for="(packageItem, index) in packages"
      :key="index"
      :item-name="index"
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
      type:     Object,
      required: true,
    },
  },
  data() {
    return {
      packageItem: {},
    };
  },
};
</script>
