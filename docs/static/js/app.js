webpackJsonp([1],{

/***/ "A8iw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IRTc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.js
var vuetify = __webpack_require__("3EgV");
var vuetify_default = /*#__PURE__*/__webpack_require__.n(vuetify);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4011b42b","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("vfCk")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("fZjL");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/yamljs/lib/Yaml.js
var Yaml = __webpack_require__("BxPQ");
var Yaml_default = /*#__PURE__*/__webpack_require__.n(Yaml);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("M4fF");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// EXTERNAL MODULE: ./node_modules/vue-wordcloud/dist/word-cloud.js
var word_cloud = __webpack_require__("6zY2");
var word_cloud_default = /*#__PURE__*/__webpack_require__.n(word_cloud);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/tag-cloud/TagCloud.vue

//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var TagCloud = ({
  components: {
    WordCloud: word_cloud_default.a
  },
  props: {
    onWordClick: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      rotation: { from: 0, to: 0, numOfOrientation: 1 },
      selectedTags: [],
      searchResult: {},
      countedWords: this.getCountedTags()
    };
  },

  computed: {},
  methods: {
    getTags: function getTags(obj) {
      var _this = this;

      var tags = [];

      lodash_default.a.forEach(obj, function (val, key) {
        if (key === 'tags') {
          tags.push(val);
        } else if (lodash_default.a.isObject(val)) {
          tags.push(_this.getTags(val));
        }
      });
      tags = lodash_default.a.flattenDeep(tags);

      return tags;
    },
    getCountedTags: function getCountedTags() {
      if (lodash_default.a.size(this.searchResult) === 0) {
        this.searchResult = Yaml_default.a.load('/list.yaml');
      }

      var tags = this.getTags(this.searchResult);
      var countedTags = {};

      lodash_default.a.forEach(tags, function (val) {
        var capVal = lodash_default.a.capitalize(val);

        if (!lodash_default.a.includes(keys_default()(countedTags), capVal)) {
          countedTags[capVal] = 1;
        } else {
          countedTags[capVal]++;
        }
      });

      return countedTags;
    },
    words: function words() {
      var parsedWords = this.getCountedTags();
      var result = [];
      var thisSelectedTags = this.selectedTags;

      keys_default()(parsedWords).forEach(function (key) {
        if (lodash_default.a.indexOf(thisSelectedTags, key) === -1) {
          result.push({ name: key, value: parsedWords[key] });
        }
      });

      return result;
    },
    showTooltip: function showTooltip(evt) {
      var tooltipMan = document.getElementById('tooltip-man');
      var child = evt.srcElement;

      if (evt.srcElement.tagName === 'text') {
        var appDom = document.getElementById('app');
        var appRelativeTop = appDom.getBoundingClientRect().top;
        var appRelativeLeft = appDom.getBoundingClientRect().left;

        var info = child.textContent;

        info = info + ': ' + this.countedWords[info];
        tooltipMan.style.display = 'block';
        tooltipMan.style.top = evt.clientY - appRelativeTop + 8 + 'px';
        tooltipMan.style.left = evt.clientX - appRelativeLeft + 'px';
        tooltipMan.innerText = info;
      } else {
        tooltipMan.style.display = 'none';
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bf607188","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/tag-cloud/TagCloud.vue
var TagCloud_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tag-cloud-wrapper",on:{"mousemove":_vm.showTooltip}},[_c('span',{attrs:{"id":"tooltip-man"}}),_vm._v(" "),_c('word-cloud',{attrs:{"data":_vm.words(),"word-click":_vm.onWordClick,"rotate":_vm.rotation}})],1)}
var TagCloud_staticRenderFns = []
var TagCloud_esExports = { render: TagCloud_render, staticRenderFns: TagCloud_staticRenderFns }
/* harmony default export */ var tag_cloud_TagCloud = (TagCloud_esExports);
// CONCATENATED MODULE: ./src/components/tag-cloud/TagCloud.vue
function TagCloud_injectStyle (ssrContext) {
  __webpack_require__("lfgu")
}
var TagCloud_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var TagCloud___vue_template_functional__ = false
/* styles */
var TagCloud___vue_styles__ = TagCloud_injectStyle
/* scopeId */
var TagCloud___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TagCloud___vue_module_identifier__ = null
var TagCloud_Component = TagCloud_normalizeComponent(
  TagCloud,
  tag_cloud_TagCloud,
  TagCloud___vue_template_functional__,
  TagCloud___vue_styles__,
  TagCloud___vue_scopeId__,
  TagCloud___vue_module_identifier__
)

/* harmony default export */ var components_tag_cloud_TagCloud = (TagCloud_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/search/SearchBox.vue
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SearchBox = ({
  props: {
    keywordData: {
      type: String,
      default: ''
    },
    searchChange: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      keyword: this.keywordData
    };
  },

  methods: {
    handleSearch: function handleSearch(event) {
      this.searchChange(event, this.keyword);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-adb9407e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/search/SearchBox.vue
var SearchBox_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search-form-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.keyword),expression:"keyword"}],attrs:{"id":"keyword","type":"text","placeholder":"Search keyword"},domProps:{"value":(_vm.keyword)},on:{"change":_vm.handleSearch,"input":function($event){if($event.target.composing){ return; }_vm.keyword=$event.target.value}}})])}
var SearchBox_staticRenderFns = []
var SearchBox_esExports = { render: SearchBox_render, staticRenderFns: SearchBox_staticRenderFns }
/* harmony default export */ var search_SearchBox = (SearchBox_esExports);
// CONCATENATED MODULE: ./src/components/search/SearchBox.vue
function SearchBox_injectStyle (ssrContext) {
  __webpack_require__("A8iw")
}
var SearchBox_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var SearchBox___vue_template_functional__ = false
/* styles */
var SearchBox___vue_styles__ = SearchBox_injectStyle
/* scopeId */
var SearchBox___vue_scopeId__ = "data-v-adb9407e"
/* moduleIdentifier (server only) */
var SearchBox___vue_module_identifier__ = null
var SearchBox_Component = SearchBox_normalizeComponent(
  SearchBox,
  search_SearchBox,
  SearchBox___vue_template_functional__,
  SearchBox___vue_styles__,
  SearchBox___vue_scopeId__,
  SearchBox___vue_module_identifier__
)

/* harmony default export */ var components_search_SearchBox = (SearchBox_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/package/PackageItem.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PackageItem = ({
  props: {
    item: {
      type: Object,
      default: null
    },
    itemName: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-19808980","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/package/PackageItem.vue
var PackageItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{attrs:{"href":_vm.item.url}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.itemName)}})]),_vm._v(" "),(_vm.item.description)?_c('span',[_vm._v("- "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.item.description)}})]):_vm._e(),_vm._v(" "),(_vm.item.explain)?_c('a',{attrs:{"href":"/#"}},[_c('v-icon',{attrs:{"title":_vm.item.explain,"medium":""}},[_vm._v("info")])],1):_vm._e(),_vm._v(" "),_c('br')])}
var PackageItem_staticRenderFns = []
var PackageItem_esExports = { render: PackageItem_render, staticRenderFns: PackageItem_staticRenderFns }
/* harmony default export */ var package_PackageItem = (PackageItem_esExports);
// CONCATENATED MODULE: ./src/components/package/PackageItem.vue
var PackageItem_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var PackageItem___vue_template_functional__ = false
/* styles */
var PackageItem___vue_styles__ = null
/* scopeId */
var PackageItem___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var PackageItem___vue_module_identifier__ = null
var PackageItem_Component = PackageItem_normalizeComponent(
  PackageItem,
  package_PackageItem,
  PackageItem___vue_template_functional__,
  PackageItem___vue_styles__,
  PackageItem___vue_scopeId__,
  PackageItem___vue_module_identifier__
)

/* harmony default export */ var components_package_PackageItem = (PackageItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/package/PackageList.vue
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var PackageList = ({
  components: {
    PackageItem: components_package_PackageItem
  },
  props: {
    packages: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      packageItem: {}
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-76bca0e6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/package/PackageList.vue
var PackageList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"package-list"},_vm._l((_vm.packages),function(packageItem,index){return _c('package-item',{key:index,attrs:{"item-name":index,"item":packageItem}})}))}
var PackageList_staticRenderFns = []
var PackageList_esExports = { render: PackageList_render, staticRenderFns: PackageList_staticRenderFns }
/* harmony default export */ var package_PackageList = (PackageList_esExports);
// CONCATENATED MODULE: ./src/components/package/PackageList.vue
var PackageList_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var PackageList___vue_template_functional__ = false
/* styles */
var PackageList___vue_styles__ = null
/* scopeId */
var PackageList___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var PackageList___vue_module_identifier__ = null
var PackageList_Component = PackageList_normalizeComponent(
  PackageList,
  package_PackageList,
  PackageList___vue_template_functional__,
  PackageList___vue_styles__,
  PackageList___vue_scopeId__,
  PackageList___vue_module_identifier__
)

/* harmony default export */ var components_package_PackageList = (PackageList_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/website/WebsiteItem.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var WebsiteItem = ({
  props: {
    item: {
      type: Object,
      default: null
    },
    itemName: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1a9ed656","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/website/WebsiteItem.vue
var WebsiteItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{attrs:{"href":_vm.item.url}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.itemName)}})]),_vm._v(" "),(_vm.item.description)?_c('span',[_vm._v("- "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.item.description)}})]):_vm._e(),_vm._v(" "),(_vm.item.explain)?_c('a',{attrs:{"href":"/#"}},[_c('v-icon',{attrs:{"title":_vm.item.explain,"medium":""}},[_vm._v("info")])],1):_vm._e(),_vm._v(" "),_c('br')])}
var WebsiteItem_staticRenderFns = []
var WebsiteItem_esExports = { render: WebsiteItem_render, staticRenderFns: WebsiteItem_staticRenderFns }
/* harmony default export */ var website_WebsiteItem = (WebsiteItem_esExports);
// CONCATENATED MODULE: ./src/components/website/WebsiteItem.vue
var WebsiteItem_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var WebsiteItem___vue_template_functional__ = false
/* styles */
var WebsiteItem___vue_styles__ = null
/* scopeId */
var WebsiteItem___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var WebsiteItem___vue_module_identifier__ = null
var WebsiteItem_Component = WebsiteItem_normalizeComponent(
  WebsiteItem,
  website_WebsiteItem,
  WebsiteItem___vue_template_functional__,
  WebsiteItem___vue_styles__,
  WebsiteItem___vue_scopeId__,
  WebsiteItem___vue_module_identifier__
)

/* harmony default export */ var components_website_WebsiteItem = (WebsiteItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/website/WebsiteList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var WebsiteList = ({
  components: {
    WebsiteItem: components_website_WebsiteItem
  },
  props: {
    websites: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      websiteItem: {}
    };
  },

  computed: {
    languageGroups: function languageGroups() {
      var formatData = this.websiteData;

      lodash_default.a.forEach(formatData, function (value, key) {
        formatData[key].text = key;
        formatData[key].language = value.language || 'Other';
        formatData[key].url = value.url || key;
        if (!lodash_default.a.startsWith(value.url, 'http')) {
          formatData[key].url = 'http://' + value.url;
        }
      });

      return lodash_default.a.groupBy(formatData, 'language');
    },
    websiteData: function websiteData() {
      return this.websites;
    }
  },
  watch: {
    websiteData: function websiteData(val) {
      return val;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3ef0268c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/website/WebsiteList.vue
var WebsiteList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"website-list"},_vm._l((_vm.languageGroups),function(group,key){return _c('div',{key:key},[_c('h4',[_c('i',[_vm._v(_vm._s(key))])]),_vm._v(" "),_vm._l((group),function(websiteItem,key){return _c('website-item',{key:key,attrs:{"item-name":websiteItem.text,"item":websiteItem}})})],2)}))}
var WebsiteList_staticRenderFns = []
var WebsiteList_esExports = { render: WebsiteList_render, staticRenderFns: WebsiteList_staticRenderFns }
/* harmony default export */ var website_WebsiteList = (WebsiteList_esExports);
// CONCATENATED MODULE: ./src/components/website/WebsiteList.vue
var WebsiteList_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var WebsiteList___vue_template_functional__ = false
/* styles */
var WebsiteList___vue_styles__ = null
/* scopeId */
var WebsiteList___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var WebsiteList___vue_module_identifier__ = null
var WebsiteList_Component = WebsiteList_normalizeComponent(
  WebsiteList,
  website_WebsiteList,
  WebsiteList___vue_template_functional__,
  WebsiteList___vue_styles__,
  WebsiteList___vue_scopeId__,
  WebsiteList___vue_module_identifier__
)

/* harmony default export */ var components_website_WebsiteList = (WebsiteList_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/tutorial/TutorialItem.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TutorialItem = ({
  props: {
    item: {
      type: Object,
      default: null
    },
    itemName: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b35f7964","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/tutorial/TutorialItem.vue
var TutorialItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{attrs:{"href":_vm.item.url}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.itemName)}})]),_vm._v(" "),(_vm.item.description)?_c('span',[_vm._v("- "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.item.description)}})]):_vm._e(),_vm._v(" "),(_vm.item.explain)?_c('a',{attrs:{"href":"/#"}},[_c('v-icon',{attrs:{"title":_vm.item.explain,"medium":""}},[_vm._v("info")])],1):_vm._e(),_vm._v(" "),_c('br')])}
var TutorialItem_staticRenderFns = []
var TutorialItem_esExports = { render: TutorialItem_render, staticRenderFns: TutorialItem_staticRenderFns }
/* harmony default export */ var tutorial_TutorialItem = (TutorialItem_esExports);
// CONCATENATED MODULE: ./src/components/tutorial/TutorialItem.vue
var TutorialItem_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var TutorialItem___vue_template_functional__ = false
/* styles */
var TutorialItem___vue_styles__ = null
/* scopeId */
var TutorialItem___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TutorialItem___vue_module_identifier__ = null
var TutorialItem_Component = TutorialItem_normalizeComponent(
  TutorialItem,
  tutorial_TutorialItem,
  TutorialItem___vue_template_functional__,
  TutorialItem___vue_styles__,
  TutorialItem___vue_scopeId__,
  TutorialItem___vue_module_identifier__
)

/* harmony default export */ var components_tutorial_TutorialItem = (TutorialItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/tutorial/TutorialList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var TutorialList = ({
  components: {
    TutorialItem: components_tutorial_TutorialItem
  },
  props: {
    tutorials: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      tutorialItem: {}
    };
  },

  computed: {
    languageGroups: function languageGroups() {
      var formatData = this.tutorialData;

      lodash_default.a.forEach(formatData, function (value, key) {
        formatData[key].text = key;
        formatData[key].language = value.language || 'Other';
        formatData[key].url = value.url || key;
        if (!lodash_default.a.startsWith(value.url, 'http')) {
          formatData[key].url = 'http://' + value.url;
        }
      });

      return lodash_default.a.groupBy(formatData, 'language');
    },
    tutorialData: function tutorialData() {
      return this.tutorials;
    }
  },
  watch: {
    tutorialData: function tutorialData(val) {
      return val;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-54c7e338","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/tutorial/TutorialList.vue
var TutorialList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tutorial-list"},_vm._l((_vm.languageGroups),function(group,key){return _c('div',{key:key},[_c('h4',[_c('i',[_vm._v(_vm._s(key))])]),_vm._v(" "),_vm._l((group),function(tutorialItem,key){return _c('tutorial-item',{key:key,attrs:{"item-name":tutorialItem.text,"item":tutorialItem}})})],2)}))}
var TutorialList_staticRenderFns = []
var TutorialList_esExports = { render: TutorialList_render, staticRenderFns: TutorialList_staticRenderFns }
/* harmony default export */ var tutorial_TutorialList = (TutorialList_esExports);
// CONCATENATED MODULE: ./src/components/tutorial/TutorialList.vue
var TutorialList_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var TutorialList___vue_template_functional__ = false
/* styles */
var TutorialList___vue_styles__ = null
/* scopeId */
var TutorialList___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TutorialList___vue_module_identifier__ = null
var TutorialList_Component = TutorialList_normalizeComponent(
  TutorialList,
  tutorial_TutorialList,
  TutorialList___vue_template_functional__,
  TutorialList___vue_styles__,
  TutorialList___vue_scopeId__,
  TutorialList___vue_module_identifier__
)

/* harmony default export */ var components_tutorial_TutorialList = (TutorialList_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/ResourceSections.vue
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var ResourceSections = ({
  components: {
    PackageList: components_package_PackageList,
    WebsiteList: components_website_WebsiteList,
    TutorialList: components_tutorial_TutorialList
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    resource: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      title: 'Search Resource'
    };
  },

  computed: {
    resourcesData: function resourcesData() {
      return this.resource;
    }
  },
  watch: {
    resourcesData: function resourcesData(val) {
      return val;
    }
  },
  methods: {
    getSize: function getSize(obj) {
      return lodash_default.a.size(obj);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d034d990","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/ResourceSections.vue
var ResourceSections_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resource-wrapper"},[_c('h2',[_vm._v(_vm._s(_vm.name))]),_vm._v(" "),(_vm.getSize(_vm.resource.packages) > 0)?_c('h3',[_vm._v("Packages")]):_vm._e(),_vm._v(" "),_c('package-list',{attrs:{"packages":_vm.resource.packages}}),_vm._v(" "),(_vm.getSize(_vm.resource.websites) > 0)?_c('h3',[_vm._v("Websites")]):_vm._e(),_vm._v(" "),_c('website-list',{attrs:{"websites":_vm.resource.websites}}),_vm._v(" "),(_vm.getSize(_vm.resource.tutorials) > 0)?_c('h3',[_vm._v("Tutorials")]):_vm._e(),_vm._v(" "),_c('tutorial-list',{attrs:{"tutorials":_vm.resource.tutorials}})],1)}
var ResourceSections_staticRenderFns = []
var ResourceSections_esExports = { render: ResourceSections_render, staticRenderFns: ResourceSections_staticRenderFns }
/* harmony default export */ var components_ResourceSections = (ResourceSections_esExports);
// CONCATENATED MODULE: ./src/components/ResourceSections.vue
var ResourceSections_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var ResourceSections___vue_template_functional__ = false
/* styles */
var ResourceSections___vue_styles__ = null
/* scopeId */
var ResourceSections___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ResourceSections___vue_module_identifier__ = null
var ResourceSections_Component = ResourceSections_normalizeComponent(
  ResourceSections,
  components_ResourceSections,
  ResourceSections___vue_template_functional__,
  ResourceSections___vue_styles__,
  ResourceSections___vue_scopeId__,
  ResourceSections___vue_module_identifier__
)

/* harmony default export */ var src_components_ResourceSections = (ResourceSections_Component.exports);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-38b8cb3a","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/footer/QuickLink.vue
var QuickLink_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var QuickLink_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"quick-link-wrapper"},[_c('span',[_vm._v("© Since 09-2018")])])}]
var QuickLink_esExports = { render: QuickLink_render, staticRenderFns: QuickLink_staticRenderFns }
/* harmony default export */ var QuickLink = (QuickLink_esExports);
// CONCATENATED MODULE: ./src/components/footer/QuickLink.vue
function QuickLink_injectStyle (ssrContext) {
  __webpack_require__("m/u+")
}
var QuickLink_normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var QuickLink___vue_template_functional__ = false
/* styles */
var QuickLink___vue_styles__ = QuickLink_injectStyle
/* scopeId */
var QuickLink___vue_scopeId__ = "data-v-38b8cb3a"
/* moduleIdentifier (server only) */
var QuickLink___vue_module_identifier__ = null
var QuickLink_Component = QuickLink_normalizeComponent(
  __vue_script__,
  QuickLink,
  QuickLink___vue_template_functional__,
  QuickLink___vue_styles__,
  QuickLink___vue_scopeId__,
  QuickLink___vue_module_identifier__
)

/* harmony default export */ var footer_QuickLink = (QuickLink_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Page.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var Page = ({
  components: {
    TagCloud: components_tag_cloud_TagCloud,
    SearchBox: components_search_SearchBox,
    ResourceSections: src_components_ResourceSections,
    QuickLink: footer_QuickLink
  },
  data: function data() {
    return {
      yamlData: Yaml_default.a.load('/list.yaml'),
      resources: {},
      resultCount: 0,
      explainCount: 0,
      selectedTags: []
    };
  },
  created: function created() {
    var _this = this;

    // Add 'url' to website item if it hasn't
    lodash_default.a.forEach(this.yamlData, function (val, k) {
      lodash_default.a.forEach(val.websites, function (item, key) {
        var url = item.url || key;

        if (!lodash_default.a.startsWith(url, 'http')) {
          url = 'http://' + url;
        }
        _this.yamlData[k].websites[key].url = url;
      });
    });

    this.searchChange();
  },

  methods: {
    onWordClick: function onWordClick(clickedWord) {
      if (lodash_default.a.indexOf(this.selectedTags, clickedWord) === -1) {
        this.selectedTags.push(clickedWord);
        this.$refs.tagCloud.selectedTags = this.selectedTags;
        this.searchChange(window.event, this.$refs.searchBox.keyword);
      }
    },

    /**
       * Get array of words in a phrase. Not include special chars.
       * A word can be group of alphabets or group of digits.
       * Each words will became lowercase word.
       *
       * @param phrase A string
       */
    pureWords: function pureWords(phrase) {
      if (phrase === undefined) {
        return phrase;
      }

      var result = phrase;

      if (lodash_default.a.isArray(phrase)) {
        result = lodash_default.a.join(lodash_default.a.flattenDeep(phrase), ' ');
      }

      return lodash_default.a.words(result.toLowerCase(), /[-\w]+/g);
    },
    toLowerTags: function toLowerTags(tags) {
      var result = [];

      lodash_default.a.forEach(tags, function (tag, key) {
        result[key] = tag.toLowerCase();
      });

      return result;
    },

    /**
       * Split text to array of words and marks (, . @ / so on).
       * E.x: The text "quick, brown @fox" will be split to ['quick', ',', ' ', 'brown', ' ', '@', 'fox']
       *
       * @param text
       */
    fragString: function fragString(text) {
      return text.split(/([^a-zA-Z])/g);
    },
    highlight: function highlight(keywords, sentence) {
      var pureKeywords = this.pureWords(keywords);

      var sentenceWords = this.fragString(sentence);

      lodash_default.a.forEach(sentenceWords, function (val, key) {
        if (lodash_default.a.indexOf(pureKeywords, val.toLowerCase()) !== -1) {
          sentenceWords[key] = '<span class="highlighted-word">' + val + '</span>';
        }
      });

      return lodash_default.a.join(sentenceWords, '');
    },
    searchChange: function searchChange(event, kw) {
      var _this2 = this;

      var keyword = kw === undefined ? '' : kw;

      var val = lodash_default.a.trim(keyword);
      var words = this.pureWords(val);

      this.resultCount = 0;
      this.explainCount = 0;

      var filteredResources = {};

      lodash_default.a.forEach(this.yamlData, function (resource, resourceKey) {
        //
        var filteredLists = {};

        lodash_default.a.forEach(resource, function (list, listKey) {
          // listKey = 'packages', 'websites'...
          var filteredItems = {};

          lodash_default.a.forEach(list, function (item, itemKey) {
            var highlightKey = itemKey;
            //
            var matched = false;
            var matchedItem = lodash_default.a.clone(item);

            // 1. Filter by selected tags in cloud
            var noTag = false;

            if (_this2.selectedTags.length > 0) {
              lodash_default.a.forEach(_this2.selectedTags, function (selectedTag) {
                if (lodash_default.a.indexOf(_this2.toLowerTags(item.tags), selectedTag.toLowerCase()) === -1) {
                  noTag = true;
                }
              });
            }

            if (noTag === true) {
              return;
            }

            // 2. Filter by keywords
            if (words.length === 0) {
              matched = true;
            } else {
              // 2.1 Check with article key. E.x: 'saritasa/common', 'dingo/api'
              if (lodash_default.a.intersection(words, _this2.pureWords(itemKey)).length > 0) {
                highlightKey = _this2.highlight(words, itemKey);
                matched = true;
              }

              // 2.2 Check with article content
              lodash_default.a.forEach(item, function (text, label) {
                if (lodash_default.a.intersection(words, _this2.pureWords(text)).length > 0) {
                  // Except 'explain' and 'url' because they aren't shown as text
                  if (label !== 'explain' && label !== 'url' && label !== 'tags') {
                    matchedItem[label] = _this2.highlight(words, text);
                  } else {
                    matchedItem[label] = text;
                    if (label === 'explain') {
                      _this2.explainCount++;
                    }
                  }
                  matched = true;
                }
              });
            }

            if (matched === true) {
              filteredItems[highlightKey] = matchedItem;
              _this2.resultCount++;
            }
          });
          if (lodash_default.a.size(filteredItems) > 0) {
            filteredLists[listKey] = filteredItems;
          }
        });
        if (lodash_default.a.size(filteredLists) > 0) {
          filteredResources[resourceKey] = filteredLists;
        }
      });

      this.resources = '';
      keys_default()(this.resources).forEach(function (prop) {
        delete _this2.resources[prop];
        _this2.resources[prop] = undefined;
      });

      this.resources = filteredResources;
      if (this.$refs.tagCloud !== undefined) {
        // TagCloud was loaded
        this.$refs.tagCloud.searchResult = filteredResources;
      }

      return false;
    },
    clearTag: function clearTag(tagIndex) {
      this.$delete(this.selectedTags, tagIndex);
      this.searchChange(window.event, this.$refs.searchBox.keyword);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3429e115","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Page.vue
var Page_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"section tag-cloud"},[_c('tag-cloud',{ref:"tagCloud",attrs:{"on-word-click":_vm.onWordClick}})],1),_vm._v(" "),_c('div',{staticClass:"section search-box"},[_c('search-box',{ref:"searchBox",attrs:{"search-change":_vm.searchChange}}),_vm._v(" "),_c('div',{staticClass:"section breadcrumb"},_vm._l((_vm.selectedTags),function(selectedTag,index){return _c('span',{key:index,staticClass:"selected-tag"},[_vm._v("\n        "+_vm._s(selectedTag)+"\n        "),_c('span',{staticClass:"icon",on:{"click":function($event){_vm.clearTag(index)}}},[_c('v-icon',{attrs:{"small":""}},[_vm._v("close")])],1)])}))],1),_vm._v(" "),_c('div',{staticClass:"result-count"},[_c('span',[_vm._v(_vm._s(_vm.resultCount)+" results found.")]),_vm._v(" "),(_vm.explainCount > 0)?_c('span',[_vm._v("("+_vm._s(_vm.explainCount)+" matched in 'explain' content)")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"section resource"},_vm._l((_vm.resources),function(item,name){return _c('resource-sections',{key:name,attrs:{"name":name,"resource":item}})})),_vm._v(" "),_c('div',{staticClass:"section footer"},[_c('quick-link')],1)])}
var Page_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section title"},[_c('h1',[_vm._v("Saritasa recommended stuff for PHP")])])}]
var Page_esExports = { render: Page_render, staticRenderFns: Page_staticRenderFns }
/* harmony default export */ var components_Page = (Page_esExports);
// CONCATENATED MODULE: ./src/components/Page.vue
function Page_injectStyle (ssrContext) {
  __webpack_require__("IRTc")
}
var Page_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Page___vue_template_functional__ = false
/* styles */
var Page___vue_styles__ = Page_injectStyle
/* scopeId */
var Page___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Page___vue_module_identifier__ = null
var Page_Component = Page_normalizeComponent(
  Page,
  components_Page,
  Page___vue_template_functional__,
  Page___vue_styles__,
  Page___vue_scopeId__,
  Page___vue_module_identifier__
)

/* harmony default export */ var src_components_Page = (Page_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js




vue_esm["default"].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Page',
    component: src_components_Page
  }]
}));
// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





vue_esm["default"].config.productionTip = false;

vue_esm["default"].use(vuetify_default.a, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
});

/* eslint-disable no-new */
new vue_esm["default"]({
  el: '#app',
  router: router,
  components: { App: src_App },
  template: '<App/>'
});

/***/ }),

/***/ "lfgu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "m/u+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vfCk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.js.map