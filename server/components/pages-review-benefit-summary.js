exports.ids = [16];
exports.modules = {

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(226);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2ddad0f8", content, true, context)
};

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_752e7653_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_752e7653_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_752e7653_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_752e7653_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_752e7653_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 226:
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

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/Review/BenefitSummary/index.vue?vue&type=template&id=752e7653&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "Container"
  }, [_vm._ssrNode("<div class=\"table-container\">", "</div>", [_vm._ssrNode("<div class=\"header\"><h2 class=\"data-title\">" + _vm._ssrEscape("\r\n          " + _vm._s(_vm.dataTypeheaderText) + "\r\n        ") + "</h2></div> "), _vm._ssrNode("<div class=\"result-table\">", "</div>", [_c('SummaryTable'), _vm._ssrNode(" "), _c('LineChart')], 2)], 2), _vm._ssrNode(" <ul class=\"button__list\"><button>데이터 저장</button> <button>돌아가기</button></ul>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/pages/Review/BenefitSummary/index.vue?vue&type=template&id=752e7653&

// EXTERNAL MODULE: external "xlsx"
var external_xlsx_ = __webpack_require__(51);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(10);

// EXTERNAL MODULE: ./utils/constants/config.js
var config = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/Review/BenefitSummary/index.vue?vue&type=script&lang=js&



/* harmony default export */ var BenefitSummaryvue_type_script_lang_js_ = ({
  name: "BenefitSummary",
  components: {
    SummaryTable: () => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, 264)),
    LineChart: () => __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, 263))
  },
  props: {
    tableToDisplay: {
      type: String,
      value: ""
    }
  },
  methods: {
    handleRoute(path) {
      this.$router.push(path);
    },

    Save() {
      this.tableToDisplay = "BenefitSummaryTable";
    },

    async printResultReport() {
      const xlsx = __webpack_require__(51); // 엑셀 파일 생성


      const book = xlsx.utils.book_new(); // data get > 실 개발시 api 호출

      const BenefitSummaryData = await this.getBenefitSummary(); // sheet 생성 - aoa_to_sheet 방식

      const worksheet = xlsx.utils.aoa_to_sheet(BenefitSummaryData); // 엑셀 파일에 sheet set(엑셀파일, 시트데이터, 시트명)

      xlsx.utils.book_append_sheet(book, worksheet, "사업자별 경제적 편익"); // 엑셀 다운로드

      xlsx.writeFile(book, "운항효율성 및 이용편리성에 대한 사업자별 경제적 편익.xlsx");
    },

    getBenefitSummary() {
      let arr = [];
      const Year = Array(7).fill(0);
      const CER_Cost = Array(7).fill(0);
      const FTR_Cost = Array(7).fill(0);
      const DTR_Cost = Array(7).fill(0);
      const INC_Safety = Array(7).fill(0);
      const ACCUM_Effect = Array(7).fill(0);
      const PSG_Effect = Array(7).fill(0);
      const FTR_EE = Array(7).fill(0);
      const Total_EE = Array(7).fill(0);

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        if (t % 5 == 0) {
          Year[t / 5] = new Date().getFullYear() + t;
        }

        if (t == 29) {
          Year[(t + 1) / 5] = new Date().getFullYear() + t;
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          if (t % 5 == 0) {
            CER_Cost[t / 5] = CER_Cost[t / 5] + this.ANSDataTemplate.CER_DDcost.value[l][t] + this.ANSDataTemplate.CER_DIcost.value[l][t] + this.ANSDataTemplate.CER_ADcost.value[l][t] + this.ANSDataTemplate.CER_AIcost.value[l][t] + this.ANSDataTemplate.CER_DRcost.value[l][t] + this.ANSDataTemplate.CER_DIRcost.value[l][t] + this.ANSDataTemplate.CER_AIRcost.value[l][t] + this.ANSDataTemplate.CER_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_Rcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_cost_byAFT.value[t];
          }

          if (t == 29) {
            CER_Cost[(t + 1) / 5] = CER_Cost[(t + 1) / 5] + this.ANSDataTemplate.CER_DDcost.value[l][t] + this.ANSDataTemplate.CER_DIcost.value[l][t] + this.ANSDataTemplate.CER_ADcost.value[l][t] + this.ANSDataTemplate.CER_AIcost.value[l][t] + this.ANSDataTemplate.CER_DRcost.value[l][t] + this.ANSDataTemplate.CER_DIRcost.value[l][t] + this.ANSDataTemplate.CER_AIRcost.value[l][t] + this.ANSDataTemplate.CER_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_Rcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_cost_byAFT.value[t];
          }
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          if (t % 5 == 0) {
            FTR_Cost[t / 5] = FTR_Cost[t / 5] + this.ANSDataTemplate.CER_DDcost.value[l][t] + this.ANSDataTemplate.CER_DIcost.value[l][t] + this.ANSDataTemplate.CER_ADcost.value[l][t] + this.ANSDataTemplate.CER_AIcost.value[l][t] + this.ANSDataTemplate.CER_DRcost.value[l][t] + this.ANSDataTemplate.CER_DIRcost.value[l][t] + this.ANSDataTemplate.CER_AIRcost.value[l][t] + this.ANSDataTemplate.FR_DDcost.value[l][t] + this.ANSDataTemplate.FR_DIcost.value[l][t] + this.ANSDataTemplate.FR_ADcost.value[l][t] + this.ANSDataTemplate.FR_AIcost.value[l][t] + this.ANSDataTemplate.FR_DRcost.value[l][t] + this.ANSDataTemplate.FR_DIRcost.value[l][t] + this.ANSDataTemplate.FR_AIRcost.value[l][t] + this.ANSDataTemplate.OPR_DDcost.value[l][t] + this.ANSDataTemplate.OPR_DIcost.value[l][t] + this.ANSDataTemplate.OPR_AIcost.value[l][t] + this.ANSDataTemplate.CER_cost_byAFT.value[t] + this.ANSDataTemplate.FR_cost_byAFT.value[t];
          }

          if (t == 29) {
            FTR_Cost[(t + 1) / 5] = FTR_Cost[(t + 1) / 5] + this.ANSDataTemplate.CER_DDcost.value[l][t] + this.ANSDataTemplate.CER_DIcost.value[l][t] + this.ANSDataTemplate.CER_ADcost.value[l][t] + this.ANSDataTemplate.CER_AIcost.value[l][t] + this.ANSDataTemplate.CER_DRcost.value[l][t] + this.ANSDataTemplate.CER_DIRcost.value[l][t] + this.ANSDataTemplate.CER_AIRcost.value[l][t] + this.ANSDataTemplate.FR_DDcost.value[l][t] + this.ANSDataTemplate.FR_DIcost.value[l][t] + this.ANSDataTemplate.FR_ADcost.value[l][t] + this.ANSDataTemplate.FR_AIcost.value[l][t] + this.ANSDataTemplate.FR_DRcost.value[l][t] + this.ANSDataTemplate.FR_DIRcost.value[l][t] + this.ANSDataTemplate.FR_AIRcost.value[l][t] + this.ANSDataTemplate.OPR_DDcost.value[l][t] + this.ANSDataTemplate.OPR_DIcost.value[l][t] + this.ANSDataTemplate.OPR_AIcost.value[l][t] + this.ANSDataTemplate.CER_cost_byAFT.value[t] + this.ANSDataTemplate.FR_cost_byAFT.value[t];
          }
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          if (t % 5 == 0) {
            DTR_Cost[t / 5] = DTR_Cost[t / 5] + this.ANSDataTemplate.CER_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_Rcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_Rcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.OPR_ADcost_DLY.value[l][t] + this.ANSDataTemplate.OPR_DIcost_DLY.value[l][t] + this.ANSDataTemplate.OPR_AIcost_DLY.value[l][t];
          }

          if (t == 29) {
            DTR_Cost[(t + 1) / 5] = DTR_Cost[(t + 1) / 5] + this.ANSDataTemplate.CER_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_Rcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_Rcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.OPR_ADcost_DLY.value[l][t] + this.ANSDataTemplate.OPR_DIcost_DLY.value[l][t] + this.ANSDataTemplate.OPR_AIcost_DLY.value[l][t];
          }
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          if (t % 5 == 0) {
            INC_Safety[t / 5] = INC_Safety[t / 5] + this.ANSDataTemplate.Safty_cost.value[t];
          }

          if (t == 29) {
            INC_Safety[(t + 1) / 5] = INC_Safety[(t + 1) / 5] + this.ANSDataTemplate.Safty_cost.value[t];
          }
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          if (t % 5 == 0) {
            FTR_EE[t / 5] = FTR_EE[t / 5] + this.ANSDataTemplate.CER_DDcost.value[l][t] + this.ANSDataTemplate.CER_DIcost.value[l][t] + this.ANSDataTemplate.CER_ADcost.value[l][t] + this.ANSDataTemplate.CER_AIcost.value[l][t] + this.ANSDataTemplate.CER_DRcost.value[l][t] + this.ANSDataTemplate.CER_DIRcost.value[l][t] + this.ANSDataTemplate.CER_AIRcost.value[l][t] + this.ANSDataTemplate.FR_DDcost.value[l][t] + this.ANSDataTemplate.FR_DIcost.value[l][t] + this.ANSDataTemplate.FR_ADcost.value[l][t] + this.ANSDataTemplate.FR_AIcost.value[l][t] + this.ANSDataTemplate.FR_DRcost.value[l][t] + this.ANSDataTemplate.FR_DIRcost.value[l][t] + this.ANSDataTemplate.FR_AIRcost.value[l][t] + this.ANSDataTemplate.OPR_DDcost.value[l][t] + this.ANSDataTemplate.OPR_DIcost.value[l][t] + this.ANSDataTemplate.OPR_AIcost.value[l][t] + this.ANSDataTemplate.CER_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_Rcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_Rcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.OPR_ADcost_DLY.value[l][t] + this.ANSDataTemplate.OPR_DIcost_DLY.value[l][t] + this.ANSDataTemplate.OPR_AIcost_DLY.value[l][t] + this.ANSDataTemplate.CER_cost_byAFT.value[t] + this.ANSDataTemplate.FR_cost_byAFT.value[t] + this.ANSDataTemplate.Safty_cost.value[t];
          }

          if (t == 29) {
            FTR_EE[(t + 1) / 5] = FTR_EE[(t + 1) / 5] + this.ANSDataTemplate.CER_DDcost.value[l][t] + this.ANSDataTemplate.CER_DIcost.value[l][t] + this.ANSDataTemplate.CER_ADcost.value[l][t] + this.ANSDataTemplate.CER_AIcost.value[l][t] + this.ANSDataTemplate.CER_DRcost.value[l][t] + this.ANSDataTemplate.CER_DIRcost.value[l][t] + this.ANSDataTemplate.CER_AIRcost.value[l][t] + this.ANSDataTemplate.FR_DDcost.value[l][t] + this.ANSDataTemplate.FR_DIcost.value[l][t] + this.ANSDataTemplate.FR_ADcost.value[l][t] + this.ANSDataTemplate.FR_AIcost.value[l][t] + this.ANSDataTemplate.FR_DRcost.value[l][t] + this.ANSDataTemplate.FR_DIRcost.value[l][t] + this.ANSDataTemplate.FR_AIRcost.value[l][t] + this.ANSDataTemplate.OPR_DDcost.value[l][t] + this.ANSDataTemplate.OPR_DIcost.value[l][t] + this.ANSDataTemplate.OPR_AIcost.value[l][t] + this.ANSDataTemplate.CER_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AI_Rcost_byADLY.value[l][t] + this.ANSDataTemplate.CER_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_DDcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_DIcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_ADcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_LDcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AI_Rcost_byADLY.value[l][t] + this.ANSDataTemplate.FR_AIcost_byADLY.value[l][t] + this.ANSDataTemplate.OPR_ADcost_DLY.value[l][t] + this.ANSDataTemplate.OPR_DIcost_DLY.value[l][t] + this.ANSDataTemplate.OPR_AIcost_DLY.value[l][t] + this.ANSDataTemplate.CER_cost_byAFT.value[t] + this.ANSDataTemplate.FR_cost_byAFT.value[t] + this.ANSDataTemplate.Safty_cost.value[t];
          }
        }
      }

      for (let l = 0; l < config["a" /* MAX */]; l++) {
        for (let t = 0; t < config["c" /* YEAR */]; t++) {
          if (t % 5 == 0) {
            PSG_Effect[t / 5] = PSG_Effect[t / 5] + this.ANSDataTemplate.BNF_AD_PSG.value[l][t] + this.ANSDataTemplate.BNF_AI_PSG.value[l][t];
          }

          if (t == 29) {
            PSG_Effect[(t + 1) / 5] = PSG_Effect[(t + 1) / 5] + this.ANSDataTemplate.BNF_AD_PSG.value[l][t] + this.ANSDataTemplate.BNF_AI_PSG.value[l][t];
          }
        }
      }

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        if (t % 5 == 0) {
          Total_EE[t / 5] = FTR_EE[t / 5] + PSG_Effect[t / 5];
        }

        if (t == 29) {
          Total_EE[(t + 1) / 5] = FTR_EE[(t + 1) / 5] + PSG_Effect[(t + 1) / 5];
        }
      }

      for (let t = 0; t < config["c" /* YEAR */]; t++) {
        if (t % 5 == 0) {
          if (t == 0) {
            ACCUM_Effect[t / 5] = Total_EE[t / 5];
          } else {
            ACCUM_Effect[t / 5] = Total_EE[t / 5] + ACCUM_Effect[t / 5 - 1];
          }
        }

        if (t == 29) {
          ACCUM_Effect[(t + 1) / 5] = Total_EE[(t + 1) / 5] + ACCUM_Effect[(t + 1) / 5 - 1];
        }
      }

      arr.push(["연도", "운항편 수", "총 탄소배출량", "총 탄소배출 감축량", "편당 탄소배출량", "탄소배출 절감율", "총 연료소비량", "총 연료소비 감축량", "편당 연료소비량", "연료소비 절감율"]);

      for (let i = 0; i < 7; i++) {
        arr.push([Year[i], CER_Cost[i], FTR_Cost[i], DTR_Cost[i], INC_Safety[i], ACCUM_Effect[i], PSG_Effect[i]]);
      }

      return arr;
    }

  },
  computed: { ...Object(external_vuex_["mapState"])("ansData", ["ANSDataTemplate"]),

    dataTypeheaderText() {
      const filteredDataName = "운항효율성 및 이용편리성에 대한 사업자별 직접적 경제적 편익";
      return this.filteredDataName || filteredDataName;
    }

  }
});
// CONCATENATED MODULE: ./components/pages/Review/BenefitSummary/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Review_BenefitSummaryvue_type_script_lang_js_ = (BenefitSummaryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/pages/Review/BenefitSummary/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(225)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Review_BenefitSummaryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0083deb6"
  
)

/* harmony default export */ var BenefitSummary = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=pages-review-benefit-summary.js.map