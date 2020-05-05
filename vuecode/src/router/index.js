import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"; //首页
import Searchsome from "../views/Searchsome.vue"; //搜索页

import Task from "../views/Task.vue"; //我的任务
import My from "../views/My.vue"; //个人中心
import TaskDetails from "../views/TaskDetails.vue"; //任务详情
import BootPage from "../views/BootPage.vue"; //引导页
import AdverPage from "../views/AdverPage.vue"; //广告页

// Taskdetails下的路由
import TaskSteps from "../views/Taskdetails/TaskSteps.vue"; //任务步骤

// My下的路由
import Help from "../views/My/Help.vue"; //新手指引
import CusServer from "../views/My/CusServer.vue"; //我的客服
import Feedback from "../views/My/Feedback.vue"; //意见反馈
import Wallet from "../views/My/Wallet.vue"; //我的钱包

import Register from "../views/Register.vue"; //注册
import Login from "../views/Login.vue"; //登录

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "引导页",
    component: BootPage
  },
  {
    path: "/home",
    name: "首页",
    component: Home
  },
  {
    path: "/task",
    name: "我的任务",
    component: Task
  },
  {
    path: "/my",
    name: "个人中心",
    component: My
  },
  {
    path: "/taskdetails",
    name: "任务详情",
    component: TaskDetails
  },
  {
    path: "/adverpage",
    name: "广告页",
    component: AdverPage
  },
  {
    path: "/taskdetails/tasksteps",
    name: "任务步骤",
    component: TaskSteps
  },
  {
    path: "/my/help",
    name: "新手指引",
    component: Help
  },
  {
    path: "/my/cusserver",
    name: "我的客服",
    component: CusServer
  },
  {
    path: "/my/feedback",
    name: "意见反馈",
    component: Feedback
  },
  {
    path: "/my/wallet",
    name: "我的钱包",
    component: Wallet
  },
  {
    path: "/register",
    name: "用户注册",
    component: Register
  },
  {
    path: "/login",
    name: "账号登录",
    component: Login
  },
  {
    path: "/searchsome",
    name: "搜索更多",
    component: Searchsome
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;