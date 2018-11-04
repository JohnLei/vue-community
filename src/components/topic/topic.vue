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
          <li>
            <span class="avatar">img</span>
            <span class="count">条数</span>
            <span class="top">置顶</span>
            <span class="good">精华</span>
            <span class="other-tab">内容</span>
            <!-- <router-link to=""></router-link> -->
            <span class="time">时间</span>
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
 export default {
   data () {
     return {
       currentPage: 1
     }
   },
   methods: {
     handleCurrentChange (val) {

     },
     handleSelect (key) {

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
          float: left;
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
