<template>
  <div class="home">
    <van-nav-bar :title="$route.name" left-arrow @click-left="onClickLeft" />
    <div class="main_cont">
      <textarea
        onkeyup="this.value = this.value.substring(0,200)"
        placeholder="您好！为了给您提供更好的服务，我们需要收集您的宝贵意见。对此，表示衷心感谢！（200字以内）"
        class="feed_text"
        v-model="value"
      ></textarea>
      <div class="feed_btn">
        <button class="feed_sub" @click="onClick">
          <span>提交</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一级
    },
    onClick() {
      if (this.value != "") {
        Toast({
          message: "感谢您的宝贵意见，我们会及时处理，谢谢"
        });
        this.value = ''
      } else {
        Toast({
          message: "请您输入您的意见，谢谢"
        });
      }
    }
  }
};
</script>


<style lang="scss">
.main_cont {
  padding: 10px;
  background-color: white;
  .feed_text {
    width: 100%;
    height: 400px;
    font-size: 14px;
    border: 0;
  }
  .feed_btn {
    text-align: center;
    .feed_sub {
      background-color: #ed6a0c;
      color: white;
      border: 0;
      outline: 0;
    }
  }
}
</style>