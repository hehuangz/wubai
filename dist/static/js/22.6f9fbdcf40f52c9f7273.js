webpackJsonp([22],{PBnP:function(t,n,e){"use strict";function a(t){e("h9FO")}Object.defineProperty(n,"__esModule",{value:!0});var i=e("hxP8"),s=(i.a,{name:"mt-post",components:{comHeader:i.a},data:function(){return{myPost:{pageNum:1,pageSize:10,total:2,pages:1,list:[{id:2,userId:8,userName:"18357250336",title:"我是标题",content:"我是正文",image:"http://pcxmz350k.bkt.clouddn.com/user/post/1537797200116.png",createTime:"2018-09-24 21:53:20",orderIndex:0,state:1},{id:2,userId:8,userName:"18357250336",title:"我是标题我是标题我是标题我是标题我是标题",content:"我是正文",image:"http://pcxmz350k.bkt.clouddn.com/user/post/1537797200116.png",createTime:"2018-09-24 21:53:20",orderIndex:0,state:1}],isFirstPage:!0,isLastPage:!0,hasPreviousPage:!1,hasNextPage:!1}}}}),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my-post"},[e("com-header",{attrs:{title:"每日帖子"}}),t._v(" "),e("ul",{staticClass:"my-post-ul"},t._l(t.myPost.list,function(n){return e("li",{staticClass:"my-post-li g-bs"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.image,expression:"item.image"}],staticClass:"left-img"}),t._v(" "),e("div",{staticClass:"right-text"},[e("div",{staticClass:"g-width"},[e("div",{staticClass:"title space_ellipsis"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"createTime"},[t._v(t._s(n.createTime))])])])])})),t._v(" "),e("div",{staticClass:"g-fixed-bottom g-width g-m-tb-10 g-flex g-ai-c g-jc-c g-fs-14"},[e("button",{staticClass:"g-btn-orange-l",on:{click:function(n){t.$router.push({name:"new-post"})}}},[t._v("新建帖子")])])],1)},A=[],l={render:o,staticRenderFns:A},p=l,r=e("VU/8"),m=a,d=r(s,p,!1,m,"data-v-38b0f4a6",null);n.default=d.exports},h9FO:function(t,n,e){var a=e("tpQz");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("cdd14ec6",a,!0,{})},tpQz:function(t,n,e){n=t.exports=e("FZ+f")(!0),n.push([t.i,"/**\n* 字体模块\n*/\n.font_color_212121[data-v-38b0f4a6] {\n  color: #212121;\n}\n/**\n* 文档流模块\n*/\n.pos_r[data-v-38b0f4a6] {\n  position: relative;\n}\n.pos_a[data-v-38b0f4a6] {\n  position: absolute;\n}\n.pos_f[data-v-38b0f4a6] {\n  position: fixed;\n}\n.pos_f_top[data-v-38b0f4a6] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n/*\n* vux x-header\n*/\n.my-post[data-v-38b0f4a6] {\n  height: 100%;\n  color: #999;\n}\n.my-post .my-post-ul[data-v-38b0f4a6] {\n  width: 100%;\n}\n.my-post .my-post-ul .my-post-li[data-v-38b0f4a6] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  padding: 0 .14rem;\n  box-sizing: border-box;\n  width: 100%;\n  height: 1.6rem;\n  margin: 10px 0;\n  background-color: #fff;\n}\n.my-post .my-post-ul .my-post-li .left-img[data-v-38b0f4a6] {\n  width: 2.56rem;\n  height: 1.58rem;\n}\n.my-post .my-post-ul .my-post-li .right-text[data-v-38b0f4a6] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  width: 60%;\n}\n.my-post .my-post-ul .my-post-li .right-text .title[data-v-38b0f4a6] {\n  font-size: .3rem;\n  color: #666;\n  font-weight: bold;\n}\n.my-post .my-post-ul .my-post-li .right-text .createTime[data-v-38b0f4a6] {\n  font-size: .28rem;\n}\n","",{version:3,sources:["/Users/hehuan/Documents/my/私活/code/wubai/src/pages/user/my-post.vue"],names:[],mappings:"AAAA;;EAEE;AACF;EACE,eAAe;CAChB;AACD;;EAEE;AACF;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,SAAS;CACV;AACD;;EAEE;AACF;EACE,aAAa;EACb,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,uCAAuC;UAC/B,+BAA+B;EACvC,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,WAAW;CACZ;AACD;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB",file:"my-post.vue",sourcesContent:["/**\n* 字体模块\n*/\n.font_color_212121[data-v-38b0f4a6] {\n  color: #212121;\n}\n/**\n* 文档流模块\n*/\n.pos_r[data-v-38b0f4a6] {\n  position: relative;\n}\n.pos_a[data-v-38b0f4a6] {\n  position: absolute;\n}\n.pos_f[data-v-38b0f4a6] {\n  position: fixed;\n}\n.pos_f_top[data-v-38b0f4a6] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n/*\n* vux x-header\n*/\n.my-post[data-v-38b0f4a6] {\n  height: 100%;\n  color: #999;\n}\n.my-post .my-post-ul[data-v-38b0f4a6] {\n  width: 100%;\n}\n.my-post .my-post-ul .my-post-li[data-v-38b0f4a6] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  padding: 0 .14rem;\n  box-sizing: border-box;\n  width: 100%;\n  height: 1.6rem;\n  margin: 10px 0;\n  background-color: #fff;\n}\n.my-post .my-post-ul .my-post-li .left-img[data-v-38b0f4a6] {\n  width: 2.56rem;\n  height: 1.58rem;\n}\n.my-post .my-post-ul .my-post-li .right-text[data-v-38b0f4a6] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  width: 60%;\n}\n.my-post .my-post-ul .my-post-li .right-text .title[data-v-38b0f4a6] {\n  font-size: .3rem;\n  color: #666;\n  font-weight: bold;\n}\n.my-post .my-post-ul .my-post-li .right-text .createTime[data-v-38b0f4a6] {\n  font-size: .28rem;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=22.6f9fbdcf40f52c9f7273.js.map