<template>
  <div class="home">
    <div class="left">
      <topic />
    </div>
    <div class="right">
      <asides :author="user" v-if="user"></asides>
      <div class="create-Topic">
        <span @click="createTopic">发布话题</span>
      </div>
    </div>
  </div>
</template>

<script>
import topic from '@/components/topic/topic'
import asides from '@/components/aside/aside'
  export default {
    data () {
      return {
        user: ''
      }
    },
    // 生命钩子函数
    created() {
      this.getloginInfo()
    },
    methods: {
      getloginInfo () {
        this.axios({
          method: 'get',
          url: 'https://www.vue-js.com/api/v1/user/' + this.$store.state.loginInfo.loginname
        })
        .then(res => {
          console.log(res)
          this.user = res.data.data
          sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))
          this.$store.state.userInfo = res.data.data
        })
      },
      createTopic () {
        this.$router.push('/create')
      }
    },
    components: {
      topic,
      asides
    }
  }
</script>

<style lang="scss" scoped>
.home {
  margin-top: 1em;
  .left {
    width: 60%;
    margin-left: 6em;
    float: left;
  }
}
</style>
