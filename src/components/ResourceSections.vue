<template>
  <div class="resource-wrapper">
    <h2>{{ name }}</h2>
    <h3 v-if="getSize(resource.packages) > 0">Packages</h3>
    <package-list :packages="resource.packages"/>
    <h3 v-if="getSize(resource.websites) > 0">Websites</h3>
    <website-list :websites="resource.websites"/>
    <h3 v-if="getSize(resource.tutorials) > 0">Tutorials</h3>
    <tutorial-list :tutorials="resource.tutorials"/>
  </div>
</template>

<script>
import _ from 'lodash';
import PackageList from './package/PackageList';
import WebsiteList from './website/WebsiteList';
import TutorialList from './tutorial/TutorialList';

export default {
  components: {
    PackageList,
    WebsiteList,
    TutorialList,
  },
  props: {
    name: {
      type:    String,
      default: '',
    },
    resource: {
      type:    Object,
      default: null,
    },
  },
  data() {
    return {
      title: 'Search Resource',
    };
  },
  computed: {
    resourcesData() {
      return this.resource;
    },
  },
  watch: {
    resourcesData(val) {
      return val;
    },
  },
  methods: {
    getSize(obj) {
      return _.size(obj);
    },
  },
};
</script>
