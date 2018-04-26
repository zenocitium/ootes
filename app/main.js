import Vue from 'vue'

import VueLightbox from 'vue-lightbox'
Vue.component("Lightbox",VueLightbox)

// SCSS
require('./scss/main.scss')

// Icons
require('./icons.font')

// Filters
require('./filters')

// components
let point = require('./components/point.vue')
Vue.component('point', point)

let navbar = require('./components/navbar.vue')
Vue.component('navbar', navbar)

let step = require('./components/step.vue')
Vue.component('step', step)

let particles = require('./components/particles.vue')
Vue.component('particles', particles)

let map = require('./components/map.vue')
Vue.component('location', map)

let about = require('./components/about.vue')
Vue.component('about', about)

let projectImage = require('./components/project-image.vue')
Vue.component('project-image', projectImage)

// Import zeh router
import router from './router'

const app = new Vue({
  router
}).$mount('#app')
