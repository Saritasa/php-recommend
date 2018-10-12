<template>
  <div class="resource-wrapper">
    <template v-if="book.getPackages().length">
      <h2>{{ book.name }}</h2>
      <h3>
        Packages
      </h3>
      <package-list :packages="book.getPackages()"/>
    </template>
    <template v-if="book.getWebsites().length">
      <h3>
        Websites
      </h3>
      <website-list :items="book.getWebsites()"/>
    </template>
    <template v-if="book.getTutorials().length">
      <h3>
        Tutorials
      </h3>
      <tutorial-list :items="book.getTutorials()"/>
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
    book: {
      type:     Object,
      required: true,
    },
  },
};
</script>
