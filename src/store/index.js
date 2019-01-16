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
  // Vue.set(state, 'filteredTags', state.tagService.getTags());
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
  plugins: [createLogger()],
  mutations: {
    setTechStacks(state, techStacks) {
      state.tagService.setTechnologyStacks(techStacks);
      updateResults(state);
    },
    setSearchText(state, searchText) {
      state.searchText = searchText;
      state.tagService.setKeyWord(searchText);
      updateResults(state);
    },

    /**
     * Action after click on lick in some tag.
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
