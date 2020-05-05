import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// vant-ui框架
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import "animate.css"; //动画插件
import "swiper/dist/css/swiper.css";

// 数据请求
import axios from "axios";
// 统一配置全局路径
axios.defaults.baseURL = "http://192.168.43.169:3000";
Vue.prototype.$axios = axios;

import VueJsonp from "vue-jsonp";
Vue.use(VueJsonp);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
