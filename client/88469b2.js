(window.webpackJsonp=window.webpackJsonp||[]).push([[18,14],{507:function(e,t,n){var content=n(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("13c61a55",content,!0,{sourceMap:!1})},524:function(e,t,n){"use strict";n(507)},525:function(e,t,n){var r=n(58)(!1);r.push([e.i,".intro-container[data-v-0bc3abee]{flex-direction:column;padding:1rem;grid-gap:1rem;gap:1rem;width:100%;flex:1;border:1px solid #cdcdcd;border-radius:.5rem;box-shadow:4px 4px 4px rgba(0,0,0,.1);position:relative}.data-save[data-v-0bc3abee]{display:flex;grid-gap:1rem;gap:1rem;justify-content:flex-end;align-items:center;margin-left:auto;color:#0f0f0f;font-size:1rem}",""]),e.exports=r},557:function(e,t,n){var content=n(595);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("f419e376",content,!0,{sourceMap:!1})},571:function(e,t,n){"use strict";n.r(t);var r={props:{isSaveComplete:{type:Boolean}}},o=(n(524),n(77)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"intro-container"},[t("div",{staticClass:"data-save"},[e.isSaveComplete?t("div",[e._v('\r\n        "경제성 분석 결과.xlsx"로 종합 기대효과 분석결과가 저장되었습니다\r\n      ')]):e._e()])])}),[],!1,null,"0bc3abee",null);t.default=component.exports},594:function(e,t,n){"use strict";n(557)},595:function(e,t,n){var r=n(58)(!1);r.push([e.i,".Container[data-v-5ffadbfc]{width:90%;height:60%;display:flex;grid-gap:2rem;gap:2rem}",""]),e.exports=r},716:function(e,t,n){"use strict";n.r(t);var r=n(22),o=(n(9),n(39),n(44),n(38),n(30),n(43),n(48),n(34),n(49),n(68));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={name:"Home",components:{Intro:function(){return Promise.resolve().then(n.bind(null,571))}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({handleRoute:function(path){this.$router.push(path)}},Object(o.b)("pageMetaData",["updatePageTitle"]))},f=l,d=(n(594),n(77)),component=Object(d.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"Container"},[t("Intro"),e._v(" "),t("ul",{staticClass:"button__list"},[t("button",{on:{click:function(t){return e.handleRoute("/data")}}},[e._v("데이터 입력 및 확인")]),e._v(" "),t("button",{on:{click:function(t){return e.handleRoute("/analysis")}}},[e._v("기대효과 분석")]),e._v(" "),t("button",{on:{click:function(t){return e.handleRoute("/review")}}},[e._v("기대효과 검토 및 출력")])])],1)}),[],!1,null,"5ffadbfc",null);t.default=component.exports;installComponents(component,{Intro:n(571).default})}}]);