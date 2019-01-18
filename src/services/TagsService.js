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
   * @param {Array<TechnologyStack>} technologyStacks - Technology stacks to find matches
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
   */
  addTag(tag) {
    this.selectedTags.set(tag.name.toLowerCase(), tag);
  }

  /**
   * Remove added tag.
   *
   * @param {string} tagName - Tag to remove
   */
  removeTag(tagName) {
    this.selectedTags.delete(tagName.toLowerCase());
  }

  /**
   * Set key word.
   *
   * @param {string|null} keyword - Key word to filter data.
   */
  setKeyWord(keyword) {
    this.keyword = keyword ? keyword.toLowerCase() : null;
  }

  /**
   * Set new content of recommendations for technology stacks
   *
   * @param {Array<TechnologyStack>} technologyStacks - Technology stacks to find matches
   */
  setTechnologyStacks(technologyStacks) {
    this.originalTechnologyStacks = technologyStacks;
  }

  /**
   * Rescan technology stacks to found comparision according with search keyword and selected tags.
   */
  rescan() {
    this.technologyStacks = [];
    this.tags.clear();
    this.matchedCount = 0;

    this.originalTechnologyStacks.forEach(technologyStack => {
      const matchedStack = new TechnologyStack(technologyStack.name);

      _.forEach(resourceTypes, type => {
        technologyStack.getResources(type).forEach(packageItem => {
          let matchedFound = true;

          if (this.selectedTags.size) {
            this.selectedTags.forEach(tag => {
              matchedFound = matchedFound && (packageItem.tags
                .map(tagName => tagName.toLowerCase())
                .indexOf(tag.name.toLowerCase()) !== -1);
            });
          }

          if (this.keyword) {
            matchedFound = matchedFound && (
              (packageItem.name ? this.isContainsKeyword(packageItem.name) : false)
              || (packageItem.url ? this.isContainsKeyword(packageItem.url) : false)
              || (packageItem.desc ? this.isContainsKeyword(packageItem.desc) : false)
            );
          }

          if (matchedFound) {
            packageItem.tags.forEach(tag => {
              const localTag = tag.toLocaleLowerCase();

              if (!this.selectedTags.has(localTag)) {
                if (this.tags.has(localTag)) {
                  this.tags.get(localTag).increaseCount();
                } else {
                  this.tags.set(localTag, new Tag(tag));
                }
              }
            });
            matchedStack.addResource(type, packageItem);
            this.matchedCount += 1;
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
