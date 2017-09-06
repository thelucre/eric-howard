<template lang="jade">
.logo-garden
  visual(v-for='logo in logos'
    v-bind:key='logo'
    v-bind:image='logo'
    load='visible'
    offset='200')

</template>

<script>
export default {
  name: 'logo-garden',

  props: ['logos'],

}
</script>

<style lang="stylus">

.logo-garden
  padding-left 0
  padding-right @padding-left

  img
    max-width rem(200px)
    max-height rem(40px)

  .vv-visual
    display inline-block
    vertical-align middle

    margin-right rem(80px)
    margin-bottom rem(50px)

</style>
