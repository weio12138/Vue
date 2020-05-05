<template>
  <div>
    <!-- 任务说明 -->
    <div class="content">
      <h4 class="task">任务说明</h4>
      <div class="box">
        <p>1.在链接的“=”后面补充上上自己的手机号码，然后作为一条链接点击做问卷调查，链接见步骤一；</p>
        <p>2.进入按要求填写信息后提交</p>
        <p>3.找里面一份通过率高时间短的做（必须要做一份问卷才能审核通过）。</p>
        <p>4.提交第一步链接最后的手机号码即可</p>
      </div>
      <div class="box">
        <p>注意：有效行为定义： 注册成功并邮件激活，真实有效。需要成功完成一份问卷</p>
        <p>单用户单手机单IP地址只能参与一次，发现重复参与概无奖励。</p>
      </div>
    </div>
  </div>
</template>

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
  .task {
    margin: 0;
    padding-left: 20px;
    position: relative;
  }
  .task::after {
    content: "";
    display: block;
    width: 3px;
    height: 12px;
    background-color: #ed6a0c;
    position: absolute;
    left: 5px;
    top: 5px;
  }
  .box {
    margin-bottom: 10px;
  }
}
</style>