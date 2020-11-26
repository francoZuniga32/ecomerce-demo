import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAudio from 'vue-audio-better'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAudio);