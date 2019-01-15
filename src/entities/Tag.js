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
    this.value = 1;
  }

  /**
   * Increase weight of tag.
   */
  increaseValue() {
    this.value += 1;
  }

  /**
   * Gets tag name.
   */
  getName() {
    return this.name;
  }

  /**
   * Gets tag weight.
   */
  getValue() {
    return this.value;
  }
}
