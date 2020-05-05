<template>
  <div>
    <div class="home_header">
      <van-row>
        <!--   搜索部分 -->
        <van-col span="20" class="home_search">
          <van-icon name="search" class="icon" />
          <router-link to="searchsome" tag="span" class="name">大家都在搜：注册</router-link>
        </van-col>
        <!-- 搜索部分 end -->

        <van-col span="3" class="home_icon">
          <van-icon name="contact" color="#fe7418" class="home_fonticon2" size="26px" />
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.home_header {
  height: 46px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #eee;
  .home_icon {
    position: relative;
    .home_fonticon2 {
      position: absolute;
      top: 10px;
      left: 50%;
      margin-left: -13px;
    }
  }

  //   搜索部分
  .home_search {
    height: 38px;
    border: 1px solid #cccccc;
    margin: 4px 0px 4px 10px;
    background: #fff;
    position: relative;
    color: #ccc;
    font-size: 16px;
    .icon {
      position: absolute;
      top: 11px;
      left: 8px;
    }
    .name {
      margin-left: 30px;
      height: 38px;
      line-height: 38px;
      display: block;
      text-align: left;
    }
  }
  //   搜索部分 end
}
</style>