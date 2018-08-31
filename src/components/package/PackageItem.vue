<template v-bind:item="item">
  <span>
    <a :href="item.link">{{item.text}}</a>
    {{item.description}}
    <a href="/#"><v-icon medium :title="item.explain">info</v-icon></a>
    <br>
  </span>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
}
</script>
