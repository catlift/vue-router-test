import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'

// Home Children
import Goods from '@/components/homeChildren/MyGoods.vue'
import Settings from '@/components/homeChildren/MySettings.vue'
import User from '@/components/homeChildren/MyUser.vue'
import UserInfo from '@/components/homeChildren/MyUserInfo.vue'

// 路由权限
import PathRoot from '@/router/pathRoot.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/user',
    children: [
      // { path: '', redirect: 'user' },
      { path: 'goods', component: Goods },
      { path: 'settings', component: Settings },
      { path: 'user', component: User },
      { path: 'userInfo/:uid', component: UserInfo, props: true }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // 404 页面，必须放在最后
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (PathRoot.includes(to.path)) {
    const token = localStorage.getItem('login')
    if (!token) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
