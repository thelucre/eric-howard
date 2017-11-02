<template>
  <div id="app" :class="{ready: ready}" style="opacity: 0;">
    <div id="main" v-show="ready">
      <router-view></router-view>
      <site-footer></site-footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return { ready: false }
  },

  mounted() {
    setTimeout(this.setReady ,150);
  },

  methods: {
    setReady() {
      this.ready = true
    }
  }

}
</script>

<style lang="stylus">
#app 
  opacity 0

  &.ready 
    opacity 1 !important
</style>
