import languages from '../enums/languages';

/**
 * Representation of specific resource in technology stack.
 */
export default class Resource {
  /**
   * Representation of specific resource in technology stack.
   *
   * @param {string} name - Resource name
   */
  constructor(name) {
    this.name = name;
    this.tags = [];
    this.language = languages.ENGLISH;
  }

  /**
   * Gets resource language.
   *
   * @return {string}
   */
  getLanguage() {
    return this.language;
  }

  /**
   * Sets resource language.
   *
   * @param {string} language - Resource language
   */
  setLanguage(language) {
    this.language = language;
  }

  /**
   * Sets resource description.
   *
   * @param {string} value - Resource description
   */
  setDesc(value) {
    this.desc = value;
  }

  /**
   * Sets resource url.
   *
   * @param {string} value - Resource description
   */
  setUrl(value) {
    this.url = value;
  }

  /**
   * Sets resource explanation.
   *
   * @param {string} explanation - Resource explanation
   */
  setExplanation(explanation) {
    this.explanation = explanation;
  }

  /**
   * Gets resource name.
   *
   * @return {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Gets resource description.
   *
   * @return {string}
   */
  getDesc() {
    return this.desc;
  }

  /**
   * Gets resource explanation.
   *
   * @return {string}
   */
  getExplanation() {
    return this.explanation;
  }

  /**
   * Gets resource url.
   *
   * @return {string}
   */
  getUrl() {
    return this.url;
  }

  /**
   * Adds tag to resource.
   *
   * @param {string} tagWord - Tag to add
   */
  addTag(tagWord) {
    this.tags.push(tagWord);
  }

  /**
   * Gets resource tags.
   *
   * @return {Array<string>}
   */
  getTags() {
    return this.tags;
  }

  /**
   * Highlight matched text in items.
   *
   * @param {string} keyword - Search keyword
   */
  setHighlight(keyword) {
    if (!keyword) {
      return this;
    }

    let highlightedRes = this;
    const name = this.getName();
    const index = name.toLowerCase().indexOf(keyword.toLowerCase());

    if (index >= 0) {
      let text = name.substring(0, index);

      text += '<span class="highlighted-word">';
      text += name.substring(index, index + keyword.length);
      text += '</span>';
      text += name.substring(index + keyword.length);
      highlightedRes = new Resource(text);
    }

    return highlightedRes;
  }
}
