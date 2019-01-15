<template>
  <div class="resource-wrapper">
    <template v-if="item.getPackages().length">
      <h2>{{ item.name }}</h2>
      <h3>
        Packages
      </h3>
      <package-list :packages="item.getPackages()"/>
    </template>
    <template v-if="item.getWebsites().length">
      <h3>
        Websites
      </h3>
      <website-list :items="item.getWebsites()"/>
    </template>
    <template v-if="item.getTutorials().length">
      <h3>
        Tutorials
      </h3>
      <tutorial-list :items="item.getTutorials()"/>
    </template>
  </div>
</template>

<script>
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
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
