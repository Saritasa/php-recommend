<template>
  <div class="search-form-wrapper">
    <input id="keyword"
           v-model="keyword"
           type="text"
           placeholder="Search keyword"
           @change="handleSearch">
    <p/>
  </div>
</template>

<script>
export default {
  props: {
    keywordData: {
      type:    String,
      default: '',
    },
    searchChange: {
      type:     Function,
      required: true,
    },
  },
  data() {
    return {
      keyword: this.keywordData,
    };
  },
  methods: {
    handleSearch(event) {
      this.searchChange(event, this.keyword);
    },
  },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
</style>
