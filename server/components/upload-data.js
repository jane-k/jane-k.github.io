exports.ids = [29];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b574e63_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b574e63_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b574e63_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b574e63_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b574e63_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".upload-container[data-v-6b574e63]{display:flex;height:100%;justify-content:center;align-items:center}.upload-container>input[data-v-6b574e63]{visibility:hidden;display:none}.upload-container .data-upload__text[data-v-6b574e63]{display:flex;flex-direction:column;align-items:center;grid-gap:1rem;gap:1rem;cursor:pointer;font-size:1.125rem}.upload-container .data-upload__text .upload-icon[data-v-6b574e63]{color:#312a7c}.upload-container .data-upload__text .upload-guide__text[data-v-6b574e63]{color:#999}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UploadData/index.vue?vue&type=template&id=6b574e63&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "upload-container",
    on: {
      "onclick": _vm.handleDrop
    }
  }, [_vm._ssrNode("<input type=\"file\" id=\"ANSDatabase\" data-v-6b574e63> "), _vm._ssrNode("<label for=\"ANSDatabase\" class=\"data-upload__text\" data-v-6b574e63>", "</label>", [_c('font-awesome-icon', {
    staticClass: "fa-2x upload-icon",
    attrs: {
      "icon": "fa-upload"
    }
  }), _vm._ssrNode(" <p class=\"upload-guide__text\" data-v-6b574e63>클릭 또는 드래그</p> <p data-v-6b574e63>ANS 계산을 위한 .CSV 형식의 초기 데이터를 업로드해주세요.</p>")], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/UploadData/index.vue?vue&type=template&id=6b574e63&scoped=true&

// EXTERNAL MODULE: external "csvtojson"
var external_csvtojson_ = __webpack_require__(52);
var external_csvtojson_default = /*#__PURE__*/__webpack_require__.n(external_csvtojson_);

// EXTERNAL MODULE: ./utils/constants/config.js
var config = __webpack_require__(0);

// EXTERNAL MODULE: ./utils/constants/ANSDataTemplate.js
var ANSDataTemplate = __webpack_require__(19);

// EXTERNAL MODULE: ./utils/constants/ANSDatabase.js
var ANSDatabase = __webpack_require__(15);

// CONCATENATED MODULE: ./utils/helpers/calculateANS.js




const calculateANS = Cetha => {
  var a = (Math.log(0.1) - Math.log(undefined.ANSDatabase.FTRgoal_Fin.value * 1.1 / undefined.ANSDatabase.FTRgoal_Start.value - Cetha)) / (undefined.ANSDatabase.Time_Pass_S.value - Cetha);
  var b = Math.log(undefined.ANSDatabase.FTRgoal_Fin.value * 1.1 / undefined.ANSDatabase.FTRgoal_Start.value - Cetha) - a;

  for (let t = 0; t < config["c" /* YEAR */]; t++) {
    //Flt_Sav 변수(연도별 운함시감 절감률 목표) 추가 정의
    undefined.ANSDataTemplate.Flt_Sav.value[t] = undefined.ANSDatabase.FTRgoal_Fin.value * 1.0 / (Cetha + Math.exp(b + a * (t + 1))) / 100.0;
  } //시간당 편균 탄소배출량, 연료소모량 계산, 임시 변수 정의
  // 공항별 항공기 기종별 시간당 탄소 배출량, 연료 소모량 기반으로 시간당 산출: 출도착, 항로 구분


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    // 공항별 시간당 탄소배출량
    let Temp_CA = 0.0,
        Temp_CB = 0.0,
        Temp_CC = 0.0; // 중간 계산용 임시변수

    for (let k = 0; k < config["b" /* N_AC */]; k++) {
      // N_AC - 항공기 기종 정의, 나머지 인덱스 재 정의
      Temp_CA = Temp_CA + undefined.ANSDatabase.FCE_flight.value[l][k] * undefined.ANSDatabase.FU_flight.value[l][k];
      Temp_CB = Temp_CB + undefined.ANSDatabase.ACE_TO_flight.value[l][k] * undefined.ANSDatabase.AU_flight.value[l][k];
      Temp_CC = Temp_CC + undefined.ANSDatabase.ACE_LD_flight.value[l][k] * undefined.ANSDatabase.AU_flight.value[l][k];
    } //공항별 이륙, 착륙, 항로의 시간당 탄소배출량 산출  FCE_hour, ACE_TO_hour, ACE_LD_hour 인덱스 t-> l 공항으로 변경


    undefined.ANSDataTemplate.FCE_hour.value[l] = Temp_CA / 100.0; // 시간당 항로 탄소배출량

    undefined.ANSDataTemplate.ACE_TO_hour.value[l] = Temp_CB / 100.0; // 시간당 이륙(출발) 탄소배출량

    undefined.ANSDataTemplate.ACE_LD_hour.value[l] = Temp_CC / 100.0; // 시간당 착륙(도착) 탄소배출량
  }

  for (let l = 0; l < config["a" /* MAX */]; l++) {
    // 공항별 시간당 연료소모량
    let Temp_CA = 0.0,
        Temp_CB = 0.0,
        Temp_CC = 0.0; // 중간 계산용 임시변수

    for (let k = 0; k < config["b" /* N_AC */]; k++) {
      Temp_CA = Temp_CA + undefined.ANSDatabase.FFE_flight.value[l][k] * undefined.ANSDatabase.FU_flight.value[l][k];
      Temp_CB = Temp_CB + undefined.ANSDatabase.AFE_TO_flight.value[l][k] * undefined.ANSDatabase.AU_flight.value[l][k];
      Temp_CC = Temp_CC + undefined.ANSDatabase.AFE_LD_flight.value[l][k] * undefined.ANSDatabase.AU_flight.value[l][k];
    } //공항별 이륙, 착륙, 항로의 시간당 연료소모량 산출   FFE_hour, AFE_TO_hour, AFE_LD_hour 인덱스 t-> l 공항으로 변경


    undefined.ANSDataTemplate.FFE_hour.value[l] = Temp_CA / 100.0; // 시간당 항로 연료소모량

    undefined.ANSDataTemplate.AFE_TO_hour.value[l] = Temp_CB / 100.0; // 시간당 이륙(출발) 연료소모량

    undefined.ANSDataTemplate.AFE_LD_hour.value[l] = Temp_CC / 100.0; // 시간당 착륙(도착) 연료소모량
  }

  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      undefined.ANSDataTemplate.N_DD_Flght.value[l][t] = undefined.ANSDatabase.N_DD_F.value * Math.pow(1.0 + undefined.ANSDatabase.r_Dom.value / 100, t);
      undefined.ANSDataTemplate.N_DI_Flght.value[l][t] = undefined.ANSDatabase.N_DI_F.value * Math.pow(1.0 + undefined.ANSDatabase.r_Int.value / 100, t);
      undefined.ANSDataTemplate.N_AD_Flght.value[l][t] = undefined.ANSDatabase.N_AD_F.value * Math.pow(1.0 + undefined.ANSDatabase.r_Dom.value / 100, t);
      undefined.ANSDataTemplate.N_AI_Flght.value[l][t] = undefined.ANSDatabase.N_AI_F.value * Math.pow(1.0 + undefined.ANSDatabase.r_Int.value / 100, t);
    }
  } // 공항별, 연도별 총 운항시간 절감 산출 : 국제선, 국내선, 출발, 도착, 항로 구분하여 산출


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      // 운항편당 이륙, 착륙, 항로 감소 시간을 국내선, 국제선으로 구분하여 산출
      undefined.ANSDataTemplate.FTR_DDgoal.value[l][t] = undefined.ANSDatabase.Time_DTO.value[l] * undefined.ANSDataTemplate.Flt_Sav.value[t] / 60.0; // 국내선 이륙 시간 절감

      undefined.ANSDataTemplate.FTR_ADgoal.value[l][t] = undefined.ANSDatabase.Time_DLD.value[l] * undefined.ANSDataTemplate.Flt_Sav.value[t] / 60.0; // 국내선 착륙 시간 절감

      undefined.ANSDataTemplate.FTR_DRgoal.value[l][t] = undefined.ANSDatabase.Time_DRoute.value[l] * undefined.ANSDataTemplate.Flt_Sav.value[t] / 60.0; // 국내선 항로 시간 절감 FTR_RDgoal 추가 정의

      undefined.ANSDataTemplate.FTR_DIgoal.value[l][t] = undefined.ANSDatabase.Time_ITO.value[l] * undefined.ANSDataTemplate.Flt_Sav.value[t] / 60.0; // 국제선 이륙시간 절감

      undefined.ANSDataTemplate.FTR_DIRgoal.value[l][t] = undefined.ANSDatabase.Time_DIRoute.value[l] * undefined.ANSDataTemplate.Flt_Sav.value[t] / 60.0; // 국제선 이륙항로 시간 절감, FTR_DRIgoal, Time_DIRoute 추가정의

      undefined.ANSDataTemplate.FTR_AIgoal.value[l][t] = undefined.ANSDatabase.Time_ILD.value[l] * undefined.ANSDataTemplate.Flt_Sav.value[t] / 60.0; // 국제선 착륙시간 절감

      undefined.ANSDataTemplate.FTR_AIRgoal.value[l][t] = undefined.ANSDatabase.Time_AIRoute.value[l] * undefined.ANSDataTemplate.Flt_Sav.value[t] / 60.0; // 국제선 착륙항로 시간 절감, FTR_ARIgoal, Time_AIRoute 추가정의
      // 운항편수를 고려한 총운항시간 절감규모 산출하기 : 국내선, 국제선 출발, 국제선 도착으로 구분

      undefined.ANSDataTemplate.FTR_DDtotal.value[l][t] = undefined.ANSDataTemplate.N_DD_Flght.value[l][t] * undefined.ANSDataTemplate.FTR_DDgoal.value[l][t]; // 국내선 이륙과정 총절감시간 (출발)

      undefined.ANSDataTemplate.FTR_ADtotal.value[l][t] = undefined.ANSDataTemplate.N_AD_Flght.value[l][t] * undefined.ANSDataTemplate.FTR_ADgoal.value[l][t]; // 국내선 착과정 총절감시간 (도착)

      undefined.ANSDataTemplate.FTR_DRtotal.value[l][t] = (undefined.ANSDataTemplate.N_DD_Flght.value[l][t] + undefined.ANSDataTemplate.N_AD_Flght.value[l][t]) / 2 * undefined.ANSDataTemplate.FTR_DRgoal.value[l][t]; // 국내선 항로과정 총절감시간 FTR_DRtotal 추가정의

      undefined.ANSDataTemplate.FTR_DItotal.value[l][t] = undefined.ANSDataTemplate.N_DI_Flght.value[l][t] * undefined.ANSDataTemplate.FTR_DIgoal.value[l][t]; // 국제선 이륙과정 총절감시간

      undefined.ANSDataTemplate.FTR_DIRtotal.value[l][t] = undefined.ANSDataTemplate.N_DI_Flght.value[l][t] * undefined.ANSDataTemplate.FTR_DIRgoal.value[l][t]; // 국제선 이륙-항로과정 총절감시간  FTR_DIRtotal 추가정의

      undefined.ANSDataTemplate.FTR_AItotal.value[l][t] = undefined.ANSDataTemplate.N_AI_Flght.value[l][t] * undefined.ANSDataTemplate.FTR_AIgoal.value[l][t]; // 국제선 착률과정 총절감시간

      undefined.ANSDataTemplate.FTR_AIRtotal.value[l][t] = undefined.ANSDataTemplate.N_AI_Flght.value[l][t] * undefined.ANSDataTemplate.FTR_AIRgoal.value[l][t]; // 국제선 착륙-항로과정 총절감시간  FTR_AIRtotal 추가정의
    }
  } // 공항별 탄소배출 감축량 산출 : 국내선 출도착, 항로, 국제선 출발, 출발항로, 도착 도착항로 구분하여 연도별 산출


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      undefined.ANSDataTemplate.CER_DDamount.value[l][t] = undefined.ANSDataTemplate.ACE_TO_hour.value[l] * undefined.ANSDataTemplate.FTR_DDtotal.value[l][t] / 1000.0; // 국내선 출발 총탄소배출량

      undefined.ANSDataTemplate.CER_ADamount.value[l][t] = undefined.ANSDataTemplate.ACE_LD_hour.value[l] * undefined.ANSDataTemplate.FTR_ADtotal.value[l][t] / 1000.0; // 국내선 착륙 총탄소배출량

      undefined.ANSDataTemplate.CER_DRamount.value[l][t] = undefined.ANSDataTemplate.FCE_hour.value[l] * undefined.ANSDataTemplate.FTR_DRtotal.value[l][t] / 1000.0; // 국내선 항로 총탄소배출량  CER_DRamount 추가정의

      undefined.ANSDataTemplate.CER_DIamount.value[l][t] = undefined.ANSDataTemplate.ACE_TO_hour.value[l] * undefined.ANSDataTemplate.FTR_DItotal.value[l][t] / 1000.0; // 국제선 출발 총탄소배출량

      undefined.ANSDataTemplate.CER_DIRamount.value[l][t] = undefined.ANSDataTemplate.FCE_hour.value[l] * undefined.ANSDataTemplate.FTR_DIRtotal.value[l][t] / 1000.0; // 국제선 출발-항로 총탄소배출량 CER_DIRamount 추가정의

      undefined.ANSDataTemplate.CER_AIamount.value[l][t] = undefined.ANSDataTemplate.ACE_LD_hour.value[l] * undefined.ANSDataTemplate.FTR_AItotal.value[l][t] / 1000.0; // 국제선 도착 총탄소배출량

      undefined.ANSDataTemplate.CER_AIRamount.value[l][t] = undefined.ANSDataTemplate.FCE_hour.value[l] * undefined.ANSDataTemplate.FTR_AIRtotal.value[l][t] / 1000.0; // 국제선 도착-항로 총탄소배출량  CER_AIRamount 추가정의
    }
  }

  for (let i = 0; i < config["c" /* YEAR */]; i++) {
    undefined.ANSDataTemplate.carbonCredit.value[i] = undefined.ANSDatabase.carbon.value * Math.pow(1.0 + undefined.ANSDatabase.r_carbon.value / 100.0, i); //추가변수

    undefined.ANSDataTemplate.fuelCredit.value[i] = undefined.ANSDatabase.fuel.value * Math.pow(1.0 + undefined.ANSDatabase.r_fuel.value / 100.0, i);
  } // 탄소배출 절감 비용


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      undefined.ANSDataTemplate.CER_DDcost.value[l][t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_DDamount.value[l][t] / 1000000.0; // 국내선 출발 총탄소배출 절감비용

      undefined.ANSDataTemplate.CER_ADcost.value[l][t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_ADamount.value[l][t] / 1000000.0; // 국내선 착륙 총탄소배출 절감비용

      undefined.ANSDataTemplate.CER_DRcost.value[l][t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_DRamount.value[l][t] / 1000000.0; // 국내선 항로 총탄소배출 절감비용  CER_DRcost 추가정의

      undefined.ANSDataTemplate.CER_DIcost.value[l][t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_DIamount.value[l][t] / 1000000.0; // 국제선 출발 총탄소배출 절감비용

      undefined.ANSDataTemplate.CER_DIRcost.value[l][t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_DIRamount.value[l][t] / 1000000.0; // 국제선 출발-항로 총탄소배출 절감비용  CER_DIRcost[l][t] 추가정의

      undefined.ANSDataTemplate.CER_AIcost.value[l][t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_AIamount.value[l][t] / 1000000.0; // 국제선 도착 총탄소배출 절감비용

      undefined.ANSDataTemplate.CER_AIRcost.value[l][t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_AIRamount.value[l][t] / 1000000.0; // 국제선 도착-항로 총탄소배출 절감비용   CER_AIRcost  추가정의
    }
  } // 공항별 연료절감량 산출 : 국내선 출도착, 항로, 국제선 출발, 출발항로, 도착 도착항로 구분하여 연도별 산출
  //FR_amount(연간 총 연료 절감)


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      undefined.ANSDataTemplate.FR_DDamount.value[l][t] = undefined.ANSDataTemplate.AFE_TO_hour.value[l] * undefined.ANSDataTemplate.FTR_DDtotal.value[l][t] / 1000.0; // 국내선 출발 총연료절감량

      undefined.ANSDataTemplate.FR_ADamount.value[l][t] = undefined.ANSDataTemplate.AFE_LD_hour.value[l] * undefined.ANSDataTemplate.FTR_ADtotal.value[l][t] / 1000.0; // 국내선 착륙 총연료절감량

      undefined.ANSDataTemplate.FR_DRamount.value[l][t] = undefined.ANSDataTemplate.FFE_hour.value[l] * undefined.ANSDataTemplate.FTR_DRtotal.value[l][t] / 1000.0; // 국내선 항로 총연료절감량  FR_DRamount 추가정의

      undefined.ANSDataTemplate.FR_DIamount.value[l][t] = undefined.ANSDataTemplate.AFE_TO_hour.value[l] * undefined.ANSDataTemplate.FTR_DItotal.value[l][t] / 1000.0; // 국제선 출발 총연료절감량

      undefined.ANSDataTemplate.FR_DIRamount.value[l][t] = undefined.ANSDataTemplate.FFE_hour.value[l] * undefined.ANSDataTemplate.FTR_DIRtotal.value[l][t] / 1000.0; // 국제선 출발-항로 총연료절감량 FR_DIRamount 추가정의

      undefined.ANSDataTemplate.FR_AIamount.value[l][t] = undefined.ANSDataTemplate.AFE_LD_hour.value[l] * undefined.ANSDataTemplate.FTR_AItotal.value[l][t] / 1000.0; // 국제선 도착 총연료절감량

      undefined.ANSDataTemplate.FR_AIRamount.value[l][t] = undefined.ANSDataTemplate.FFE_hour.value[l] * undefined.ANSDataTemplate.FTR_AIRtotal.value[l][t] / 1000.0; // 국제선 도착-항로 총연료절감량  FR_AIRamount 추가정의
    }
  } //FR_cost(연료비용 절감)


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      undefined.ANSDataTemplate.FR_DDcost.value[l][t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.CER_DDamount.value[l][t] / 1000000.0; // 국내선 출발 총연료비절감

      undefined.ANSDataTemplate.FR_ADcost.value[l][t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.CER_ADamount.value[l][t] / 1000000.0; // 국내선 착륙 총연료비절감

      undefined.ANSDataTemplate.FR_DRcost.value[l][t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.CER_DRamount.value[l][t] / 1000000.0; // 국내선 항로 총연료비절감  FR_DRcost 추가정의

      undefined.ANSDataTemplate.FR_DIcost.value[l][t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.CER_DIamount.value[l][t] / 1000000.0; // 국제선 출발 총연료비절감

      undefined.ANSDataTemplate.FR_DIRcost.value[l][t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.CER_DIRamount.value[l][t] / 1000000.0; // 국제선 출발-항로 총연료비절감  FR_DIRcost[l][t] 추가정의

      undefined.ANSDataTemplate.FR_AIcost.value[l][t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.CER_AIamount.value[l][t] / 1000000.0; // 국제선 도착 총연료비절감

      undefined.ANSDataTemplate.FR_AIRcost.value[l][t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.CER_AIRamount.value[l][t] / 1000000.0; // 국제선 도착-항로 총연료비절감   FR_AIRcost  추가정의

      console.log(undefined.ANSDataTemplate.FR_DDcost.value[l][t] + undefined.ANSDataTemplate.FR_ADcost.value[l][t] + undefined.ANSDataTemplate.FR_DRcost.value[l][t] + undefined.ANSDataTemplate.FR_DIcost.value[l][t] + undefined.ANSDataTemplate.FR_DIRcost.value[l][t] + undefined.ANSDataTemplate.FR_AIcost.value[l][t] + undefined.ANSDataTemplate.FR_AIRcost.value[l][t]);
    }
  }

  for (let i = 0; i < config["c" /* YEAR */]; i++) {
    undefined.ANSDataTemplate.OP_DDcost.value[i] = undefined.ANSDatabase.OPR_D.value * Math.pow(1.0 + undefined.ANSDatabase.r_OPcost.value / 100.0, i); //추가변수

    undefined.ANSDataTemplate.OP_DIcost.value[i] = undefined.ANSDatabase.OPR_I.value * Math.pow(1.0 + undefined.ANSDatabase.r_OPcost.value / 100.0, i);
    undefined.ANSDataTemplate.OP_ADcost.value[i] = undefined.ANSDatabase.OPR_D.value * Math.pow(1.0 + undefined.ANSDatabase.r_OPcost.value / 100.0, i);
    undefined.ANSDataTemplate.OP_AIcost.value[i] = undefined.ANSDatabase.OPR_I.value * Math.pow(1.0 + undefined.ANSDatabase.r_OPcost.value / 100.0, i);
  } // 공항별 총운항비용 절감 : 국내선, 국제선 출발/도착  OPR_cost


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      undefined.ANSDataTemplate.OPR_DDcost.value[l][t] = (undefined.ANSDataTemplate.FTR_DDtotal.value[l][t] + undefined.ANSDataTemplate.FTR_ADtotal.value[l][t] + undefined.ANSDataTemplate.FTR_DRtotal.value[l][t]) * undefined.ANSDataTemplate.OP_DDcost.value[t] / 1000000.0; // 국내선 운항비용 절감

      undefined.ANSDataTemplate.OPR_DIcost.value[l][t] = (undefined.ANSDataTemplate.FTR_DItotal.value[l][t] + undefined.ANSDataTemplate.FTR_DIRtotal.value[l][t]) * undefined.ANSDataTemplate.OP_DIcost.value[t] / 1000000.0; // 국제선 출발편 운항비용 절감

      undefined.ANSDataTemplate.OPR_AIcost.value[l][t] = (undefined.ANSDataTemplate.FTR_AItotal.value[l][t] + undefined.ANSDataTemplate.FTR_AIRtotal.value[l][t]) * undefined.ANSDataTemplate.OP_AIcost.value[t] / 1000000.0; // 국제선 도착편 운항비용 절감
    }
  } // 지연시간 감소 (정시성 향상) 기대 효과 분석  (여기부터 보완한 것 임!!!!!)
  // 1_지연시간 감소율 목표 계산 : Logistic 모형 적용


  var a = (Math.log(0.1) - Math.log(undefined.ANSDatabase.Dlygoal_Fin.value * 1.1 / undefined.ANSDatabase.Dlygoal_Start.value - Cetha)) / (undefined.ANSDatabase.Time_Pass_S.value - Cetha);
  var b = Math.log(undefined.ANSDatabase.Dlygoal_Fin.value * 1.1 / undefined.ANSDatabase.Dlygoal_Start.value - Cetha) - a;

  for (let t = 0; t < config["c" /* YEAR */]; t++) {
    //Flt_Sav 변수(연도별 운함시감 절감률 목표) 추가 정의
    undefined.ANSDataTemplate.Dly_Sav.value[t] = undefined.ANSDatabase.Dlygoal_Fin.value * 1.0 / (Cetha + Math.exp(b + a * (t + 1))) / 100.0;
  } // 2_ 공항별 총출발지연 감소시간  (국내선, 국제선은 출발지연은 공항만 고려), 항행원인 비율 고려


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      // 운항편당 출발지연 감소 시간을 국내선, 국제선으로 구분하여 산출
      undefined.ANSDataTemplate.Avg_DD_Dly.value[l][t] = undefined.ANSDatabase.Time_DD_Dly.value[l] * undefined.ANSDataTemplate.Dly_Sav.value[t] * undefined.ANSDatabase.DLY_DD_ANSshare.value[l] / (100.0 * 60.0); // 국내선 이륙(공항) 지연시간 절감

      undefined.ANSDataTemplate.Avg_DI_Dly.value[l][t] = undefined.ANSDatabase.Time_DI_Dly.value[l] * undefined.ANSDataTemplate.Dly_Sav.value[t] * undefined.ANSDatabase.DLY_DI_ANSshare.value[l] / (100.0 * 60.0); // 국제선 이륙(공항) 지연시간 절감
      // 총출발지연 감소 시간을 국내선, 국제선으로 구분하여 산출

      undefined.ANSDataTemplate.TL_DD_Dly.value[l][t] = undefined.ANSDataTemplate.N_DD_Flght.value[l][t] * undefined.ANSDataTemplate.Avg_DD_Dly.value[l][t]; // 국내선 총 출발지연시간 절감

      undefined.ANSDataTemplate.TL_DI_Dly.value[l][t] = undefined.ANSDataTemplate.N_DI_Flght.value[l][t] * undefined.ANSDataTemplate.Avg_DI_Dly.value[l][t]; // 국제선 총 공항 출발지연시간 절감
    }
  } // 3_출발 지연 탄소배출/연료 절감량 및 탄소배출/연료 비용 산출 : CER_amount_byDDLY(탄소배출 감축량) FR_amount_byADLY(총 연료 절감)


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      undefined.ANSDataTemplate.CER_DDamount_byADLY.value[l][t] = undefined.ANSDataTemplate.ACE_TO_hour.value[l] * undefined.ANSDataTemplate.TL_DD_Dly.value[l][t] / 1000.0; // 국내선 총 공항 출발 탄소배출 절감량

      undefined.ANSDataTemplate.CER_DIamount_byADLY.value[l][t] = undefined.ANSDataTemplate.ACE_TO_hour.value[l] * undefined.ANSDataTemplate.TL_DI_Dly.value[l][t] / 1000.0; // 국제선 총 공항 출발 탄소배출 절감량

      undefined.ANSDataTemplate.FR_DDamount_byADLY.value[l][t] = undefined.ANSDataTemplate.AFE_TO_hour.value[l] * undefined.ANSDataTemplate.TL_DD_Dly.value[l][t] / 1000.0; // 국내선 총 공항 출발 연료 절감량

      undefined.ANSDataTemplate.FR_DIamount_byADLY.value[l][t] = undefined.ANSDataTemplate.AFE_TO_hour.value[l] * undefined.ANSDataTemplate.TL_DI_Dly.value[l][t] / 1000.0; // 국제선 총 공항 출발 연료 절감량

      undefined.ANSDataTemplate.CER_DDcost_byADLY.value[l][t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_DDamount_byADLY.value[l][t] / 1000000.0; // 국내선 총 공항 출발 탄소배출 절감비용

      undefined.ANSDataTemplate.CER_DIcost_byADLY.value[l][t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_DIamount_byADLY.value[l][t] / 1000000.0; // 국제선 총 공항 출발 탄소배출 절감비용

      undefined.ANSDataTemplate.FR_DDcost_byADLY.value[l][t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.FR_DDamount_byADLY.value[l][t] / 1000000.0; // 국내선 총 공항 출발 연료 절감비용

      undefined.ANSDataTemplate.FR_DIcost_byADLY.value[l][t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.FR_DIamount_byADLY.value[l][t] / 1000000.0; // 국제선 총 공항 출발 연료 절감비용
    }
  } // 4_ 공항별 총도착지연 감소시간  (공항, 항로 고려), 항행원인 비율 고려


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    // l 공항의 국내 공역비행시간 점유율 : 도착(착륙)과정, 항로 과정 비율 구분
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      // 운항편당 도착지연 감소 시간을 국내선, 국제선으로 구분하여 산출
      undefined.ANSDataTemplate.Avg_AD_Dly.value[l][t] = undefined.ANSDatabase.Time_AD_Dly.value[l] * undefined.ANSDataTemplate.Dly_Sav.value[t] * undefined.ANSDatabase.DLY_AD_ANSshare.value[l] / (100.0 * 60.0); // 국내선 도착 지연감소 시간

      let FIR_Share = undefined.ANSDatabase.Time_AIRoute.value[l] / (undefined.ANSDatabase.Time_AIRoute.value[l] + undefined.ANSDatabase.Time_ILD.value[l]); // 국제선 도착 운항시간중 국내 공역 운항비율

      let FIR_LD_Share = undefined.ANSDatabase.Time_ILD.value[l] / (undefined.ANSDatabase.Time_AIRoute.value[l] + undefined.ANSDatabase.Time_ILD.value[l]); // 국제선 도착 국내 공역 운항 시간 중 착륙과정 비율

      undefined.ANSDataTemplate.Avg_AI_Dly.value[l][t] = undefined.ANSDatabase.Time_AI_Dly.value[l] * undefined.ANSDataTemplate.Dly_Sav.value[t] * undefined.ANSDatabase.DLY_AI_ANSshare.value[l] / (100.0 * 60.0); // 국제선 총도착 지연시간 절감(국내공역)

      undefined.ANSDataTemplate.Avg_AI_Dly_LD.value[l][t] = undefined.ANSDataTemplate.Avg_AI_Dly.value[l][t] * FIR_LD_Share; // 국제선 도착 착륙(공항)과정 지연시간 감소

      undefined.ANSDataTemplate.Avg_AI_Dly_R.value[l][t] = undefined.ANSDataTemplate.Avg_AI_Dly.value[l][t] * FIR_Share; // 국제선 도착 항로 지연시간 감소
      // 총출발지연 감소 시간을 국내선, 국제선으로 구분하여 산출

      undefined.ANSDataTemplate.TL_AD_Dly.value[l][t] = undefined.ANSDataTemplate.N_AD_Flght.value[l][t] * undefined.ANSDataTemplate.Avg_AD_Dly.value[l][t]; // 국내선 총 도착 지연시간 절감

      undefined.ANSDataTemplate.TL_AI_Dly_LD.value[l][t] = undefined.ANSDataTemplate.N_AI_Flght.value[l][t] * undefined.ANSDataTemplate.Avg_AI_Dly_LD.value[l][t]; // 국제선 총 도착 착륙과정 지연시간 절감

      undefined.ANSDataTemplate.TL_AI_Dly_R.value[l][t] = undefined.ANSDataTemplate.N_AI_Flght.value[l][t] * undefined.ANSDataTemplate.Avg_AI_Dly_R.value[l][t]; // 국제선 총 도착 항로과정 지연시간 절감

      undefined.ANSDataTemplate.TL_AI_Dly.value[l][t] = undefined.ANSDataTemplate.TL_AI_Dly_LD.value[l][t] + undefined.ANSDataTemplate.TL_AI_Dly_R.value[l][t]; // 국제선 총 도착 지연시간 절감
    }
  } // 5_항로 및 도착(착륙)과정 탄소배출 및 연료 감축량 및 절감비용


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      undefined.ANSDataTemplate.CER_ADamount_byADLY.value[l][t] = undefined.ANSDataTemplate.ACE_LD_hour.value[l] * undefined.ANSDataTemplate.TL_AD_Dly.value[l][t] / 1000.0; // 국내선 총 도착 탄소배출 절감량

      undefined.ANSDataTemplate.CER_AI_LDamount_byADLY.value[l][t] = undefined.ANSDataTemplate.ACE_LD_hour.value[l] * undefined.ANSDataTemplate.TL_AI_Dly_LD.value[l][t] / 1000.0; // 국제선 총 공항 도착(착륙) 탄소배출 절감량

      undefined.ANSDataTemplate.CER_AI_Ramount_byADLY.value[l][t] = undefined.ANSDataTemplate.FCE_hour.value[l] * undefined.ANSDataTemplate.TL_AI_Dly_R.value[l][t] / 1000.0; // 국제선 총 도착 항로 탄소배출 절감량

      undefined.ANSDataTemplate.CER_AIamount_byADLY.value[l][t] = undefined.ANSDataTemplate.CER_AI_LDamount_byADLY.value[l][t] + undefined.ANSDataTemplate.CER_AI_Ramount_byADLY.value[l][t]; // 국제선 총 도착 탄소배출 절감량

      undefined.ANSDataTemplate.FR_ADamount_byADLY.value[l][t] = undefined.ANSDataTemplate.AFE_TO_hour.value[l] * undefined.ANSDataTemplate.TL_AD_Dly.value[l][t] / 1000.0; // 국내선 총 도착 연료 절감량

      undefined.ANSDataTemplate.FR_AI_LDamount_byADLY.value[l][t] = undefined.ANSDataTemplate.AFE_TO_hour.value[l] * undefined.ANSDataTemplate.TL_AI_Dly_LD.value[l][t] / 1000.0; // 국제선 총 공항 도착(착륙) 연료 절감량

      undefined.ANSDataTemplate.FR_AI_Ramount_byADLY.value[l][t] = undefined.ANSDataTemplate.FFE_hour.value[l] * undefined.ANSDataTemplate.TL_AI_Dly_R.value[l][t] / 1000.0; // 국제선 총 도착 항로 연료 절감량

      undefined.ANSDataTemplate.FR_AIamount_byADLY.value[l][t] = undefined.ANSDataTemplate.FR_AI_LDamount_byADLY.value[l][t] + undefined.ANSDataTemplate.FR_AI_Ramount_byADLY.value[l][t]; // 국제선 총 도착 연료 절감량

      undefined.ANSDataTemplate.CER_ADcost_byADLY.value[l][t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_ADamount_byADLY.value[l][t] / 1000000.0; // 국내선 총 공항 도착 탄소배출 절감비용

      undefined.ANSDataTemplate.CER_AI_LDcost_byADLY.value[l][t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_AI_LDamount_byADLY.value[l][t] / 1000000.0; // 국제선 총 공항 도착(착륙) 탄소배출 절감비용

      undefined.ANSDataTemplate.CER_AI_Rcost_byADLY.value[l][t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_AI_Ramount_byADLY.value[l][t] / 1000000.0; // 국제선 총 도착 항로 탄소배출 절감비용

      undefined.ANSDataTemplate.CER_AIcost_byADLY.value[l][t] = undefined.ANSDataTemplate.CER_AI_LDcost_byADLY.value[l][t] + undefined.ANSDataTemplate.CER_AI_Rcost_byADLY.value[l][t]; // 국제선 총 도착 탄소배출 절감비용

      undefined.ANSDataTemplate.FR_ADcost_byADLY.value[l][t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.FR_ADamount_byADLY.value[l][t] / 1000000.0; // 국내선 총 공항 도착 연료 절감비용

      undefined.ANSDataTemplate.FR_AI_LDcost_byADLY.value[l][t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.FR_AI_LDamount_byADLY.value[l][t] / 1000000.0; // 국제선 총 공항 도착 연료 절감비용

      undefined.ANSDataTemplate.FR_AI_Rcost_byADLY.value[l][t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.FR_AI_Ramount_byADLY.value[l][t] / 1000000.0; // 국제선 총 공항 도착 연료 절감비용

      undefined.ANSDataTemplate.FR_AIcost_byADLY.value[l][t] = undefined.ANSDataTemplate.FR_AI_LDcost_byADLY.value[l][t] + undefined.ANSDataTemplate.FR_AI_Rcost_byADLY.value[l][t]; // 국제선 총 도착 연료 절감비용
    }
  } // 6_운항비용 절감 : 국내선 총도착지연, 국제선 : 도착항로+착륙 지연, 출발은 이륙지연 만 고려 : OPR_cost(운항비용 절감 편익)


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    //연료비 제외하는 것 추가 검토
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      undefined.ANSDataTemplate.OPR_ADcost_DLY.value[l][t] = undefined.ANSDataTemplate.TL_AD_Dly.value[l][t] * undefined.ANSDataTemplate.OP_DDcost.value[t] / 1000000.0; // 국내선 지연감소 운항비 절감

      undefined.ANSDataTemplate.OPR_DIcost_DLY.value[l][t] = undefined.ANSDataTemplate.TL_DI_Dly.value[l][t] * undefined.ANSDataTemplate.OP_DIcost.value[t] / 1000000.0; // 국제선 출발지연 감소 운항비 절감

      undefined.ANSDataTemplate.OPR_AIcost_DLY.value[l][t] = undefined.ANSDataTemplate.TL_AI_Dly.value[l][t] * undefined.ANSDataTemplate.OP_AIcost.value[t] / 1000000.0; // 국제선 도착지연 감소 운항비 절감
    }
  } // 7_지연시간 감소에 대한 여객 및 화물편익 BNF_PSG(여객 편익, BNF_CRG(화물 편익) 고객 편익은 도착지연만 고려함


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      undefined.ANSDataTemplate.BNF_AD_PSG.value[l][t] = undefined.ANSDatabase.PSG_AD.value[l] * undefined.ANSDataTemplate.TL_AD_Dly.value[l][t] * undefined.ANSDatabase.DLY_AD_cost_PSG.value[l] / 1000000.0; // 국내선 도착지연 감소편익(여객)

      undefined.ANSDataTemplate.BNF_AI_PSG.value[l][t] = undefined.ANSDatabase.PSG_AI.value[l] * undefined.ANSDataTemplate.TL_AI_Dly.value[l][t] * undefined.ANSDatabase.DLY_AI_cost_PSG.value[l] / 1000000.0; // 국제선 도착지연 감소편익(여객)
      // BNF_AD_CRG[l][t] = CRG_AD[l][t] * TL_AD_Dly[l][t](화물) * DLY_AD_cost_CRG[l][t];   // 국내선 도착지연 감소편익(화물) 2차
      // BNF_AI_CRG[l][t] = CRG_AI[l][t] * TL_AI_Dly[l][t](화물) * DLY_AI_cost_CRG[l][t];   // 국내선 도착지연 감소편익(화물) 2차
    }
  } // 8_영공통과 운항시간 절감 효과 (공항별 효과에서는 분석 제외)
  // 운항시간 절감률 목표 계산 : Logistic 모형 적용 - 운항시간 절감 계수 동일하게 사용


  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      undefined.ANSDataTemplate.N_Pass_Flght.value[t] = undefined.ANSDatabase.N_Pass_F.value[l] * Math.pow(1.0 + undefined.ANSDatabase.r_Pass.value / 100.0, t); // 총 영공통과 항공편수 //추가변수
    }
  }

  for (let l = 0; l < config["a" /* MAX */]; l++) {
    for (let t = 0; t < config["c" /* YEAR */]; t++) {
      undefined.ANSDataTemplate.Time_Pass.value[t] = undefined.ANSDataTemplate.Flt_Sav.value[t] * undefined.ANSDatabase.Time_Pass_S.value; // 영공통과 시간 절감

      undefined.ANSDataTemplate.FTR_Pass.value[t] = undefined.ANSDataTemplate.N_Pass_Flght.value[t] * undefined.ANSDataTemplate.Time_Pass.value[t] / 60.0; // 총 영공통과 운항시간 절감

      undefined.ANSDataTemplate.CER_amount_byAFT.value[t] = undefined.ANSDataTemplate.FCE_hour.value[l] * undefined.ANSDataTemplate.FTR_Pass.value[t] / 1000.0; // 총 영공통과 탄소배출 감소

      undefined.ANSDataTemplate.CER_cost_byAFT.value[t] = undefined.ANSDataTemplate.carbonCredit.value[t] * undefined.ANSDataTemplate.CER_amount_byAFT.value[t] / 1000000.0; // 총 영공통과 탄소배출 비용 감소

      undefined.ANSDataTemplate.FR_amount_byAFT.value[t] = undefined.ANSDataTemplate.FFE_hour.value[l] * undefined.ANSDataTemplate.FTR_Pass.value[t] / 1000.0; // 총 영공통과 연료소모 감소

      undefined.ANSDataTemplate.FR_cost_byAFT.value[t] = undefined.ANSDataTemplate.fuelCredit.value[t] * undefined.ANSDataTemplate.FR_amount_byAFT.value[t] / 1000000.0; // 총 영공통과 연료비 절감}
    }
  }

  var a = (Math.log(0.1) - Math.log(undefined.ANSDatabase.Safty_Fin.value * 1.1 / undefined.ANSDatabase.Safty_Start.value - Cetha)) / (undefined.ANSDatabase.Time_Pass_S.value - Cetha);
  var b = Math.log(undefined.ANSDatabase.Safty_Fin.value * 1.1 / undefined.ANSDatabase.Safty_Start.value - Cetha) - a;

  for (let t = 0; t < config["c" /* YEAR */]; t++) {
    // 연도별 안전사고 절감률 목표
    undefined.ANSDataTemplate.Safty_Sav.value[t] = undefined.ANSDatabase.Safty_Fin.value * 1.0 / (1.0 + Math.exp(b + a * (t + 1))) / 100.0;
    undefined.ANSDataTemplate.Safty_cost.value[t] = undefined.ANSDatabase.N_Safty.value * undefined.ANSDataTemplate.Safty_Sav.value[t] * undefined.ANSDatabase.Safty_cost_M.value;
  }
};

/* harmony default export */ var helpers_calculateANS = (calculateANS);
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UploadData/index.vue?vue&type=script&lang=js&





/* harmony default export */ var UploadDatavue_type_script_lang_js_ = ({
  name: "UploadData",
  methods: {
    readFile(file) {
      let ANSDatabaseReader = new FileReader();

      ANSDatabaseReader.onloadend = e => {
        let readFile = e.target;
        const csvFile = readFile.result;
        external_csvtojson_default()({
          noheader: true,
          output: "csv"
        }).fromString(csvFile).then(csvRow => {
          const parsedDatabase = {};
          csvRow.forEach(rowItem => {
            parsedDatabase[rowItem[0]] = rowItem.slice(1).filter(Number).length > config["c" /* YEAR */] ? rowItem.slice(1).reduce((acc, cur, idx) => {
              const arrayIndex = parseInt(idx / config["c" /* YEAR */]);

              if (idx % config["c" /* YEAR */] === 0 && (cur || cur === 0)) {
                const arr = [];
                acc.push(arr);
              }

              if (cur || cur === 0) {
                acc[arrayIndex].push(cur);
              }

              return acc;
            }, []) : rowItem.slice(1).filter(el => el || el === 0);
          });
          this.mutateANSDatabase(parsedDatabase);
          this.mutateANSDataTemplate(ANSDataTemplate["a" /* default */]);
        });
      };

      ANSDatabaseReader.readAsText(file);
    },

    handleUpload(e) {
      const uploadedFile = e.target.files[0];
      this.readFile(uploadedFile);
    },

    handleDrag(e) {
      e.preventDefault();
    },

    handleDrop(e) {
      e.preventDefault();
      const uploadedFile = e.dataTransfer.files[0];
      this.readFile(uploadedFile);
    },

    ...Object(external_vuex_["mapMutations"])("ansData", ["mutateANSDatabase", "mutateANSDataTemplate", "mutateFilteredANSData"])
  }
});
// CONCATENATED MODULE: ./components/UploadData/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UploadDatavue_type_script_lang_js_ = (UploadDatavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/UploadData/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(102)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UploadDatavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6b574e63",
  "3f2ad8ac"
  
)

/* harmony default export */ var UploadData = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0b4c30b1", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=upload-data.js.map