<template>
  <div class="hello">
    <van-button type="primary">主要按钮11</van-button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
