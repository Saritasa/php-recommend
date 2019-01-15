<script>
import languages from '../enums/languages';

export default {
  name: 'LanguageFilteringMixin',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      languages,
    };
  },
  methods: {
    /**
     * Filters items by given language.
     *
     * @param {string} language - Language to filter items.
     *
     * @return {Array<Resource>}
     */
    filterByLanguage(language) {
      return this.items.filter(item => item.getLanguage() === language);
    },
  },
};
</script>
