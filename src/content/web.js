export default {

  headline: 'Web',

  intro: "<p>I've always been interested in rich interaction, so naturally I was drawn to the frontend. I spend most of my day building Vue.js components, scaffolding information architectures with Laravel, and experimenting with web motion. I'm often working on Wordpress, Shopify, or custom CMS projects.</p><p>A select list of clients I've built sites for:</p>",

  clients: [
    {
      logo: require('@/assets/clients/coachella.png'),

      project: {
        title: 'Coachella',

        copy: 'Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',

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

        copy: 'Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',

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

        copy: 'Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',

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
