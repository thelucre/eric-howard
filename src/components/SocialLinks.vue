<template lang="jade">
.social-links
  a.icon-linkedin(href='https://www.linkedin.com/in/ericmhoward/' target='_blank')
  a.icon-twitter(href='https://twitter.com/theLucre' target='_blank')
  a.icon-github(href='https://github.com/thelucre' target='_blank')
  a.icon-instagram(href='https://www.instagram.com/thelucre/' target='_blank')
  a.icon-email(href='mailto:howard.eric.m@gmail.com' target='_blank')

</template>

<script>
export default {
  name: 'social-links',
}
</script>

<style lang="stylus" scoped>
.social-links
  margin-top 4rem
  a
    color white
    text-decoration none
    font-size 2rem
    display inline-block
    margin 0 1rem
    opacity 0.8
    transition transform 0.2s ease, opacity 0.2s ease, text-shadow .4s ease

    &:hover,
    &:active
      opacity 1
      transform scale(1.25) rotate(-6deg)
      text-shadow 0 0 1rem rgba(black, 0.1)

    &:first-of-type
      margin-left 0
      
    &:last-of-type
      margin-right 0
</style>
