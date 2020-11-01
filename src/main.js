import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import titleMixin from "./titleMixin";
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

Vue.mixin(titleMixin);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
