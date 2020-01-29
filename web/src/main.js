import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PortalVue from 'portal-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as VueGoogleMaps from "vue2-google-maps";
import VueDragDrop from 'vue-drag-drop';
import GSignInButton from 'vue-google-signin-button';
import GAuth from 'vue-google-oauth2';
 
Vue.use(VueDragDrop);
Vue.use(BootstrapVue)
Vue.use(PortalVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDzvFqUObtkQjtrHJ4MgmkJPb0N0S6kauM",
    libraries: "places" // necessary for places input
  }
});

const gauthOption = {
  clientId: `179640782565-mdjej11jj9j61s5hrqnj1qjcsti699i7.apps.googleusercontent.com`,
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(GAuth, gauthOption)
// Vue.use(GSignInButton)
// new Vue(App).$mount('#app')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
