<template lang="jade">
.block.intro
  h2
    | I&nbsp;
    a(href="http://bukwild.com") build websites
    | , craft
    a(href="http://thelucre.com") indie games
    | , and design
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

h2
  color white
  font-size 4rem
  font-style italic
  max-width 650px
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
