<template lang="jade">

.block.portfolio-item

  .column.fade-up(v-in-viewport.once="-200")
    .heading
      h3(v-if="!logo") {{ title }}
      visual.logo(v-if="logo"
        v-bind:image="logo")

    p.content(v-html='copy')

    p.link(v-if="link")
      a.hoverable.hoverable-light(:href="link.url" target="_blank") {{ link.text }}

  .column
    visual.portfolio.fade-up.fade-up-late(v-if='images'
      v-in-viewport.once="-200"
      v-for='image in images'
      v-bind:image='image'
      v-bind:key='image')

</template>

<script>
export default {
  name: 'portfolio-item',

  props: ['title', 'logo', 'copy', 'link', 'images'],

}
</script>

<style lang="stylus">

.portfolio-item
  clearfix()

  .column
    @media(min-width tablet+1px)
      float left

      &:first-of-type
        width 35%
        margin-right 5%

        @media(max-width tablet-landscape)
          width 45%

      &:last-of-type
        width 60%

        @media(max-width tablet-landscape)
          width 50%
  h3
    font-size 50px

  .content
    margin-top rem(60px)

  p
    font-size 26px
    font-style italic

  .logo img
    max-width 200px
    max-height 110px
    width auto

    @media(max-width tablet)
      max-width 150px
      max-height 80px

  .vv-image
    width 100%

  .portfolio

    .vv-image
      border-radius rem(5px)
      overflow hidden

    &:not(:last-of-type)
      margin-bottom rem(20px)
</style>
