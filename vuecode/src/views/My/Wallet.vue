<template>
  <div class="home">
    <van-nav-bar :title="$route.name" left-arrow @click-left="onClickLeft" />

    <!-- 钱包主体 -->
    <div class="wallet_top">
      <p class="tit">当前余额(元)</p>
      <div class="con">
        <div class="ye">0.00</div>
        <div class="tx_btn">提现</div>
      </div>
    </div>
    <!-- 钱包主体 end-->

    <!-- 支出收入明细 -->
    <van-tabs v-model="active" color="#fe7418">
      <van-tab title="收入明细">
        <div class="income">
          <img src="../../assets/nomoney.png" alt />
          <p>你还没有收入明细</p>
        </div>
      </van-tab>
      <van-tab title="支出明细">
        <div class="income">
          <img src="../../assets/nomoney.png" alt />
          <p>你还没有支出明细</p>
        </div>
      </van-tab>
    </van-tabs>
    <!-- 支出收入明细 end-->

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一级
    }
  }
};
</script>

<style lang="scss">
img {
  display: block;
  width: 100%;
}
.van-nav-bar .van-icon {
  color: #ed6a0c;
}
// 钱包主体
.wallet_top {
  padding: 15px;
  background: #fe7418;
  color: white;
  .con {
    position: relative;
    .ye {
      font-size: 1.7rem;
    }
    .tx_btn {
      position: absolute;
      right: 0;
      top: 4px;
      width: 3rem;
      height: 1.5rem;
      line-height: 1.5rem;
      text-align: center;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 3px;
      font-size: 0.9rem;
    }
  }
}
// 钱包主体 end

// 支出收入明细
.income {
  margin: 0 auto;
  width: 50%;
  p {
    text-align: center;
    color: #a5a5a5;
  }
}
// 支出收入明细 end
</style>