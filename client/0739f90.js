(window.webpackJsonp=window.webpackJsonp||[]).push([[48,26,31,36],{353:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},354:function(t,e,r){t.exports=r.p+"img/intro-logo.93dbf5a.png"},355:function(t,e,r){var content=r(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("75b4ef66",content,!0,{sourceMap:!1})},496:function(t,e,r){var content=r(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("67b55e08",content,!0,{sourceMap:!1})},499:function(t,e,r){"use strict";r(355)},500:function(t,e,r){var n=r(58)(!1);n.push([t.i,".presentation-label[data-v-1c59d745]{display:flex;align-items:center;line-height:1.4;flex:5}.presentation-item[data-v-1c59d745]{display:flex;justify-content:space-between;align-items:center;grid-gap:1rem;gap:1rem;cursor:pointer;transition:all .2s ease-in-out;padding:1.25rem 1rem;border-radius:.5rem;border-bottom:1px solid #efefef}.presentation-item[data-v-1c59d745]:hover{background-color:rgba(116,158,203,.24)}.button__wrapper[data-v-1c59d745]{text-align:center;flex:1}.button__wrapper button[data-v-1c59d745]{border:none;padding:.25rem .5rem;border-radius:.5rem;cursor:pointer;height:1.5rem;transition:all .2s ease-in-out}.edit__button[data-v-1c59d745]{background-color:#bed6ed}.confirm__button[data-v-1c59d745]{background-color:#6c7ca6;color:#efefef}",""]),t.exports=n},503:function(t,e,r){"use strict";r.r(e);r(38),r(30),r(43),r(48),r(34),r(49);var n=r(22),o=(r(9),r(39),r(44),r(237),r(163),r(68));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"PresentationItem",components:{DisplayItem:function(){return r.e(10).then(r.bind(null,707))},EditItem:function(){return r.e(11).then(r.bind(null,708))},MultiItemList:function(){return r.e(8).then(r.bind(null,709))},SelectItem:function(){return r.e(9).then(r.bind(null,710))},Select:function(){return r.e(5).then(r.bind(null,712))}},data:function(){return{isEditable:!1,selectedIndex:0}},props:{label:{type:String,default:""},variable:{type:String,default:""},value:{type:[Number,String,Array]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({toggleIOMode:function(){this.isEditable=!this.isEditable},onChangeComplete:function(){this.isEditable=!1},filterANSDataList:function(){this.mutateFilteredANSData(Object.values(this.ANSData))}},Object(o.b)("ansData",["mutateANSData","mutateFilteredANSData"]))},d=c,f=(r(499),r(77)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"presentation-item"},[e("p",{staticClass:"presentation-label"},[t._v(t._s(t.label))]),t._v(" "),t.isEditable?e("EditItem",{attrs:{label:t.label,variable:t.variable,value:t.value,selectedIndex:t.selectedIndex,isEditable:t.isEditable}}):e("DisplayItem",{attrs:{label:t.label,variable:t.variable,value:t.value,isEditable:t.isEditable,selectedIndex:t.selectedIndex}}),t._v(" "),e("div",{staticClass:"button__wrapper"},[t.isEditable?e("button",{staticClass:"confirm__button",on:{click:t.onChangeComplete}},[t._v("\r\n        확인\r\n      ")]):e("button",{staticClass:"edit__button",on:{click:t.toggleIOMode}},[t._v("\r\n        수정\r\n      ")])])],1)}),[],!1,null,"1c59d745",null);e.default=component.exports},504:function(t,e,r){"use strict";r(496)},505:function(t,e,r){var n=r(58),o=r(353),l=r(354),c=n(!1),d=o(l);c.push([t.i,'.presentation-container[data-v-8cfee0a0]{display:flex;flex-direction:column;position:relative;flex:1;border:1px solid #cdcdcd;border-radius:.5rem;box-shadow:4px 4px 4px rgba(0,0,0,.1);overflow-x:hidden;overflow-y:hidden}.presentation-container[data-v-8cfee0a0]:after{content:"";background:url('+d+") no-repeat;background-position:50%;opacity:.12;position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}.presentation-title[data-v-8cfee0a0]{display:flex;position:relative;align-items:center;justify-content:space-between;padding:1rem 1.5rem;font-size:1.125rem;font-weight:700;top:0;background-color:#fff;border-bottom:1px solid #cdcdcd}.data-title[data-v-8cfee0a0]{width:100%;text-align:center}.data-reset[data-v-8cfee0a0]{color:#ababab;position:absolute;right:6.5rem;font-size:.875rem;white-space:nowrap;cursor:pointer;transition:all .2s ease-in-out;padding:.375rem .5rem}.data-reset[data-v-8cfee0a0]:hover{color:#333;background-color:#efefef;border-radius:.5rem}.data-save[data-v-8cfee0a0]{color:#ababab;position:absolute;right:1rem;font-size:.875rem;white-space:nowrap;cursor:pointer;transition:all .2s ease-in-out;padding:.375rem .5rem}.data-save[data-v-8cfee0a0]:hover{color:#333;background-color:#efefef;border-radius:.5rem}.presentation-list[data-v-8cfee0a0]{display:flex;flex-direction:column;padding:1rem;height:100%;overflow-y:scroll;overflow-x:hidden}.presentation-list[data-v-8cfee0a0]::-webkit-scrollbar{width:10px!important;border-radius:10px;background-color:#fff}.presentation-list[data-v-8cfee0a0]::-webkit-scrollbar-thumb{background-color:#9abad8;border-radius:10px}.presentation-list[data-v-8cfee0a0]::-webkit-scrollbar-track{background-color:#fdfdfd;border-left:1px solid #ebebeb;border-radius:10px}",""]),t.exports=c},508:function(t,e,r){var content=r(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("3a644acc",content,!0,{sourceMap:!1})},521:function(t,e,r){"use strict";r.r(e);r(38),r(30),r(43),r(48),r(34),r(49);var n=r(22),o=(r(9),r(39),r(44),r(163),r(68));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"Presentation",components:{PresentationItem:function(){return Promise.resolve().then(r.bind(null,503))}},methods:{handleRoute:function(path){this.$router.push(path)}},computed:c(c({},Object(o.c)("ansData",["ANSDataTemplate","ANSDatabase","filteredANSData","filteredDataName","filteredDataCount"])),{},{dataTypeheaderText:function(){return this.filteredDataName||"전체 자료 목록"},dataCountHeaderText:function(){var t,e;return(null===(t=this.filteredANSData)||void 0===t?void 0:t.length)||(null===(e=Object.values(this.ANSDatabase))||void 0===e?void 0:e.length)}})},f=(r(504),r(77)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"presentation-container"},[t.ANSDatabase?e("div",{staticClass:"presentation-title"},[e("h2",{staticClass:"data-title"},[t._v("\r\n        "+t._s(t.dataTypeheaderText)+" ("+t._s(t.dataCountHeaderText)+")\r\n      ")]),t._v(" "),e("div",{staticClass:"data-reset"},[t._v("데이터 초기화")]),t._v(" "),e("div",{staticClass:"data-save",on:{click:function(e){return t.handleRoute("/data")}}},[t._v("데이터 저장")])]):t._e(),t._v(" "),t.ANSDatabase?e("ul",{staticClass:"presentation-list"},t._l(this.filteredANSData,(function(data){return e("PresentationItem",{key:data.variable,attrs:{label:data.label,variable:data.variable,value:data.value}})})),1):e("UploadData")],1)}),[],!1,null,"8cfee0a0",null);e.default=component.exports;installComponents(component,{UploadData:r(543).default,PresentationItem:r(503).default})},526:function(t,e,r){"use strict";r(508)},527:function(t,e,r){var n=r(58)(!1);n.push([t.i,".Container[data-v-0b1adcd4]{width:90%;height:60%;display:flex;grid-gap:2rem;gap:2rem}",""]),t.exports=n},687:function(t,e,r){"use strict";r.r(e);r(38),r(30),r(48),r(34),r(49);var n=r(22),o=(r(9),r(39),r(44),r(43),r(163),r(68)),l={ASSUMPTION:"ASSUMPTION",INNER:"INNER",OUTER:"OUTER",BASE:"BASE"};r(137);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"Data",props:{msg:String},components:{Presentation:function(){return Promise.resolve().then(r.bind(null,521))}},methods:d({handleRoute:function(path){this.$router.push(path)},filterANSDataList:function(t){if("ALL"!==t){var e=Object.values(this.ANSDatabase).filter((function(data){return data.type==t})),r=this.setFilteredDataName(t);this.mutateFilteredANSData(e),this.mutateFilteredDataCount(null==e?void 0:e.length),this.mutateFilteredDataName(r)}else{var n;this.mutateFilteredANSData(Object.values(this.ANSDatabase)),this.mutateFilteredDataCount(null===(n=Object.values(this.ANSDatabase))||void 0===n?void 0:n.length),this.mutateFilteredDataName("전체 자료 목록")}},setFilteredDataName:function(t){switch(t){case l.ASSUMPTION:return"가정 자료 목록";case l.BASE:return"기초 자료 목록";case l.INNER:return"내부 자료 목록";case l.OUTER:return"외부 자료 목록";default:return"전체 자료 목록"}},setFilteredDataCount:function(t){this.mutateFilteredDataCount(t)}},Object(o.b)("ansData",["mutateANSDatabase","mutateFilteredANSData","mutateFilteredDataName","mutateFilteredDataCount"])),computed:d({},Object(o.c)("ansData",["ANSDatabase"]))},v=(r(526),r(77)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"Container"},[e("Presentation"),t._v(" "),e("ul",{staticClass:"button__list"},[e("button",{on:{click:function(e){return t.filterANSDataList("ASSUMPTION")}}},[t._v("가정 자료")]),t._v(" "),e("button",{on:{click:function(e){return t.filterANSDataList("INNER")}}},[t._v("내부 추정 자료")]),t._v(" "),e("button",{on:{click:function(e){return t.filterANSDataList("OUTER")}}},[t._v("외생 자료")]),t._v(" "),e("button",{on:{click:function(e){return t.filterANSDataList("BASE")}}},[t._v("기초 자료")]),t._v(" "),e("button",{on:{click:function(e){return t.filterANSDataList("ALL")}}},[t._v("전체보기")]),t._v(" "),e("button",{on:{click:function(e){return t.handleRoute("/")}}},[t._v("돌아가기")])])],1)}),[],!1,null,"0b1adcd4",null);e.default=component.exports;installComponents(component,{Presentation:r(521).default})}}]);