<template>
  <div class="search-form-wrapper">
    <input v-model="localKeyword"
           type="text"
           placeholder="Search keyword"
           @input="$emit('input', localKeyword)"
    >
    <button class="clear-search"
            @click="onClearSearch()">
      Clear
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
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
  methods: {
    /**
     * Action after clicking on "Clear" button of search box.
     */
    onClearSearch() {
      this.localKeyword = null;
      this.$emit('clearSearch');
    },
  },
};
</script>
