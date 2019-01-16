<template>
  <li>
    <a :href="item.url">
      <span v-html="item.name"></span>
    </a>
    <span v-if="item.desc">- <span v-html="item.desc"/></span>
    <v-tooltip bottom v-if="item.getExplanation()">
      <v-icon slot="activator" small>info</v-icon>
      {{ item.explanation }}
    </v-tooltip>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>
