export default {

  headline: 'Game',

  intro: "<p>When I was 10 years old, my family got their first color printer. I made a business card for myself that said Eric Howard, Game Designer. Several years later I started creating games. I work primarily with Unity3D and like to design game systems, make the art, and bring them to life with code. </p><p>See all of my projects at <a class='hoverable hoverable-light' href='http://thelucre.com' target='_blank'>Lucre Games</a>.</p>",

  games: [
    {
      title: 'Lost Ethereal',
      logo: require('@/assets/game/lost-ethereal-gamejam-logo-lucre-games.png'),

      copy: 'I made this when my gradmother fell ill. I was at her house after seeing her in the hospital and thinking very seriously about mortality. Lost Ethereal is a musing on the afterlife, a mystical and pressureless puzzle adventure. Made in two weeks as an entry for the 2016 Low Rez Jam that took second place overall. ',

      link: {
        url: 'https://thelucre.itch.io/lost-ethereal',
        text: 'Play Lost Ethereal',
      },

      images: [
        require('@/assets/game/lost-ethereal-game-lucre-games-8bit-desert.jpg'),
      ],

    },{
      title: 'HÄŌS',
      logo: require('@/assets/game/haos-gamejam-logo-lucre-games.png'),

      copy: 'An addictive, cyber-cellular, comic petri-dish, sound-wave blasting, action art game. An exercize in minimalism with a sound-forward game design. Made in two days for Global Game Jam 2017.',

      link: {
        url: 'https://thelucre.itch.io/haos',
        text: 'Play HÄŌS',
      },

      images: [
        require('@/assets/game/haos-lucre-games-psychedelic-gamejam-unity.jpg'),
      ],
    },{

      title: 'GeoTap',
      logo: require('@/assets/game/geotap-ios-android-logo-lucre-games.png'),

      copy: 'A calming meditative experience, GeoTap was designed to build focus and patience. Especially nice after those long, complicated days.',

      link: {
        url: 'https://itunes.apple.com/us/app/geotap-game/id1268346417',
        text: 'Play GeoTap on iOS'
      },

      images: [
        require('@/assets/game/geotap-lucre-games-low-poly-3d-unity-ios.jpg'),
      ],
    }
  ]
}
