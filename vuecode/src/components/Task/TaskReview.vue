<template>
  <div>
    <van-tab title="审核中">
      <!-- 没有接受任何任务时显示图片 -->
      <div class="task-list" v-show="showtaskimg">
        <img src="../../assets/mao.png" alt />
        <p>暂无任何任务</p>
        <van-button type="primary" size="large" color="red" plain @click="coup">去做任务</van-button>
      </div>
      <!-- 没有接受任何任务时显示图片 end-->

      <!-- 显示接收任务的情况 -->
      <van-row class="task_content" v-for="(item,i) in TaskReview" :key="i">
        <van-col span="3" class="task_img">
          <img :src="item.taskimg" alt />
        </van-col>
        <van-col span="18" class="task_text">
          <div>{{item.title}}</div>
          <div>
            <span class="task_orange">{{item.money}}</span>
            <span>剩余{{item.remain}}次</span>
            <span>{{item.examine}}审核</span>
          </div>
        </van-col>
        <van-col span="24" class="task_footer">
          <van-divider />
          <p>审核中</p>
          <div class="task_btn">确定</div>
        </van-col>
      </van-row>
      <!-- 显示接收任务的情况 end-->
    </van-tab>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      showtaskimg: false
    };
  },
  methods: {
    // 跳转路由
    coup() {
      this.$router.push("/home");
    }
  },
  created() {
    // 如果登录了 当前没有任务 提示去接取任务
    if (localStorage.login) {
      // 任务存在就显示任务
      if (this.TaskReview.length) {
        this.showtaskimg = false;
      } else {
        this.showtaskimg = true;
      }
    } else {
      this.showtaskimg = false;
    }
  },
  computed: {
    ...mapState({
      TaskReview: state => state.Task.TaskReview
    })
  }
};
</script>