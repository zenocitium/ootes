let Vue = require('vue')
let VueRouter = require('vue-router')

Vue.use(VueRouter)

import home from './components/home.vue'
Vue.component('home', home)

import projects from './components/projects.vue'
Vue.component('projects', projects)

import contact from './components/contact.vue'
Vue.component('contact', contact)

const homeTemplate = { template: '<home></home>' }
const projectsTemplate = { template: '<projects></projects>' }
const contactTemplate = { template: '<contact></contact>' }

const routes = [
  { path: '/home', component: homeTemplate },
  { path: '/projects', component: projectsTemplate },
  { path: '/contact', component: contactTemplate },
  { path: '/', redirect: '/home' }
]

const router = new VueRouter({
  routes
})

export default router
