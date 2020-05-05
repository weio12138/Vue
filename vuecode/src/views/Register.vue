<template>
  <div class="home">
    <!-- 注册 -->
    <van-nav-bar :title="$route.name" left-arrow @click-left="onClickLeft"></van-nav-bar>

    <van-cell-group class="registergroup">
      <van-field
        v-model="username"
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('请输入字母或数字')"
      />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" clearable />
      <van-field v-model="password2" type="password" label="请确认密码" placeholder="请输入密码" clearable />
    </van-cell-group>

    <van-cell-group class="registergroup">
      <van-field v-model="code" label="邀请码" placeholder="请输入邀请码（可不填）" clearable />
    </van-cell-group>

    <div class="login_btn">
      <van-button size="large" color="#fe7418" class="btn" @click="getdata">注册</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: null,
      password: null,
      password2: null,
      code: null
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一级
    },
    getdata() {
      if (
        this.password == this.password2 &&
        this.password != null &&
        this.password2 != null &&
        this.username != null
      ) {
        this.$axios
          .get("/register", {
            params: {
              username: this.username,
              password: this.password
            }
          })
          .then(data => {
            window.console.log(data);
            if (data.data.code == 200) {
              Toast.success({
                message: "注册成功",
                duration: 2000,
                onOpened: () => {
                  this.$router.push("/login");
                }
              });
            }
          });
      } else {
        Toast.fail({
          message: "注册失败"
        });
      }
    }
  }
};
</script>

<style lang="scss">
.registergroup {
  margin-top: 20px;
}
</style>

