let Vue = require('vue')

require('./point.scss')

// register
Vue.component('point', {
  props: ['title','icon','text'],
  template: '<div class="point">\
    <h4>{{ title }}</h4>\
    <span v-bind:class="icon"></span>\
    <p><small>{{ text }}</small></p>\
  </div>\
  '
})
