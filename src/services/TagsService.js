import _ from 'lodash';
import Tag from '../entities/Tag';
import TechnologyStack from '../entities/TechnologyStack';
import resourceTypes from '../enums/resourceTypes';

/**
 * Service to find matches in tags.
 */
export default class TagsService {
  /**
   * Service to find matches in tags.
   *
   * @param {Array<TechnologyStack>} technologyStacks - Technology stacks in which we should find matches
   */
  constructor(technologyStacks) {
    this.tags = new Map();
    this.selectedTags = new Map();
    this.keyword = null;
    this.originalTechnologyStacks = technologyStacks;
    this.technologyStacks = Object.assign({}, technologyStacks);
    this.matchedCount = 0;
  }

  /**
   * Gets matches count.
   *
   * @return {number}
   */
  getMatchedCount() {
    return this.matchedCount;
  }

  /**
   * Gets matched tags.
   *
   * @return {Map<string, Tag>}
   */
  getTags() {
    return this.tags;
  }

  /**
   * Gets filtered technology stacks.
   *
   * @return {Array<TechnologyStack>}
   */
  getTechnologyStacks() {
    return this.technologyStacks;
  }

  /**
   * Add tag to filter results.
   *
   * @param {Tag} tag
   *
   * @return TagsService
   */
  addTag(tag) {
    this.selectedTags.set(tag.getName().toLowerCase(), tag);

    return this;
  }

  /**
   * Remove added tag.
   *
   * @param {string} tagName - Tag to remove
   *
   * @return TagsService
   */
  removeTag(tagName) {
    this.selectedTags.delete(tagName.toLowerCase());

    return this;
  }

  /**
   * Set key word.
   *
   * @param {string} keyword - Key word to filter data.
   *
   * @return {TagsService}
   */
  setKeyWord(keyword) {
    this.keyword = keyword.toLowerCase();

    return this;
  }

  /**
   * Rescan technology stacks to found comparision according with search keyword and selected tags.
   */
  rescan() {
    this.technologyStacks = [];
    this.tags.clear();
    this.matchedCount = 0;

    this.originalTechnologyStacks.forEach(technologyStack => {
      const matchedStack = new TechnologyStack(technologyStack.getName());

      _.forEach(resourceTypes, type => {
        technologyStack.getResources(type).forEach(packageItem => {
          let matchedFound = true;

          if (this.selectedTags.size) {
            this.selectedTags.forEach(tag => {
              matchedFound = matchedFound && (packageItem.getTags()
                .map(tagName => tagName.toLowerCase())
                .indexOf(tag.getName().toLowerCase()) !== -1);
            });
          }

          if (this.keyword) {
            matchedFound = matchedFound && (
              (packageItem.getName() ? this.containsKeyword(packageItem.getName()) : false) ||
              (packageItem.getUrl() ? this.containsKeyword(packageItem.getUrl()) : false) ||
              (packageItem.getDesc() ? this.containsKeyword(packageItem.getDesc()) : false) ||
              (packageItem.getTags() ? this.containsKeyword(packageItem.getTags()) : false)
            );
          }

          if (matchedFound) {
            packageItem.getTags().forEach(tag => {
              const localTag = tag.toLocaleLowerCase();

              if (!this.selectedTags.has(localTag)) {
                if (this.tags.has(localTag)) {
                  this.tags.get(localTag).increaseValue();
                } else {
                  this.tags.set(localTag, new Tag(tag));
                }
              }
            });
            matchedStack.addResource(type, packageItem);
            this.matchedCount++;
          }
        });
      });
      if (matchedStack.hasAnyItem()) {
        this.technologyStacks.push(matchedStack);
      }
    });
  }

  /**
   * Check the given string contains any word in keyword.
   *
   * @param {Array | string} str - String or array of strings to compare with keyword
   * If $str is an array, returns `true` if one of element contains any word in keyword.
   *
   * @return {boolean}
   */
  containsKeyword(str) {
    if (_.isArray(str)) {
      let isInArray = false;

      str.forEach(ele => {
        if (this.containsKeyword(ele)) {
          isInArray = true;
        }
      });

      return isInArray;
    }

    return str.toLowerCase().includes(this.keyword);
  }
}
