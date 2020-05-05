<template>
  <div class="home">
    <van-nav-bar :title="$route.name" />

    <van-cell-group class="logingroup">
      <van-field
        placeholder="请输入用户名"
        v-model="username"
        clearable
        label="用户名"
        right-icon="question-o"
        @click-right-icon="$toast('请输入字母或数字')"
      />
      <van-field placeholder="请输入密码" v-model="password" type="password" clearable label="密码" />
    </van-cell-group>
    <div class="login_btn">
      <van-button size="large" color="#fe7418" class="btn" @click="getlogin">登录</van-button>
    </div>
    <div class="login_btn">
      <van-button size="large" color="#fe7418" class="btn" @click="getregister">注册</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    getlogin() {
      window.console.log("登录");
      // ajax请求后台登录API功能
      this.$axios
        .get("/login", {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(response => {
          console.log(response);
          //   把token存储cookie或localStorage
          if (response.data.code == 200) {
            let token = response.data.result.token;
            localStorage.login = token;
            this.$router.push("/my");
          } else {
            Toast.fail("登录失败");
          }
        });
    },
    getregister() {
      this.$router.push("/register");
    }
  }
};
</script>

<style lang="scss">
.logingroup {
  margin-top: 20px;
}
.login_btn {
  margin-top: 20px;
  text-align: center;
  .btn {
    width: 90%;
    border-radius: 20px;
  }
}
</style>