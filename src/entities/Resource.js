import _ from 'lodash';
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
   * Set resource name.
   *
   * @param {string} value - Resource name
   */
  setName(value) {
    this.name = value;
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
   * Highlight all appearances of keyword in item.
   * E.x: the keyword 'sa' will be highlighted 2 times in string 'saritasa/api'
   *
   * @param {string} keyword - Search keyword
   */
  addHighlight(keyword) {
    if (!keyword) {
      return this;
    }

    const highlightedRes = _.clone(this);
    const sentences = [ this.getName(), this.getDesc(), this.getExplanation() ];

    _.forEach(sentences, (sen, idx) => {
      if (sen === undefined) {
        return;
      }

      let text = sen;
      let offset = 0;
      let index = text.toLowerCase().indexOf(keyword.toLowerCase(), offset);

      while (index >= 0) {
        sentences[idx] = text.substring(0, index);
        sentences[idx] += '<span class="highlighted-word">';
        sentences[idx] += text.substring(index, index + keyword.length);
        sentences[idx] += '</span>';
        offset = sentences[idx].length;
        sentences[idx] += text.substring(index + keyword.length);

        index = sentences[idx].toLowerCase().indexOf(keyword.toLowerCase(), offset);
        text = sentences[idx];
      }
    });
    highlightedRes.setName(sentences[0]);
    highlightedRes.setDesc(sentences[1]);
    highlightedRes.setExplanation(sentences[2]);

    return highlightedRes;
  }
}
