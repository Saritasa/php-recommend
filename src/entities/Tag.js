/**
 * Tag to filtering package.
 */
export default class Tag {
  /**
   * Tag to filtering package.
   *
   * @param {string} name - Tag name
   */
  constructor(name) {
    this.name = name;
    this.resultsCount = 1;
  }

  /**
   * Increase number of results, matching to tag
   */
  increaseCount() {
    this.resultsCount += 1;
  }
}
