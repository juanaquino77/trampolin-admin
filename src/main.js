import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Router from 'vue-router'
import Login from './components/login/login.vue'
import Dashboard from './components/dashboard/dashboard.vue'
import Teatro from './components/dashboard/teatro.vue'
import Espectaculos from './components/dashboard/espectaculos.vue'
import Festivales from './components/dashboard/festivales.vue'
import Agenda from './components/dashboard/agenda.vue'
import Pagos from './components/dashboard/pagos.vue'
import Notificaciones from './components/dashboard/notificaciones.vue'
import Config from './components/dashboard/config.vue'
// import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Router)
Vue.use(Vuetify)
Vue.config.productionTip = false

var router = new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/espectaculos',
      component: Espectaculos
    },
    {
      path: '/teatro',
      component: Teatro
    },
    {
      path: '/festivales',
      component: Festivales
    },
    {
      path: '/agenda',
      component: Agenda
    },
    {
      path: '/pagos',
      component: Pagos
    },
    {
      path: '/notificaciones',
      component: Notificaciones
    },
    {
      path: '/config',
      component: Config
    }
  ]
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')