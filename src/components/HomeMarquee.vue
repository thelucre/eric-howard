<template lang="jade">
.home-marquee
  .content
    h1
      span.space ERIC
      br
      span HOW
      br
      span.space-2 ARD
    h2 Technophile + Thinker + Maker

</template>

<script>
export default {
  name: 'home-marquee'
}
</script>

<style lang="stylus" scoped>
.home-marquee
  height 100vh
  background-color: #FAACA8;
  background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);


.content
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  text-align center
  width 95%

h1
  font-family: 'Monoton', cursive;
  font-size 11rem
  font-weight normal
  line-height 0.95
  text-align center
  margin 0
  color white

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
  font-weight normal
  text-transform uppercase
  font-family 'Arial', sans-serif
  letter-spacing 0.3vw
  font-size 1rem
</style>
