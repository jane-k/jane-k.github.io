(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{696:function(t,e,r){"use strict";r.r(e);var n=r(22),c=r(17),o=(r(92),r(9),r(39),r(44),r(38),r(30),r(43),r(48),r(34),r(49),r(109)),f=r.n(o),l=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("".concat("http://localhost:3000","/database.csv"));case 3:return e=t.sent,data=e.data,t.abrupt("return",{data:data});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{data:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),O=l,m=r(546),d=r.n(m),h=r(68);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"MainPage",props:{msg:String},components:{Data:function(){return Promise.all([r.e(6),r.e(48)]).then(r.bind(null,687))}},mounted:function(){return Object(c.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:e=t.sent,r=e.data,d()({noheader:!0,output:"csv"}).fromString(r).then((function(t){}));case 5:case"end":return t.stop()}}),t)})))()},methods:w(w({},Object(h.b)("ansData",["mutateANSData","mutateFilteredANSData"])),{},{initData:function(data){}})},y=r(77),component=Object(y.a)(v,(function(){return(0,this._self._c)("Data")}),[],!1,null,null,null);e.default=component.exports}}]);