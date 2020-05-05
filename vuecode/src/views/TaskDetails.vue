<template>
  <div class="home">
    <van-nav-bar :title="$route.name" left-arrow @click-left="onClickLeft" />
    <!-- 任务标题 -->
    <TaskTitle />

    <!-- 任务说明 -->
    <TaskDes />

    <!-- 任务步骤 -->
    <TaskSteps />

    <!-- 完成任务人数 -->
    <TaskNum />

    <!-- 开始任务 -->
    <div class="btn">
      <div class="start_btn" @click="onClick" v-show="condition">开始任务</div>
      <div class="start_btn" v-show="!condition" @click="onClick2">进行中</div>
      <div class="start_btn" v-show="finish">已完成</div>
    </div>
    <!-- 开始任务 end-->
  </div>
</template>

<script>
import TaskTitle from "@/components/TaskDetails/TaskTitle.vue";
import TaskDes from "@/components/TaskDetails/TaskDes.vue";
import TaskSteps from "@/components/TaskDetails/TaskSteps.vue";
import TaskNum from "@/components/TaskDetails/TaskNum.vue";

import { Dialog } from "vant";
import { mapState } from "vuex";

export default {
  components: {
    TaskTitle,
    TaskDes,
    TaskSteps,
    TaskNum
  },
  data() {
    return {
      centerDialogVisible: false,
      condition: true,
      finish: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一级
    },
    // 开始任务
    onClick() {
      // 如果登录成功
      if (localStorage.login) {
        // 提示
        Dialog.confirm({
          title: "提示",
          message: "确定开始任务?请在两小时内完成",
          confirmButtonColor: "#ed6a0c", //确认按钮颜色
          cancelButtonColor: "#ed6a0c" //取消按钮颜色
        })
          .then(() => {
            // 确定
            this.$store.commit("addstatus", {
              id: this.$route.query.id,
              taskimg: this.Tasks[0].taskimg,
              title: this.Tasks[0].title,
              money: this.Tasks[0].money,
              remain: this.Tasks[0].remain - 1,
              time: this.Tasks[0].time,
              examine: this.Tasks[0].examine
            });

            this.$router.push("/taskdetails/tasksteps");
            // localStorage.two = true;
          })
          .catch(() => {
            // on cancel
          });
      } else {
        Dialog.confirm({
          title: "提示",
          message: "请先登录",
          confirmButtonColor: "#ed6a0c", //确认按钮颜色
          cancelButtonColor: "#ed6a0c" //取消按钮颜色
        })
          .then(() => {
            this.$router.push("/login");
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    // 进行中
    onClick2() {
      this.$router.push("/taskdetails/tasksteps");
    }
  },
  computed: {
    ...mapState({
      Tasks: state => state.Task.TaskLists
    })
  }
  // created() {
  //   // 点击按钮保存其状态
  //   if (localStorage.login) {
  //     if (localStorage.two) {
  //       this.condition = false;
  //     }
  //   } else {
  //     this.condition = true;
  //   }
  // }
};
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  padding: 0px;
  background: #f2f2f2;
}
#app {
  margin-bottom: 50px;
  position: relative;
}
.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  opacity: 0.85;
  z-index: 99;
  width: 100%;
  .start_btn {
    width: 100%;
    background: #ed6a0c;
    color: white;
    border-radius: 2rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
  }
}
</style>