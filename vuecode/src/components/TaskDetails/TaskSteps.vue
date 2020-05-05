<template>
  <div>
    <!-- 任务步骤 -->
    <div class="content">
      <h4 class="task">任务步骤</h4>
      <van-steps direction="vertical" :active="-1" active-color="#ed6a0c">
        <van-step>
          <p class="orange">步骤1</p>
          <p>1.在下面这条链接的“=”后面补充上自己的手机号码，然后作为一条链接点击做问卷调查。链接见下（长按文本可以复制链接）：http://www.meeduo.com/go.mdq?uid=19141&acode=SGtEzPek&pm1=</p>
          <p>2.进入按要求填写信息后提交</p>
          <div class="demo">
            <img src="../../assets/comp1.jpg" alt @click="a1" />
          </div>
        </van-step>
        <van-step>
          <p class="orange">步骤2</p>
          <p>提交步骤一“=”后面的手机号码【后台数据审核】</p>
          <p>13000000000</p>
        </van-step>
        <van-step>
          <p class="orange">步骤3</p>
          <p>找里面一份通过率高时间短的做（必须要做一份问卷才能审核通过）。</p>
          <div class="demo">
            <img src="../../assets/comp2.jpg" alt @click="a2" />
          </div>
        </van-step>
        <van-step>
          <p class="orange">步骤4</p>
          <p>提交完成问卷的截图</p>
          <div class="demo">
            <img src="../../assets/comp3.jpg" alt @click="a3" />
          </div>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
  data() {
    return {};
  },
  methods: {
    a1() {
      ImagePreview({
        images: ["http://img.jianzhimao.com/miaotask/comp/38157/7e03820da864484c5260e7a911197cd4.jpg"],
        closeable: true
      });
    },
    a2(){
        ImagePreview({
        images: ["http://img.jianzhimao.com/miaotask/comp/38157/ac31ea483f2351773d0986a20e14e726.jpg"],
        closeable: true
      });
    },
    a3(){
        ImagePreview({
        images: ["http://img.jianzhimao.com/miaotask/comp/38157/29e0509ed7b5814c1167afb70554f240.jpg"],
        closeable: true
      });
    }
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
  .demo {
    width: 5rem;
    height: 5rem;
    img {
      display: block;
      width: 4rem;
      height: 100%;
    }
  }
  .orange {
    font-size: 1.2rem;
    color: #ed6a0c;
  }

}
</style>