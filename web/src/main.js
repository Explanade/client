import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PortalVue from 'portal-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as VueGoogleMaps from "vue2-google-maps";
import VueDragDrop from 'vue-drag-drop';
 
Vue.use(VueDragDrop);
Vue.use(BootstrapVue)
Vue.use(PortalVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDzvFqUObtkQjtrHJ4MgmkJPb0N0S6kauM",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
