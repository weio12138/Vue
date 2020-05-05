<template>
  <div class="home">
    <van-nav-bar :title="$route.name" left-arrow @click-left="onClickLeft" />
    <van-row class="server">
      <van-col span="9">运营专属客服</van-col>
      <van-col span="10">
        加微信号:
        <b>yy-ser</b>
      </van-col>
      <van-col span="5">
        <van-button
          color="#ed6a0c"
          class="copy"
          data-clipboard-action="copy"
          data-clipboard-target="b"
          @click="onClick"
        >复制</van-button>
      </van-col>
    </van-row>

    <van-row class="server">
      <van-col span="9">提现专属客服</van-col>
      <van-col span="10">
        加微信号:
        <strong>tx-ser</strong>
      </van-col>
      <van-col span="5">
        <van-button
          color="#ed6a0c"
          class="copy"
          data-clipboard-action="copy"
          data-clipboard-target="strong"
          @click="onClick"
        >复制</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
// vue移动端点击复制文本内容
// npm install clipboard --save
import Clipboard from "clipboard";
import { Toast } from "vant";

export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一级
    },
    onClick() {
      // 复制功能
      var clipboard = new Clipboard(".copy");
      clipboard.on("success", function(e) {
        console.log(e);
        Toast({
          message: "复制成功"
        });
      });
      // 手机权限不支持复制功能
      clipboard.on("error", function(e) {
        console.log(e);
        // 释放内存
        // clipboard.destroy();
      });
    }
  }
};
</script>

<style lang="scss">
.server {
  padding: 10px;
  background-color: white;
  height: 75px;
  line-height: 75px;
  margin-bottom: 10px;
  font-size: 14px;
}
</style>