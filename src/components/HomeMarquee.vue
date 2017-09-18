<template lang="jade">
.home-marquee
  .content
    h1.heading
      span.space E
      span.space R
      span.space I
      span.space C

    h2 Technophile + Thinker + Maker

    social-links
</template>

<script>


export default {
  name: 'home-marquee',

  mounted() {
    setTimeout(this.init, 500);
  },

  methods: {

    init() {
      this.$el.classList.add('visible');
    },

  },
}
</script>

<style lang="stylus">
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


    span
      transform scale(.8) translateY(10px)
      display inline-block
      opacity 0

      for num in (1..4)
        &:nth-of-type({num})
          transition all 1s (.05s * num) bounce-out

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

    transform rotateX(90deg) translateY(10px)
    transition transform 1.4s 1s bounce-out

    @media(max-width mobile)
      font-size 15px
      padding 0.7rem 0.8rem

  &:not(.visible)
    /*opacity 0*/

  &.visible
    opacity 1

    h1
      span
        transform scale(1) translateY(0)
        opacity 1

    h2
      transform rotateX(0) translateY(0)

</style>
