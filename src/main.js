import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios"
import VueAxios from "vue-axios"
import VueCookies from "vue-cookies"
import MetaInfo from 'vue-meta-info'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)
Vue.use(VueCookies)
Vue.$cookies.config('7d')
Vue.use(MetaInfo)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
