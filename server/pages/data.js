exports.ids = [34];
exports.modules = {

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/data.vue?vue&type=template&id=64ebceb5&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('Data');
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/data.vue?vue&type=template&id=64ebceb5&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(12);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./utils/constants/endpoints.js
// TODO: 만약 배포한다면, 개발 / 프러덕션별 URL을 환경 변수로 구분하기
const BASE_URL = "http://localhost:3000";
// CONCATENATED MODULE: ./apis/Database/getDataBase.js



const getDependencyVariable = async () => {
  try {
    const {
      data
    } = await external_axios_default.a.get(`${BASE_URL}/database.csv`);
    return {
      data
    };
  } catch (error) {
    return {
      data: error
    };
  }
};

/* harmony default export */ var getDataBase = (getDependencyVariable);
// EXTERNAL MODULE: external "csvtojson"
var external_csvtojson_ = __webpack_require__(52);
var external_csvtojson_default = /*#__PURE__*/__webpack_require__.n(external_csvtojson_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/data.vue?vue&type=script&lang=js&
// import getLocalANSData from "@/apis/ANSData/getLocalANSData";



/* harmony default export */ var datavue_type_script_lang_js_ = ({
  name: "MainPage",
  props: {
    msg: String
  },
  components: {
    Data: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 240))
  },

  async mounted() {
    // const { data } = await getLocalANSData();
    const {
      data: csvFile
    } = await getDataBase();
    external_csvtojson_default()({
      noheader: true,
      output: "csv"
    }).fromString(csvFile).then(csvRow => {// console.log(csvRow);
    }); // this.initData(data);
  },

  methods: { ...Object(external_vuex_["mapMutations"])("ansData", ["mutateANSData", "mutateFilteredANSData"]),

    initData(data) {// this.mutateANSData(data);
      // this.mutateFilteredANSData(data);
    }

  }
});
// CONCATENATED MODULE: ./pages/data.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_datavue_type_script_lang_js_ = (datavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./pages/data.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_datavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6e1d604d"
  
)

/* harmony default export */ var pages_data = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=data.js.map