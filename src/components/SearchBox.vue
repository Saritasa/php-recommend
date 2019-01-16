<template>
  <v-text-field clearable clear-icon="clear" type="text" label="Search text or tag"
                :value="value" @input="searchText => $emit('input', searchText)">
    <v-icon slot="prepend" large>search</v-icon>
  </v-text-field>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },
};
</script>
