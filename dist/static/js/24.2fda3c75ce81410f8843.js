webpackJsonp([24],{"/uJR":function(n,e,t){"use strict";function o(n){t("g0DY")}Object.defineProperty(e,"__esModule",{value:!0});var i=t("Xxa5"),s=t.n(i),a=t("exGp"),r=t.n(a),A=(t("ZhW5"),t("hxP8")),c=t("vMJZ"),p=(A.a,{name:"noticeDetail",components:{comHeader:A.a},data:function(){return{id:null,detail:{}}},beforeMount:function(){this.id=this.$route.query.id||1,this._onData()},methods:{_onData:function(){var n=this;return r()(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t={id:n.id},Object(c.b)(t).then(function(e){var t=e.data,o=t.code,i=t.data,s=void 0===i?{}:i;t.msg;1===o&&s&&s.id&&(n.detail=s)}).catch(function(n){console.log(n)});case 2:case"end":return e.stop()}},e,n)}))()}}}),l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"noticeDetail g-pd-15 g-bs-bb g-bg-white"},[t("com-header",{attrs:{title:"消息详情"}}),n._v(" "),t("p",{staticClass:"g-fs-16 g-c-orange g-m-b-5"},[n._v(n._s(n.detail.title))]),n._v(" "),t("p",{staticClass:"show g-fs-14 g-a0a0a0"},[n._v(n._s(n.detail.content))])],1)},u=[],d={render:l,staticRenderFns:u},C=d,f=t("VU/8"),h=o,_=f(p,C,!1,h,null,null);e.default=_.exports},g0DY:function(n,e,t){var o=t("moCy");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("rjj0")("525a3ebe",o,!0,{})},moCy:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"/**\n* 字体模块\n*/\n.font_color_212121 {\n  color: #212121;\n}\n/**\n* 文档流模块\n*/\n.pos_r {\n  position: relative;\n}\n.pos_a {\n  position: absolute;\n}\n.pos_f {\n  position: fixed;\n}\n.pos_f_top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n/*\n* vux x-header\n*/\n.noticeDetail .show {\n  white-space: pre-wrap;\n}\n","",{version:3,sources:["/Users/hehuan/Documents/my/私活/code/wubai/src/pages/notice/detail.vue"],names:[],mappings:"AAAA;;EAEE;AACF;EACE,eAAe;CAChB;AACD;;EAEE;AACF;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,SAAS;CACV;AACD;;EAEE;AACF;EACE,sBAAsB;CACvB",file:"detail.vue",sourcesContent:["/**\n* 字体模块\n*/\n.font_color_212121 {\n  color: #212121;\n}\n/**\n* 文档流模块\n*/\n.pos_r {\n  position: relative;\n}\n.pos_a {\n  position: absolute;\n}\n.pos_f {\n  position: fixed;\n}\n.pos_f_top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n/*\n* vux x-header\n*/\n.noticeDetail .show {\n  white-space: pre-wrap;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=24.2fda3c75ce81410f8843.js.map