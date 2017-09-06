export default {

  headline: 'Web',

  intro: "<p>Been making websites for at least 10 years, primarily on the frontend. Currently fascinated with Vue.js and Laravel, but plenty of XP with Shopify, Wordpress, and dabbling with React, D3, and Three.js.</p><p>Clients I've built sites for:</p>",

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

        images: [],
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
          require('@/assets/web/stikwood.png')
        ],
      },
    }
  ],
}
