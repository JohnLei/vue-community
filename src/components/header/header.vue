<template>
  <div class="header-wrapper">
    <div v-loading="loading" element-loading-background="rgb(28,97,50)" style="position:fixed;top: 1.5em;left: 50%;"></div>
    <el-row class="content">
      <el-col :span="20" class="left">
        <!-- logo -->
        <div>
          <span class="logo">
            <img src="./logo.png" alt="">
          </span>
          <span class="title">Vue.js</span>
        </div>
      </el-col>
      <el-col :span="4" class="right">
        <el-dropdown @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
            <!-- 导航图标 -->
            <span class="nav"></span>
          </span>
          <el-badge is-dot v-if="count"></el-badge>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/home">首页</el-dropdown-item>
            <el-dropdown-item command="/user" v-if="_ifLogin">个人中心</el-dropdown-item>
            <el-dropdown-item command="/news" v-if="_ifLogin">消息
              <el-badge :value="count" class="item" v-if="count"></el-badge>
            </el-dropdown-item>
            <el-dropdown-item command="/about">关于</el-dropdown-item>
            <el-dropdown-item command="exit" v-if="_ifLogin">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="login">
          <span class="login-in">登录</span>
          <span class="avatar">
            <router-link to="/user/">
              <img src="" alt="">
            </router-link>
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'v-header',
    inject: ['reload'],
    data () {
      return {
        
      }
    },
    // 生命钩子函数
    created () {

    },
    updated() {
      
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .header-wrapper {
    padding-left: 6em;
    height: 3.43em;
    line-height: 3.43em;
    background-color: #1c6132;
    .content {
      .left {
        .logo {
          display: inline-block;
          height: 2.81em;
          width: 2.81em;
          img {
            width: 100%;
            // height: 100%;
            vertical-align: middle;
          }
        }
        .title {
          margin-left: .5em;
          display: inline-block;
          color: #fff;
          font-weight: bold;
          font-size: 1.25em;
        }
      }
      .right {
        position: relative;
        .nav {
          width: 15px;
          height: 2px;
          display: inline-block;
          border-top: 6px double #eee;
          border-bottom: 2px solid #eee;
        }
        .login {
          display: inline-block;
          margin-left: 0.625em;
          color: #fff;
          height: 3.44em;
          line-height: 3.44em;
          .login-in {
            font-size: 0.7rem;
          }
          .avatar {
            display: inline-block;
            width: 2.5em;
            line-height: 1em;
            vertical-align: middle;
            img {
              width: 100%;
              border-radius: 0.325em;
            }
          }
        }
      }
    }
  }
</style>
