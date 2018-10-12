<template>
  <div class="resources-list">
    <div v-for="language in languages"
         :key="language"
    >
      <template v-if="filterByLanguage(language).length">
        <h4>
          <i>{{ language }}</i>
        </h4>
        <tutorial-item
          v-for="(tutorial, key) in filterByLanguage(language)"
          :key="key"
          :item="tutorial"
        />
      </template>
    </div>
  </div>
</template>

<script>
import TutorialItem from './TutorialItem';
import LanguageFilteringMixin from '../../mixins/LanguageFilteringMixin';

export default {
  components: {
    TutorialItem,
  },
  mixins: [LanguageFilteringMixin],
};
</script>
