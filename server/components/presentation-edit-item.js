exports.ids = [4];
exports.modules = {

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("284f27ce", content, true, context)
};

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditItem_vue_vue_type_style_index_0_id_234ac1e4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditItem_vue_vue_type_style_index_0_id_234ac1e4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditItem_vue_vue_type_style_index_0_id_234ac1e4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditItem_vue_vue_type_style_index_0_id_234ac1e4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditItem_vue_vue_type_style_index_0_id_234ac1e4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".presentation-input__container[data-v-234ac1e4]{display:flex;grid-gap:1rem;gap:1rem;flex:8;overflow-y:hidden;overflow-x:auto}.presentation-input__container[data-v-234ac1e4]::-webkit-scrollbar{height:10px!important;border-radius:10px;background-color:#fff}.presentation-input__container[data-v-234ac1e4]::-webkit-scrollbar-thumb{background-color:#9abad8;border-radius:10px}.presentation-input__container[data-v-234ac1e4]::-webkit-scrollbar-track{background-color:#f8f8f8;border-radius:10px}.single-dimension-input input[data-v-234ac1e4]{padding:.25rem .5rem;font-size:.875rem;border:1px solid #cdcdcd;border-radius:.25rem;transition:all .2s ease-in-out}.single-dimension-input input[data-v-234ac1e4]:focus{border:1px solid #666;outline:none}.multiple-dimension-input input[data-v-234ac1e4]{margin-left:1rem;padding:.25rem .5rem;width:8rem;border:1px solid #cdcdcd;border-radius:.25rem;transition:all .2s ease-in-out}.multiple-dimension-input input[data-v-234ac1e4]:focus{border:1px solid #666;outline:none}.display-multi__item[data-v-234ac1e4]{display:flex;flex-direction:column;text-align:center}.display-multi__item .multi-data__index[data-v-234ac1e4]{font-size:.75rem;margin-bottom:.25rem;color:#666;white-space:nowrap}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Presentation/EditItem.vue?vue&type=template&id=234ac1e4&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "presentation-input__container"
  }, [_vm.isSingleData ? _vm._ssrNode("<div class=\"single-input\" data-v-234ac1e4>", "</div>", [_vm._ssrNode("<input" + _vm._ssrAttr("value", _vm.value) + " data-v-234ac1e4>")], 2) : !_vm.isMultiDimensionalData ? _c('MultiItemList', {
    staticClass: "single-dimension-input"
  }, _vm._l(_vm.value, function (item, index) {
    return _c('li', {
      key: index,
      staticClass: "display-multi__item"
    }, [_c('p', {
      staticClass: "multi-data__index"
    }, [_vm._v(_vm._s(`데이터 ${index + 1}`))]), _vm._v(" "), _c('input', {
      staticClass: "multi-data__value",
      domProps: {
        "value": item
      },
      on: {
        "change": e => _vm.onValueChange(e, index)
      }
    })]);
  }), 0) : _c('MultiItemList', {
    staticClass: "multiple-dimension-input"
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
    }, [_vm._v(_vm._s(`데이터 ${index + 1}`))]), _vm._v(" "), _c('input', {
      staticClass: "multi-data__value",
      domProps: {
        "value": item
      },
      on: {
        "change": e => _vm.onValueChange(e, index)
      }
    })]);
  })], 2)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Presentation/EditItem.vue?vue&type=template&id=234ac1e4&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Presentation/EditItem.vue?vue&type=script&lang=js&

/* harmony default export */ var EditItemvue_type_script_lang_js_ = ({
  components: {
    DisplayItem: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 251)),
    EditItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 252)),
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
      type: Number
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

      if (!Array.isArray(this.value)) return false;
      return (_this$value = this.value) === null || _this$value === void 0 ? void 0 : _this$value.every(item => Array.isArray(item));
    },

    isSingleData() {
      return !Array.isArray(this.value);
    },

    ...Object(external_vuex_["mapState"])("ansData", ["ANSDatabase"])
  },
  methods: {
    onSelect(e) {
      this.selectedIndexData = e.target.selectedIndex;
    },

    onValueChange(e, index) {
      if (this.isSingleData) {
        const mutatedDatabase = Object.assign(JSON.parse(JSON.stringify(this.ANSDatabase)));
        mutatedDatabase[this.variable].value = e.target.value;
        this.mutateANSDatabase(mutatedDatabase);
      } else if (!this.isMultiDimensionalData) {
        const mutatedDataList = [...this.value];
        mutatedDataList[index] = e.target.value;
        const mutatedDatabase = Object.assign(JSON.parse(JSON.stringify(this.ANSDatabase)));
        mutatedDatabase[this.variable].value = mutatedDataList;
        this.mutateANSDatabase(mutatedDatabase);
      } else {
        const mutatedDataList = [...this.value[this.selectedIndexData]];
        mutatedDataList[index] = e.target.value;
        const mutatedDatabase = Object.assign(JSON.parse(JSON.stringify(this.ANSDatabase)));
        mutatedDatabase[this.variable].value[this.selectedIndexData] = mutatedDataList;
        this.mutateANSDatabase(mutatedDatabase);
      }
    },

    ...Object(external_vuex_["mapMutations"])("ansData", ["mutateANSDatabase"])
  },

  mounted() {}

});
// CONCATENATED MODULE: ./components/Presentation/EditItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Presentation_EditItemvue_type_script_lang_js_ = (EditItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Presentation/EditItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(203)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Presentation_EditItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "234ac1e4",
  "4d667644"
  
)

/* harmony default export */ var EditItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=presentation-edit-item.js.map