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
const bowl = (resolve) => {
  import('@/pages/bowl/index').then((module) => {
    resolve(module)
  })
}
const consult = (resolve) => {
  import('@/pages/consult/consult').then((module) => {
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
const myPost = (resolve) => {
  import('@/pages/user/my-post').then((module) => {
    resolve(module)
  })
}
const newPost = (resolve) => {
  import('@/pages/user/new-post').then((module) => {
    resolve(module)
  })
}
const postRelease = (resolve) => {
  import('@/pages/user/post-release').then((module) => {
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
const certificationIdCard = (resolve) => {
  import('@/pages/certification/idCard').then((module) => {
    resolve(module)
  })
}
const certificationBank = (resolve) => {
  import('@/pages/certification/bank').then((module) => {
    resolve(module)
  })
}
const certificationContact = (resolve) => {
  import('@/pages/certification/contact').then((module) => {
    resolve(module)
  })
}
const certificationCert = (resolve) => {
  import('@/pages/certification/cert').then((module) => {
    resolve(module)
  })
}
const wagesDetail = (resolve) => {
  import('@/pages/wages/detail').then((module) => {
    resolve(module)
  })
}
const result = (resolve) => {
  import('@/pages/result/index').then((module) => {
    resolve(module)
  })
}
const bowlDetail = (resolve) => {
  import('@/pages/bowl/detail').then((module) => {
    resolve(module)
  })
}
const notice = (resolve) => {
  import('@/pages/notice/index').then((module) => {
    resolve(module)
  })
}
const noticeList = (resolve) => {
  import('@/pages/notice/list').then((module) => {
    resolve(module)
  })
}
const noticeDetail = (resolve) => {
  import('@/pages/notice/detail').then((module) => {
    resolve(module)
  })
}
// 我的工资
const salary = (resolve) => {
  import('@/pages/salary/index').then((module) => {
    resolve(module)
  })
}
// 收益明细
const salaryProfit = (resolve) => {
  import('@/pages/salary/profit').then((module) => {
    resolve(module)
  })
}
// 收益明细
const salaryApply = (resolve) => {
  import('@/pages/salary/apply').then((module) => {
    resolve(module)
  })
}
// 收益明细
const aboutus = (resolve) => {
  import('@/pages/aboutus/index').then((module) => {
    resolve(module)
  })
}
// 会员购买
const vip = (resolve) => {
  import('@/pages/vip/index').then((module) => {
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
          meta: {keepAlive: true}
        },
        {
          path: '/bowl',
          name: 'bowl',
          component: bowl,
          meta: {keepAlive: true}
        },
        {
          path: '/consult',
          name: 'consult',
          component: consult
        },
        {
          path: '/user',
          name: 'user',
          component: user
        }
      ]
    },
    {
      path: '/certification',
      name: 'certification',
      component: certification
    },
    {
      path: '/certification/idCard',
      name: 'certificationIdCard',
      component: certificationIdCard
    },
    {
      path: '/certification/bank',
      name: 'certificationBank',
      component: certificationBank
    },
    {
      path: '/certification/contact',
      name: 'certificationContact',
      component: certificationContact
    },
    {
      path: '/certification/cert',
      name: 'certificationCert',
      component: certificationCert
    },
    {
      path: '/user/myPost',
      name: 'my-post',
      component: myPost
    },
    {
      path: '/user/newPost',
      name: 'new-post',
      component: newPost
    },
    {
      path: '/user/postRelease',
      name: 'post-release',
      component: postRelease
    },
    {
      path: '/wages/detail',
      name: 'wagesDetail',
      component: wagesDetail
    },
    {
      path: '/result',
      name: 'result',
      component: result
    },
    {
      path: '/bowl/detail',
      name: 'bowlDetail',
      component: bowlDetail
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    },
    {
      path: '/notice/list',
      name: 'noticeList',
      component: noticeList
    },
    {
      path: '/notice/detail',
      name: 'noticeDetail',
      component: noticeDetail
    },
    {
      path: '/salary',
      name: 'salary',
      component: salary
    },
    {
      path: '/salary/profit',
      name: 'salaryProfit',
      component: salaryProfit
    },
    {
      path: '/salary/apply',
      name: 'salaryApply',
      component: salaryApply
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    }
  ]
})
