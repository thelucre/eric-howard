<template lang="jade">
.site-footer
  //----------------------------------------
    CONTACT
  //----------------------------------------
  category-intro(title="CONTACT"
    anchor="contact")
    .content
      p I'm open for freelance projects and always down to talk some shop! If you are looking for a mentor or mentee, I am available. I do my best to surround myself with big thinkers who want to teach and learn from one another.

    social-links

    .copyright &copy; {{ (new Date).getFullYear() }} Eric Howard

</template>

<script>
export default {
  name: 'site-footer',
}
</script>

<style lang="stylus">
.site-footer
  position relative
  margin-top 6rem

  .category-intro
    padding-top 0
    padding-bottom rem(70px)

    .heading:after
      background-color rgba(pink, 0.5)

  &:after
    content ' '
    background rgba(white,1)
    position absolute
    transform rotate(5deg)
    width 120%
    height 120%
    top -10%
    left -10%
    z-index -2
    box-shadow 0 0 50px rgba(black, 0.05)

  p
    color darken(purple, 13%)

  h2
    color darken(purple, 5%)

  .copyright
    margin-top rem(60px)
    color rgba(pink, 0.8)
    text-transform uppercase
    letter-spacing rem(4px)
    font-weight bold
    font-size 12px
    font-family 'Arial', sans-serif

  .social-links a
    color rgba(pink, 0.8)
</style>
