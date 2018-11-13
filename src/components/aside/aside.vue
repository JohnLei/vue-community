<template>
 <div class="author">
   <div class="title"></div>
   <div class="content">
    <div class="avatar">
      <router-link :to="'/user/'+author.loginname">
        <img :src="author.avatar_url" alt="">
      </router-link>
      <div>{{author.loginname}}</div>
      <div>积分: {{author.score}}</div>
    </div>
    <!-- 折叠面板 -->
    <el-collapse accordion class="collapse">
        <el-collapse-item title="收藏" name="1">
          <div v-if="author.collect_topics.length === 0">无</div>
          <div v-else>
            <div v-for="(topic,index) in author.collect_topics" :key="index" class="link">
              <router-link :to="{path: '/topicdetail', query: {id: topic.id }}">{{topic.title}}</router-link>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="最近参与的话题" name="2">
          <div v-if="author.recent_replies.length === 0">无</div>
          <div v-else>
            <div v-for="(topic,index) in author.recent_replies" :key="index" class="link">
              <router-link :to="{path: '/topicdetail', query: {id: topic.id }}">{{topic.title}}</router-link>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="最近发布的文章" name="3">
          <div v-if="author.recent_topics.length === 0">无</div>
          <div v-else>
            <div v-for="(topic,index) in author.recent_topics" :key="index" class="link">
              <router-link :to="{path: '/topicdetail', query: {id: topic.id }}">{{topic.title}}</router-link>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
   </div>
 </div> 
</template>

<script>
 export default {
   props: ['author'],
   computed: {
     loginName () {
       return this.$store.state.loginInfo.loginname
     }
   }
 } 
</script>

<style lang="scss" scoped>

</style>
