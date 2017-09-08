<template lang="jade">
a.link-banner(:href="link")
  .arrows.arrows-left
  .arrows.arrows-right
  .content
    slot

</template>

<script>
export default {
  name: 'link-banner',

  props: ['link']
}
</script>

<style lang="stylus">
.link-banner
  background white
  font-family 'Arial', sans-serif
  display inline-block
  padding rem(10px) rem(20px)
  position relative
  margin-top rem(50px)
  box-shadow 0 10px 30px rgba(black, 0.1)
  transition all .2s ease
  transform-origin center center
  cursor pointer
  gpu-cache()


  &:hover
    transform translateY(-5px) scale(1.03) rotate(-1deg)
    box-shadow 0 30px 40px rgba(black, 0.05)

  *
    color darken(purple, 10%)
    letter-spacing rem(1px)
    text-transform uppercase
    font-size 14px

    @media(max-width tablet)
      font-size 12px

    @media(max-width mobile)
      letter-spacing 0

  a
    font-weight bold
    margin-left 5px

  arrow-height = 20px

  .arrows
    display block
    position absolute
    top 0
    bottom 0

    &:before, &:after
      content ' '
      display block
      position absolute
      width 0
      height 0
      border-style solid

  .arrows-left
    left rem(-1 * arrow-height + 1px)

    &:before
      top 0
      border-width 0 rem(arrow-height) rem(arrow-height) 0
      border-color transparent white transparent transparent

    &:after
      bottom 0
      border-width 0 0 rem(arrow-height) rem(arrow-height)
      border-color transparent transparent white transparent

  .arrows-right
    right 1px

    &:before
      bottom 0
      border-width 0 rem(arrow-height) rem(arrow-height) 0
      border-color transparent transparent white transparent

    &:after
      top 0
      border-width 0 0 rem(arrow-height) rem(arrow-height)
      border-color transparent transparent transparent white
</style>
