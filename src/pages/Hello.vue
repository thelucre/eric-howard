<template lang="jade">
.page.home-page
  home-marquee
  intro

</template>

<script>
import HomeMarquee from '@/components/HomeMarquee'
import Intro from '@/components/Intro'

export default {
  name: 'hello',
  components: {
    'home-marquee': HomeMarquee,
    'intro': Intro,
  }
}
</script>

<style lang="stylus" scoped>
.page.home-page
  //
</style>
