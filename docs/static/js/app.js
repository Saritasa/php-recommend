webpackJsonp([1],{

/***/ "5xlr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "I2f+":
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

// EXTERNAL MODULE: ./node_modules/v-tooltip/dist/v-tooltip.esm.js
var v_tooltip_esm = __webpack_require__("VN6J");

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

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zrlr");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("wxAW");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/yamljs/lib/Yaml.js
var Yaml = __webpack_require__("BxPQ");
var Yaml_default = /*#__PURE__*/__webpack_require__.n(Yaml);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("M4fF");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// CONCATENATED MODULE: ./src/enums/resourceTypes.js
/**
 * Types of techmology stack resources.
 */
/* harmony default export */ var resourceTypes = ({
  PACKAGE: 'packages',
  WEBSITE: 'websites',
  TUTORIAL: 'tutorials'
});
// CONCATENATED MODULE: ./src/entities/TechnologyStack.js




/**
 * Represents technology( like PHP/JS ) with related resources for learning/reading.
 */

var TechnologyStack_TechnologyStack = function () {
  /**
   * Represents technology( like PHP/JS ) with related resources for learning/reading.
   *
   * @param {string} name - Name of the technology stack
   */
  function TechnologyStack(name) {
    classCallCheck_default()(this, TechnologyStack);

    this.name = name;
    this.websites = [];
    this.tutorials = [];
    this.packages = [];
  }

  /**
   * Returns name.
   *
   * @return {string}
   */


  createClass_default()(TechnologyStack, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }

    /**
     * Gets packages.
     *
     * @return { Resource[] }
     */

  }, {
    key: 'getPackages',
    value: function getPackages() {
      return this.packages;
    }

    /**
     * Gets packages.
     *
     * @return { Resource[] }
     */

  }, {
    key: 'getTutorials',
    value: function getTutorials() {
      return this.tutorials;
    }

    /**
     * Gets packages.
     *
     * @return { Resource[] }
     */

  }, {
    key: 'getWebsites',
    value: function getWebsites() {
      return this.websites;
    }

    /**
     * Gets packages.
     *
     * @return { Array<Resource> }
     *
     * @throws Error When given type is unknown
     */

  }, {
    key: 'getResources',
    value: function getResources(type) {
      var results = void 0;

      switch (type) {
        case resourceTypes.PACKAGE:
          results = this.packages;
          break;

        case resourceTypes.WEBSITE:
          results = this.websites;
          break;

        case resourceTypes.TUTORIAL:
          results = this.tutorials;
          break;

        default:
          throw new Error('Unknown package type.');
      }

      return results;
    }

    /**
     * Add resource by type.
     *
     * @throws Error When given type is unknown
     */

  }, {
    key: 'addResource',
    value: function addResource(type, resource) {
      switch (type) {
        case resourceTypes.PACKAGE:
          this.packages.push(resource);
          break;

        case resourceTypes.WEBSITE:
          this.websites.push(resource);
          break;

        case resourceTypes.TUTORIAL:
          this.tutorials.push(resource);
          break;

        default:
          throw new Error('Unknown package type.');
      }
    }

    /**
     * Whether technology stack have any items of any type.
     *
     * @return {boolean}
     */

  }, {
    key: 'hasAnyItem',
    value: function hasAnyItem() {
      return this.getWebsites().length > 0 || this.getPackages().length > 0 || this.getTutorials().length > 0;
    }
  }]);

  return TechnologyStack;
}();

/* harmony default export */ var entities_TechnologyStack = (TechnologyStack_TechnologyStack);
// CONCATENATED MODULE: ./src/enums/languages.js
/* harmony default export */ var languages = ({
  ENGLISH: 'English',
  RUSSIAN: 'Russian'
});
// CONCATENATED MODULE: ./src/entities/Resource.js




/**
 * Representation of specific resource in technology stack.
 */

var Resource_Resource = function () {
  /**
   * Representation of specific resource in technology stack.
   *
   * @param {string} name - Resource name
   */
  function Resource(name) {
    classCallCheck_default()(this, Resource);

    this.name = name;
    this.tags = [];
    this.language = languages.ENGLISH;
  }

  /**
   * Gets resource language.
   *
   * @return {string}
   */


  createClass_default()(Resource, [{
    key: 'getLanguage',
    value: function getLanguage() {
      return this.language;
    }

    /**
     * Sets resource language.
     *
     * @param {string} language - Resource language
     */

  }, {
    key: 'setLanguage',
    value: function setLanguage(language) {
      this.language = language;
    }

    /**
     * Sets resource description.
     *
     * @param {string} value - Resource description
     */

  }, {
    key: 'setDesc',
    value: function setDesc(value) {
      this.desc = value;
    }

    /**
     * Sets resource url.
     *
     * @param {string} value - Resource description
     */

  }, {
    key: 'setUrl',
    value: function setUrl(value) {
      this.url = value;
    }

    /**
     * Sets resource explanation.
     *
     * @param {string} explanation - Resource explanation
     */

  }, {
    key: 'setExplanation',
    value: function setExplanation(explanation) {
      this.explanation = explanation;
    }

    /**
     * Gets resource name.
     *
     * @return {string}
     */

  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }

    /**
     * Gets resource description.
     *
     * @return {string}
     */

  }, {
    key: 'getDesc',
    value: function getDesc() {
      return this.desc;
    }

    /**
     * Gets resource explanation.
     *
     * @return {string}
     */

  }, {
    key: 'getExplanation',
    value: function getExplanation() {
      return this.explanation;
    }

    /**
     * Gets resource url.
     *
     * @return {string}
     */

  }, {
    key: 'getUrl',
    value: function getUrl() {
      return this.url;
    }

    /**
     * Adds tag to resource.
     *
     * @param {string} tagWord - Tag to add
     */

  }, {
    key: 'addTag',
    value: function addTag(tagWord) {
      this.tags.push(tagWord);
    }

    /**
     * Gets resource tags.
     *
     * @return {Array<string>}
     */

  }, {
    key: 'getTags',
    value: function getTags() {
      return this.tags;
    }
  }]);

  return Resource;
}();

/* harmony default export */ var entities_Resource = (Resource_Resource);
// CONCATENATED MODULE: ./src/services/YamlDataConverter.js







/**
 * Service to parse and convert yaml into appropriate collection.
 */

var YamlDataConverter_YamlDataConverter = function () {
  function YamlDataConverter() {
    classCallCheck_default()(this, YamlDataConverter);
  }

  createClass_default()(YamlDataConverter, [{
    key: 'parse',

    /**
     * Parse and convert yaml into appropriate collection.
     *
     * @param {string} filePath - Path to yaml file
     *
     * @return {Array<TechnologyStack>}
     */
    value: function parse(filePath) {
      var data = this.prepareData(Yaml_default.a.load(filePath));

      return this.convertData(data);
    }

    /**
     * Add url to websites if it absent.
     *
     * @param {Object} data - Data to prepare
     *
     * @return {Object}
     */

  }, {
    key: 'prepareData',
    value: function prepareData(data) {
      var localData = data;

      lodash_default.a.forEach(localData, function (val, k) {
        lodash_default.a.forEach(val.websites, function (item, key) {
          var url = item.url || key;

          if (!lodash_default.a.startsWith(url, 'http')) {
            url = 'http://' + url;
          }
          localData[k].websites[key].url = url;
        });
      });

      return localData;
    }

    /**
     * Convert yaml parsed object into technology stacks collection.
     *
     * @param {Object} data - Data to convert
     *
     * @return {Array<TechnologyStack>}
     */

  }, {
    key: 'convertData',
    value: function convertData(data) {
      var technologyStacks = [];

      lodash_default.a.forEach(data, function (resourcesGroups, technologyStackName) {
        var technologyStack = new entities_TechnologyStack(technologyStackName);

        lodash_default.a.forEach(resourcesGroups, function (resourceGroup, type) {
          lodash_default.a.forEach(resourceGroup, function (resource, name) {
            var item = new entities_Resource(name);

            item.setDesc(resource.description);
            item.setUrl(resource.url);
            if (resource.language) {
              item.setLanguage(resource.language);
            }

            if (resource.explain) {
              item.setExplanation(resource.explain);
            }

            if (resource.tags) {
              resource.tags.forEach(function (tagWord) {
                return item.addTag(tagWord);
              });
            }

            technologyStack.addResource(type, item);
          });
        });
        technologyStacks.push(technologyStack);
      });

      return technologyStacks;
    }
  }]);

  return YamlDataConverter;
}();

/* harmony default export */ var services_YamlDataConverter = (YamlDataConverter_YamlDataConverter);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/map.js
var map = __webpack_require__("ifoU");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// CONCATENATED MODULE: ./src/entities/Tag.js



/**
 * Tag to filtering package.
 */
var Tag_Tag = function () {
  /**
   * Tag to filtering package.
   *
   * @param {string} name - Tag name
   */
  function Tag(name) {
    classCallCheck_default()(this, Tag);

    this.name = name;
    this.value = 1;
  }

  /**
   * Increase weight of tag.
   */


  createClass_default()(Tag, [{
    key: "increaseValue",
    value: function increaseValue() {
      this.value++;
    }

    /**
     * Gets tag name.
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }

    /**
     * Gets tag weight.
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }]);

  return Tag;
}();

/* harmony default export */ var entities_Tag = (Tag_Tag);
// CONCATENATED MODULE: ./src/services/TagsService.js









/**
 * Service to find matches in tags.
 */

var TagsService_TagsService = function () {
  /**
   * Service to find matches in tags.
   *
   * @param {Array<TechnologyStack>} technologyStacks - Technology stacks in which we should find matches
   */
  function TagsService(technologyStacks) {
    classCallCheck_default()(this, TagsService);

    this.tags = new map_default.a();
    this.selectedTags = new map_default.a();
    this.keyword = null;
    this.originalTechnologyStacks = technologyStacks;
    this.technologyStacks = assign_default()({}, technologyStacks);
    this.matchedCount = 0;
  }

  /**
   * Gets matches count.
   *
   * @return {number}
   */


  createClass_default()(TagsService, [{
    key: 'getMatchedCount',
    value: function getMatchedCount() {
      return this.matchedCount;
    }

    /**
     * Gets matched tags.
     *
     * @return {Map<string, Tag>}
     */

  }, {
    key: 'getTags',
    value: function getTags() {
      return this.tags;
    }

    /**
     * Gets filtered technology stacks.
     *
     * @return {Array<TechnologyStack>}
     */

  }, {
    key: 'getTechnologyStacks',
    value: function getTechnologyStacks() {
      return this.technologyStacks;
    }

    /**
     * Add tag to filter results.
     *
     * @param {Tag} tag
     *
     * @return TagsService
     */

  }, {
    key: 'addTag',
    value: function addTag(tag) {
      this.selectedTags.set(tag.getName().toLowerCase(), tag);

      return this;
    }

    /**
     * Remove added tag.
     *
     * @param {string} tagName - Tag to remove
     *
     * @return TagsService
     */

  }, {
    key: 'removeTag',
    value: function removeTag(tagName) {
      this.selectedTags.delete(tagName.toLowerCase());

      return this;
    }

    /**
     * Set key word.
     *
     * @param {string|null} keyword - Key word to filter data.
     *
     * @return {TagsService}
     */

  }, {
    key: 'setKeyWord',
    value: function setKeyWord(keyword) {
      this.keyword = keyword ? keyword.toLowerCase() : null;

      return this;
    }

    /**
     * Rescan technology stacks to found comparision according with search keyword and selected tags.
     */

  }, {
    key: 'rescan',
    value: function rescan() {
      var _this = this;

      this.technologyStacks = [];
      this.tags.clear();
      this.matchedCount = 0;

      this.originalTechnologyStacks.forEach(function (technologyStack) {
        var matchedStack = new entities_TechnologyStack(technologyStack.getName());

        lodash_default.a.forEach(resourceTypes, function (type) {
          technologyStack.getResources(type).forEach(function (packageItem) {
            var matchedFound = true;

            if (_this.selectedTags.size) {
              _this.selectedTags.forEach(function (tag) {
                matchedFound = matchedFound && packageItem.getTags().map(function (tagName) {
                  return tagName.toLowerCase();
                }).indexOf(tag.getName().toLowerCase()) !== -1;
              });
            }

            if (_this.keyword) {
              matchedFound = matchedFound && ((packageItem.getName() ? _this.isContainsKeyword(packageItem.getName()) : false) || (packageItem.getUrl() ? _this.isContainsKeyword(packageItem.getUrl()) : false) || (packageItem.getDesc() ? _this.isContainsKeyword(packageItem.getDesc()) : false));
            }

            if (matchedFound) {
              packageItem.getTags().forEach(function (tag) {
                var localTag = tag.toLocaleLowerCase();

                if (!_this.selectedTags.has(localTag)) {
                  if (_this.tags.has(localTag)) {
                    _this.tags.get(localTag).increaseValue();
                  } else {
                    _this.tags.set(localTag, new entities_Tag(tag));
                  }
                }
              });
              matchedStack.addResource(type, packageItem);
              _this.matchedCount++;
            }
          });
        });
        if (matchedStack.hasAnyItem()) {
          _this.technologyStacks.push(matchedStack);
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

  }, {
    key: 'isContainsKeyword',
    value: function isContainsKeyword(str) {
      return str.toLowerCase().includes(this.keyword);
    }
  }]);

  return TagsService;
}();

/* harmony default export */ var services_TagsService = (TagsService_TagsService);
// EXTERNAL MODULE: ./node_modules/vuewordcloud/VueWordCloud.js
var VueWordCloud = __webpack_require__("/2Ab");
var VueWordCloud_default = /*#__PURE__*/__webpack_require__.n(VueWordCloud);

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



/* harmony default export */ var TagCloud = ({
  components: {
    VueWordCloud: VueWordCloud_default.a
  },
  props: {
    tags: {
      type: map_default.a,
      required: true
    }
  },
  data: function data() {
    return {
      colors: ['#d99cd1', '#c99cd1', '#b99cd1', '#a99cd1', '#403030', '#f97a7a', '#31a50d', '#d1b022', '#74482a', '#ffd077', '#3bc4c7', '#3a9eea', '#ff4e69', '#461e47'],
      preparedTags: []
    };
  },
  mounted: function mounted() {
    this.reInit();
  },

  methods: {
    /**
     * Returns random color from collection.
     */
    getColor: function getColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },


    /**
     * ReInit component.
     */
    reInit: function reInit() {
      this.preparedTags = this.prepareTags(this.tags);
    },


    /**
     * Convert given tags to needed form for `vue word cloud` component.
     *
     * @param { Map<string, Tag> } tags - Tags collection
     *
     * @return { Array }
     */
    prepareTags: function prepareTags(tags) {
      var preparedTags = [];

      tags.forEach(function (tag) {
        return preparedTags.push([tag.getName(), tag.getValue()]);
      });

      return preparedTags;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e2033210","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/tag-cloud/TagCloud.vue
var TagCloud_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tags-cloud-container"},[(_vm.preparedTags.length)?[_c('vue-word-cloud',{attrs:{"words":_vm.preparedTags,"color":_vm.getColor,"animation-overlap":4,"animation-duration":1500,"font-family":"Indie Flower"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var text = ref.text;
var weight = ref.weight;
return [_c('div',{staticStyle:{"cursor":"pointer"},attrs:{"title":text + ': ' + weight},on:{"click":function($event){_vm.$emit('wordClick', text)}}},[_vm._v("\n          "+_vm._s(text)+"\n        ")])]}}])})]:[_c('div',{staticClass:"empty-results"},[_vm._v("\n      No matched tags found\n    ")])]],2)}
var TagCloud_staticRenderFns = []
var TagCloud_esExports = { render: TagCloud_render, staticRenderFns: TagCloud_staticRenderFns }
/* harmony default export */ var tag_cloud_TagCloud = (TagCloud_esExports);
// CONCATENATED MODULE: ./src/components/tag-cloud/TagCloud.vue
function TagCloud_injectStyle (ssrContext) {
  __webpack_require__("rcWl")
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
//
//
//
//

/* harmony default export */ var SearchBox = ({
  props: {
    value: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      localKeyword: null
    };
  },

  watch: {
    keyword: function keyword(newVal) {
      this.localKeyword = newVal;
    }
  },
  methods: {
    /**
     * Action after clicking on "Clear" button of search box.
     */
    onClearSearch: function onClearSearch() {
      this.localKeyword = null;
      this.$emit('clearSearch');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1e23fbce","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/search/SearchBox.vue
var SearchBox_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search-form-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.localKeyword),expression:"localKeyword"}],attrs:{"type":"text","placeholder":"Search keyword"},domProps:{"value":(_vm.localKeyword)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.localKeyword=$event.target.value},function($event){_vm.$emit('input', _vm.localKeyword)}]}}),_vm._v(" "),_c('button',{staticClass:"clear-search",on:{"click":function($event){_vm.onClearSearch()}}},[_vm._v("\n    Clear\n  ")])])}
var SearchBox_staticRenderFns = []
var SearchBox_esExports = { render: SearchBox_render, staticRenderFns: SearchBox_staticRenderFns }
/* harmony default export */ var search_SearchBox = (SearchBox_esExports);
// CONCATENATED MODULE: ./src/components/search/SearchBox.vue
function SearchBox_injectStyle (ssrContext) {
  __webpack_require__("p7fA")
}
var SearchBox_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var SearchBox___vue_template_functional__ = false
/* styles */
var SearchBox___vue_styles__ = SearchBox_injectStyle
/* scopeId */
var SearchBox___vue_scopeId__ = "data-v-1e23fbce"
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
//
//
//

/* harmony default export */ var PackageItem = ({
  props: {
    item: {
      type: Object,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6b733002","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/package/PackageItem.vue
var PackageItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{attrs:{"href":_vm.item.getUrl()}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.item.getName())}})]),_vm._v(" "),(_vm.item.getDesc())?_c('span',[_vm._v("- "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.item.getDesc())}})]):_vm._e(),_vm._v(" "),(_vm.item.getExplanation())?_c('span',[_c('v-icon',{directives:[{name:"tooltip",rawName:"v-tooltip",value:(_vm.item.getExplanation()),expression:"item.getExplanation()"}],attrs:{"medium":""}},[_vm._v("info")])],1):_vm._e()])}
var PackageItem_staticRenderFns = []
var PackageItem_esExports = { render: PackageItem_render, staticRenderFns: PackageItem_staticRenderFns }
/* harmony default export */ var package_PackageItem = (PackageItem_esExports);
// CONCATENATED MODULE: ./src/components/package/PackageItem.vue
function PackageItem_injectStyle (ssrContext) {
  __webpack_require__("I2f+")
}
var PackageItem_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var PackageItem___vue_template_functional__ = false
/* styles */
var PackageItem___vue_styles__ = PackageItem_injectStyle
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



/* harmony default export */ var PackageList = ({
  components: {
    PackageItem: components_package_PackageItem
  },
  props: {
    packages: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4adf877c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/package/PackageList.vue
var PackageList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"package-list"},_vm._l((_vm.packages),function(packageItem,index){return _c('package-item',{key:index,attrs:{"item":packageItem}})}))}
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
//
//
//

/* harmony default export */ var WebsiteItem = ({
  props: {
    item: {
      type: Object,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-21dfe595","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/website/WebsiteItem.vue
var WebsiteItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{attrs:{"href":_vm.item.getUrl()}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.item.getName())}})]),_vm._v(" "),(_vm.item.getDesc())?_c('span',[_vm._v("- "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.item.getDesc())}})]):_vm._e(),_vm._v(" "),(_vm.item.getExplanation())?_c('span',[_c('v-icon',{directives:[{name:"tooltip",rawName:"v-tooltip",value:(_vm.item.getExplanation()),expression:"item.getExplanation()"}],attrs:{"medium":""}},[_vm._v("info")])],1):_vm._e()])}
var WebsiteItem_staticRenderFns = []
var WebsiteItem_esExports = { render: WebsiteItem_render, staticRenderFns: WebsiteItem_staticRenderFns }
/* harmony default export */ var website_WebsiteItem = (WebsiteItem_esExports);
// CONCATENATED MODULE: ./src/components/website/WebsiteItem.vue
function WebsiteItem_injectStyle (ssrContext) {
  __webpack_require__("ezeL")
}
var WebsiteItem_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var WebsiteItem___vue_template_functional__ = false
/* styles */
var WebsiteItem___vue_styles__ = WebsiteItem_injectStyle
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/mixins/LanguageFilteringMixin.vue



/* harmony default export */ var LanguageFilteringMixin = ({
  name: 'LanguageFilteringMixin',
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      languages: languages
    };
  },

  methods: {
    /**
     * Filters items by given language.
     *
     * @param {string} language - Language to filter items.
     *
     * @return {Array<Resource>}
     */
    filterByLanguage: function filterByLanguage(language) {
      return this.items.filter(function (item) {
        return item.getLanguage() === language;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/LanguageFilteringMixin.vue
var LanguageFilteringMixin_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */
var __vue_template__ = null
/* template functional */
var LanguageFilteringMixin___vue_template_functional__ = false
/* styles */
var LanguageFilteringMixin___vue_styles__ = null
/* scopeId */
var LanguageFilteringMixin___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var LanguageFilteringMixin___vue_module_identifier__ = null
var LanguageFilteringMixin_Component = LanguageFilteringMixin_normalizeComponent(
  LanguageFilteringMixin,
  __vue_template__,
  LanguageFilteringMixin___vue_template_functional__,
  LanguageFilteringMixin___vue_styles__,
  LanguageFilteringMixin___vue_scopeId__,
  LanguageFilteringMixin___vue_module_identifier__
)

/* harmony default export */ var mixins_LanguageFilteringMixin = (LanguageFilteringMixin_Component.exports);

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
//
//
//
//




/* harmony default export */ var WebsiteList = ({
  components: {
    WebsiteItem: components_website_WebsiteItem
  },
  mixins: [mixins_LanguageFilteringMixin]
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5e321dd5","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/website/WebsiteList.vue
var WebsiteList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resources-list"},_vm._l((_vm.languages),function(language){return _c('div',{key:language},[(_vm.filterByLanguage(language).length)?[_c('h4',[_c('i',[_vm._v(_vm._s(language))])]),_vm._v(" "),_vm._l((_vm.filterByLanguage(language)),function(website,key){return _c('website-item',{key:key,attrs:{"item":website}})})]:_vm._e()],2)}))}
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
//
//
//

/* harmony default export */ var TutorialItem = ({
  props: {
    item: {
      type: Object,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9db345c6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/tutorial/TutorialItem.vue
var TutorialItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{attrs:{"href":_vm.item.getUrl()}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.item.getName())}})]),_vm._v(" "),(_vm.item.getDesc())?_c('span',[_vm._v("- "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.item.getDesc())}})]):_vm._e(),_vm._v(" "),(_vm.item.getExplanation())?_c('span',[_c('v-icon',{directives:[{name:"tooltip",rawName:"v-tooltip",value:(_vm.item.getExplanation()),expression:"item.getExplanation()"}],attrs:{"medium":""}},[_vm._v("info")])],1):_vm._e()])}
var TutorialItem_staticRenderFns = []
var TutorialItem_esExports = { render: TutorialItem_render, staticRenderFns: TutorialItem_staticRenderFns }
/* harmony default export */ var tutorial_TutorialItem = (TutorialItem_esExports);
// CONCATENATED MODULE: ./src/components/tutorial/TutorialItem.vue
function TutorialItem_injectStyle (ssrContext) {
  __webpack_require__("RX9e")
}
var TutorialItem_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var TutorialItem___vue_template_functional__ = false
/* styles */
var TutorialItem___vue_styles__ = TutorialItem_injectStyle
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
//
//
//
//




/* harmony default export */ var TutorialList = ({
  components: {
    TutorialItem: components_tutorial_TutorialItem
  },
  mixins: [mixins_LanguageFilteringMixin]
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1fdeabdd","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/tutorial/TutorialList.vue
var TutorialList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resources-list"},_vm._l((_vm.languages),function(language){return _c('div',{key:language},[(_vm.filterByLanguage(language).length)?[_c('h4',[_c('i',[_vm._v(_vm._s(language))])]),_vm._v(" "),_vm._l((_vm.filterByLanguage(language)),function(tutorial,key){return _c('tutorial-item',{key:key,attrs:{"item":tutorial}})})]:_vm._e()],2)}))}
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
    item: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-697d5e80","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/ResourceSections.vue
var ResourceSections_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resource-wrapper"},[(_vm.item.getPackages().length)?[_c('h2',[_vm._v(_vm._s(_vm.item.name))]),_vm._v(" "),_c('h3',[_vm._v("\n      Packages\n    ")]),_vm._v(" "),_c('package-list',{attrs:{"packages":_vm.item.getPackages()}})]:_vm._e(),_vm._v(" "),(_vm.item.getWebsites().length)?[_c('h3',[_vm._v("\n      Websites\n    ")]),_vm._v(" "),_c('website-list',{attrs:{"items":_vm.item.getWebsites()}})]:_vm._e(),_vm._v(" "),(_vm.item.getTutorials().length)?[_c('h3',[_vm._v("\n      Tutorials\n    ")]),_vm._v(" "),_c('tutorial-list',{attrs:{"items":_vm.item.getTutorials()}})]:_vm._e()],2)}
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-05531399","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/footer/QuickLink.vue
var QuickLink_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var QuickLink_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"quick-link-wrapper"},[_c('span',[_vm._v("© Since 09.2018")])])}]
var QuickLink_esExports = { render: QuickLink_render, staticRenderFns: QuickLink_staticRenderFns }
/* harmony default export */ var QuickLink = (QuickLink_esExports);
// CONCATENATED MODULE: ./src/components/footer/QuickLink.vue
function QuickLink_injectStyle (ssrContext) {
  __webpack_require__("XnRc")
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
var QuickLink___vue_scopeId__ = "data-v-05531399"
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
      tagService: null,
      keyword: null,
      selectedTags: []
    };
  },

  computed: {
    tags: function tags() {
      return this.tagService.getTags();
    },
    resources: function resources() {
      return this.tagService.getTechnologyStacks();
    },
    resultsCount: function resultsCount() {
      return this.tagService.getMatchedCount();
    }
  },
  watch: {
    keyword: function keyword(_keyword) {
      this.keyword = _keyword;
      this.tagService.setKeyWord(_keyword);
      this.rescan();
    }
  },
  created: function created() {
    var yamlConverter = new services_YamlDataConverter();

    this.tagService = new services_TagsService(yamlConverter.parse("/php-recommend/" + 'list.yaml'));
    this.tagService.rescan();
  },

  methods: {
    /**
     * Action after click on lick in some tag.
     *
     * @param {string} tagName - Tag on which was click
     */
    onWordClick: function onWordClick(tagName) {
      if (this.selectedTags.indexOf(tagName) !== -1) {
        return;
      }
      this.tagService.addTag(new entities_Tag(tagName));
      this.selectedTags.push(tagName);
      this.rescan();
    },


    /**
     * Action after clicking on "Clear" button of search box.
     */
    onClearSearch: function onClearSearch() {
      this.keyword = null;
      this.tagService.setKeyWord(this.keyword);
      this.rescan();
    },


    /**
     * Rescan tags/technology stacks according which search string and selected tags.
     */
    rescan: function rescan() {
      this.tagService.rescan();
      this.$refs.cloud.reInit();
    },


    /**
     * Remove early selected tag and rescan.
     *
     * @param {number} index - Tag index in component tags collection.
     */
    removeTag: function removeTag(index) {
      this.tagService.removeTag(this.selectedTags[index]);
      this.selectedTags.splice(index, 1);
      this.rescan();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-abb8cb4c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Page.vue
var Page_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"section tag-cloud"},[_c('tag-cloud',{ref:"cloud",attrs:{"tags":_vm.tags},on:{"wordClick":_vm.onWordClick}})],1),_vm._v(" "),_c('div',{staticClass:"section search-box"},[_c('search-box',{on:{"clearSearch":_vm.onClearSearch},model:{value:(_vm.keyword),callback:function ($$v) {_vm.keyword=$$v},expression:"keyword"}}),_vm._v(" "),_c('div',{staticClass:"section breadcrumb"},_vm._l((_vm.selectedTags),function(selectedTag,index){return _c('span',{key:index,staticClass:"selected-tag"},[_vm._v("\n        "+_vm._s(selectedTag)+"\n        "),_c('span',{staticClass:"icon",on:{"click":function($event){_vm.removeTag(index)}}},[_c('v-icon',{attrs:{"small":""}},[_vm._v("close")])],1)])}))],1),_vm._v(" "),_c('div',{staticClass:"result-count"},[_c('span',[_vm._v(_vm._s(_vm.resultsCount)+" results found.")])]),_vm._v(" "),(_vm.resources.length)?_c('div',{staticClass:"section resource"},_vm._l((_vm.resources),function(stack,index){return _c('resource-sections',{key:index,attrs:{"item":stack}})})):_c('div',[_vm._v("\n    No matched results found\n  ")]),_vm._v(" "),_c('div',{staticClass:"section footer"},[_c('quick-link')],1)])}
var Page_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section title"},[_c('h1',[_vm._v("Saritasa recommended stuff for PHP")])])}]
var Page_esExports = { render: Page_render, staticRenderFns: Page_staticRenderFns }
/* harmony default export */ var components_Page = (Page_esExports);
// CONCATENATED MODULE: ./src/components/Page.vue
function Page_injectStyle (ssrContext) {
  __webpack_require__("5xlr")
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
  base: "/php-recommend/",
  routes: [{
    path: '/',
    name: 'Page',
    component: src_components_Page
  }]
}));
// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






vue_esm["default"].use(v_tooltip_esm["a" /* default */]);

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

/***/ "RX9e":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XnRc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ezeL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "p7fA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rcWl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vfCk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.js.map