exports.ids = [21];
exports.modules = {

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(238);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f51786be", content, true, context)
};

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34f3fb42_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34f3fb42_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34f3fb42_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34f3fb42_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34f3fb42_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(95);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(96);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".table-container{display:flex;flex-direction:column;position:relative;flex:1;border:1px solid #cdcdcd;border-radius:.5rem;box-shadow:4px 4px 4px rgba(0,0,0,.1);overflow-x:scroll}.table-container:after{content:\"\";background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-position:50%;opacity:.12;position:absolute;top:8px;left:0;right:0;bottom:0;z-index:-1}.header{display:flex;position:relative;align-items:center;justify-content:space-between;padding:1.5rem;font-size:1.125rem;font-weight:700;top:0;background-color:#fff;border-bottom:1px solid #cdcdcd}.data-title{width:100%;text-align:center}.data-save{color:#ababab;position:absolute;right:1rem;font-size:.875rem;white-space:nowrap;cursor:pointer;transition:all .2s ease-in-out;padding:.375rem .5rem}.data-save:hover{color:#333;background-color:#efefef;border-radius:.5rem}.result-table{flex-direction:column;height:100%;overflow-x:hidden}.Container,.result-table{display:flex;padding:1rem}.Container{width:95%;height:60%;grid-gap:2rem;gap:2rem;font-size:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/Review/EESummary/index.vue?vue&type=template&id=34f3fb42&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "Container"
  }, [_vm._ssrNode("<div class=\"table-container\">", "</div>", [_vm._ssrNode("<div class=\"header\"><h2 class=\"data-title\">" + _vm._ssrEscape("\r\n          " + _vm._s(_vm.dataTypeheaderText) + "\r\n        ") + "</h2></div> "), _vm._ssrNode("<div class=\"result-table\">", "</div>", [_c('SummaryTable'), _vm._ssrNode(" "), _c('LineChart')], 2)], 2), _vm._ssrNode(" <ul class=\"button__list\"><button>데이터 저장</button> <button>돌아가기</button></ul>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/pages/Review/EESummary/index.vue?vue&type=template&id=34f3fb42&

// EXTERNAL MODULE: external "xlsx"
var external_xlsx_ = __webpack_require__(51);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(10);

// EXTERNAL MODULE: ./utils/constants/config.js
var config = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/Review/EESummary/index.vue?vue&type=script&lang=js&



/* harmony default export */ var EESummaryvue_type_script_lang_js_ = ({
  name: "ReviewTable",
  components: {
    SummaryTable: () => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, 270)),
    LineChart: () => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, 269))
  },
  props: {
    tableToDisplay: {
      type: String,
      value: ""
    }
  },
  methods: {
    async excelDown() {
      const xlsx = __webpack_require__(51); // 엑셀 파일 생성


      const book = xlsx.utils.book_new(); // data get > 실 개발시 api 호출

      const EESummaryData = await this.getEESummaryData(); // sheet 생성 - aoa_to_sheet 방식

      const worksheet = xlsx.utils.aoa_to_sheet(EESummaryData); // 엑셀 파일에 sheet set(엑셀파일, 시트데이터, 시트명)

      xlsx.utils.book_append_sheet(book, worksheet, "총 기대효과"); // 엑셀 다운로드

      xlsx.writeFile(book, "국가 항행계획 총 기대효과.xlsx");
    },

    // aoa는 행열 데이터를 엑셀과 동일하게 get
    getEESummaryData() {
      let arr = [];
      const Year = Array(config["c" /* YEAR */]).fill(0);
      const N_Flight = Array(config["c" /* YEAR */]).fill(0);
      const FTR_EE = Array(config["c" /* YEAR */]).fill(0);
      const USER_EE = Array(config["c" /* YEAR */]).fill(0);
      const SAFETY_EE = Array(config["c" /* YEAR */]).fill(0);
      const Total_EE = Array(config["c" /* YEAR */]).fill(0);
      const ACCUM_EE = Array(config["c" /* YEAR */]).fill(0);

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Year[t] = new Date().getFullYear() + t;
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          N_Flight[t] = N_Flight[t] + this.ANSDataTemplate.N_DD_Flght.value[l][t] + this.ANSDataTemplate.N_AD_Flght.value[l][t] + this.ANSDataTemplate.N_AI_Flght.value[l][t] + this.ANSDataTemplate.N_DI_Flght.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          FTR_EE[t] = FTR_EE[t] + this.ANSDataTemplate.CER_DDcost.value[l][t] + this.ANSDataTemplate.CER_DIcost.value[l][t] + this.ANSDataTemplate.CER_ADcost.value[l][t] + this.ANSDataTemplate.CER_AIcost.value[l][t] + this.ANSDataTemplate.CER_DRcost.value[l][t] + this.ANSDataTemplate.CER_DIRcost.value[l][t] + this.ANSDataTemplate.CER_AIRcost.value[l][t] + this.ANSDataTemplate.FR_DDcost.value[l][t] + this.ANSDataTemplate.FR_DIcost.value[l][t] + this.ANSDataTemplate.FR_ADcost.value[l][t] + this.ANSDataTemplate.FR_AIcost.value[l][t] + this.ANSDataTemplate.FR_DRcost.value[l][t] + this.ANSDataTemplate.FR_DIRcost.value[l][t] + this.ANSDataTemplate.FR_AIRcost.value[l][t] + this.ANSDataTemplate.OPR_DDcost.value[l][t] + this.ANSDataTemplate.OPR_DIcost.value[l][t] + this.ANSDataTemplate.OPR_AIcost.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          USER_EE[t] = USER_EE[t] + this.ANSDataTemplate.CER_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.OPR_ADcost_DLY.value[l][t] + this.ANSDataTemplate.OPR_AIcost_DLY.value[l][t] + this.ANSDataTemplate.BNF_AD_PSG.value[l][t] + this.ANSDataTemplate.BNF_AI_PSG.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          SAFETY_EE[t] = SAFETY_EE[t] + this.ANSDataTemplate.Safty_cost.value[t];
        }
      }

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Total_EE[t] = FTR_EE[t] + USER_EE[t] + SAFETY_EE[t];
      }

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        if (t == 0) {
          ACCUM_EE[t] = Total_EE[t];
        } else {
          ACCUM_EE[t] = Total_EE[t] + ACCUM_EE[t - 1];
        }
      }

      var x = 0;

      for (let t = 0; t < 18; t++) {
        x = x + SAFETY_EE[t];
      }

      arr.push(["연도", "총 운항편수", "운항효율성 기대효과", "정시성 기대효과", "안전운항 기대효과", "총 기대효과", "누적 기대효과"]);

      for (let i = 0; i < Number.parseInt(config["c" /* YEAR */] / 5) + 1; i++) {
        if (i % 5 == 0) {
          arr.push([Year[i], N_Flight[i], FTR_EE[i], USER_EE[i], SAFETY_EE[i], Total_EE[i], ACCUM_EE[i]]);
        }
      }

      return arr;
    },

    handleRoute(path) {
      this.$router.push(path);
    },

    Save() {
      this.tableToDisplay = "EESummaryTable";
    }

  },
  computed: { ...Object(external_vuex_["mapState"])("ansData", ["ANSDataTemplate"]),

    dataTypeheaderText() {
      const filteredDataName = "국가 항행계획 기대효과";
      return this.filteredDataName || filteredDataName;
    }

  }
});
// CONCATENATED MODULE: ./components/pages/Review/EESummary/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Review_EESummaryvue_type_script_lang_js_ = (EESummaryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/pages/Review/EESummary/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(237)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Review_EESummaryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "8520beca"
  
)

/* harmony default export */ var EESummary = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/intro-logo.93dbf5a.png";

/***/ })

};;
//# sourceMappingURL=pages-review-e-e-summary.js.map