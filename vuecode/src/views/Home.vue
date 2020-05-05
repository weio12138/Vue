<template>
  <div class="home">
    <!-- 头部 -->
    <Header />

    <!-- 图片 -->
    <Picture />

    <!-- 任务 -->
    <Content />
  </div>
</template>

<script>
import Header from "@/components/Home/Header.vue";
import Picture from "@/components/Home/Picture.vue";
import Content from "@/components/Home/Content.vue";

export default {
  components: {
    Header,
    Picture,
    Content
  }
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  width: 100%;
}
</style>