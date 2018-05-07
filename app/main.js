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

import navbar from './components/navbar.vue'
Vue.component('navbar', navbar)

import step from './components/step.vue'
Vue.component('step', step)

import map from './components/map.vue'
Vue.component('location', map)

import about from './components/about.vue'
Vue.component('about', about)

import projectImage from './components/project-image.vue'
Vue.component('project-image', projectImage)

import particles from './components/particles.vue'
Vue.component('particles', particles);

import point from './components/point.vue'
Vue.component('point', point)


// Import zeh router
import router from './router'

const app = new Vue({
  router
}).$mount('#app')

