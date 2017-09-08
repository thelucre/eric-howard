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

  @media(max-width mobile)
    text-align center

  img
    max-width rem(200px)
    max-height rem(40px)

    @media(max-width mobile)
      width 100%
      max-height initial

  .vv-visual
    display inline-block
    vertical-align middle

    margin-right rem(80px)
    margin-bottom rem(50px)

    @media(max-width desktop)
      margin-right rem(50px)
      margin-bottom rem(30px)

    @media(max-width mobile)
      margin 0 0 rem(30px) 0

      &:nth-of-type(odd)
        margin-right 4%

      &:nth-of-type(even)
        margin-left 4%

      width 40%

</style>
