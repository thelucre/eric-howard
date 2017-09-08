<template lang="jade">
.home-marquee
  .content
    h1.heading
      span.space ERIC

    h2 Technophile + Thinker + Maker

    social-links
</template>

<script>


export default {
  name: 'home-marquee',
}
</script>

<style lang="stylus" scoped>
.home-marquee
  height 100vh
  position relative

.content
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  text-align center
  width 95%
  z-index 2

h1
  font-size 11.4rem
  font-weight normal
  line-height 0.95
  text-align center
  margin 0
  color white

  @media(max-width desktop-small)
    font-size 9rem
  @media(max-width mobile)
    font-size 7rem

.space
  /*letter-spacing 0.55vw*/

.space-2
  /*letter-spacing 1.5vw*/
  /*margin-left 2vw*/
  display inline-block

h2
  background-color #DDD6F3
  color white
  display inline-block
  padding 0.8rem 1.5rem
  font-weight 600
  text-transform uppercase
  font-family 'Arial', sans-serif
  letter-spacing 0.3vw
  font-size 18px
  border-radius 2px
  box-shadow 0 0 20px rgba(black, 0.05)

  @media(max-width mobile)
    font-size 15px
    padding 0.7rem 0.8rem
</style>
