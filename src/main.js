import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import { vueBaberrage } from 'vue-baberrage'
import messages from './languages'

Vue.use(vueBaberrage)
Vue.use(VueI18n)
Vue.config.productionTip = false

console.log(messages)
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
