<template>
  <div>
    <!-- 引导页 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/timg1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/timg2.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/timg3.jpg" alt />
          <button @click="go" class="animated zoomIn" v-show="flag">开启赚钱之旅</button>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    go() {
      localStorage.one = true;
      this.$router.push("/home");
    }
  },
  created() {
    // 执行引导页
    if (localStorage.one) {
      this.$router.push("/adverpage");
    } else {
      localStorage.one = true;
    }
  },
  mounted() {
    let _this = this;
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      on: {
        slideChangeTransitionStart: function() {
          _this.flag = false;
        },
        slideChangeTransitionEnd: function() {
          _this.flag = true;
          // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
        }
      }
    });
  }
};
</script>

<style lang="scss">
#app {
  margin: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  display: block;
}

.animated {
  width: 200px;
  height: 45px;
  line-height: 45px;
  border: 1px solid #c8efd4;
  background: #54cfd1;
  color: white;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 73px;
  margin: 0 auto;
}
</style>