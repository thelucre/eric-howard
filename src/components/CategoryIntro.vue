<template lang="jade">
.block.category-intro

  h2.heading {{ title }}

  .content
    slot

</template>

<script>
export default {
  name: 'category-intro',

  props: ['title', 'content']
}
</script>

<style lang="stylus" scoped>
.category-intro
  //
h2
  font-size 100px
  position relative
  display inline-block

  &:after
    content ' '
    background purple
    height 3px
    position absolute
    bottom 0
    left -2000px
    right 0

p
  font-style italic
  max-width 80%

</style>
