<template>
  <div class="home">
    <van-nav-bar :title="$route.name" left-arrow @click-left="onClickLeft" />
    <img src="../../assets/help1.png" alt class="img1" />
    <div class="content">
      <div class="box">
        <h2 class="demo orange">产品介绍</h2>
        <img src="../../assets/help2.png" alt class="img2" />
        <p>这是一种新的兼职方式，您按要求提交相关图文后即可领取“工资”。比如是体验一款APP或者关注一个公众号等等。</p>
      </div>
      <ul class="box">
        <!-- Q1 -->
        <li>
          <h2 class="demo orange">常见问题</h2>
          <h4>
            <span class="tag">Q1</span>怎样提现
          </h4>
          <p>1、任务提交后，会进入审核状态中，由商家进行审核处理，审核完任务后，任务佣金就会到账到账号钱包里，累计账号钱包满20元后可以提现。</p>
          <p class="orange">APP请到【个人中心】>【我的钱包】进行提现。</p>
          <p class="orange">手机端网页，请进入【列表页/更多任务】，进入【我的任务】，点击【右上角】进入钱包，进行提现。</p>
          <p>2、钱包金额满20元即可提现，首次提现需要绑定支付宝，完成绑定就可以提现。</p>
          <p>3、提现一般1个工作日内到账（节假日可能略延迟），直接发放到对应的支付宝账户上。</p>
        </li>
        <!-- Q2 -->
        <li>
          <h4>
            <span class="tag">Q2</span>为什么申请任务超过2小时显示已过期或被驳回后无法再重新申请的？
          </h4>
          <p>在任务超过2个小时已过期或任务被驳回后，在原来申请的任务界面是无法重新申请的，需要重新回到任务界面，找回之前的任务标题点击进行重新申请即可。</p>
        </li>
        <!-- Q3 -->
        <li>
          <h4>
            <span class="tag">Q3</span>为什么做了任务，奖金没拿到？
          </h4>
          <p>任务完成提交后是进入审核状态中，由商家在规定的时间里（最长时间为72小时）进行审核处理，审核通过后才会自动结算佣金到账号钱包里。</p>
        </li>
        <!-- Q4 -->
        <li>
          <h4>
            <span class="tag">Q4</span>为什么提现不了、提现不成功或被驳回的？
          </h4>
          <p>钱包余额满20元才可以提现到支付宝，提现时间预计在工作日1-24小时内（节假日会有延迟，不超过48小时）；</p>
          <p>
            首次提现需要设置支付密码和绑定支付宝，
            <span class="orange">支付宝姓名必须与支付宝实名一致，否则影响提现不成功或驳回。</span>
          </p>
          <p>在我的钱包右上角点击【设置】按钮可以更改或绑定支付宝账号，也可更改支付密码。</p>
        </li>
        <!-- Q5 -->
        <li>
          <h4>
            <span class="tag">Q5</span>为什么提交截图后仍提示有步骤未完成不能提交？
          </h4>
          <p>
            提示有步骤完成不能提交是前面有步骤没有按照要求完成，如任务步骤中的
            <span class="orange">链接按钮未点击</span>，认真阅读任务的提示，根据每个步骤要求提交图片和文字，就可以完成提交。
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一级
    }
  }
};
</script>

<style lang="scss" scoped>
.img1 {
  width: 100%;
}
.img2 {
  width: 78%;
  display: block;
  margin: 1rem auto;
}
.orange {
  color: #ff9a40;
}
.content {
  margin: 10px;
  .box {
    margin-bottom: 20px;
    p {
      margin: 10px 0;
      font-size: 0.9rem;
    }
    .demo {
      margin: 0;
      padding-left: 20px;
      position: relative;
    }
    .demo::after {
      content: "";
      display: block;
      width: 5px;
      height: 20px;
      background-color: #ff9a40;
      position: absolute;
      left: 5px;
      top: 6px;
    }
    .tag {
      color: #ff9a40;
      margin-right: 0.4rem;
    }
  }
}
</style>