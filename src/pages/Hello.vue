<template lang="jade">
.page.home-page
  home-marquee
  intro

  category-intro(title="Web")
    p Been making websites for at least 10 years, primarily on the frontend. Currently fascinated with Vue.js and Laravel, but plenty of XP with Shopify, Wordpress, and dabbling with React, D3, and Three.js.

    br
    br

    p Clients I've built sites for:
    br
    br
    logo-garden(:logos='clients')

  portfolio-item(:image='stikwood')

  //- 
    category-intro(title="Game")
      p Been making websites for at least 10 years, primarily on the frontend. Currently fascinated with Vue.js and Laravel, but plenty of XP with Shopify, Wordpress, and dabbles with React, Phonegap, and Three.js.

    category-intro(title="Art")
      p Been making websites for at least 10 years, primarily on the frontend. Currently fascinated with Vue.js and Laravel, but plenty of XP with Shopify, Wordpress, and dabbles with React, Phonegap, and Three.js.

</template>

<script>
import HomeMarquee from '@/components/HomeMarquee'
import Intro from '@/components/Intro'
import PortfolioItem from '@/components/PortfolioItem'
import LogoGarden from '@/components/LogoGarden'
import CategoryIntro from '@/components/CategoryIntro'

export default {
  name: 'hello',

  components: {
    'home-marquee': HomeMarquee,
    'category-intro': CategoryIntro,
    'intro': Intro,
    'logo-garden': LogoGarden,
    'portfolio-item': PortfolioItem,
  },

  data() { return {
    stikwood: require('@/assets/web/stikwood.png'),

    clients: [
      require('@/assets/clients/coachella.png'),
      require('@/assets/clients/nasdaq.png'),
      require('@/assets/clients/pandora.png'),
      require('@/assets/clients/clifbar.png'),
      require('@/assets/clients/crocker-art-museum.png'),
      require('@/assets/clients/gallo.png'),
      require('@/assets/clients/clever.png'),
      require('@/assets/clients/copa-america.png'),
      require('@/assets/clients/stikwood.png'),
    ]}
  }
}
</script>

<style lang="stylus" scoped>
.page.home-page
  //
</style>
