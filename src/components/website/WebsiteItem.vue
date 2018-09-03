<template>
  <li>
    <a :href="item.url">{{itemName}}</a>
    <span v-if="item.description">- {{item.description}}</span>
    <a v-if="item.explain" href="/#"><v-icon medium :title="item.explain">info</v-icon></a>
    <br>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    },
    itemName: {
      type: String
    }
  }
}
</script>
