<template>
  <div class='tag-cloud-wrapper'>
    Tag Cloud
    <div style="position: relative; width: 100%; height: 100%;">
      <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; transition-duration: 1s;" :style="(progressVisible && progress) ? {transform: 'scale(0.7,0.7)', opacity: 0.3, filter: 'blur(8px)', pointerEvents: 'none'} : {}">
        <vue-word-cloud :words="words" :rotation="rotation" :font-family="fontFamily" :color="color" :spacing="spacing" :font-size-ratio="fontSizeRatio" :enter-animation="enterAnimation" :leave-animation="leaveAnimation" :animation-duration="animationDuration" :animation-overlap="animationOverlap" :animation-easing="animationEasing" :load-font="loadFont" :progress.sync="progress">
          <template slot-scope="props">
            <v-tooltip top>
              <div slot="activator" style="cursor: pointer;" @click="onWordClick(props.word)">{{ props.text }}</div>
              <div style="text-align: center;">{{ props.text }}<br/>({{ props.weight }})</div>
            </v-tooltip>
          </template>
        </vue-word-cloud>
      </div>
      <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <v-progress-circular v-if="progressVisible && progress" class="v-no-animation" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto;" :value="(progress.completedWords / progress.totalWords) * 100" color="primary" :size="200" :width="20" :rotate="-90">{{ progress.completedWords }} of {{ progress.totalWords }}</v-progress-circular>
      </transition>
    </div>
  </div>
</template>

<script>
import VueWordCloud from 'vuewordcloud'
import countWords from 'count-words'
import Chance from 'chance'
import FontFaceObserver from 'font-face-observer'

console.log(countWords('Home, sweet, home!', true))

let svgNS = 'http://www.w3.org/2000/svg'

export default {
  components: {
    VueWordCloud
  },
  // data () {
  //   return {
  //     title: 'Tag Cloud',
  //     words: countWords('Home, sweet, home!', true)
  //   }
  // }
  data: function () {
    return {
      drawer: true,
      progressVisible: true,
      progress: undefined,
      snackbarVisible: false,
      snackbarText: '',
      wordsText: undefined,
      rotationItemIndex: undefined,
      rotationItems: [
        {
          value: 0,
          svg: (function () {
            let div = document.createElement('div')
            div.appendChild((function () {
              let svg = document.createElementNS(svgNS, 'svg')
              svg.setAttribute('viewBox', '0 0 12 12')
              svg.appendChild((function () {
                let path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                return path
              })())
              return svg
            })())
            return URL.createObjectURL(new Blob([div.innerHTML]))
          })()
        },
        {
          value: 7 / 8,
          svg: (function () {
            let div = document.createElement('div')
            div.appendChild((function () {
              let svg = document.createElementNS(svgNS, 'svg')
              svg.setAttribute('viewBox', '0 0 12 12')
              svg.appendChild((function () {
                let path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                path.setAttribute('transform', 'rotate(315 6 6)')
                return path
              })())
              return svg
            })())
            return URL.createObjectURL(new Blob([div.innerHTML]))
          })()
        },
        {
          value: function (word) {
            let chance = new Chance(word[0])
            return chance.pickone([0, 3 / 4])
          },
          svg: (function () {
            let div = document.createElement('div')
            div.appendChild((function () {
              let svg = document.createElementNS(svgNS, 'svg')
              svg.setAttribute('viewBox', '0 0 12 12')
              svg.appendChild((function () {
                let path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                return path
              })())
              svg.appendChild((function () {
                let path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                path.setAttribute('transform', 'rotate(90 6 6)')
                return path
              })())
              return svg
            })())
            return URL.createObjectURL(new Blob([div.innerHTML]))
          })()
        },
        {
          value: function (word) {
            let chance = new Chance(word[0])
            return chance.pickone([0, 1 / 8, 3 / 4, 7 / 8])
          },
          svg: (function () {
            let div = document.createElement('div')
            div.appendChild((function () {
              let svg = document.createElementNS(svgNS, 'svg')
              svg.setAttribute('viewBox', '0 0 12 12')
              svg.appendChild((function () {
                let path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                return path
              })())
              svg.appendChild((function () {
                let path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                path.setAttribute('transform', 'rotate(45 6 6)')
                return path
              })())
              svg.appendChild((function () {
                let path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                path.setAttribute('transform', 'rotate(90 6 6)')
                return path
              })())
              svg.appendChild((function () {
                let path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                path.setAttribute('transform', 'rotate(315 6 6)')
                return path
              })())
              return svg
            })())
            return URL.createObjectURL(new Blob([div.innerHTML]))
          })()
        },
        {
          value: function (word) {
            let chance = new Chance(word[0])
            return chance.random()
          },
          svg: (function () {
            let div = document.createElement('div')
            div.appendChild((function () {
              let svg = document.createElementNS(svgNS, 'svg')
              svg.setAttribute('viewBox', '0 0 2 2')
              svg.appendChild((function () {
                let circle = document.createElementNS(svgNS, 'circle')
                circle.setAttribute('cx', 1)
                circle.setAttribute('cy', 1)
                circle.setAttribute('r', 1)
                return circle
              })())
              return svg
            })())
            return URL.createObjectURL(new Blob([div.innerHTML]))
          })()
        }
      ],
      fontFamily: undefined,
      fontFamilyValues: [
        'Abril Fatface',
        'Annie Use Your Telescope',
        'Anton',
        'Bahiana',
        'Baloo Bhaijaan',
        'Barrio',
        'Finger Paint',
        'Fredericka the Great',
        'Gloria Hallelujah',
        'Indie Flower',
        'Life Savers',
        'Londrina Sketch',
        'Love Ya Like A Sister',
        'Merienda',
        'Nothing You Could Do',
        'Pacifico',
        'Quicksand',
        'Righteous',
        'Sacramento',
        'Shadows Into Light'
      ],
      colorItemIndex: undefined,
      colorItems: [
        ['#d99cd1', '#c99cd1', '#b99cd1', '#a99cd1'],
        ['#403030', '#f97a7a'],
        ['#31a50d', '#d1b022', '#74482a'],
        ['#ffd077', '#3bc4c7', '#3a9eea', '#ff4e69', '#461e47']
      ],
      spacingValueIndex: 1,
      spacingValues: [0, 1 / 4, 1 / 2, 1, 2],
      fontSizeRatioValueIndex: 0,
      fontSizeRatioValues: [0, 1 / 20, 1 / 5, 1 / 2, 1],
      animation: undefined,
      animationItems: [
        {
          text: 'bounce',
          value: ['bounceIn', 'bounceOut']
        },
        {
          text: 'fade',
          value: ['fadeIn', 'fadeOut']
        },
        {
          text: 'flipX',
          value: ['flipInX', 'flipOutX']
        },
        {
          text: 'flipY',
          value: ['flipInY', 'flipOutY']
        },
        {
          text: 'rotate',
          value: ['rotateIn', 'rotateOut']
        },
        {
          text: 'zoom',
          value: ['zoomIn', 'zoomOut']
        }
      ],
      animationDurationValueIndex: 2,
      animationDurationValues: [0, 1000, 5000, 10000],
      animationOverlapValueIndex: 1,
      animationOverlapValues: [0, 1 / 5, 1 / 2, 1],
      animationEasing: undefined,
      animationEasingValues: [
        'ease',
        'linear',
        'ease-in',
        'ease-out',
        'ease-in-out',
        'cubic-bezier(0.1, 0.7, 1.0, 0.1)'
      ]
    }
  },

  computed: {
    words: function () {
      return this.wordsText
        .split(/[\r\n]+/)
        .map(function (line) {
          return /^(.+)\s+(-?\d+)$/.exec(line)
        })
        .filter(function (matched) {
          return matched
        })
        .map(function (matched) {
          let text = matched[1]
          let weight = Number.parseInt(matched[2])
          return [text, weight]
        })
    },

    rotation: function () {
      let item = this.rotationItems[this.rotationItemIndex]
      return item.value
    },

    color: function () {
      let colors = this.colorItems[this.colorItemIndex]
      return function () {
        let chance = new Chance()
        return chance.pickone(colors)
      }
    },

    spacing: function () {
      return this.spacingValues[this.spacingValueIndex]
    },

    fontSizeRatio: function () {
      return this.fontSizeRatioValues[this.fontSizeRatioValueIndex]
    },

    enterAnimation: function () {
      return ['animated', this.animation[0]].join(' ')
    },

    leaveAnimation: function () {
      return ['animated', this.animation[1]].join(' ')
    },

    animationDuration: function () {
      return this.animationDurationValues[this.animationDurationValueIndex]
    },

    animationOverlap: function () {
      return this.animationOverlapValues[this.animationOverlapValueIndex]
    }
  },

  watch: {
    progress: function (currentProgress, previousProgress) {
      if (previousProgress) {
        this.progressVisible = false
      }
    }
  },

  created: function () {
    this.generateWordsText()
    let chance = new Chance()
    this.rotationItemIndex = chance.integer({min: 0, max: this.rotationItems.length - 1})
    this.fontFamily = chance.pickone(this.fontFamilyValues)
    this.colorItemIndex = chance.integer({min: 0, max: this.colorItems.length - 1})
    this.animation = chance.pickone(this.animationItems).value
    this.animationEasing = chance.pickone(this.animationEasingValues)
  },

  methods: {
    generateWordsText: function () {
      this.wordsText = [
        [9, 1, 3],
        [4, 5, 15],
        [2, 5, 15],
        [1, 25, 150]
      ]
        .reduce(function (returns, item) {
          let weight = item[0]
          let minCount = item[1]
          let maxCount = item[2]
          let chance = new Chance()
          let count = chance.integer({min: minCount, max: maxCount})
          chance.n(function () {
            let word = chance.word()
            returns.push(word + ' ' + weight)
          }, count)
          return returns
        }, [])
        .join('\n')
    },

    loadFont: function (fontFamily, fontStyle, fontWeight, text) {
      return (new FontFaceObserver(fontFamily, {style: fontStyle, weight: fontWeight})).load(text)
    },

    onWordClick: function (word) {
      this.snackbarVisible = true
      this.snackbarText = word[0]
    }
  }
}
</script>
