<template>
  <div class="wrapper">
    <div class="login">
      <el-popover
      placement="top-start"
      title="accesstoken的获取方法"
      width="200"
      trigger="hove"
      content="登录 vue.js 社区 选择 '设置' 并滑到底部可以看到 accesstoken">
      <el-input slot="reference" v-model="token" class="login-input" placeholder="请使用 accesstoken 登录"></el-input>
      </el-popover>
      <el-button type="success" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>

</style>
