<template>
  <div class="search-form-wrapper">
    <input type="text" id="keyword" placeholder="Search keyword" @change="handleSearch" v-model="keyword">
    <span class="label label-success selected-tag hidden">Tag 1<a><i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i></a></span>
    <p></p>
  </div>
</template>

<script>
export default {
  props: {
    keywordData: {
      type: String
    },
    searchChange: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      keyword: this.keywordData
    }
  },
  methods: {
    handleSearch (event) {
      this.searchChange(event, this.keyword)
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
</style>
