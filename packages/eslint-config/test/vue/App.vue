<template>
  <div id="main" class="main">
    <span class="title">{{ title }}</span>
    <span> 内容</span>
  </div>
</template>

<script>
export default {
  name: "DemoApp",
  data() {
    return {
      title: "Title",
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;

  .title {
    color: palegoldenrod;
  }

  span {
    font-size: 30px;
  }
}
</style>
