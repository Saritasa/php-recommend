<template>
  <div class="page">
    <div class="section title">
      <h1>Saritasa recommended packages for PHP</h1>
    </div>

    <div class="section tag-cloud">
      <tag-cloud></tag-cloud>
    </div>

    <div class="section search-form">
      <input type="text" id="keyword" placeholder="Search keyword" vmodel="keyword">
      <span class="label label-success selected-tag hidden">Tag 1<a><i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i></a></span>
      <p></p>
    </div>

    <div class="section resource">
      <resource-sections
        v-for="(item, name) in this.yamlData"
        v-bind:key="name"
        :name="name"
        :resource="item"
      >
      </resource-sections>
    </div>
  </div>
</template>

<script>
import TagCloud from '@/components/tag-cloud/TagCloud.vue'
import ResourceSections from '@/components/ResourceSections.vue'
import Yaml from 'yamljs'

export default {
  components: {
    TagCloud,
    ResourceSections
  },
  data () {
    return {
      yamlData: Yaml.load('/static/list.yaml')
    }
  }
}
</script>

<style lang="scss">
  .section.title {
    text-align: center;
  }
  .section.resource {
    .resource-wrapper {
      padding: 10px;
      margin-bottom: 5px;
      &:nth-child(odd) {
        background-color: #e6e3e3;
      }
      &:nth-child(even) {
        background-color: #eaeaea;
      }
    }
    .package-list, .website-list, .tutorial-list {
      padding-bottom: 15px;
    }
    h1, h2, h3, h4 {
      margin: 2px 0;
    }
    h1 {
      padding-left: 2px;
    }
    h2 {
      padding-left: 12px;
    }
    h3 {
      padding-left: 22px;
    }
    h4 {
      padding-left: 32px;
    }
    li {
      padding-left: 42px;
      line-height: 28px;
      a {
        text-decoration: none;
      }
      i {
        font-size: 20px !important;
      }
    }
  }
</style>
