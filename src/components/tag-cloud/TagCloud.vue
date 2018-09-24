<template>
  <div class='tag-cloud-wrapper' @mousemove="showTooltip">
    <span id="tooltip-man"></span>
    <word-cloud
        :data='words()'
        :wordClick='wordClick'
        :rotate='rotation'>
    </word-cloud>
  </div>
</template>

<script>
import WordCloud from 'vue-wordcloud'
import countWords from 'count-words'
import Yaml from 'yamljs'
import _ from 'lodash'

export default {
  components: {
    WordCloud
  },
  data () {
    return {
      rotation: {from: 0, to: 0, numOfOrientation: 1},
      countedWords: this.getCountedWords()
    }
  },
  methods: {
    wordClick (d, vm) {
      alert(this.countedWords[d] + ' data')
    },
    getTags (obj) {
      let tags = ''
      _.forEach(obj, (val, key) => {
        if (key === 'tags') {
          tags += ' ' + _.join(val)
        } else if (_.isObject(val)) {
          tags += this.getTags(val)
        }
      })
      return tags
    },
    getCountedWords () {
      let yamlData = Yaml.load('/static/list.yaml')

      return countWords(this.getTags(yamlData))
    },
    words () {
      let parsedWords = this.getCountedWords()
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
        let info = child.textContent
        info = info + ': ' + this.countedWords[info]
        tooltipMan.style.display = 'block'
        tooltipMan.style.top = (evt.clientY + 5) + 'px'
        tooltipMan.style.left = (evt.clientX + 1) + 'px'
        tooltipMan.innerText = info
      } else {
        tooltipMan.style.display = 'none'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#tooltip-man {
  position: absolute;
  border-radius: 4px;
  padding: 2px 10px;
  background-color: #3e3d3d;
  color: #fff;
  z-index: 10;
  display: none;
}
.tag-cloud-wrapper {
  cursor: default !important;
}
</style>
