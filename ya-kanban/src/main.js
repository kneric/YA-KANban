import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import Vuefire from 'vuefire'
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleLeft)
library.add(faAngleRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VeeValidate);
Vue.use(Vuetify);
Vue.use(Vuefire)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
