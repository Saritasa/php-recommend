<template>
  <div class="search-form-wrapper">
    <input v-model="localKeyword"
           type="text"
           placeholder="Search keyword"
           @input="$emit('input', localKeyword)"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type:    String,
      default: null,
    },
  },
  data() {
    return {
      localKeyword: null,
    };
  },
  watch: {
    keyword(newVal) {
      this.localKeyword = newVal;
    },
  },
};
</script>

<style lang="scss" scoped>
.search-form-wrapper {
  display: inline-block;
  input {
    width: 300px;
    height: 26px;
    font-size: 14px;
    padding: 2px;
  }
}
</style>
