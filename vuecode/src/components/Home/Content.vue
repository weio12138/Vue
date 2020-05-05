<template>
  <div>
    <!-- 任务列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-row class="home_content" v-for="(item, i) in Tasks" :key="i" @click="jump(i)">
        <van-col span="4" class="home_content_img">
          <img :src="item.taskimg" alt />
        </van-col>
        <van-col span="18">
          <!-- 任务标题 -->
          <van-row class="home_content_title">
            <van-col span="18">
              <h3>{{item.title}}</h3>
              <!-- <p @click="get">home</p> -->
            </van-col>
            <van-col span="6">
              <h3 class="right money">{{item.money}}</h3>
            </van-col>
          </van-row>
          <!-- 剩余次数、时间、审核 -->
          <div class="home_content_desc">
            <span class="home_content_mar">剩余{{item.remain}}次</span>
            <span>{{item.time}}</span>
            <span class="right">{{item.examine}}审核</span>
          </div>
        </van-col>
      </van-row>
    </van-list>
    <!-- 任务列表 end-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      Tasks: [],
      loading: false,
      finished: false,
      num: 1
    };
  },
  methods: {
    jump(i) {
      this.$store.commit("add", {
        id: this.$route.query.id,
        taskimg: this.Tasks[i].taskimg,
        title: this.Tasks[i].title,
        money: this.Tasks[i].money,
        remain: this.Tasks[i].remain,
        time: this.Tasks[i].time,
        examine: this.Tasks[i].examine
      });

      this.$router.push({ path: "/taskdetails?id=" + this.Tasks[i].id });
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        let item = [
          {
            id: "task06",
            taskimg:
              "https://img.jianzhimao.com/static/m3/static/css/img/task/icon_register.png?v=43c1aa1",
            title: "高佣联盟APP注册",
            money: "2.39元",
            remain: "118",
            time: "2020-04-08",
            examine: "20小时"
          },
          {
            id: "task07",
            taskimg:
              "https://img.jianzhimao.com/static/m3/static/css/img/task/icon_other.png?v=ff3d8c4",
            title: "每日购物领券拿返利",
            money: "3.4元",
            remain: "116",
            time: "2020-04-13",
            examine: "13小时"
          },
          {
            id: "task08",
            taskimg:
              "https://img.jianzhimao.com/static/m3/static/css/img/task/icon_register.png?v=43c1aa1",
            title: "BTD注册领取佣金",
            money: "5.4元",
            remain: "203",
            time: "2020-04-13",
            examine: "24小时"
          }
        ];

        for (var i = 0; i < 3; i++) {
          this.Tasks.push(item[i]);
        }
        this.num++;
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.num > 3) {
          this.finished = true;
        }
      }, 3000);
    }
  },
  mounted() {
    // ajax请求后台数据
    this.$axios
      .get("/home")
      .then(response => {
        console.log(response.data);
        this.Tasks = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss">
img {
  display: block;
  width: 100%;
}
.right {
  float: right;
}
.money {
  color: red;
}
.home_content {
  margin-top: 5px;
  background: white;
  .home_content_img {
    margin: 10px;
    img {
      width: 90%;
      display: block;
    }
  }
  .home_content_title {
    margin: 10px 0;
    h3 {
      margin: 0;
    }
  }
  .home_content_desc {
    .home_content_mar {
      margin-right: 10px;
    }
    span {
      font-size: 0.9rem;
    }
  }
}
</style>