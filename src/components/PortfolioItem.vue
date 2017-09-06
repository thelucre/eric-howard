<template lang="jade">
.block.portfolio-item

  .column
    h3(v-if="!logo") {{ title }}
    visual.logo(v-if="logo"
      v-bind:image="logo")

    p.content(v-html='copy')

    p.link(v-if="link")
      a.hoverable.hoverable-light(:href="link.url" target="_blank") {{ link.text }}

  .column
    visual(v-if='images'
      v-for='image in images'
      v-bind:image='image'
      v-bind:key='image'
      load='visible'
      offset='200')

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

      &:last-of-type
        width 60%

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

  .vv-image
    width 100%

</style>
