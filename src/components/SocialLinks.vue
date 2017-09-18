<template lang="jade">
.social-links(v-in-viewport.once="0")
  span
    a.icon-linkedin(href='https://www.linkedin.com/in/ericmhoward/' target='_blank')
  span
    a.icon-twitter(href='https://twitter.com/theLucre' target='_blank')
  span
    a.icon-github(href='https://github.com/thelucre' target='_blank')
  span
    a.icon-instagram(href='https://www.instagram.com/thelucre/' target='_blank')
  span
    a.icon-email(href='mailto:howard.eric.m@gmail.com' target='_blank')

</template>

<script>
export default {
  name: 'social-links',
}
</script>

<style lang="stylus">
.social-links
  margin-top 4rem

  span
    display inline-block
    margin 0 1rem

    transform scale(.8) translateY(1rem)
    display inline-block
    opacity 0

    for num in (1..5)
      &:nth-of-type({num})
        transition all 0.5s (1.4s + .1s * num) bounce-out

    &:first-of-type
      margin-left 0

    &:last-of-type
      margin-right 0

  a
    color white
    text-decoration none
    font-size 2rem
    display inline-block
    opacity 0.8
    transition transform 0.2s ease, opacity 0.2s ease, text-shadow .4s ease

    &:hover,
    &:active
      opacity 1
      transform scale(1.25) rotate(-6deg)
      text-shadow 0 0 1rem rgba(black, 0.1)

  &.in-viewport
    span
      opacity 1
      transform scale(1) translateY(0)
</style>
