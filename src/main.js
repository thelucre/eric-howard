import './main.styl'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import VueVisual from 'vue-visual'
Vue.component('visual', VueVisual);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


// A lil bit of customization
console.log('%c '+
'  ▄  █ ▄███▄   █     █     ████▄   ▄ \n' +
' █   █ █▀   ▀  █     █     █   █   █  \n' +
' ██▀▀█ ██▄▄    █     █     █   █  █   \n' +
' █   █ █▄   ▄▀ ███▄  ███▄  ▀████  █   \n' +
'    █  ▀███▀       ▀     ▀            \n' +
'   ▀                              ▀   ',
  'background: #222; color: #bada55; font-size: 11px; line-height: 0.5;');

console.log( '%c\n\nAnd welcome to the console',
  'background: #222; color: #bada55; font-size: 20px; text-transform: uppercase;');
