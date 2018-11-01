<template>
  <div id="app">
    <v-header />
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header'
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  components: {
    'v-header':header
  }
}
</script>

<style lang="scss" scoped>

</style>

