<template>
  <div class="home">
    <van-nav-bar :title="$route.name" />
    <van-tabs v-model="active" color="#fe7418">
      <!-- 登录按钮 -->
      <div @click="login" v-show="showlogin" class="task_login">
        <img src="../assets/mao.png" alt />
        <p>登录后可可查看我的任务</p>
        <van-button color="#FF9A40">登录</van-button>
      </div>
      <!-- 登录按钮 end-->

      <!-- 进行中 -->
      <TaskGoing />

      <!-- 审核中 -->
      <TaskReview />

      <!-- 已结束 -->
      <TaskFinish />
    </van-tabs>
  </div>
</template>

<script>
import TaskGoing from "@/components/Task/TaskGoing.vue";
import TaskReview from "@/components/Task/TaskReview.vue";
import TaskFinish from "@/components/Task/TaskFinish.vue";

export default {
  components: {
    TaskGoing,
    TaskReview,
    TaskFinish
  },
  data() {
    return {
      active: 0,
      showlogin: false
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    }
  },
  created() {
    // 没有登录 则提示登录信息
    if (!localStorage.login) {
      this.showlogin = true;
    }
  }
};
</script>

<style lang="scss">
.home {
  margin-top: 46px;
  margin-bottom: 50px;
  position: relative;
  .van-nav-bar {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    width: 100%;
  }
  img {
    display: block;
    width: 100%;
  }
  // 登录按钮
  .task_login {
    margin: 20px auto;
    text-align: center;
    color: #a5a5a5;
    width: 50%;
    button {
      width: 90%;
    }
  }
  // 登录按钮 end

  // 没有接受任何任务时显示图片
  .task-list {
    margin: 20px auto;
    width: 50%;
    text-align: center;
    color: #a5a5a5;
  }
  // 没有接受任何任务时显示图片 end

  // 显示接收任务的情况
  .task_content {
    background-color: white;
    margin: 10px 0;
    .task_img {
      margin: 10px;
    }
    .task_text {
      margin: 10px 10px 0 10px;
      div {
        margin-bottom: 10px;
      }
      span {
        margin-right: 15px;
        color: #919191;
        font-size: 14px;
      }
      .task_orange {
        color: #fe7418;
        font-size: 16px;
      }
    }
    .task_footer {
      position: relative;
      .van-divider {
        margin: 5px 0;
      }
      p {
        margin: 10px 0 10px 12px;
      }
      .task_btn {
        position: absolute;
        right: 0;
        top: 10px;
        width: 3.5rem;
        height: 1.3rem;
        line-height: 1.3rem;
        border-radius: 3px;
        border: 1px solid #bbb;
        text-align: center;
        margin-top: 6px;
        margin-right: 6px;
        font-size: 0.7rem;
      }
    }
  }
  // 显示接收任务的情况 end
}
</style>