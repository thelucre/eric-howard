<template lang="jade">
.page.home-page
  home-marquee

</template>

<script>
import HomeMarquee from '@/components/HomeMarquee'

console.log(HomeMarquee);

export default {
  name: 'hello',
  components: {
    'home-marquee': HomeMarquee
  }
}
</script>

<style lang="stylus" scoped>
.page.home-page
  //
</style>
