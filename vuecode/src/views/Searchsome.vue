<template>
  <div>
    <van-row class="searchsome-header">
      <van-col span="2" @click="pathgo">
        <van-icon name="arrow-left" class="searchsome-leftbtn" />
      </van-col>
      <van-col span="18">
        <van-search placeholder="请输入搜索关键词" v-model="value" />
      </van-col>
      <van-col span="4" class="searchsome-search" @click="onSearch">
        <van-button color="#ed6a0c">搜索</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    pathgo() {
      this.$router.go(-1); //返回上一级
    },
    onSearch() {
      this.$router.push("/taskdetails?id=task01");
    }
  }
};
</script>

<style lang="scss">
.searchsome-header {
  background-color: #fff;
  .searchsome-leftbtn {
    display: block;
    line-height: 53px;
    font-size: 20px;
    text-align: center;
    margin-left: 10px;
    color: #ed6a0c;
  }
  .searchsome-search {
    line-height: 54px;
    margin-left: -5px;
  }
}
</style>