(window.webpackJsonp=window.webpackJsonp||[]).push([[32,49],{350:function(t,e,l){var r=l(3),n=l(352);r({target:"Number",stat:!0,forced:Number.parseInt!=n},{parseInt:n})},352:function(t,e,l){var r=l(6),n=l(4),o=l(5),m=l(14),h=l(164).trim,D=l(165),A=r.parseInt,j=r.Symbol,_=j&&j.iterator,v=/^[+-]?0x/i,c=o(v.exec),N=8!==A(D+"08")||22!==A(D+"0x16")||_&&!n((function(){A(Object(_))}));t.exports=N?function(t,e){var l=h(m(t));return A(l,e>>>0||(c(v,l)?16:10))}:A},495:function(t,e,l){"use strict";var r={extends:l(514).a,props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},n=l(77),component=Object(n.a)(r,undefined,undefined,!1,null,null,null);e.a=component.exports},509:function(t,e,l){var map={"./af":357,"./af.js":357,"./ar":358,"./ar-dz":359,"./ar-dz.js":359,"./ar-kw":360,"./ar-kw.js":360,"./ar-ly":361,"./ar-ly.js":361,"./ar-ma":362,"./ar-ma.js":362,"./ar-sa":363,"./ar-sa.js":363,"./ar-tn":364,"./ar-tn.js":364,"./ar.js":358,"./az":365,"./az.js":365,"./be":366,"./be.js":366,"./bg":367,"./bg.js":367,"./bm":368,"./bm.js":368,"./bn":369,"./bn-bd":370,"./bn-bd.js":370,"./bn.js":369,"./bo":371,"./bo.js":371,"./br":372,"./br.js":372,"./bs":373,"./bs.js":373,"./ca":374,"./ca.js":374,"./cs":375,"./cs.js":375,"./cv":376,"./cv.js":376,"./cy":377,"./cy.js":377,"./da":378,"./da.js":378,"./de":379,"./de-at":380,"./de-at.js":380,"./de-ch":381,"./de-ch.js":381,"./de.js":379,"./dv":382,"./dv.js":382,"./el":383,"./el.js":383,"./en-au":384,"./en-au.js":384,"./en-ca":385,"./en-ca.js":385,"./en-gb":386,"./en-gb.js":386,"./en-ie":387,"./en-ie.js":387,"./en-il":388,"./en-il.js":388,"./en-in":389,"./en-in.js":389,"./en-nz":390,"./en-nz.js":390,"./en-sg":391,"./en-sg.js":391,"./eo":392,"./eo.js":392,"./es":393,"./es-do":394,"./es-do.js":394,"./es-mx":395,"./es-mx.js":395,"./es-us":396,"./es-us.js":396,"./es.js":393,"./et":397,"./et.js":397,"./eu":398,"./eu.js":398,"./fa":399,"./fa.js":399,"./fi":400,"./fi.js":400,"./fil":401,"./fil.js":401,"./fo":402,"./fo.js":402,"./fr":403,"./fr-ca":404,"./fr-ca.js":404,"./fr-ch":405,"./fr-ch.js":405,"./fr.js":403,"./fy":406,"./fy.js":406,"./ga":407,"./ga.js":407,"./gd":408,"./gd.js":408,"./gl":409,"./gl.js":409,"./gom-deva":410,"./gom-deva.js":410,"./gom-latn":411,"./gom-latn.js":411,"./gu":412,"./gu.js":412,"./he":413,"./he.js":413,"./hi":414,"./hi.js":414,"./hr":415,"./hr.js":415,"./hu":416,"./hu.js":416,"./hy-am":417,"./hy-am.js":417,"./id":418,"./id.js":418,"./is":419,"./is.js":419,"./it":420,"./it-ch":421,"./it-ch.js":421,"./it.js":420,"./ja":422,"./ja.js":422,"./jv":423,"./jv.js":423,"./ka":424,"./ka.js":424,"./kk":425,"./kk.js":425,"./km":426,"./km.js":426,"./kn":427,"./kn.js":427,"./ko":428,"./ko.js":428,"./ku":429,"./ku.js":429,"./ky":430,"./ky.js":430,"./lb":431,"./lb.js":431,"./lo":432,"./lo.js":432,"./lt":433,"./lt.js":433,"./lv":434,"./lv.js":434,"./me":435,"./me.js":435,"./mi":436,"./mi.js":436,"./mk":437,"./mk.js":437,"./ml":438,"./ml.js":438,"./mn":439,"./mn.js":439,"./mr":440,"./mr.js":440,"./ms":441,"./ms-my":442,"./ms-my.js":442,"./ms.js":441,"./mt":443,"./mt.js":443,"./my":444,"./my.js":444,"./nb":445,"./nb.js":445,"./ne":446,"./ne.js":446,"./nl":447,"./nl-be":448,"./nl-be.js":448,"./nl.js":447,"./nn":449,"./nn.js":449,"./oc-lnc":450,"./oc-lnc.js":450,"./pa-in":451,"./pa-in.js":451,"./pl":452,"./pl.js":452,"./pt":453,"./pt-br":454,"./pt-br.js":454,"./pt.js":453,"./ro":455,"./ro.js":455,"./ru":456,"./ru.js":456,"./sd":457,"./sd.js":457,"./se":458,"./se.js":458,"./si":459,"./si.js":459,"./sk":460,"./sk.js":460,"./sl":461,"./sl.js":461,"./sq":462,"./sq.js":462,"./sr":463,"./sr-cyrl":464,"./sr-cyrl.js":464,"./sr.js":463,"./ss":465,"./ss.js":465,"./sv":466,"./sv.js":466,"./sw":467,"./sw.js":467,"./ta":468,"./ta.js":468,"./te":469,"./te.js":469,"./tet":470,"./tet.js":470,"./tg":471,"./tg.js":471,"./th":472,"./th.js":472,"./tk":473,"./tk.js":473,"./tl-ph":474,"./tl-ph.js":474,"./tlh":475,"./tlh.js":475,"./tr":476,"./tr.js":476,"./tzl":477,"./tzl.js":477,"./tzm":478,"./tzm-latn":479,"./tzm-latn.js":479,"./tzm.js":478,"./ug-cn":480,"./ug-cn.js":480,"./uk":481,"./uk.js":481,"./ur":482,"./ur.js":482,"./uz":483,"./uz-latn":484,"./uz-latn.js":484,"./uz.js":483,"./vi":485,"./vi.js":485,"./x-pseudo":486,"./x-pseudo.js":486,"./yo":487,"./yo.js":487,"./zh-cn":488,"./zh-cn.js":488,"./zh-hk":489,"./zh-hk.js":489,"./zh-mo":490,"./zh-mo.js":490,"./zh-tw":491,"./zh-tw.js":491};function r(t){var e=n(t);return l(e)}function n(t){if(!l.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=509},510:function(t,e,l){var content=l(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(59).default)("0ac96d15",content,!0,{sourceMap:!1})},535:function(t,e,l){"use strict";l(510)},536:function(t,e,l){var r=l(58)(!1);r.push([t.i,".small{max-width:600px;margin:150px auto}",""]),t.exports=r},688:function(t,e,l){"use strict";l.r(e);l(38),l(30),l(43),l(48),l(34),l(49);var r=l(348),n=l(22),o=(l(161),l(9),l(350),l(237),l(46),l(238),l(356),l(495)),m=l(68),h=l(0);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var A={components:{ChartTest:o.a},data:function(){return{data:[]}},created:function(){this.computeDataSet(),this.fillData()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.c)("ansData",["ANSDataTemplate"])),methods:{computeDataSet:function(){for(var t=Array(h.c).fill(0),e=Array(h.c).fill(0),l=0,n=Array(h.c).fill(0),o=Array(h.c).fill(0),m=Array(h.c).fill(0),D=0,A=Array(h.c).fill(0),j=Array(h.c).fill(0),_=Array(h.c).fill(0),v=0;v<h.c;v++)t[v]=(new Date).getFullYear()+v;for(var c=0;c<h.a;c++)for(var N=0;N<h.c;N++)e[N]=e[N]+this.ANSDataTemplate.N_DD_Flght.value[c][N]+this.ANSDataTemplate.N_AD_Flght.value[c][N]+this.ANSDataTemplate.N_AI_Flght.value[c][N]+this.ANSDataTemplate.N_DI_Flght.value[c][N];for(var d=0;d<h.a;d++)l=l+this.ANSDataTemplate.FCE_hour.value[d]+this.ANSDataTemplate.ACE_TO_hour.value[d]+this.ANSDataTemplate.ACE_LD_hour.value[d];for(var F=0;F<h.a;F++)for(var f=0;f<h.c;f++)n[f]=n[f]+this.ANSDataTemplate.CER_DDamount.value[F][f]+this.ANSDataTemplate.CER_ADamount.value[F][f]+this.ANSDataTemplate.CER_DRamount.value[F][f]+this.ANSDataTemplate.CER_DIamount.value[F][f]+this.ANSDataTemplate.CER_DIRamount.value[F][f]+this.ANSDataTemplate.CER_AIamount.value[F][f]+this.ANSDataTemplate.CER_AIRamount.value[F][f]+this.ANSDataTemplate.CER_DDamount_byADLY.value[F][f]+this.ANSDataTemplate.CER_DIamount_byADLY.value[F][f]+this.ANSDataTemplate.CER_ADamount_byADLY.value[F][f]+this.ANSDataTemplate.CER_AI_LDamount_byADLY.value[F][f]+this.ANSDataTemplate.CER_AI_Ramount_byADLY.value[F][f]+this.ANSDataTemplate.CER_AIamount_byADLY.value[F][f]+this.ANSDataTemplate.CER_amount_byAFT.value[f];for(var T=0;T<h.a;T++)for(var R=0;R<h.c;R++)o[R]=(l-(this.ANSDataTemplate.CER_DDamount.value[T][R]+this.ANSDataTemplate.CER_ADamount.value[T][R]+this.ANSDataTemplate.CER_DRamount.value[T][R]+this.ANSDataTemplate.CER_DIamount.value[T][R]+this.ANSDataTemplate.CER_DIRamount.value[T][R]+this.ANSDataTemplate.CER_AIamount.value[T][R]+this.ANSDataTemplate.CER_AIRamount.value[T][R]+this.ANSDataTemplate.CER_DDamount_byADLY.value[T][R]+this.ANSDataTemplate.CER_DIamount_byADLY.value[T][R]+this.ANSDataTemplate.CER_ADamount_byADLY.value[T][R]+this.ANSDataTemplate.CER_AI_LDamount_byADLY.value[T][R]+this.ANSDataTemplate.CER_AI_Ramount_byADLY.value[T][R]+this.ANSDataTemplate.CER_AIamount_byADLY.value[T][R]+this.ANSDataTemplate.CER_amount_byAFT.value[R]))/(this.ANSDataTemplate.N_DD_Flght.value[T][R]+this.ANSDataTemplate.N_AD_Flght.value[T][R]+this.ANSDataTemplate.N_AI_Flght.value[T][R]+this.ANSDataTemplate.N_DI_Flght.value[T][R]);for(var S=0;S<h.a;S++)for(var y=0;y<h.c;y++)m[y]=n[y]/l*100;for(var E=0;E<h.a;E++)D=this.ANSDataTemplate.FFE_hour.value[E]+this.ANSDataTemplate.AFE_TO_hour.value[E]+this.ANSDataTemplate.AFE_LD_hour.value[E];for(var C=0;C<h.a;C++)for(var I=0;I<h.c;I++)A[I]=A[I]+this.ANSDataTemplate.FR_DDamount.value[C][I]+this.ANSDataTemplate.FR_ADamount.value[C][I]+this.ANSDataTemplate.FR_DRamount.value[C][I]+this.ANSDataTemplate.FR_DIamount.value[C][I]+this.ANSDataTemplate.FR_DIRamount.value[C][I]+this.ANSDataTemplate.FR_AIamount.value[C][I]+this.ANSDataTemplate.FR_AIRamount.value[C][I]+this.ANSDataTemplate.FR_DDamount_byADLY.value[C][I]+this.ANSDataTemplate.FR_DIamount_byADLY.value[C][I]+this.ANSDataTemplate.FR_ADamount_byADLY.value[C][I]+this.ANSDataTemplate.FR_AI_LDamount_byADLY.value[C][I]+this.ANSDataTemplate.FR_AI_Ramount_byADLY.value[C][I]+this.ANSDataTemplate.FR_AIamount_byADLY.value[C][I]+this.ANSDataTemplate.FR_amount_byAFT.value[I];for(var k=0;k<h.a;k++)for(var Y=0;Y<h.c;Y++)j[Y]=(D-(this.ANSDataTemplate.FR_DDamount.value[k][Y]+this.ANSDataTemplate.FR_ADamount.value[k][Y]+this.ANSDataTemplate.FR_DRamount.value[k][Y]+this.ANSDataTemplate.FR_DIamount.value[k][Y]+this.ANSDataTemplate.FR_DIRamount.value[k][Y]+this.ANSDataTemplate.FR_AIamount.value[k][Y]+this.ANSDataTemplate.FR_AIRamount.value[k][Y]+this.ANSDataTemplate.FR_DDamount_byADLY.value[k][Y]+this.ANSDataTemplate.FR_DIamount_byADLY.value[k][Y]+this.ANSDataTemplate.FR_ADamount_byADLY.value[k][Y]+this.ANSDataTemplate.FR_AI_LDamount_byADLY.value[k][Y]+this.ANSDataTemplate.FR_AI_Ramount_byADLY.value[k][Y]+this.ANSDataTemplate.FR_AIamount_byADLY.value[k][Y]+this.ANSDataTemplate.FR_amount_byAFT.value[Y]))/(this.ANSDataTemplate.N_DD_Flght.value[k][Y]+this.ANSDataTemplate.N_AD_Flght.value[k][Y]+this.ANSDataTemplate.N_AI_Flght.value[k][Y]+this.ANSDataTemplate.N_DI_Flght.value[k][Y]);for(var L=0;L<h.a;L++)for(var O=0;O<h.c;O++)_[O]=A[O]/D*100;var x=Array(Number.parseInt(h.c/5)+1).fill(0).reduce((function(h,v,c){return[].concat(Object(r.a)(h),[{YEAR:Number.parseInt(t[5*c]),N_Flight:Number.parseFloat(e[5*c]).toFixed(2),CE_Total:Number.parseFloat(l).toFixed(2),CER_Total:Number.parseFloat(n[5*c]).toFixed(2),CE_Flight:Number.parseFloat(o[5*c]).toFixed(4),CER_Rate:Number.parseFloat(m[5*c]).toFixed(2),FE_Total:Number.parseFloat(D).toFixed(2),FER_Total:Number.parseFloat(A[5*c]).toFixed(2),FE_Flight:Number.parseFloat(j[5*c]).toFixed(4),FER_Rate:Number.parseFloat(_[5*c]).toFixed(2)}])}),[]);return this.data=x,x},fillData:function(){this.data={labels:[this.data[0].YEAR,this.data[1].YEAR,this.data[2].YEAR,this.data[3].YEAR,this.data[4].YEAR,this.data[5].YEAR,this.data[6].YEAR],datasets:[{label:"편당 탄소배출량",borderColor:"#4E49A9",pointBorderColor:"#4E49A9",data:[this.data[0].CE_Flight,this.data[1].CE_Flight,this.data[2].CE_Flight,this.data[3].CE_Flight,this.data[4].CE_Flight,this.data[5].CE_Flight,this.data[6].CE_Flight]},{label:"편당 연료소모량",borderColor:"#32ACC0",pointBorderColor:"#32ACC0",data:[this.data[0].FE_Flight,this.data[1].FE_Flight,this.data[2].FE_Flight,this.data[3].FE_Flight,this.data[4].FE_Flight,this.data[5].FE_Flight,this.data[6].FE_Flight]}]}}}},j=A,_=(l(535),l(77)),v=l(492),c=l.n(v),N=l(694),d=l(533),component=Object(_.a)(j,(function(){var t=this._self._c;return t("v-card",{staticClass:"v-card-Chart",attrs:{"max-width":"600"}},[t("v-sheet",{staticClass:"v-sheet-Chart"},[t("chart-test",{attrs:{"chart-data":this.data}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:N.a,VSheet:d.a})}}]);