let Vue = require('vue')
let VueRouter = require('vue-router')

Vue.use(VueRouter)

import home from './components/home.vue'
Vue.component('home', home)

import projects from './components/projects.vue'
Vue.component('projects', projects)

import about from './components/about.vue'
Vue.component('about', about)

import project from './components/project.vue'
Vue.component('project', project)


const homeTemplate = { template: '<home></home>' }
const projectsTemplate = { template: '<projects></projects>' }
const projectTemplate = { template: '<project></project>' }
const aboutTemplate = { template: '<about></about>' }

const routes = [
  { path: '/home', component: homeTemplate },
  { path: '/projects', component: projectsTemplate },
  { path: '/project/:name', component: projectTemplate },
  { path: '/about', component: aboutTemplate },
  { path: '/', redirect: '/home' }
]

const router = new VueRouter({
  routes
})

export default router
