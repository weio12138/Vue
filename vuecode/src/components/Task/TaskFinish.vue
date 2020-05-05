<template>
  <div>
    <van-tab title="已结束">
      <!-- 没有接受任何任务时显示图片 -->
      <div class="task-list" v-show="showtaskimg">
        <img src="../../assets/mao.png" alt />
        <p>暂无任何任务</p>
        <van-button type="primary" size="large" color="red" plain @click="coup">去做任务</van-button>
      </div>
      <!-- 没有接受任何任务时显示图片 end-->
    </van-tab>
  </div>
</template>

<script>
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
      this.showtaskimg = true;
    }
  }
};
</script>