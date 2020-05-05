<template>
  <div>
    <!-- 任务标题 -->
    <!-- <div class="content" v-for="(item,i) in Tasks" :key="i"> -->
    <div class="content" v-for="item in Tasks" :key="item.id" :name="item.id">
      <van-row>
        <van-col span="18">
          <h3>{{item.title}}</h3>
        </van-col>
        <van-col span="6">
          <h3 class="orange">{{item.money}}</h3>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="16">
          <p>截止日期:2020-05-03</p>
        </van-col>
        <van-col span="8">
          <p>审核:{{item.examine}}</p>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="16">
          <p>重复执行:否</p>
        </van-col>
        <van-col span="8">
          <p>剩余:{{item.remain}}次</p>
        </van-col>
      </van-row>
      <van-notice-bar :scrollable="false">平均审核用时{{item.examine}}</van-notice-bar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      Tasks: state => state.Task.TaskLists
    })
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 5px 0;
}
span {
  background-color: #ed6a0c;
  color: white;
  padding: 0 10px;
  border-radius: 20px;
}
.content {
  background: white;
  margin-bottom: 10px;
  padding: 10px;
  .orange {
    color: #ed6a0c;
  }
}
</style>