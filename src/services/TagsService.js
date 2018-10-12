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
    this.selectedTags.set(tag.getName(), tag);

    return this;
  }

  /**
   * Remove added tag.
   *
   * @param {Tag} tag - Tag to remove
   *
   * @return TagsService
   */
  removeTag(tag) {
    this.selectedTags.delete(tag);

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
    this.keyword = keyword;

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
              matchedFound = matchedFound && (packageItem.getTags().indexOf(tag.getName()) !== -1);
            });
          }

          if (this.keyword) {
            matchedFound = matchedFound && (
              (packageItem.getName() ? packageItem.getName().includes(this.keyword) : false) ||
              (packageItem.getDesc() ? packageItem.getDesc().includes(this.keyword) : false) ||
              (packageItem.getUrl() ? packageItem.getUrl().includes(this.keyword) : false)
            );
          }

          if (matchedFound) {
            packageItem.getTags().forEach(tag => {
              if (!this.selectedTags.has(tag)) {
                if (this.tags.has(tag)) {
                  this.tags.get(tag).increaseValue();
                } else {
                  this.tags.set(tag, new Tag(tag));
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
}

