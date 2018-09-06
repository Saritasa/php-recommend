<template>
  <div class="search-form-wrapper">
    <input type="text" id="keyword" placeholder="Search keyword" v-model="keyword">
    <span class="label label-success selected-tag hidden">Tag 1<a><i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i></a></span>
    <p></p>

  </div>
</template>

<script>
export default {
  props: {
    keywordChange: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    wer () {
      console.log('wer')
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
</style>
