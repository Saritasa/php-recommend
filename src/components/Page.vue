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
      <resource-sections></resource-sections>
    </div>
  </div>
</template>

<script>
import TagCloud from '@/components/tag-cloud/TagCloud.vue'
import ResourceSections from '@/components/ResourceSections.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    TagCloud,
    ResourceSections
  }
}
</script>
