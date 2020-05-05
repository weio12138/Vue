<template>
  <div id="app">
    <router-view />
    <!-- 底部导航 -->
    <van-tabbar v-model="active" v-show="showactive" active-color="#ff9a40">
      <van-tabbar-item icon="wap-home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" replace to="/task">任务</van-tabbar-item>
      <van-tabbar-item icon="user-o" replace to="/my">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 底部导航end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      showactive: false
    };
  },
  created() {
    // 首次进入，进入导航页
    this.$router.push("/");
  },
  watch: {
    "$route.path": function(newValue, oldValue) {
      if (newValue == "/home" || newValue == "/task" || newValue == "/my" || newValue == "/login") {
        this.showactive = true;
      } else {
        this.showactive = false;
      }
      // window.console.log(newValue);
      // window.console.log(oldValue);

      // 修改xuex里面跳转路径
      this.$store.state.oldValue = oldValue;
    }
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  padding: 0px;
  background: #f2f2f2;
}
</style>
