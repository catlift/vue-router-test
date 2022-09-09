import Vue from 'vue'
import App from './App.vue'

// 使用 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用 vue-router
import router from './router'

// 使用 vant
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(ElementUI)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
