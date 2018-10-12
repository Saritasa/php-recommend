<template>
  <div class="resources-list">
    <div v-for="language in languages"
         :key="language"
    >
      <template v-if="filterByLanguage(language).length">
        <h4>
          <i>{{ language }}</i>
        </h4>
        <website-item
          v-for="(website, key) in filterByLanguage(language)"
          :key="key"
          :item="website"
        />
      </template>
    </div>
  </div>
</template>

<script>
import WebsiteItem from './WebsiteItem';
import LanguageFilteringMixin from '../../mixins/LanguageFilteringMixin';

export default {
  components: {
    WebsiteItem,
  },
  mixins: [LanguageFilteringMixin],
};
</script>
