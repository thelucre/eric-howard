<template lang="jade">
.block.intro
  h2
    | I build&nbsp;
    a(href="http://bukwild.com") websites
    | , craft&nbsp;
    a(href="http://thelucre.com") indie games
    | , and design&nbsp;
    a(href="http://hsquest.com") installation artwork
    | .

</template>

<script>
export default {
  name: 'intro',
}
</script>

<style lang="stylus" scoped>
.intro
  padding 0 0 16rem 0
  text-align center

h2
  color white
  font-size 3.5rem
  font-style italic
  max-width 850px
  margin 0 auto
  font-weight normal

a
  color white
  display inline-block
  text-decoration none
  position relative
  transition all 0.2s ease

  &:after
    content ' '
    position absolute
    display block
    bottom 0.5rem
    left 0
    right 0
    border 1px solid white
    transition all 0.2s ease

  &:hover,
  &:active
    transform rotate(-3deg) scale(1.05)

    &:after
      opacity 0
</style>
