<template>
  <div id="app" class="main">
    <div class="content">
      <div class="title">
        哈哈哈
      </div>
      <div class="name"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped>
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: bold;
  color: red;
  background: gainsboro;
}

.content {
  position: relative;
  display: flex;
  font-family: "Al Bayan", serif;
  font-weight: bold;
  color: red;
}

.content .title {
  position: absolute;
  box-sizing: border-box;
  font-weight: bold;
  color: gold;
  user-select: unset;
  background: red;
}

.content .name {
  position: relative;
  display: inline-block;
  background: red;
}
</style>
