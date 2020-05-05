import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import Home from "./modules/Home.js";
import Task from "./modules/Task.js";

export default new Vuex.Store({
  state: {
    oldurl:'/home'  //返回路由上一级
  },
  mutations: {},
  actions: {},
  modules: {
    Home,
    Task
  }
});
