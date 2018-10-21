import vue from 'vue'
import axios from 'axios'
// console.log(API)
const CODE = 1
/*
 * 移动端 rem 设置 ---- iphone6 1rem === 50px
 * @param { String } grid ===> 将移动端设备宽度分成几份，默认7.5份
 */
const rem = grid => {
  let html = document.documentElement
  let equipmentWidth = html.getBoundingClientRect().width
  if (equipmentWidth > 640) {
    equipmentWidth = 640
  }
  html.style.fontSize = (equipmentWidth / grid) + 'px'
}

/*
 * 验证服务端响应状态
 * @param { Number } code ===> 服务端状态码
 * @param { String } msg ===> 服务端出错信息
 * @param { Boolean } true 代表服务端响应出错，false 反之
 */
function resErr (code, msg, error) {
  if (CODE !== code && code !== undefined) {
    vue.$vux.toast.text && vue.$vux.toast.text(msg)
    return true
  }

  return false
}
/*
  * @param {DOM Element } args[0] ===> 需要添加 className 的DOM 元素对象
  * @param { String } args[1] ===> 添加的 className
*/
function addClass (...args) {
    // 1.首先先获取该元素本身的类名 2.根据 空格切割 字符串
  let nameArr = args[0].className.split(' ')
    // 分析是否有相同的类名
  for (let i = 0, len = nameArr.length; i < len; i++) {
    if (nameArr[i] === args[1]) return false
  }
    // 3.将要添加的类名push到数据中
  nameArr.push(args[1])
    // 4.将数组转换为 字符串 5.给元素添加上类名
  args[0].className = nameArr.join(' ')
}

/*
  * @param {DOM Element | Array } args[0] DOM 元素 或者 元素集合 ps: 集合数据类型必须为 Array 不能为 类数组
  *
*/
function removeClass (...args) {
    // 有可能是一个 dom 对象，也有可能会是一个数组中装载DOM对象
    // 1.处理第args[0]为 dom 对象或者数组中装DOM对象的情况
  if (args[0] instanceof Array) {
      // args[0] 为数组
    for (let i = 0, len = args[0].length; i < len; i++) {
      let name = args[0][i].className.split(' ')
      for (let j = 0, jLen = name.length; j < jLen; j++) {
        if (args[1] === name[j]) {
            // 删除类名
          name.splice(j, 1)
          args[0][i].className = name.join(' ')
        }
      }
    }
  } else if (args[0] instanceof Object) {
      // args[0] 为单个DOM对象
      // 1.获取该DOM对象的className 2. 将类名字符串转为数组
    let name = args[0].className.split(' ')
    for (let i = 0, len = name.length; i < len; i++) {
      if (args[1] === name[i]) {
          // 删除类名
        name.splice(i, 1)
          // 删完之后返回到DOM对象上
        args[0].className = name.join(' ')
      }
    }
  }
}

/*
* @param { DOM Element} el ===> DOM 元素
* @return { Array } 返回一个 DOM 元素的 数组集合
*/
function siblings (el) {
    // 判断参数有没有传进来判断参数有没有传进来
  if (!el) return false
    // 先获取父级节点,再从父节点获取所有子节点
  let allChild = el.parentNode.children
  let arr = []
    // 进行元素对比
  for (let i = 0, len = allChild.length; i < len; i++) {
    if (el !== allChild[i]) arr.push(allChild[i])
  }
  return arr
}

/**
 * 本地存储
 * @parma { Function } set ===> 设置, 接收key、value
 * @param { Function } get ===> 获取，接收key, 返回 value, 注意：无值的时候会返回字符串格式的undefined
 * @param { Function } remove ===> 删除, 接收key, 无返回值
 */
const localData = (() => {
  return {
    hname: location.hostname ? location.hostname : 'localStatus',
    isLocalStorage: window.localStorage || false,
    dataDom: null,
    initDom: function () { // 初始化userData
      if (!this.dataDom) {
        try {
          this.dataDom = document.createElement('input') // 这里使用hidden的input元素
          this.dataDom.type = 'hidden'
          this.dataDom.style.display = 'none'
          // userData 为IE 浏览器
          this.dataDom.addBehavior('#default#userData') // 这是userData的语法
          document.body.appendChild(this.dataDom)
          var exDate = new Date()
          exDate = exDate.getDate() + 30
          this.dataDom.expires = exDate.toUTCString() // 设定过期时间
        } catch (ex) {
          return false
        }
      }
      return true
    },
    // 设置
    set: function (key, value) {
      if (this.isLocalStorage) {
        window.localStorage.setItem(key, value)
      } else {
        if (this.initDom()) {
          this.dataDom.load(this.hname)
          this.dataDom.setAttribute(key, value)
          this.dataDom.save(this.hname)
        }
      }
    },
    // 获取
    get: function (key) {
      if (this.isLocalStorage) {
        return window.localStorage.getItem(key)
      } else {
        if (this.initDom()) {
          this.dataDom.load(this.hname)
          return this.dataDom.getAttribute(key)
        }
      }
    },
    // 删除
    remove: function (key) {
      if (this.isLocalStorage) {
        localStorage.removeItem(key)
      } else {
        if (this.initDom()) {
          this.dataDom.load(this.hname)
          this.dataDom.removeAttribute(key)
          this.dataDom.save(this.hname)
        }
      }
    }
  }
})()

 // 解析useragent
function getUseragent () {
  var ua = navigator.userAgent
  if (ua.match(/(iPhone|Android)/i)) {
    if (ua.indexOf('wtsh_ios') > -1) {
      // window.alert('ios')
      return 'ios'
    } else if (ua.indexOf('wtsh_android') > -1) {
      // window.alert('android')
      return 'android'
    } else {
      return 'webapp'
    }
  } else {
    return 'pc'
  }
}

// 判断app还是外部0为外部，1是内部
function isInApp () {
  let type = getUseragent()
  if (type === 'ios' || type === 'android') {
    return 1
  } else {
    return 0
  }
}
// 得到uid和Token
function sendTkUid () {
  let info = {}
  info.action = 'getTkUid'
  toAppmessage(JSON.stringify(info))
}
/* 发送pay的请求 */
function pay (type, data) {
  let info = {
    action: 'pay',
    data: {
      'payType': type,
      'orderStr': data
    }
  }
  toAppmessage(JSON.stringify(info))
}
/* 修改密码 */
function modifyPwd () {
  let info = {}
  info.action = 'modifyPwd'
  toAppmessage(JSON.stringify(info))
}
/* 版本更新 */
function vUpdate () {
  let info = {}
  info.action = 'vUpdate'
  toAppmessage(JSON.stringify(info))
}
/* 最新反馈 */
function latestFeedback (tel) {
  let info = {}
  info.action = 'latestFeedback'
  info.data = {tel: tel}
  toAppmessage(JSON.stringify(info))
}
/* 退出登录 */
function loginOut () {
  let info = {}
  info.action = 'loginOut'
  toAppmessage(JSON.stringify(info))
}
// 登录
function login () {
  let info = {}
  info.action = 'login'
  toAppmessage(JSON.stringify(info))
}
/* 调取相机 */
function getCamera () {
  let info = {}
  info.action = 'getCamera'
  toAppmessage(JSON.stringify(info))
}
/* 广告位跳转 */
function adsUrl (url) {
  let msg = {
    'action': 'adsUrl',
    'url': url
  }
  toAppmessage(msg)
}
/* token失效 */
function tokenInvalid () {
  let info = {}
  info.action = 'tokenInvalid'
  if (isInApp()) { // 再app环境中
    toAppmessage(JSON.stringify(info))
  } else { // 不在app环境
    toLogin()
  }
}
/* 跳转去首页 */
function toLogin () {
  window.location.href = "/login"
}
/* 联系客服 */
function contactService () {
  let info = {}
  info.action = 'contactService'
  toAppmessage(JSON.stringify(info))
}
/* 联系顾问 */
function contactAdviser (tel, uid) {
  let info = {}
  info.action = 'contactAdviser'
  info.data = {
    tel: tel,
    uid: uid
  }
  toAppmessage(JSON.stringify(info))
}
/* 联系买家 */
function contactBuyer (tel, uid) {
  let info = {}
  info.action = 'contactBuyer'
  info.data = {
    tel: tel,
    uid: uid
  }
  toAppmessage(JSON.stringify(info))
}
/* 发送商品 */
function sendGood (goodName, goodImg, goodPrice, goodId, shopId, shopName) {
  let msg = {
    'goodName': goodName,
    'goodImg': goodImg,
    'goodPrice': goodPrice,
    'goodId': goodId,
    'shopId': shopId,
    'shopName': shopName
  }
  let info = {}
  info.action = 'sendGood'
  info.data = msg
  toAppmessage(JSON.stringify(info))
}

/** 分享 */
function shareGoodsInfo (title, description, webURL, thunImage) {
  let msg = {
    title: title,
    description: description,
    thunImage: thunImage,
    webURL: webURL
  }
  let info = {}
  info.action = 'shareGoodsInfo'
  info.data = msg
  toAppmessage(JSON.stringify(info))
}
/** 返回上一页 */
function backButton () {
  let info = {}
  info.action = 'backButton'
  toAppmessage(JSON.stringify(info))
}
/** 上传图片 */
function uploadImg () {
  let info = {}
  info.action = 'uploadImg'
  toAppmessage(JSON.stringify(info))
}
// 上传头像
function uploadAvator () {
  let info = {}
  info.action = 'uploadAvator'
  toAppmessage(JSON.stringify(info))
}
/* 发送订单 */
function sendOrder (message) {
  let info = {}
  info.action = 'sendOrder'
  info.data = message
  toAppmessage(JSON.stringify(info))
}
/* 给app端的封装信息 */
function toAppmessage (msg) {
  console.log(msg)
  if (getUseragent() === 'ios') {
    if (window.hasOwnProperty("webkit")) {
      window.webkit.messageHandlers && window.webkit.messageHandlers.WKMesesgaSignal.postMessage(msg)
    }
  } else if (getUseragent() === 'android') {
    native && native.callBackClient(msg)
  }
}

/* 底部tableBar消息 */
function sendMessage () {
  let info = {}
  info.action = 'sendMessage'
  toAppmessage(JSON.stringify(info))
}

/* 底部tableBar其他按钮 */
function otherButton () {
  let info = {}
  info.action = 'otherButton'
  toAppmessage(JSON.stringify(info))
}

/* 给app端添发送获取wifi消息 */
function getNetWorkType () {
  let info = {}
  info.action = 'netWorkType'
  toAppmessage(JSON.stringify(info))
}

function ajaxFn (url, data, method = 'post') {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: network(url),
      data: data
    }).then(({ data: { data, code, message } }) => {
      if (resErr(code, message)) return false
      resolve(data)
    }).catch(err => {
      vue.$vux.toast.text(err.message)
      reject(err)
    })
  })
}
// 判断本地有没有uid和token true代表用户已经登录，false代表没有
function getUidAndToken () {
  let uid
  let token
  uid = localData.get('uid')
  token = localData.get('token')
  if (uid && token) {
    return true
  } else {
    return false
  }
}

/**
 * --begin--
 * 表单验证
 */
const obj = {
  validNum: {
    regex: /^\d+(\.\d+)?$/,
    error: "请输入正确数字"
  },
  validInteger: {
    regex: /^[1-9]\d*$/,
    error: "请输入非负整数"
  },
  validEmail: {
    regex: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
    error: "邮箱格式不正确"
  },
  validTime: {
    regex: /\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}/,
    error: "时间格式不正确"
  },
  validId: {
    regex: /(^[0-9a-zA-Z]{6,}$)/, // 港澳台比较特殊
    error: "身份证号格式不正确"
  },
  validPrice: {
    regex: /^([1-9][\d]{0,10}|0)([.]?[\d]{1,10})?$/,
    error: "请输入正确金额"
  },
  validMobile: { // 手机号不做太严格的验证，主要后端
    regex: /^(13[0-9]|14[5|7]|15[0-9]|16[0-9]|17[1-9]|18[0-9]|19[0-9])\d{8}$/,
    error: "请填写正确的手机号码"
  },
  validPhone: {
    regex: /^(\(\d{3,4}\)|\d{3,4}(-|\s)?)?\d{7,8}(-\d{1,4})?$/,
    error: "请输入正确的电话号码"
  },
  validPostalCode: {
    regex: /^\d{6}$/,
    error: "请输入6位短信验证码"
  },
  validZipCode: {
    regex: /^\d{6}$/,
    error: "请输入6位邮政编码"
  },
  validWeChat: {
    regex: /^[a-zA-Z\d_-]{5,}$/,
    error: "请输入正确的微信号"
  },
  validName: {
    regex: /^[A-Za-z0-9\u4e00-\u9fa5_-]{1,}$/,
    error: "请不要输入特殊字符"
  },
  validBackNumber: {
    regex: /^([1-9]{1})(\d{10,18})$/,
    error: "请输入正确的银行卡号"
  }
}

function validity (rule) {
  return rule.required
  ? obj[rule.type].regex.test(rule.value)
  : rule.value === "" || obj[rule.type].regex.test(rule.value)
}

const dataValidity = (rules) => {
  let state = {
    status: !0
  }
  for (let i in rules) {
    let type = rules[i].type
    if (typeof obj[type] === "undefined") { // type输入错误
      state = {
        status: !1,
        error: rules[i].name + "的校验type有误",
        index: i
      }
      break
    } else if (rules[i].required && rules[i].value === "") { // 必填校验
      state = {
        status: !1,
        error: rules[i].name + "必填",
        index: i
      }
      break
    } else if (!validity(rules[i])) { // 正则校验
      state = {
        status: !1,
        error: obj[type].error,
        index: i
      }
      break
    }
  }
  return state
}
/**
 * 校验正则规则是否符合规范
 * @param {Object} rules 规则
 * @return {Boolean} true校验成功，false校验失败，toast信息
 */
const dataValidityCheck = (rules) => {
  const resultValidity = dataValidity(rules)
  if (!resultValidity.status) {
    vue.$vux.toast.text && vue.$vux.toast.text(resultValidity.error)
    return false
  }
  return true
}
// --over--
/**
 * 处理字符串中携带的参数
 * @param {string} name 参数
 * @param {string} url 整个字符串地址
 * @return {string}  返回value
 * @example getQuery('id','http://xx.com?id=1')  => 1
 * 注意，一定要有?号,才能拿到值
 */
const getQuery = (name = '', url = '') => {
  let match = /^[hH][tT][tT][pP]([sS]?):\/\/(\S+\.)+\S{2,}$/ // 匹配中文
  if (!match.test(url) || (url.indexOf('?') === -1)) return
  let search = url.split('?')[1]
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
  let r = search.match(reg)
  if (r != null) return unescape(r[2])
  return null
}

export default {
  isInApp,
  getUidAndToken,
  getUseragent,
  rem,
  resErr,
  localData,
  addClass,
  removeClass,
  siblings,
  ajaxFn,
  sendTkUid,
  pay,
  modifyPwd,
  loginOut,
  vUpdate,
  tokenInvalid,
  getNetWorkType,
  contactService,
  sendGood,
  sendMessage,
  otherButton,
  getCamera,
  shareGoodsInfo,
  contactAdviser,
  uploadImg,
  latestFeedback,
  sendOrder,
  backButton,
  login,
  uploadAvator,
  contactBuyer,
  dataValidity,
  dataValidityCheck,
  getQuery
}
