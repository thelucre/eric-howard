<template lang="jade">
.page.home-page
  home-marquee
  intro

  //----------------------------------------
    WEB
  //----------------------------------------
  category-intro(:title="web.headline" anchor="web-development")
    .content(v-html="web.intro")
    logo-garden(:logos="clientLogos")

  portfolio-item(v-for="client in web.clients"
    v-if="client.project"
    v-bind:key="client.project.title"
    v-bind:images="client.project.images"
    v-bind:title="client.project.title"
    v-bind:copy="client.project.copy"
    v-bind:link="client.project.link"
    v-bind:logo="client.logo")

  //----------------------------------------
    GAME
  //----------------------------------------
  category-intro(:title="game.headline"
    anchor="indie-games")
    .content(v-html="game.intro")

  portfolio-item(v-for="g in game.games"
    v-bind:key="g.title"
    v-bind:images="g.images"
    v-bind:title="g.title"
    v-bind:copy="g.copy"
    v-bind:link="g.link"
    v-bind:logo="g.logo")

  //----------------------------------------
    ART
  //----------------------------------------
  category-intro(:title="art.headline"
    anchor="installation-art")
    .content(v-html="art.intro")

  portfolio-item(v-for="a in art.pieces"
    v-bind:key="a.title"
    v-bind:images="a.images"
    v-bind:title="a.title"
    v-bind:copy="a.copy"
    v-bind:link="a.link"
    v-bind:logo="a.logo")

  //----------------------------------------
    CONTACT
  //----------------------------------------
  category-intro(title="CONTACT"
    anchor="contact")
    .content
      p I'm open for freelance projects and always down for talking shop! If you are looking for a mentor or to be a mentee, I am available. I do my best to surround myself with big thinkers who want to teach and learn.

    social-links

  //- .copyright
    &copy; {{ (new Date).getFullYear() }} Eric Howard
</template>

<script>
import HomeMarquee from '@/components/HomeMarquee'
import Intro from '@/components/Intro'
import PortfolioItem from '@/components/PortfolioItem'
import LogoGarden from '@/components/LogoGarden'
import CategoryIntro from '@/components/CategoryIntro'

import WebContent from '@/content/web'
import GameContent from '@/content/game'
import ArtContent from '@/content/art'

export default {
  name: 'hello',

  components: {
    'home-marquee': HomeMarquee,
    'category-intro': CategoryIntro,
    'intro': Intro,
    'logo-garden': LogoGarden,
    'portfolio-item': PortfolioItem,
  },

  data() {
    return {
      web: WebContent,
      game: GameContent,
      art: ArtContent,
    }
  },

  computed: {

    clientLogos() {
      return this.web.clients.map(client => client.logo);
    },

  }
}
</script>

<style lang="stylus" scoped>
.page.home-page
  //
</style>
