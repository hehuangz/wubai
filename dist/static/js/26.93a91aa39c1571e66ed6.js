webpackJsonp([26],{Ehk7:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,"/**\n* 字体模块\n*/\n.font_color_212121 {\n  color: #212121;\n}\n/**\n* 文档流模块\n*/\n.pos_r {\n  position: relative;\n}\n.pos_a {\n  position: absolute;\n}\n.pos_f {\n  position: fixed;\n}\n.pos_f_top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n/*\n* vux x-header\n*/\n.login .logo {\n  width: 86px;\n  height: 86px;\n  border-radius: 2px;\n  margin-top: 46px;\n  margin-bottom: 10px;\n}\n.login .logo img {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.login .btn-captcha {\n  width: 86px;\n  height: 30px;\n  border-radius: 4px;\n  line-height: 32px;\n}\n.login .btn-login {\n  margin: 40px auto 10px;\n}\n","",{version:3,sources:["/Users/hehuan/Documents/my/私活/code/wubai/src/pages/login/index.vue"],names:[],mappings:"AAAA;;EAEE;AACF;EACE,eAAe;CAChB;AACD;;EAEE;AACF;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,SAAS;CACV;AACD;;EAEE;AACF;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,aAAa;EACb,eAAe;CAChB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,uBAAuB;CACxB",file:"index.vue",sourcesContent:["/**\n* 字体模块\n*/\n.font_color_212121 {\n  color: #212121;\n}\n/**\n* 文档流模块\n*/\n.pos_r {\n  position: relative;\n}\n.pos_a {\n  position: absolute;\n}\n.pos_f {\n  position: fixed;\n}\n.pos_f_top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n/*\n* vux x-header\n*/\n.login .logo {\n  width: 86px;\n  height: 86px;\n  border-radius: 2px;\n  margin-top: 46px;\n  margin-bottom: 10px;\n}\n.login .logo img {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.login .btn-captcha {\n  width: 86px;\n  height: 30px;\n  border-radius: 4px;\n  line-height: 32px;\n}\n.login .btn-login {\n  margin: 40px auto 10px;\n}\n"],sourceRoot:""}])},jT7l:function(n,t,e){"use strict";function a(n){e("n7a7")}Object.defineProperty(t,"__esModule",{value:!0});var i=e("Xxa5"),o=e.n(i),s=e("exGp"),c=e.n(s),l=e("M9A7"),r=e("ZhW5"),A=e.n(r),p=e("hxP8"),h=(p.a,{name:"login",components:{comHeader:p.a},data:function(){return{phone:"",captcha:"",isCaptcha:!1,time:59,isAllow:!0}},methods:{handleCaptcha:function(){var n=this,t={tel:{name:"手机号",type:"validMobile",value:this.phone,required:!0}};this.$utils.dataValidityCheck(t)&&(this.isCaptcha=!0,this._onTime(),A()(function(){return n._onCaptcha()},1e3))},_onCaptcha:function(){var n=this;return c()(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e={phone:n.phone,smsType:"8805"},Object(l.a)(e).then(function(t){var e=t.data,a=e.code;e.data,e.msg;1===a&&n.$vux.toast.text("验证码发送成功")}).catch(function(n){console.log("error",n)});case 2:case"end":return t.stop()}},t,n)}))()},handleLogin:function(){var n=this,t={tel:{name:"手机号",type:"validMobile",value:this.phone,required:!0},code:{name:"验证码",type:"validPostalCode",value:this.captcha,required:!0}};if(this.$utils.dataValidityCheck(t))return this.isAllow?void A()(function(){return n._onLogin()},1e3):this.$vux.toast.text("请先同意用户协议")},_onLogin:function(){var n=this;return c()(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e={loginName:n.phone,code:n.captcha,source:"3"},Object(l.b)(e).then(function(t){var e=t.data,a=e.code;e.data,e.msg;1===a&&(n.$vux.toast.text("登录成功"),n.$router.push("/certification"))}).catch(function(){n.$vux.toast.text("网络出错，请稍后重试")});case 2:case"end":return t.stop()}},t,n)}))()},_onTime:function(){var n=this,t=setInterval(function(){--n.time<=0&&(clearInterval(t),n.isCaptcha=!1,n.time=59)},1e3)}}}),u=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login g-flex g-fd-c g-ai-c"},[e("com-header",{attrs:{title:"登录"}}),n._v(" "),n._m(0),n._v(" "),e("div",{staticClass:"g-c-666666 g-fs-16 g-m-b-15"},[n._v("伍佰账单")]),n._v(" "),e("div",{staticClass:"g-width g-bs-bb"},[e("mt-field",{attrs:{label:"手机号",placeholder:"请输入您的手机号",type:"number",attr:{maxlength:11}},model:{value:n.phone,callback:function(t){n.phone=t},expression:"phone"}}),n._v(" "),e("mt-field",{attrs:{label:"验证码",placeholder:"请输入您的验证码",attr:{maxlength:6}},model:{value:n.captcha,callback:function(t){n.captcha=t},expression:"captcha"}},[n.isCaptcha?e("button",{staticClass:"btn-captcha g-btn g-bg-cccccc"},[n._v("重新获取("+n._s(n.time)+")")]):e("button",{staticClass:"btn-captcha g-btn g-bg-orange",on:{click:n.handleCaptcha}},[n._v("获取验证码")])])],1),n._v(" "),e("button",{staticClass:"btn-login g-btn-orange-l",on:{click:n.handleLogin}},[n._v("登录")]),n._v(" "),e("div",{staticClass:"g-fs-14 g-c-999999 g-flex g-ai-c"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.isAllow,expression:"isAllow"}],staticStyle:{width:"16px",height:"16px"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.isAllow)?n._i(n.isAllow,null)>-1:n.isAllow},on:{change:function(t){var e=n.isAllow,a=t.target,i=!!a.checked;if(Array.isArray(e)){var o=n._i(e,null);a.checked?o<0&&(n.isAllow=e.concat([null])):o>-1&&(n.isAllow=e.slice(0,o).concat(e.slice(o+1)))}else n.isAllow=i}}}),n._v("我已阅读并同意《用户协议》\n  ")])],1)},g=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"logo g-bg-orange"},[e("img",{attrs:{src:"",alt:""}})])}],d={render:u,staticRenderFns:g},C=d,m=e("VU/8"),v=a,x=m(h,C,!1,v,null,null);t.default=x.exports},n7a7:function(n,t,e){var a=e("Ehk7");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("05e61ec8",a,!0,{})}});
//# sourceMappingURL=26.93a91aa39c1571e66ed6.js.map