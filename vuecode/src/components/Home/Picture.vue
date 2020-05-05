<template>
  <div>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/banner1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/banner2.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/banner3.jpg" alt />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 轮播图 end-->

    <van-row class="home_cellimg">
      <van-col span="12">
        <img src="../../assets/view1.jpg" alt />
      </van-col>
      <van-col span="12">
        <van-row>
          <van-col span="24">
            <img src="../../assets/view2.jpg" alt />
          </van-col>
          <van-col span="24">
            <img src="../../assets/view3.jpg" alt />
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="scss">
// 轮播图
.swiper-container {
  width: 95%;
  height: 100%;
  margin-top: 5px;
  border-radius: 5px;
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
// 轮播图  end
.home_cellimg {
  background-color: #fff;
  margin-top: 10px;
  img {
    display: block;
    width: 100%;
  }
}
</style>