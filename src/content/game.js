export default {

  headline: 'Game',

  intro: "<p>When I was 10 years old, my family got their first color printer. I made a business card for myself that said Eric Howard, Game Designer. </p><p>See all of my projects at <a class='hoverable hoverable-light' href='http://thelucre.com' target='_blank'>Lucre Games</a>.</p>",

  games: [
    {
      title: 'Lost Ethereal',
      logo: require('@/assets/game/lost-ethereal-gamejam-logo-lucre-games.png'),

      copy: 'whow!',

      link: {
        url: 'https://thelucre.itch.io/lost-ethereal',
        text: 'Play it!',
      },

      images: [
        require('@/assets/game/lost-ethereal-game-lucre-games-8bit-desert.jpg'),
      ],

    },{
      title: 'HÄŌS',
      logo: require('@/assets/game/haos-gamejam-logo-lucre-games.png'),

      copy: 'whow!',

      link: {
        url: 'https://thelucre.itch.io/haos',
        text: 'Play it!',
      },

      images: [
        require('@/assets/game/haos-lucre-games-psychedelic-gamejam-unity.jpg'),
      ],
    },{

      title: 'GeoTap',
      logo: require('@/assets/game/geotap-ios-android-logo-lucre-games.png'),

      copy: 'whow!',

      images: [
        require('@/assets/game/geotap-lucre-games-low-poly-3d-unity-ios.jpg'),
      ],
    }
  ]
}
