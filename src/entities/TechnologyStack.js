import resourceTypes from '../enums/resourceTypes';

/**
 * Represents technology( like PHP/JS ) with related resources for learning/reading.
 */
export default class TechnologyStack {
  /**
   * Represents technology( like PHP/JS ) with related resources for learning/reading.
   *
   * @param {string} name - Name of the technology stack
   */
  constructor(name) {
    this.name = name;
    this.websites = [];
    this.tutorials = [];
    this.packages = [];
  }

  /**
   * Returns name.
   *
   * @return {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Gets packages.
   *
   * @return { Resource[] }
   */
  getPackages() {
    return this.packages;
  }

  /**
   * Gets packages.
   *
   * @return { Resource[] }
   */
  getTutorials() {
    return this.tutorials;
  }

  /**
   * Gets packages.
   *
   * @return { Resource[] }
   */
  getWebsites() {
    return this.websites;
  }

  /**
   * Gets packages.
   *
   * @return { Array<Resource> }
   *
   * @throws Error When given type is unknown
   */
  getResources(type) {
    let results;

    switch (type) {
      case resourceTypes.PACKAGE:
        results = this.packages;
        break;

      case resourceTypes.WEBSITE:
        results = this.websites;
        break;

      case resourceTypes.TUTORIAL:
        results = this.tutorials;
        break;

      default:
        throw new Error('Unknown package type.');
    }

    return results;
  }

  /**
   * Add resource by type.
   *
   * @throws Error When given type is unknown
   */
  addResource(type, resource) {
    switch (type) {
      case resourceTypes.PACKAGE:
        this.packages.push(resource);
        break;

      case resourceTypes.WEBSITE:
        this.websites.push(resource);
        break;

      case resourceTypes.TUTORIAL:
        this.tutorials.push(resource);
        break;

      default:
        throw new Error('Unknown package type.');
    }
  }

  /**
   * Whether technology stack have any items of any type.
   *
   * @return {boolean}
   */
  hasAnyItem() {
    return this.getWebsites().length > 0 ||
      this.getPackages().length > 0 ||
      this.getTutorials().length > 0;
  }
}
