<script>
import marked from 'marked';

export default {
  name:    'TransformMixin',
  methods: {
    /**
     * Parse text to markdown format.
     *
     * @param {string|null} text - Text to parse.
     *
     * @return {string}
     */
    markdown(text) {
      if (text) {
        return marked(text).replace(/<p>|<\/p>/gi, '');
      }

      return text;
    },
  },
};
</script>
