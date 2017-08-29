<template lang="jade">
.logo-garden
  img.logo(v-for='logo in logos'
    v-bind:src='logo')

</template>

<script>
export default {
  name: 'logo-garden',

  props: ['logos'],

}
</script>

<style lang="stylus" scoped>
.logo-garden
  padding-left 0
  padding-right @padding-left

  .logo
    max-width rem(200px)
    max-height rem(40px)
    vertical-align middle

    margin-right rem(80px)
    margin-bottom rem(50px)

</style>
