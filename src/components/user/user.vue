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
import {getDateDiff} from '@/assets/js/date'  // 导入格式化时间的工具函数
export default {
  name: 'user',
  data () {
    return {
      authorInfo: ''
    }
  },
  // 生命钩子函数
  created() {
    this.getLoginInfo()
    this.getAuthorInfo()
  },
  methods: {
    getLoginInfo () { // 获取登录信息 解决markdown跳转导致vuex失效
      this.$store.state.ifLogin = true
      this.$store.state.token = sessionStorage.accesstoken
       this.$store.state.loginInfo = JSON.parse(sessionStorage.loginInfo)
       this.$store.state.userInfo = JSON.parse(sessionStorage.userInfo)
    },
    getAuthorInfo () {  // 获取角色信息
      this.axios({
        method: 'get',
        url: 'https://www.vue-js.com/api/v1/user/' + this.$route.params.id
      })
      .then (res => {
        // console.log(res)
        if (res.statusText === 'ok') {
          this.authorInfo = res.data.data
        }
      })
    }
  },
  // 过滤器
  filters: {
    getDateDiff (time) {
      return getDateDiff(new Date(time).getTime())
    }
  }
}
  
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
