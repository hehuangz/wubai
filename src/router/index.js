import Vue from 'vue'
// import utils from './../util/utils'
import Router from 'vue-router'
Vue.use(Router)
const home = (resolve) => {
  import('@/pages/home/index').then((module) => {
    resolve(module)
  })
}
const wages = (resolve) => {
  import('@/pages/wages/index').then((module) => {
    resolve(module)
  })
}
const classify = (resolve) => {
  import('@/pages/classify/index').then((module) => {
    resolve(module)
  })
}
const cart = (resolve) => {
  import('@/pages/cart/index').then((module) => {
    resolve(module)
  })
}
const login = (resolve) => {
  import('@/pages/login/index').then((module) => {
    resolve(module)
  })
}
const user = (resolve) => {
  import('@/pages/user/index').then((module) => {
    resolve(module)
  })
}
const offline = (resolve) => {
  import('@/pages/offline/index').then((module) => {
    resolve(module)
  })
}
const tabbar = (resolve) => {
  import('@/components/base/tabbar').then((module) => {
    resolve(module)
  })
}
const certification = (resolve) => {
  import('@/pages/certification/index').then((module) => {
    resolve(module)
  })
}
export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/offline',
      name: 'offline',
      component: offline
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      /* Tabbar页面 */
      path: '/',
      component: tabbar,
      children: [
        {
          /* 发工资 */
          path: '/wages',
          name: 'wages',
          component: wages,
          meta: { keepAlive: true }
        },
        {
          /* 分类 */
          path: '/classify',
          name: 'classify',
          component: classify,
          meta: { keepAlive: true }
        },
        {
          path: 'cart',
          name: 'cart',
          component: cart
        },
        {
          path: 'user',
          name: 'user',
          component: user
        }
      ]
    },
    {
      path: '/certification',
      name: 'certification',
      component: certification
    }
  ]
})
