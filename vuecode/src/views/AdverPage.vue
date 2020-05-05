<template>
  <div>
    <!-- 广告页 -->
    <div class="adver-content">
      <div class="adver-img">
        <img src="../assets/timg.jpg" alt />
      </div>
      <div class="adver-content">
        <span>广告还剩时间:</span>
        <span>{{ num }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 2,
      settime: null
    };
  },
  created() {
    this.settime = setInterval(() => {
      if (this.num == 0) {
        this.$router.push("/home");
      } else {
        this.num--;
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.settime);
  }
};
</script>

<style lang="scss">
.adver-content {
  position: relative;
  .adver-img {
    width: 100%;
    height: 100%;
    background: #fff;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .adver-content {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
