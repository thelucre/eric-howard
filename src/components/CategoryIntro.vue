<template lang="jade">
.block.category-intro
  a.anchor(:name="anchor" v-bind:id="anchor")
  h2.heading {{ title }}

  .content
    slot

</template>

<script>
export default {
  name: 'category-intro',

  props: ['anchor', 'title', 'content']
}
</script>

<style lang="stylus">
.category-intro
  @media(min-width tablet + 1px)
    padding-left rem(60px)

  a.anchor
    display block
    position relative
    top rem(-60px)
    visibility hidden

  h2
    font-size 100px
    position relative
    display inline-block

    @media(max-width desktop-small)
      font-size 90px
    @media(max-width tablet)
      font-size 80px
    @media(max-width mobile)
      font-size 60px
    @media(max-width mobile-small)
      font-size 50px

    &:after
      content ' '
      background purple
      height 3px
      position absolute
      bottom 0
      left -2000px
      right rem(4px)

  p
    font-style italic
    max-width 80%
    margin-bottom 6rem

    @media(max-width tablet)
      max-width 95%
      margin-bottom 4rem

  a.hoverable-light
    font-weight normal

</style>
