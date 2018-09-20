<template>
  <div class='tag-cloud-wrapper' @mousemove="showTooltip">
    <span id="tooltip-man"></span>
    <word-cloud
      :data='words()'
      :wordClick='onWordClick'
      :rotate='rotation'>
    </word-cloud>
  </div>
</template>

<script>
import WordCloud from 'vue-wordcloud'
import Yaml from 'yamljs'
import _ from 'lodash'

export default {
  props: {
    onWordClick: {
      type: Function
    }
  },
  components: {
    WordCloud
  },
  data () {
    return {
      rotation: {from: 0, to: 0, numOfOrientation: 1},
      selectedTags: [],
      searchResult: {},
      countedWords: this.getCountedTags()
    }
  },
  computed: {

  },
  methods: {
    getTags (obj) {
      let tags = []
      _.forEach(obj, (val, key) => {
        if (key === 'tags') {
          tags.push(val)
        } else if (_.isObject(val)) {
          tags.push(this.getTags(val))
        }
      })
      tags = _.flattenDeep(tags)

      return tags
    },
    getCountedTags () {
      if (_.size(this.searchResult) === 0) {
        this.searchResult = Yaml.load('/static/list.yaml')
      }
      let tags = this.getTags(this.searchResult)
      console.log('tags')
      console.log(tags)
      let countedTags = {}
      _.forEach(tags, (val) => {
        val = _.capitalize(val)
        if (!_.includes(Object.keys(countedTags), val)) {
          countedTags[val] = 1
        } else {
          countedTags[val]++
        }
      })
      console.log('countedTags')
      console.log(countedTags)

      return countedTags
      // return countWords(this.getTags(this.searchResult))
    },
    words (data) {
      let parsedWords = this.getCountedTags()
      let result = []
      Object.keys(parsedWords).forEach(function (key) {
        result.push({'name': key, 'value': parsedWords[key]})
      })

      return result
    },
    showTooltip (evt) {
      let tooltipMan = document.getElementById('tooltip-man')
      let child = evt.srcElement
      if (evt.srcElement.tagName === 'text') {
        let appDom = document.getElementById('app')
        let appRelativeTop = (appDom.getBoundingClientRect()).top
        let appRelativeLeft = (appDom.getBoundingClientRect()).left

        let info = child.textContent
        info = info + ': ' + this.countedWords[info]
        tooltipMan.style.display = 'block'
        tooltipMan.style.top = (evt.clientY - appRelativeTop + 8) + 'px'
        tooltipMan.style.left = (evt.clientX - appRelativeLeft) + 'px'
        tooltipMan.innerText = info
      } else {
        tooltipMan.style.display = 'none'
      }
    }
  }
}
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
