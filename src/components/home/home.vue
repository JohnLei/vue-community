<template>
  <div class="home">
    <div class="left">
      <topic />
    </div>
    <div class="right">
      <asides></asides>
      <div class="create-Topic">
        <span>发布话题</span>
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
        
      }
    },
    methods: {

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
