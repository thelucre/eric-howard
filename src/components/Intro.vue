<template lang="jade">
.block.intro
  h2
    | I build&nbsp;
    a.hoverable(href="#web-development") websites
    | , craft&nbsp;
    a.hoverable(href="#indie-games") indie games
    | , and design&nbsp;
    a.hoverable(href="#installation-art") installation artwork
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

</style>
