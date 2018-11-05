<template>
  <div class="topic">
    <el-menu
    :default-active="'1'"
    mode="horizontal"
    background-color="#f6f6f6"
    text-color="#369219"
    active-text-color="#1C711D"
    @select="handleSelect"
    >
    <el-menu-item index="1">全部</el-menu-item>
      <el-menu-item index="2">精华</el-menu-item>
      <el-menu-item index="3">weex</el-menu-item>
      <el-menu-item index="4">分享</el-menu-item>
      <el-menu-item index="5">问答</el-menu-item>
      <el-menu-item index="6">招聘</el-menu-item>
    </el-menu>
    <transition name="fade">
      <div class="content">
        <ul>
          <li v-for="(item,index) in res" :key="index">
            <span class="avatar"><img :src="item.author.avatar_url" alt=""></span>
            <span class="count">{{item.reply_count}}/<i>{{item.visit_count}}</i></span>
            <span class="top" v-if="item.top">置顶</span>
            <span class="good" v-else-if="item.good">精华</span>
            <span v-else v-show="currentTab === 'all'" class="other-tab">{{tabCH[item.tab]}}</span>
            <router-link :to="{path: '/topicdetail', query: {id: item.id }}"><span class="title">{{item.title}}</span></router-link>
            <span class="time">{{item.last_reply_at | getDateDiff}}</span>
          </li>
        </ul>
        <div class="pagination">
           <el-pagination
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :current-page.sync = "currentPage"
            :total="1000"
            class="page">
          </el-pagination>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {getDateDiff} from '@/assets/js/date'
 export default {
   name: 'topic',
   data () {
     return {
       res: '',
       tab: ['','all','good','wexx','share','ask','job'], // 主题分类
       tabCH: {
         good: '精华',
         weex: 'weex',
         share: '分享',
         ask: '问答',
         job: '招聘'
       },
       currentTab: 'all',  // 选中全部分类时显示为哪种分类
       list: false,  // tab 切换时的过度效果
       totalPage: 0, // 显示的总页数 
       showPage: true,
       currentPage: 1
     }
   },
   // 生命钩子函数
   created () {
    //  this.getTotalPage()
    this.getTopic()
   },
   updated () {

   },
   methods: {
     getTotalPage () {  // 获取总页数
        this.axios({
          method: 'get',
          url: 'https://www.vue-js.com/api/v1/topics/?&tab=' + this.currentTab
        })
        .then(res => {
          // console.log(res)
          this.totalPage = res.data.data.length
        })
     },
     // 获取后台的数据
     getTopic (tab, page = 1, limit = 10) {
       this.showPage = false
       this.list = false
       this.$store.state.loading = true
       this.axios({
         method: 'get',
         url: 'https://www.vue-js.com/api/v1/topics/?page=' + page + '&tab' + tab + '&limit=' + limit + ''
       })
       .then(res => {
        //  console.log(res)
        this.$store.state.loading = false
        this.list = true
        this.showPage = true
        this.res = res.data.data
       })
     },
     handleCurrentChange (val) {
       this.getTopic(this.currentTab,val)
     },
     handleSelect (key) {
       this.getTopic(this.tab[key])
       this.currentTab = this.tab[key]
       this.currentPage = 1
     }
   },
    filters: {
      getDateDiff (time) {
        return getDateDiff(new Date(time).getTime())
      }
    }
 } 
</script>

<style lang="scss" scoped>
.topic {
  .el-menu-item {
    height: 3.125em;
    line-height: 3.125em;
  }
  .content {
    &.fade-enter,.fade-leave-active {
      opacity: 1;
      transition: all .5s linear;
    }
    &.fade-enter,.fade-leave-to {
      opacity: 0;
    }
    background-color: #fff;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    margin-bottom: 0.5em;
    ul {
      li {
        font-size: 0.875em;
        height: 2.14em;
        line-height: 2.14em;
        padding: 0.714em;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        cursor: pointer;
        &:hover {
          background-color: rgb(246, 246, 246);
        }
        .avatar {
          img {
            width: 2.14em;
            height: 2.14em;
            border-radius: 3px;
            vertical-align: middle;
          }
        }
        .count {
          display: inline-block;
          text-align: center;
          margin-left: 1em;
          width: 4em;
          color: #9e78c0;
          i {
            color: #b4b4b4;
          }
        }
        .top,.good {
          margin-left: 1em;
          background-color: #21611cc7;
          color: #fff;
          padding: 0.1em 0.5em;
          border-radius: 3px;
          font-size: 0.875em;
        }
        .other-tab {
          margin-left: 1em;
          background-color: #e5e5e5;
          color: #999;
          padding: 0.1em 0.5em;
          border-radius: 3px;
          font-size: 0.857em;
        }
        .title {
          display: inline-block;
          margin-left: 1em;
          max-width: 60%;
          word-wrap: normal;
          text-overflow: ellipsis;
          white-space: nowrap;
          vertical-align: bottom;
          overflow: hidden;
        }
        .time {
          float: right;
          margin-right: 1em;
          font-size: 0.875em;
          color: #777;
        }
      }
    }
    .pagination {
      padding: 1em 0 0.5em 0;
    }
  }
}
</style>
