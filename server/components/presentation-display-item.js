exports.ids = [3];
exports.modules = {

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(202);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("1de57065", content, true, context)
};

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayItem_vue_vue_type_style_index_0_id_12136e5d_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayItem_vue_vue_type_style_index_0_id_12136e5d_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayItem_vue_vue_type_style_index_0_id_12136e5d_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayItem_vue_vue_type_style_index_0_id_12136e5d_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayItem_vue_vue_type_style_index_0_id_12136e5d_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".presentation-label[data-v-12136e5d]{display:flex;align-items:center;line-height:1.4;flex:5}.display-multi__item[data-v-12136e5d]{display:flex;flex-direction:column;text-align:center}.display-multi__item .multi-data__index[data-v-12136e5d]{font-size:.75rem;margin-bottom:.25rem;color:#666;white-space:nowrap}.display-multi__item[data-v-12136e5d]:after{content:\"\";position:relative;left:.5rem;border-right:1px solid #cdcdcd}.presentation-item[data-v-12136e5d]{display:flex;justify-content:space-between;align-items:center;grid-gap:1rem;gap:1rem;cursor:pointer;transition:all .2s ease-in-out;padding:1.25rem 1rem;border-radius:.5rem;border-bottom:1px solid #efefef}.presentation-item[data-v-12136e5d]:hover{background-color:rgba(116,158,203,.24)}.presentation-display__container[data-v-12136e5d]{flex:8;overflow-y:hidden;overflow-x:auto}.presentation-display__container[data-v-12136e5d]::-webkit-scrollbar{height:10px!important;border-radius:10px;background-color:#fff}.presentation-display__container[data-v-12136e5d]::-webkit-scrollbar-thumb{background-color:#9abad8;border-radius:10px}.presentation-display__container[data-v-12136e5d]::-webkit-scrollbar-track{background-color:#f8f8f8;border-radius:10px}.presentation-value[data-v-12136e5d]{display:flex;width:100%;overflow-x:hidden;grid-gap:1rem;gap:1rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Presentation/DisplayItem.vue?vue&type=template&id=12136e5d&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "presentation-display__container"
  }, [_vm.isSingleData ? _vm._ssrNode("<div data-v-12136e5d>", "</div>", [_vm._ssrNode(_vm._ssrEscape("\r\n      " + _vm._s(_vm.value) + "\r\n    "))], 2) : !_vm.isMultiDimensionalData ? _c('MultiItemList', {
    staticClass: "single-display"
  }, _vm._l(_vm.value, function (item, index) {
    return _c('li', {
      key: index,
      staticClass: "display-multi__item"
    }, [_c('p', {
      staticClass: "multi-data__index"
    }, [_vm._v(_vm._s(`Data ${index + 1}`))]), _vm._v(" "), _c('p', {
      staticClass: "multi-data__value"
    }, [_vm._v(_vm._s(item))])]);
  }), 0) : _c('MultiItemList', {
    staticClass: "multiple-display"
  }, [_c('SelectItem', {
    attrs: {
      "selectItems": _vm.value,
      "selectedIndex": _vm.selectedIndexData,
      "onChange": _vm.onSelect
    }
  }), _vm._v(" "), _vm._l(_vm.value[_vm.selectedIndexData], function (item, index) {
    return _c('li', {
      key: index,
      staticClass: "display-multi__item"
    }, [_c('p', {
      staticClass: "multi-data__index"
    }, [_vm._v(_vm._s(`데이터 ${index + 1}`))]), _vm._v(" "), _c('p', {
      staticClass: "multi-data__value"
    }, [_vm._v(_vm._s(item))])]);
  })], 2)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Presentation/DisplayItem.vue?vue&type=template&id=12136e5d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Presentation/DisplayItem.vue?vue&type=script&lang=js&
/* harmony default export */ var DisplayItemvue_type_script_lang_js_ = ({
  components: {
    // MultiEditModal: () => import("./multiEditModal.vue"),
    DisplayItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 251)),
    EditItem: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 252)),
    MultiItemList: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 253)),
    SelectItem: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 254)),
    Select: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 256))
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    variable: {
      type: String,
      default: ""
    },
    value: {
      type: [Number, String, Array]
    },
    selectedIndex: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      selectedIndexData: this.selectedIndex
    };
  },

  computed: {
    isMultiDimensionalData() {
      var _this$value;

      if (typeof this.value === "number") return false;
      return (_this$value = this.value) === null || _this$value === void 0 ? void 0 : _this$value.every(item => Array.isArray(item));
    },

    isSingleData() {
      return !Array.isArray(this.value);
    }

  },
  methods: {
    onSelect(e) {
      this.selectedIndexData = e.target.selectedIndex;
    }

  }
});
// CONCATENATED MODULE: ./components/Presentation/DisplayItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Presentation_DisplayItemvue_type_script_lang_js_ = (DisplayItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Presentation/DisplayItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(201)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Presentation_DisplayItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "12136e5d",
  "1551aa84"
  
)

/* harmony default export */ var DisplayItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=presentation-display-item.js.map