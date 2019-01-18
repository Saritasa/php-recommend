<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <h1>Recommended stuff for PHP team</h1>
    </v-layout>

    <v-layout>
      <tag-cloud ref="cloud" @wordClick="addSelectedTag"/>
    </v-layout>

    <v-layout row align-center>
      <v-flex shrink xs3>
        <search-box :value="initialSearch" @input="setSearchText" />
      </v-flex>
      <v-flex grow>
        <v-chip v-for="(selectedTag, index) in selectedTags" close :key="index"
                @input="() => removeSelectedTag(selectedTag)"
        >
          {{ selectedTag }}
        </v-chip>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex v-if="matchedCount">{{ matchedCount }} results found.</v-flex>
      <v-flex v-else>
        <v-card class="elevation-20" color="#FFCC80">
          <v-card-text>No matching results</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout :row="false" wrap>
      <v-flex>
        <resource-sections v-for="(stack, index) in filteredResults"
                           :tech-stack="stack"
                           :key="index" />
      </v-flex>
    </v-layout>
    <v-layout>
      <quick-link/>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import axios from 'axios';
import YamlDataConverter from '../services/YamlDataConverter';
import TagCloud from '../components/TagCloud';
import SearchBox from '../components/SearchBox';
import ResourceSections from '../components/ResourceSections';
import QuickLink from '../components/QuickLink';
import 'vuetify/dist/vuetify.min.css';

export default {
  components: {
    TagCloud,
    SearchBox,
    ResourceSections,
    QuickLink,
  },
  props: {
    initialTags: { type: String },
    initialSearch: { type: String },
  },
  computed: {
    ...mapState(['selectedTags', 'matchedCount', 'filteredResults']),
  },
  mounted() {
    axios.get(`${process.env.BASE_URL}list.yaml`).then(content => {
      const techStacks = YamlDataConverter.parse(content.data);
      this.setTechStacks(techStacks);
      this.setSearchText(this.initialSearch);
      if (this.initialTags) {
        this.initialTags.split(',').forEach(tag => this.addSelectedTag(tag));
      }
    });
  },
  methods: mapMutations(['setTechStacks', 'setSearchText', 'addSelectedTag', 'removeSelectedTag']),
};
</script>
