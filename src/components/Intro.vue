<template lang="jade">
.block.intro
  h2(v-in-viewport.once="-200")
    | I build&nbsp;
    a.hoverable(href="#web-development") websites
    | , craft&nbsp;
    a.hoverable(href="#indie-games") indie games
    | , and design&nbsp;
    a.hoverable(href="#installation-art") installation artwork
    | .

  link-banner(link='#contact')
    span Open for freelance opportunities.&nbsp;
    strong LMK.

</template>

<script>
export default {
  name: 'intro',
}
</script>

<style lang="stylus">
.intro
  padding 8rem 0
  text-align center

  @media(max-width tablet)
    padding 3rem 0 8rem

  h2
    color white
    font-size 3.5rem
    font-style italic
    max-width rem(850px)
    margin 0 auto
    font-weight normal

    opacity 0
    transform translateY(20px)
    transition opacity .8s .2s ease, transform .8s .2s ease

    @media(max-width desktop-small)
      max-width rem(700px)
      font-size 2.8rem

    @media(max-width tablet)
      font-size 2.2rem
      max-width rem(550px)

    @media(max-width mobile)
      font-size 2rem
      max-width rem(370px)

    &.in-viewport
      opacity 1
      transform translateY(0)
</style>
