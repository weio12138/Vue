<template>
  <div>
    <!-- 完成任务人数 -->
    <div class="tasknum_content">
      <!-- 标题 -->
      <div class="tasknum_header">
        <h4 class="task">完成任务</h4>
        <span class="text">已有7人完成任务</span>
      </div>

      <!-- 完成任务人的名字 时间 -->
      <div class="tasknum_box">
        <div class="tasknum_smallbox" v-for="(item, i) in lists" :key="i">
          <!-- 图片 -->
          <div class="tasknum_smallbox_img">
            <img src="../../assets/money.png" alt />
          </div>
          <!-- 文字内容盒子 -->
          <div class="tasknum_smallbox_content">
            <p class="tasknum_smallbox_name">{{item.name}}</p>
            <div class="tasknum_smallbox_des">
              <span>任务报酬</span>
              <a class="orange">2.90元</a>
              <span class="right">{{item.time}}</span>
            </div>
          </div>
          <!-- 文字内容盒子 end-->
        </div>
      </div>
      <!--完成任务人的名字 时间 end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          name: "石*",
          time: "02-18"
        },
        {
          name: "张*雪",
          time: "02-18"
        },
        {
          name: "满*",
          time: "02-22"
        },
        {
          name: "赵*天",
          time: "02-24"
        },
        {
          name: "叶良*",
          time: "02-25"
        },
        {
          name: "李*",
          time: "02-28"
        },
        {
          name: "王*鱼",
          time: "03-05"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.tasknum_content {
  background: white;
  margin-bottom: 10px;
  padding: 10px;
  position: relative;
  .orange {
    color: #ed6a0c;
  }
  // 标题
  .tasknum_header {
    .task {
      margin: 0;
      padding-left: 20px;
      position: relative;
      display: inline-block;
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
    span.text {
      background-color: #ed6a0c;
      color: white;
      padding: 0 10px;
      border-radius: 20px;
      margin-left: 20px;
    }
  }
  // 标题 end

  .tasknum_box {
    background-color: #fafafa;
    margin: 10px;
    padding: 10px 10px 0 10px;

    .tasknum_smallbox {
      overflow: hidden;
      height: 48px;
      line-height: 48px;
      margin-bottom: 5px;
      .tasknum_smallbox_img {
        width: 40px;
        float: left;
        image {
          width: 100%;
        }
      }
      .tasknum_smallbox_content {
        margin-left: 50px;
        .tasknum_smallbox_name {
          margin: 2px;
          height: 20px;
          line-height: 20px;
        }
        .tasknum_smallbox_des {
          margin: 2px;
          height: 20px;
          line-height: 20px;
          span {
            margin-right: 5px;
          }
          .right {
            float: right;
          }
        }
      }
    }
  }
}
</style>