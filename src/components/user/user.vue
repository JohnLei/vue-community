<template>
  <div class="user">
    <div v-if="authorInfo">
    <div>
      <router-link to="/home" class="gohome">点击这里返回主页</router-link>
    </div>
    <div class="info">
      <div>用户：</div>
      <div>注册时间：</div>
    </div>
    <div class="warn">其他功能已在其他页面实现</div>
    </div>
    <div v-else>
      此用户不存在
    </div>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
.user {
  width: 960px;
  height: 400px;
  left: 20%;
  top: 30%;
  .gohome {
    color: #369219;
    font-size: 2em;
  }
  .info {
    font-size: 1.5em;
    margin: 1em 0 0 1em;
    color: #666;
  }
}
</style>
