import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Teatro from './components/dashboard/teatro.vue'
import Espectaculos from './components/dashboard/espectaculos.vue'
Vue.use(Router)
Vue.config.productionTip = false

var router = new Router({
  routes: [
    {
      path: '/espectaculos',
      component: Espectaculos
    },
    {
      path: '/teatro',
      component: Teatro
    }
  ]
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
