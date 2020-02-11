import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入Vant
import Vant from "vant";
import "vant/lib/index.css";
//适配移动端
import "amfe-flexible";

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
