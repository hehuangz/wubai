webpackJsonp([14],{HCYg:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"/**\n* 字体模块\n*/\n.font_color_212121 {\n  color: #212121;\n}\n/**\n* 文档流模块\n*/\n.pos_r {\n  position: relative;\n}\n.pos_a {\n  position: absolute;\n}\n.pos_f {\n  position: fixed;\n}\n.pos_f_top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n/*\n* vux x-header\n*/\n.contents .select {\n  border: none;\n  outline: none;\n  background: transparent;\n}\n","",{version:3,sources:["/Users/hehuan/Documents/my/私活/code/wubai/src/pages/certification/contact.vue"],names:[],mappings:"AAAA;;EAEE;AACF;EACE,eAAe;CAChB;AACD;;EAEE;AACF;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,SAAS;CACV;AACD;;EAEE;AACF;EACE,aAAa;EACb,cAAc;EACd,wBAAwB;CACzB",file:"contact.vue",sourcesContent:["/**\n* 字体模块\n*/\n.font_color_212121 {\n  color: #212121;\n}\n/**\n* 文档流模块\n*/\n.pos_r {\n  position: relative;\n}\n.pos_a {\n  position: absolute;\n}\n.pos_f {\n  position: fixed;\n}\n.pos_f_top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n/*\n* vux x-header\n*/\n.contents .select {\n  border: none;\n  outline: none;\n  background: transparent;\n}\n"],sourceRoot:""}])},U5DL:function(e,t,n){var a=n("HCYg");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("4bf98d63",a,!0,{})},ZZeV:function(e,t,n){"use strict";function a(e){n("U5DL")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("Xxa5"),s=n.n(o),i=n("exGp"),r=n.n(i),l=n("hxP8"),c=n("ZhW5"),p=n.n(c),u=n("PCJR"),h=(l.a,{name:"contents",components:{comHeader:l.a},data:function(){return{relationList:["朋友","同事","配偶","直系亲属"],relationship:"同事",name:"",phone:"",relationship1:"同事",name1:"",phone1:""}},beforeMount:function(){this._onData()},methods:{_onData:function(){var e=this;return r()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:Object(u.a)().then(function(t){var n=t.data,a=n.code,o=n.data;n.msg;1===a&&o&&o.userContacts&&(e.relationship=o.userContacts.relationship,e.name=o.userContacts.name,e.phone=o.userContacts.phone,e.relationship1=o.userContacts.relationship1,e.name1=o.userContacts.name1,e.phone1=o.userContacts.phone1)}).catch(function(){e.$vux.toast.text("网络出错，请稍后重试")});case 1:case"end":return t.stop()}},t,e)}))()},handleSave:function(){var e=this,t={name:{name:"紧急联系人1姓名",type:"validName",value:this.name,required:!0},phone:{name:"紧急联系人1手机号",type:"validMobile",value:this.phone,required:!0},name1:{name:"紧急联系人2姓名",type:"validName",value:this.name1,required:!0},phone1:{name:"紧急联系人2手机号",type:"validMobile",value:this.phone1,required:!0}};this.$utils.dataValidityCheck(t)&&p()(function(){return e._onSave()},1e3)},_onSave:function(){var e=this;return r()(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n={relationship:e.relationship,name:e.name,phone:e.phone,relationship1:e.relationship1,name1:e.name1,phone1:e.phone1},Object(u.c)(n).then(function(t){var n=t.data,a=n.code;n.data,n.msg;1===a&&(e.$vux.toast.text("保存成功"),e.$router.back(-1))}).catch(function(){e.$vux.toast.text("网络出错，请稍后重试")});case 2:case"end":return t.stop()}},t,e)}))()}}}),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contents"},[n("comHeader",{attrs:{title:"紧急联系人认证"}}),e._v(" "),n("div",{staticClass:"g-m-t-10 g-fs-16 g-bg-white"},[n("p",{staticClass:"g-title"},[e._v("紧急联系人1")]),e._v(" "),n("div",{staticClass:"g-bg-white g-width g-flex g-pd-lr-15 g-bs-bb g-fs-16 g-border-t-f0f0f0 g-height-48"},[n("div",{staticClass:"g-fs-0",staticStyle:{width:"105px"}},[e._v("与本人关系")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.relationship,expression:"relationship"}],staticClass:"select g-width g-block g-fs-16 g-pd-r-10 g-bs-bb",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.relationship=t.target.multiple?n:n[0]}}},e._l(e.relationList,function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))]),e._v(" "),n("mt-field",{attrs:{label:"姓名",placeholder:"请输入联系人姓名",type:"text",attr:{maxlength:10}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("mt-field",{attrs:{label:"手机号",placeholder:"请输入联系人手机号",type:"number",attr:{maxlength:11}},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),n("div",{staticClass:"g-m-t-10 g-bg-white"},[n("p",{staticClass:"g-title g-fs-16"},[e._v("紧急联系人2")]),e._v(" "),n("div",{staticClass:"g-bg-white g-width g-flex g-pd-lr-15 g-bs-bb g-fs-16 g-border-t-f0f0f0 g-height-48"},[n("div",{staticClass:"g-fs-0",staticStyle:{width:"105px"}},[e._v("与本人关系")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.relationship1,expression:"relationship1"}],staticClass:"select g-width g-block g-fs-16 g-pd-r-10 g-bs-bb",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.relationship1=t.target.multiple?n:n[0]}}},e._l(e.relationList,function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))]),e._v(" "),n("mt-field",{attrs:{label:"姓名",placeholder:"请输入联系人姓名",type:"text",attr:{maxlength:10}},model:{value:e.name1,callback:function(t){e.name1=t},expression:"name1"}}),e._v(" "),n("mt-field",{attrs:{label:"手机号",placeholder:"请输入联系人手机号",type:"number",attr:{maxlength:11}},model:{value:e.phone1,callback:function(t){e.phone1=t},expression:"phone1"}})],1),e._v(" "),n("div",{staticClass:"g-flex g-jc-c g-m-t-40 g-m-b-40"},[n("button",{staticClass:"g-btn-orange-l",on:{click:e.handleSave}},[e._v("保存")])])],1)},v=[],f={render:d,staticRenderFns:v},m=f,g=n("VU/8"),A=a,C=g(h,m,!1,A,null,null);t.default=C.exports}});
//# sourceMappingURL=14.ceeb96d7951241d390ec.js.map