<template>
  <div class="home">
    <van-nav-bar :title="$route.name" left-arrow @click-left="onClickLeft" />

    <div class="demo">
      <van-tabs v-model="active" class="box" @click="onClick">
        <!-- 步骤1 -->
        <van-tab title="1 图文说明">
          <div class="content">
            <header>步骤说明</header>
            <p>1.在下面这条链接的“=”后面补充上自己的手机号码，然后作为一条链接点击做问卷调查。链接见下（长按文本可以复制链接）：http://www.meeduo.com/go.mdq?uid=19141&acode=SGtEzPek&pm1=</p>
            <p>2.进入按要求填写信息后提交</p>
            <div class="demo">
              <img src="../../assets/comp1.jpg" alt @click="a1" />
            </div>
          </div>
        </van-tab>
        <!-- 步骤1 end-->

        <!-- 步骤2 -->
        <van-tab title="2 文本输入">
          <div class="content">
            <header>步骤说明</header>
            <p>提交做题的手机号</p>
            <textarea
              onkeyup="this.value = this.value.substring(0,11)"
              class="input-text"
              rows
              cols
              placeholder="请输入内容"
            ></textarea>
            <van-divider />
            <header>示例文本</header>
            <p>13000000000</p>
          </div>
        </van-tab>
        <!-- 步骤2 end-->

        <!-- 步骤3 -->
        <van-tab title="3 图文说明">
          <div class="content">
            <header>步骤说明</header>
            <p>找里面一份通过率高时间短的做（必须要做一份问卷才能审核通过）</p>
            <div class="demo">
              <img src="../../assets/comp2.jpg" alt @click="a2" />
            </div>
          </div>
        </van-tab>
        <!-- 步骤3 end-->

        <!-- 步骤4 -->
        <van-tab title="4 提交图片">
          <div class="content">
            <header>步骤说明</header>
            <p>提交完成问卷的截图</p>
            <van-uploader v-model="fileList" multiple />
            <van-divider />
            <p>示例图片</p>
            <div class="demo">
              <img src="../../assets/comp3.jpg" alt @click="a3" />
            </div>
          </div>
        </van-tab>
        <!-- 步骤4 end-->
      </van-tabs>

      <van-button color="#ed6a0c" @click="next" v-show="display1" class="btn">下一步</van-button>
      <van-button color="#ed6a0c" @click="submit" v-show="display2" class="btn">提交任务</van-button>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      active: 0,
      value: "",
      display1: true,
      display2: false,
      fileList: [
        // { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: 'https://cloud-image', isImage: true }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home"); //返回home页面
    },
    // 下一步
    next() {
      this.active++;
      if (this.active >= 3) {
        this.active = 3;
        this.display1 = false;
        this.display2 = true;
      } else {
        this.display1 = true;
        this.display2 = false;
      }
    },
    // 提交任务
    submit() {
      this.$store.commit("addreview", {
        id: this.$route.query.id,
        taskimg: this.TaskLists[0].taskimg,
        title: this.TaskLists[0].title,
        money: this.TaskLists[0].money,
        remain: this.TaskLists[0].remain,
        time: this.TaskLists[0].time,
        examine: this.TaskLists[0].examine
      });
      // 这里先写死的 删除两条数据最后一条
      // this.TaskStatus.splice(1, 1);
      alert("提交成功");
    },
    // 对标题的点击
    onClick() {
      // console.log(this.active);
      if (this.active >= 3) {
        this.active = 3;
        this.display1 = false;
        this.display2 = true;
      } else {
        this.display1 = true;
        this.display2 = false;
      }
    },
    // 查看图片
    a1() {
      ImagePreview({
        images: [
          "http://img.jianzhimao.com/miaotask/comp/38157/7e03820da864484c5260e7a911197cd4.jpg"
        ],
        closeable: true
      });
    },
    a2() {
      ImagePreview({
        images: [
          "http://img.jianzhimao.com/miaotask/comp/38157/ac31ea483f2351773d0986a20e14e726.jpg"
        ],
        closeable: true
      });
    },
    a3() {
      ImagePreview({
        images: [
          "http://img.jianzhimao.com/miaotask/comp/38157/29e0509ed7b5814c1167afb70554f240.jpg"
        ],
        closeable: true
      });
    }
  },
  computed: {
    ...mapState({
      TaskLists: state => state.Task.TaskLists,
      TaskStatus: state => state.Task.TaskStatus
    })
  }
};
</script>

<style lang="scss">
.demo {
  position: relative;
  .box {
    .content {
      padding: 15px;
      background-color: white;
      textarea {
        min-height: 5.5rem;
        width: 100%;
        border: 1px solid #efefef;
        border-bottom: 0;
        background: #f7f7f7;
        margin-left: -5px;
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
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
    }
  }
  .btn {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
  }
}
</style>