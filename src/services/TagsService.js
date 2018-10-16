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
              (packageItem.getName() ? this.isContainsKeyword(packageItem.getName()) : false) ||
              (packageItem.getUrl() ? this.isContainsKeyword(packageItem.getUrl()) : false) ||
              (packageItem.getDesc() ? this.isContainsKeyword(packageItem.getDesc()) : false)
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

            matchedStack.addResource(type, packageItem.setHighlight(this.keyword));
            // matchedStack.addResource(type, packageItem);
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
   * Whether give string compare keyword.
   *
   * @param {string} str - String to compare with keyword
   *
   * @return {boolean}
   */
  isContainsKeyword(str) {
    return str.toLowerCase().includes(this.keyword);
  }
}
