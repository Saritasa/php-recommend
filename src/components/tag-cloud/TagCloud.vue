<template>
  <div class="tag-cloud-wrapper"
       @mousemove="showTooltip">
    <span id="tooltip-man"/>
    <word-cloud
      :data="words()"
      :word-click="onWordClick"
      :rotate="rotation"/>
  </div>
</template>

<script>
import WordCloud from 'vue-wordcloud';
import Yaml from 'yamljs';
import _ from 'lodash';

export default {
  components: {
    WordCloud,
  },
  props: {
    onWordClick: {
      type:    Function,
      default: () => {},
    },
  },
  data() {
    return {
      rotation:     { from: 0, to: 0, numOfOrientation: 1 },
      selectedTags: [],
      searchResult: {},
      countedWords: this.getCountedTags(),
    };
  },
  computed: {

  },
  methods: {
    getTags(obj) {
      let tags = [];

      _.forEach(obj, (val, key) => {
        if (key === 'tags') {
          tags.push(val);
        } else if (_.isObject(val)) {
          tags.push(this.getTags(val));
        }
      });
      tags = _.flattenDeep(tags);

      return tags;
    },
    getCountedTags() {
      if (_.size(this.searchResult) === 0) {
        this.searchResult = Yaml.load(`${process.env.BASE_URL}list.yaml`);
      }

      const tags = this.getTags(this.searchResult);
      const countedTags = {};

      _.forEach(tags, val => {
        const capVal = _.capitalize(val);

        if (!_.includes(Object.keys(countedTags), capVal)) {
          countedTags[capVal] = 1;
        } else {
          countedTags[capVal]++;
        }
      });

      return countedTags;
    },
    words() {
      const parsedWords = this.getCountedTags();
      const result = [];
      const thisSelectedTags = this.selectedTags;

      Object.keys(parsedWords).forEach(key => {
        if (_.indexOf(thisSelectedTags, key) === -1) {
          result.push({ name: key, value: parsedWords[key] });
        }
      });

      return result;
    },
    showTooltip(evt) {
      const tooltipMan = document.getElementById('tooltip-man');
      const child = evt.srcElement;

      if (evt.srcElement.tagName === 'text') {
        const appDom = document.getElementById('app');
        const appRelativeTop = (appDom.getBoundingClientRect()).top;
        const appRelativeLeft = (appDom.getBoundingClientRect()).left;

        let info = child.textContent;

        info = `${info}: ${this.countedWords[info]}`;
        tooltipMan.style.display = 'block';
        tooltipMan.style.top = `${(evt.clientY - appRelativeTop) + 8}px`;
        tooltipMan.style.left = `${evt.clientX - appRelativeLeft}px`;
        tooltipMan.innerText = info;
      } else {
        tooltipMan.style.display = 'none';
      }
    },
  },
};
</script>

<style lang="scss">
.tag-cloud-wrapper {
  #tooltip-man {
    position: absolute;
    border-radius: 4px;
    padding: 2px 10px;
    background-color: #3e3d3d;
    color: #fff;
    z-index: 10;
    display: none;
  }
  text {
    cursor: pointer!important;
  }
}
</style>
