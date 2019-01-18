/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import TagsService from '../services/TagsService';
import Tag from '../entities/Tag';

Vue.use(Vuex);

function updateResults(state) {
  state.tagService.rescan();
  state.filteredResults = state.tagService.getTechnologyStacks();
  state.matchedCount = state.tagService.getMatchedCount();
  state.filteredTags = new Map(state.tagService.getTags());
}

export default new Vuex.Store({
  state: {
    tagService: new TagsService([]),
    filteredResults: [],
    filteredTags: new Map(),
    searchText: null,
    selectedTags: [],
    matchedCount: 0,
  },
  plugins: [createLogger({})],
  mutations: {
    /**
     * Set fresh data about technology stacks - after loading data from server
     * @param {Object} state - current storage state
     * @param {Array<TechnologyStack>} techStacks - list of parsed technology stacks
     */
    setTechStacks(state, techStacks) {
      state.tagService.setTechnologyStacks(techStacks);
      updateResults(state);
    },

    /**
     * Add search text to filter conditions - when user enter something in search box
     *
     * @param {Object} state - current storage state
     * @param {string} searchText - text, entered by user in search box
     */
    setSearchText(state, searchText) {
      state.searchText = searchText;
      state.tagService.setKeyWord(searchText);
      updateResults(state);
    },

    /**
     * User clicked on tag - we should add it to filter conditions
     *
     * @param {Object} state - current storage state
     * @param {string} tagName - Tag on which was click
     */
    addSelectedTag(state, tagName) {
      if (state.selectedTags.indexOf(tagName) !== -1) {
        return;
      }
      state.tagService.addTag(new Tag(tagName));
      state.selectedTags.push(tagName);
      updateResults(state);
    },

    /**
     * Remove tag from filter conditions
     *
     * @param {Object} state - current storage state
     * @param {string} tagName - Tag on which was click
     */
    removeSelectedTag(state, tagName) {
      state.tagService.removeTag(tagName);
      const index = state.selectedTags.indexOf(tagName);
      if (index !== -1) {
        state.selectedTags.splice(index, 1);
      }
      updateResults(state);
    },
  },
});
