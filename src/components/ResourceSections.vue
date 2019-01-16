<template>
  <v-card elevation="10" class="resource-section" color="#dfdfdf">
    <v-card-title primary-title><h1>{{ techStack.name }}</h1></v-card-title>
    <v-card-text>
      <resource-list title="Packages" :items="techStack.packages"/>
      <resource-list title="Websites" :items="techStack.websites"/>
      <resource-list title="Tutorials" :items="techStack.tutorials"/>
    </v-card-text>
  </v-card>
</template>

<script>
import ResourceList from './ResourceList';

export default {
  components: {
    ResourceList,
  },
  props: {
    techStack: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
  .resource-section {
    padding: 10pt;
    margin: 20px;
    width: 800px;
  }
</style>
