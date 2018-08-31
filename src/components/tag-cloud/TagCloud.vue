<template>
  <div class='tag-cloud-wrapper'>
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
    getCountedWords () {
      let yamlData = Yaml.load('/static/list.yaml')
      let reservedWords = '"packages":|"websites":|"tutorials":|"description":|"explain":|"url":|"tags":' +
        '|"language":|https:|http:'
      reservedWords = new RegExp(reservedWords, 'gi')
      let flatString = JSON.stringify(yamlData).toLowerCase()
      flatString = flatString.replace(reservedWords, ' ')
      flatString = flatString.replace(/[[\]}{)(/.:,"'0-9]/gi, ' ')
      return countWords(flatString)
    },
    words () {
      let parsedWords = this.getCountedWords()
      let result = []
      Object.keys(parsedWords).forEach(function (key) {
        result.push({'name': key, 'value': parsedWords[key]})
      })
      return result
    }
  }
}
</script>
