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
        <v-text-field clearable clear-icon="clear" type="text" @input="setSearchText"
                      label="Search text or tag" >
          <v-icon slot="prepend" large>search</v-icon>
        </v-text-field>
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
import Utils from 'yamljs/lib/Utils';
import YamlDataConverter from '../services/YamlDataConverter';
import TagCloud from './tag-cloud/TagCloud';
import ResourceSections from './ResourceSections';
import QuickLink from './footer/QuickLink';
import 'vuetify/dist/vuetify.min.css';

export default {
  components: {
    TagCloud,
    ResourceSections,
    QuickLink,
  },
  computed: {
    ...mapState(['selectedTags', 'matchedCount', 'filteredResults']),
  },
  created() {
    Utils.getStringFromFile(`${process.env.BASE_URL}list.yaml`, content => {
      const recommendations = YamlDataConverter.parse(content);
      this.setTechStacks(recommendations);
    });
  },
  methods: mapMutations(['setTechStacks', 'setSearchText', 'addSelectedTag', 'removeSelectedTag']),
};
</script>
