<template>
  <div class="home">
    <van-nav-bar :title="$route.name" />

    <!-- 个人信息 -->
    <div class="user-poster">
      <img src="../assets/yonghu.jpg" alt />
      <p>{{ info.name }}</p>
    </div>

    <van-cell-group class="user-group">
      <van-cell icon="orders-o" title="我的任务" is-link @click="coup" />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="gold-coin-o" title="我的钱包" is-link @click="wallet" />
      <van-cell icon="service-o" title="我的客服" is-link @click="server" />
      <van-cell icon="contact" title="新手指引" is-link @click="help" />
      <van-cell icon="apps-o" title="意见反馈" is-link @click="feedback" />
      <van-cell icon="setting-o" title="注销" is-link @click="cancellation" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    };
  },
  methods: {
    coup() {
      this.$router.push("/task");
    },
    wallet() {
      this.$router.push("/my/wallet");
    },
    server() {
      this.$router.push("/my/cusserver");
    },
    help() {
      this.$router.push("/my/help");
    },
    feedback() {
      this.$router.push("/my/feedback");
    },
    cancellation() {
      localStorage.removeItem("login");
      this.$router.push("/login");
      return;
    }
  },
  created() {
    window.console.log("登录");
    if (!localStorage.login) {
      this.$router.push("/login");
    } else {
      this.$axios
        .get("/getdata", {
          params: {
            token: localStorage.login
          }
        })
        .then(req => {
          // console.log(req);
          this.info = req.data.result;
        });
    }
  }
};
</script>

<style lang="scss">
.user-poster {
  width: 100%;
  height: 48vw;
  display: block;
  text-align: center;
  background: url("../assets/beijing.jpg");
}
.user-poster img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  padding: 10px 0;
}
.user-poster p {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}
.user-group {
  margin-bottom: 15px;
}
</style>
