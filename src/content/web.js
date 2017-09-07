export default {

  headline: 'Web',

  intro: "<p>I've always been interested in rich interaction, so naturally I was drawn to the frontend. I spend most of my day building Vue.js components, scaffolding information architectures with Laravel, and experimenting with web motion. I'm often working on Wordpress, Shopify, or custom CMS projects.</p><p>A select list of clients I've built sites for:</p>",

  clients: [
    {
      logo: require('@/assets/clients/coachella.png'),

      project: {
        title: 'Coachella',

        copy: '<p><strong>Lead Web Developer</strong></p>The 2017 festival site needed a big change from the previous year\'s. The reimagined knowledge base became a series of guides with super flexible custom content blocks. Coupled with an über pretty styleguide, this Wordpress and Vue project gave the Coachella folks plenty of control to support all phases of the festival.<p>',

        link: {
          url: 'http://coachella.com/home',
          text: 'coachella.com',
        },

        images: [
          require('@/assets/web/coachella-desktop-mobile-website.png'),
        ],
      },

    },{
      logo: require('@/assets/clients/nasdaq.png'),
    },{
      logo: require('@/assets/clients/pandora.png'),
    },{
      logo: require('@/assets/clients/clifbar.png'),
    },{
      logo: require('@/assets/clients/crocker-art-museum.png'),
    },{
      logo: require('@/assets/clients/gallo.png'),
    },{
      logo: require('@/assets/clients/clever.png'),

      project: {
        title: 'Clever',

        copy: '<p><strong>Lead Frontend Developer</strong></p><p>Clever integrates school data systems with developer apps. They needed a balance of beauty, credibility, and accessiblity in their user experience. This was a static Webpack asset and Twig build made to deliver for Clever\'s backend team to wire into Craft CMS.</p>',

        link: {
          url: 'http://clever.com',
          text: 'clever.com',
        },

        images: [
          require('@/assets/web/clever-frontend-developer-eric-howard-custom.png'),
        ],
      },

    },{
      logo: require('@/assets/clients/copa-america.png'),
    },{
      logo: require('@/assets/clients/stikwood.png'),

      project: {
        title: 'Stikwood',

        copy: '<p><strong>Full Stack Developer</strong></p><p>Our team stretched the potential of Shopify by building a custom Laravel CMS that renders entire views to Shopify metafields. The Stikwood folks can now manage tons of content to enhance every page of their store.</p>',

        link: {
          url: 'http://stikwood.com',
          text: 'stikwood.com',
        },

        images: [
          require('@/assets/web/stikwood-shopify-development-eric-howard-frontend-developer.png')
        ],
      },
    }
  ],
}
