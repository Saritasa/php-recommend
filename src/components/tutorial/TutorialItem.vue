<template>
  <li>
    <a :href="item.url"><span v-html="itemName"/></a>
    <span v-if="item.description">- <span v-html="item.description"/></span>
    <a v-if="item.explain"
       href="/#"><v-icon :title="item.explain"
                         medium>info</v-icon></a>
    <br>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
    itemName: {
      type: String,
    },
  },
};
</script>
