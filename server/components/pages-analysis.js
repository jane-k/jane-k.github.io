exports.ids = [8,26];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("112a039c", content, true, context)
};

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_556494c8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_556494c8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_556494c8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_556494c8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_556494c8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".chart-container[data-v-556494c8]{flex-direction:column;padding:1rem;grid-gap:1rem;gap:1rem;width:100%;flex:1;border:1px solid #cdcdcd;border-radius:.5rem;box-shadow:4px 4px 4px rgba(0,0,0,.1)}.data-selector[data-v-556494c8]{display:flex;grid-gap:1rem;gap:1rem;justify-content:flex-end;align-items:center;margin-left:auto}.data-selector>p[data-v-556494c8]{color:#666;font-size:.875rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5907d4af", content, true, context)
};

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chart/index.vue?vue&type=template&id=556494c8&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "chart-container"
  }, [_vm._ssrNode("<div class=\"data-selector\" data-v-556494c8>" + (_vm.isCalculationComplete ? "<div data-v-556494c8>분석을 완료했습니다.</div>" : "<!---->") + "</div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Chart/index.vue?vue&type=template&id=556494c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chart/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Chartvue_type_script_lang_js_ = ({
  components: {
    Select: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 256))
  },
  props: {
    isCalculationComplete: {
      type: Boolean
    }
  }
});
// CONCATENATED MODULE: ./components/Chart/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Chartvue_type_script_lang_js_ = (Chartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Chart/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Chartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "556494c8",
  "013fcc79"
  
)

/* harmony default export */ var Chart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76d3aa39_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76d3aa39_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76d3aa39_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76d3aa39_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76d3aa39_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Container[data-v-76d3aa39]{width:90%;height:60%;display:flex;grid-gap:2rem;gap:2rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/Analysis/index.vue?vue&type=template&id=76d3aa39&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "Container"
  }, [_c('Chart', {
    attrs: {
      "isCalculationComplete": _vm.isCalculationComplete
    }
  }), _vm._ssrNode(" "), _c('Calculation'), _vm._ssrNode(" <ul class=\"button__list\" data-v-76d3aa39><button data-v-76d3aa39>기대효과 분석 실행</button> <button data-v-76d3aa39>분석결과 저장</button> <button data-v-76d3aa39>돌아가기</button></ul>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/pages/Analysis/index.vue?vue&type=template&id=76d3aa39&scoped=true&

// EXTERNAL MODULE: external "xlsx"
var external_xlsx_ = __webpack_require__(51);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(10);

// EXTERNAL MODULE: ./utils/constants/config.js
var config = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/Analysis/index.vue?vue&type=script&lang=js&



/* harmony default export */ var Analysisvue_type_script_lang_js_ = ({
  name: "AnalysisPage",
  components: {
    Calculation: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 257)),
    Chart: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 194)),
    xlsx: external_xlsx_["xlsx"]
  },

  data() {
    return {
      isCalculationComplete: false
    };
  },

  methods: {
    handleRoute(path) {
      this.$router.push(path);
    },

    finishCalculation() {
      this.isCalculationComplete = true;
    },

    async printResultReport() {
      const xlsx = __webpack_require__(51); // 엑셀 파일 생성


      const book = xlsx.utils.book_new(); // data get > 실 개발시 api 호출

      const EEData = await this.getEEData();
      const CER_FTData = await this.getCER_FTData();
      const CER_DlyData = await this.getCER_DlyData();
      const FR_FTData = await this.getFR_FTData();
      const FR_DlyData = await this.getFR_DlyData();
      const FC_FTData = await this.getFC_FTData();
      const EE_DlyData = await this.getEE_DlyData();
      const BNF_CERData = await this.getBNF_CERData();
      const BNF_FRData = await this.getBNF_FRData();
      const BNF_PSGData = await this.getBNF_PSGData(); // sheet 생성 - aoa_to_sheet 방식

      const worksheetEEData = xlsx.utils.aoa_to_sheet(EEData);
      const worksheetCER_FTData = xlsx.utils.aoa_to_sheet(CER_FTData);
      const worksheetCER_DlyData = xlsx.utils.aoa_to_sheet(CER_DlyData);
      const worksheetFR_FTData = xlsx.utils.aoa_to_sheet(FR_FTData);
      const worksheetFR_DlyData = xlsx.utils.aoa_to_sheet(FR_DlyData);
      const worksheetFC_FTData = xlsx.utils.aoa_to_sheet(FC_FTData);
      const worksheetEE_DlyData = xlsx.utils.aoa_to_sheet(EE_DlyData);
      const worksheetBNF_CERData = xlsx.utils.aoa_to_sheet(BNF_CERData);
      const worksheetBNF_FRData = xlsx.utils.aoa_to_sheet(BNF_FRData);
      const worksheetBNF_PSGData = xlsx.utils.aoa_to_sheet(BNF_PSGData); // 엑셀 파일에 sheet set(엑셀파일, 시트데이터, 시트명)

      xlsx.utils.book_append_sheet(book, worksheetEEData, "기대효과(운항시간단축)");
      xlsx.utils.book_append_sheet(book, worksheetCER_FTData, "운항시간 단축 - 탄소 절감비용");
      xlsx.utils.book_append_sheet(book, worksheetCER_DlyData, "출·도착 - 탄소 절감량·비용");
      xlsx.utils.book_append_sheet(book, worksheetFR_FTData, "운항시간 단축 - 연료 절감비용(공항)");
      xlsx.utils.book_append_sheet(book, worksheetFR_DlyData, "출·도착 - 연료 절감량·비용");
      xlsx.utils.book_append_sheet(book, worksheetFC_FTData, "운항시간 단축 - 운항비 절감(공항)");
      xlsx.utils.book_append_sheet(book, worksheetEE_DlyData, "기대효과(운항지연감소)");
      xlsx.utils.book_append_sheet(book, worksheetBNF_CERData, "탄소배출 절감비용(고객)");
      xlsx.utils.book_append_sheet(book, worksheetBNF_FRData, "연료절감비용(고객)");
      xlsx.utils.book_append_sheet(book, worksheetBNF_PSGData, "기대효과(고객)"); // 엑셀 다운로드

      xlsx.writeFile(book, "경제성 분석 결과.xlsx");
    },

    getEEData() {
      let arr = [];
      const Year = Array(config["c" /* YEAR */]).fill(0);
      const N_Flight = Array(config["c" /* YEAR */]).fill(0);
      const CER_cost = Array(config["c" /* YEAR */]).fill(0);
      const FR_cost = Array(config["c" /* YEAR */]).fill(0);
      const OPR_cost = Array(config["c" /* YEAR */]).fill(0);
      const Total_cost = Array(config["c" /* YEAR */]).fill(0);
      const Accum_cost = Array(config["c" /* YEAR */]).fill(0);

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
          CER_cost[t] = CER_cost[t] + this.ANSDataTemplate.CER_DDcost.value[l][t] + this.ANSDataTemplate.CER_DIcost.value[l][t] + this.ANSDataTemplate.CER_DRcost.value[l][t] + this.ANSDataTemplate.CER_ADcost.value[l][t] + this.ANSDataTemplate.CER_AIcost.value[l][t] + this.ANSDataTemplate.CER_DIRcost.value[l][t] + this.ANSDataTemplate.CER_AIRcost.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          FR_cost[t] = FR_cost[t] + this.ANSDataTemplate.FR_DDcost.value[l][t] + this.ANSDataTemplate.FR_DIcost.value[l][t] + this.ANSDataTemplate.FR_DRcost.value[l][t] + this.ANSDataTemplate.FR_ADcost.value[l][t] + this.ANSDataTemplate.FR_AIcost.value[l][t] + this.ANSDataTemplate.FR_DIRcost.value[l][t] + this.ANSDataTemplate.FR_AIRcost.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          OPR_cost[t] = OPR_cost[t] + this.ANSDataTemplate.OPR_DDcost.value[l][t] + this.ANSDataTemplate.OPR_DIcost.value[l][t] + this.ANSDataTemplate.OPR_AIcost.value[l][t];
        }
      }

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Total_cost[t] = Total_cost[t] + CER_cost[t] + FR_cost[t] + OPR_cost[t];
      }

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        if (t == 0) {
          Accum_cost[t] = Total_cost[t];
        } else {
          Accum_cost[t] = Total_cost[t] + Accum_cost[t - 1];
        }
      }

      arr.push(["연도", "총 운항편수", "탄소배출 절감비용", "연료소모 절감비용", "운항비 절감편익", "총 절감비용", "누적 절감비용"]);

      for (let i = 0; i < config["c" /* YEAR */]; i++) {
        arr.push([Year[i], N_Flight[i], CER_cost[i], FR_cost[i], OPR_cost[i], Total_cost[i], Accum_cost[i]]);
      }

      return arr;
    },

    getCER_FTData() {
      let arr = [];
      const Year = Array(config["c" /* YEAR */]).fill(0);
      const N_Flight = Array(config["c" /* YEAR */]).fill(0);
      const CER_amount = Array(config["c" /* YEAR */]).fill(0);
      const CER_cost = Array(config["c" /* YEAR */]).fill(0);

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
          CER_amount[t] = CER_amount[t] + this.ANSDataTemplate.CER_DDamount.value[l][t] + this.ANSDataTemplate.CER_DIamount.value[l][t] + this.ANSDataTemplate.CER_DRamount.value[l][t] + this.ANSDataTemplate.CER_ADamount.value[l][t] + this.ANSDataTemplate.CER_AIamount.value[l][t] + this.ANSDataTemplate.CER_DIRamount.value[l][t] + this.ANSDataTemplate.CER_AIRamount.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          CER_cost[t] = CER_cost[t] + this.ANSDataTemplate.CER_DDcost.value[l][t] + this.ANSDataTemplate.CER_DIcost.value[l][t] + this.ANSDataTemplate.CER_DRcost.value[l][t] + this.ANSDataTemplate.CER_ADcost.value[l][t] + this.ANSDataTemplate.CER_AIcost.value[l][t] + this.ANSDataTemplate.CER_DIRcost.value[l][t] + this.ANSDataTemplate.CER_AIRcost.value[l][t];
        }
      }

      arr.push(["연도", "총 운항편수", "탄소배출 절감량", "탄소배출 절감비용"]);

      for (let i = 0; i < config["c" /* YEAR */]; i++) {
        arr.push([Year[i], N_Flight[i], CER_amount[i], CER_cost[i]]);
      }

      return arr;
    },

    getCER_DlyData() {
      let arr = [];
      const Year = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_DIamount = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_AIamount = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_Damount = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_DIcost = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_AIcost = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_Dcost = Array(config["c" /* YEAR */]).fill(0);

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Year[t] = new Date().getFullYear() + t;
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_CER_DIamount[t] = Total_CER_DIamount[t] + this.ANSDataTemplate.CER_DIcost.value[l][t] + this.ANSDataTemplate.CER_DIRcost.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_CER_AIamount[t] = Total_CER_AIamount[t] + this.ANSDataTemplate.CER_AIamount.value[l][t] + this.ANSDataTemplate.CER_AIRamount.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_CER_Damount[t] = Total_CER_Damount[t] + this.ANSDataTemplate.CER_DDamount.value[l][t] + this.ANSDataTemplate.CER_DRamount.value[l][t] + this.ANSDataTemplate.CER_ADamount.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_CER_DIcost[t] = Total_CER_DIcost[t] + this.ANSDataTemplate.CER_DIcost.value[l][t] + this.ANSDataTemplate.CER_DIRcost.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_CER_AIcost[t] = Total_CER_AIcost[t] + this.ANSDataTemplate.CER_AIcost.value[l][t] + this.ANSDataTemplate.CER_AIRcost.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_CER_Dcost[t] = Total_CER_Dcost[t] + this.ANSDataTemplate.CER_DDcost.value[l][t] + this.ANSDataTemplate.CER_DRcost.value[l][t] + this.ANSDataTemplate.CER_ADcost.value[l][t];
        }
      }

      arr.push(["연도", "탄소배출 절감량(국제선 출발)", "탄소배출 절감량(국제선 도착)", "탄소배출 절감량(국내선)", "탄소배출 절감비용(국제선 출발)", "탄소배출 절감비용(국제선 도착)", "탄소배출 절감비용(국내선)"]);

      for (let i = 0; i < config["c" /* YEAR */]; i++) {
        arr.push([Year[i], Total_CER_DIamount[i], Total_CER_AIamount[i], Total_CER_Damount[i], Total_CER_DIcost[i], Total_CER_AIcost[i], Total_CER_Dcost[i]]);
      }

      return arr;
    },

    getFR_FTData() {
      let arr = [];
      const Year = Array(config["c" /* YEAR */]).fill(0);
      const N_Flight = Array(config["c" /* YEAR */]).fill(0);
      const FR_amount = Array(config["c" /* YEAR */]).fill(0);
      const FR_cost = Array(config["c" /* YEAR */]).fill(0);

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
          FR_amount[t] = FR_amount[t] + this.ANSDataTemplate.FR_DDamount.value[l][t] + this.ANSDataTemplate.FR_DIamount.value[l][t] + this.ANSDataTemplate.FR_DRamount.value[l][t] + this.ANSDataTemplate.FR_ADamount.value[l][t] + this.ANSDataTemplate.FR_AIamount.value[l][t] + this.ANSDataTemplate.FR_DIRamount.value[l][t] + this.ANSDataTemplate.FR_AIRamount.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          FR_cost[t] = FR_cost[t] + this.ANSDataTemplate.FR_DDcost.value[l][t] + this.ANSDataTemplate.FR_DIcost.value[l][t] + this.ANSDataTemplate.FR_DRcost.value[l][t] + this.ANSDataTemplate.FR_ADcost.value[l][t] + this.ANSDataTemplate.FR_AIcost.value[l][t] + this.ANSDataTemplate.FR_DIRcost.value[l][t] + this.ANSDataTemplate.FR_AIRcost.value[l][t];
        }
      }

      arr.push(["연도", "총 운항편수", "연료소모 절감량", "연료소모 절감비용"]);

      for (let i = 0; i < config["c" /* YEAR */]; i++) {
        arr.push([Year[i], N_Flight[i], FR_amount[i], FR_cost[i]]);
      }

      return arr;
    },

    getFR_DlyData() {
      let arr = [];
      const Year = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_DIamount = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_AIamount = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_Damount = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_DIcost = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_AIcost = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_Dcost = Array(config["c" /* YEAR */]).fill(0);

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Year[t] = new Date().getFullYear() + t;
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_FR_DIamount[t] = Total_FR_DIamount[t] + this.ANSDataTemplate.FR_DIamount.value[l][t] + this.ANSDataTemplate.FR_DIRamount.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_FR_AIamount[t] = Total_FR_AIamount[t] + this.ANSDataTemplate.FR_AIamount.value[l][t] + this.ANSDataTemplate.FR_AIRamount.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_FR_Damount[t] = Total_FR_Damount[t] + this.ANSDataTemplate.FR_DDamount.value[l][t] + this.ANSDataTemplate.FR_DRamount.value[l][t] + this.ANSDataTemplate.FR_ADamount.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_FR_DIcost[t] = Total_FR_DIcost[t] + this.ANSDataTemplate.FR_DIcost.value[l][t] + this.ANSDataTemplate.FR_DIRcost.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_FR_AIcost[t] = Total_FR_AIcost[t] + this.ANSDataTemplate.FR_AIcost.value[l][t] + this.ANSDataTemplate.FR_AIRcost.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_FR_Dcost[t] = Total_FR_Dcost[t] + this.ANSDataTemplate.FR_DDcost.value[l][t] + this.ANSDataTemplate.FR_ADcost.value[l][t] + this.ANSDataTemplate.FR_DRcost.value[l][t];
        }
      }

      arr.push(["연도", "연료소모 절감량(국제선 출발)", "연료소모 절감량(국제선 도착)", "연료소모 절감량(국내선)", "연료소모 절감비용(국제선 출발)", "연료소모 절감비용(국제선 도착)", "연료소모 절감비용(국내선)"]);

      for (let i = 0; i < config["c" /* YEAR */]; i++) {
        arr.push([Year[i], Total_FR_DIamount[i], Total_FR_AIamount[i], Total_FR_Damount[i], Total_FR_DIcost[i], Total_FR_AIcost[i], Total_FR_Dcost[i]]);
      }

      return arr;
    },

    getFC_FTData() {
      let arr = [];
      const Year = Array(config["c" /* YEAR */]).fill(0);
      const OPR_Icost = Array(config["c" /* YEAR */]).fill(0);
      const OPR_Dcost = Array(config["c" /* YEAR */]).fill(0);
      const Total_OPR = Array(config["c" /* YEAR */]).fill(0);

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Year[t] = new Date().getFullYear() + t;
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          OPR_Icost[t] = OPR_Icost[t] + this.ANSDataTemplate.OPR_DIcost.value[l][t] + this.ANSDataTemplate.OPR_AIcost.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          OPR_Dcost[t] = OPR_Dcost[t] + this.ANSDataTemplate.OPR_DDcost.value[l][t] + this.ANSDataTemplate.OPR_DIcost.value[l][t];
        }
      }

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Total_OPR[t] = Total_OPR[t] + OPR_Icost[t] + OPR_Dcost[t];
      }

      arr.push(["연도", "운항비 절감편익(국제)", "운항비 절감편익(국내)", "총 운항비 절감편익"]);

      for (let i = 0; i < config["c" /* YEAR */]; i++) {
        arr.push([Year[i], OPR_Icost[i], OPR_Dcost[i], Total_OPR[i]]);
      }

      return arr;
    },

    getEE_DlyData() {
      let arr = [];
      const Year = Array(config["c" /* YEAR */]).fill(0);
      const N_Flight = Array(config["c" /* YEAR */]).fill(0);
      const TL_Dly = Array(config["c" /* YEAR */]).fill(0);
      const CER_cost = Array(config["c" /* YEAR */]).fill(0);
      const FR_cost = Array(config["c" /* YEAR */]).fill(0);
      const OPR_cost = Array(config["c" /* YEAR */]).fill(0);
      const Total_cost = Array(config["c" /* YEAR */]).fill(0);

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
          TL_Dly[t] = TL_Dly[t] + this.ANSDataTemplate.TL_DD_Dly.value[l][t] + this.ANSDataTemplate.TL_DI_Dly.value[l][t] + this.ANSDataTemplate.TL_AD_Dly.value[l][t] + this.ANSDataTemplate.TL_AI_Dly_LD.value[l][t] + this.ANSDataTemplate.TL_AI_Dly_R.value[l][t] + this.ANSDataTemplate.TL_AI_Dly.value[l][t] + this.ANSDataTemplate.FTR_Pass.value[t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          CER_cost[t] = CER_cost[t] + this.ANSDataTemplate.CER_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_Rcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_amount_byAFT.value[t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          FR_cost[t] = FR_cost[t] + this.ANSDataTemplate.FR_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_Rcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_amount_byAFT.value[t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          OPR_cost[t] = OPR_cost[t] + this.ANSDataTemplate.OPR_ADcost_DLY.value[l][t] + this.ANSDataTemplate.OPR_DIcost_DLY.value[l][t] + this.ANSDataTemplate.OPR_AIcost_DLY.value[l][t];
        }
      }

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Total_cost[t] = Total_cost[t] + CER_cost[t] + FR_cost[t] + OPR_cost[t];
      }

      arr.push(["연도", "총 운항편수", "지연 감소 시간", "탄소배출 절감비용", "연료소모 절감비용", "운항비 절감편익", "총 절감비용"]);

      for (let i = 0; i < config["c" /* YEAR */]; i++) {
        arr.push([Year[i], N_Flight[i], TL_Dly[i], CER_cost[i], FR_cost[i], OPR_cost[i], Total_cost[i]]);
      }

      return arr;
    },

    getBNF_CERData() {
      let arr = [];
      const Year = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_DIamount = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_DIcost = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_AIamount = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_AIcost = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_DDamount = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_DDcost = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_amount = Array(config["c" /* YEAR */]).fill(0);
      const Total_CER_cost = Array(config["c" /* YEAR */]).fill(0);

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Year[t] = new Date().getFullYear() + t;
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_CER_DIamount[t] = Total_CER_DIamount[t] + this.ANSDataTemplate.CER_DIcost_byADLY.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_CER_DIcost[t] = Total_CER_DIcost[t] + this.ANSDataTemplate.CER_DIcost_byADLY.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_CER_AIamount[t] = Total_CER_AIamount[t] + this.ANSDataTemplate.CER_AIamount_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_LDamount_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_Ramount_byADLY.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_CER_AIcost[t] = Total_CER_AIcost[t] + this.ANSDataTemplate.CER_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_Rcost_byADLY.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_CER_DDamount[t] = Total_CER_DDamount[t] + this.ANSDataTemplate.CER_DDamount_byADLY.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_CER_DDcost[t] = Total_CER_DDcost[t] + this.ANSDataTemplate.CER_DDcost_byADLY.value[l][t];
        }
      }

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Total_CER_amount[t] = Total_CER_amount[t] + Total_CER_DDamount[t] + Total_CER_DIamount[t] + Total_CER_AIamount[t];
      }

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Total_CER_cost[t] = Total_CER_cost[t] + Total_CER_DDcost[t] + Total_CER_DIcost[t] + Total_CER_AIcost[t];
      }

      arr.push(["연도", "탄소배출 절감량(국제선 출발)", "탄소배출 절감비용(국제선 출발)", "탄소배출 절감량(국제선 도착)", "탄소배출 절감비용(국제선 도착)", "탄소배출 절감량(국내선 출발)", "탄소배출 절감비용(국내선 출발)", "총 탄소배출 절감량", "총 탄소배출 절감비용"]);

      for (let i = 0; i < config["c" /* YEAR */]; i++) {
        arr.push([Year[i], Total_CER_DIamount[i], Total_CER_DIcost[i], Total_CER_AIamount[i], Total_CER_AIcost[i], Total_CER_DDamount[i], Total_CER_DDcost[i], Total_CER_amount[i], Total_CER_cost[i]]);
      }

      return arr;
    },

    getBNF_FRData() {
      let arr = [];
      const Year = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_DIamount = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_DIcost = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_AIamount = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_AIcost = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_DDamount = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_DDcost = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_amount = Array(config["c" /* YEAR */]).fill(0);
      const Total_FR_cost = Array(config["c" /* YEAR */]).fill(0);

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Year[t] = new Date().getFullYear() + t;
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_FR_DIamount[t] = Total_FR_DIamount[t] + this.ANSDataTemplate.FR_DIcost_byADLY.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_FR_DIcost[t] = Total_FR_DIcost[t] + this.ANSDataTemplate.FR_DIcost_byADLY.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_FR_AIamount[t] = Total_FR_AIamount[t] + this.ANSDataTemplate.FR_AIamount_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_LDamount_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_Ramount_byADLY.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_FR_AIcost[t] = Total_FR_AIcost[t] + this.ANSDataTemplate.FR_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_Rcost_byADLY.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_FR_DDamount[t] = Total_FR_DDamount[t] + this.ANSDataTemplate.FR_DDamount_byADLY.value[l][t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          Total_FR_DDcost[t] = Total_FR_DDcost[t] + this.ANSDataTemplate.FR_DDcost_byADLY.value[l][t];
        }
      }

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Total_FR_amount[t] = Total_FR_amount[t] + Total_FR_DDamount[t] + Total_FR_DIamount[t] + Total_FR_AIamount[t];
      }

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        Total_FR_cost[t] = Total_FR_cost[t] + Total_FR_DDcost[t] + Total_FR_DIcost[t] + Total_FR_AIcost[t];
      }

      arr.push(["연도", "연료소모 절감량(국제선 출발)", "연료소모 절감비용(국제선 출발)", "연료소모 절감량(국제선 도착)", "연료소모 절감비용(국제선 도착)", "연료소모 절감량(국내선 출발)", "연료소모 절감비용(국내선 출발)", "총 연료소모 절감량", "총 연료소모 절감비용"]);

      for (let i = 0; i < config["c" /* YEAR */]; i++) {
        arr.push([Year[i], Total_FR_DIamount[i], Total_FR_DIcost[i], Total_FR_AIamount[i], Total_FR_AIcost[i], Total_FR_DDamount[i], Total_FR_DDcost[i], Total_FR_amount[i], Total_FR_cost[i]]);
      }

      return arr;
    },

    getBNF_PSGData() {
      let arr = [];
      const Year = Array(config["c" /* YEAR */]).fill(0);
      const N_Flight = Array(config["c" /* YEAR */]).fill(0);
      const TL_Dly = Array(config["c" /* YEAR */]).fill(0);
      const BNF_PSG = Array(config["c" /* YEAR */]).fill(0);

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
          TL_Dly[t] = TL_Dly[t] + this.ANSDataTemplate.TL_DD_Dly.value[l][t] + this.ANSDataTemplate.TL_DI_Dly.value[l][t] + this.ANSDataTemplate.TL_AD_Dly.value[l][t] + this.ANSDataTemplate.TL_AI_Dly_LD.value[l][t] + this.ANSDataTemplate.TL_AI_Dly_R.value[l][t] + this.ANSDataTemplate.TL_AI_Dly.value[l][t] + this.ANSDataTemplate.FTR_Pass.value[t];
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          BNF_PSG[t] = BNF_PSG[t] + this.ANSDataTemplate.BNF_AD_PSG.value[l][t] + this.ANSDataTemplate.BNF_AI_PSG.value[l][t];
        }
      }

      arr.push(["연도", "총 운항편수", "지연 감소 시간", "지연 감소 여객 편익"]);

      for (let i = 0; i < config["c" /* YEAR */]; i++) {
        arr.push([Year[i], N_Flight[i], TL_Dly[i], BNF_PSG[i]]);
      }

      return arr;
    }

  },
  computed: { ...Object(external_vuex_["mapState"])("ansData", ["ANSDataTemplate"])
  }
});
// CONCATENATED MODULE: ./components/pages/Analysis/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Analysisvue_type_script_lang_js_ = (Analysisvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/pages/Analysis/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(213)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Analysisvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "76d3aa39",
  "798bead6"
  
)

/* harmony default export */ var Analysis = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Chart: __webpack_require__(194).default})


/***/ })

};;
//# sourceMappingURL=pages-analysis.js.map