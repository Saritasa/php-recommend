import languages from '../enums/languages';

/**
 * Representation of specific resource in technology stack.
 */
export default class Resource {
  /**
   * Representation of specific resource in technology stack.
   *
   * @param {string} name - Resource name
   * @param {Object} data - Raw resource data from YAML
   */
  constructor(name, data) {
    this.name = name;
    this.desc = data.description;
    this.url = data.url;
    this.explanation = data.explain;

    this.tags = [];
    if (data.tags) {
      data.tags.forEach(tagWord => this.tags.push(tagWord));
    }

    this.language = data.language || languages.ENGLISH;
  }
}
