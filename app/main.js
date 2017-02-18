import $ from 'jquery'
var bootstrap = require("../node_modules/bootstrap/dist/js/bootstrap.min.js")

// SCSS
require('./scss/main.scss')

// Icons
require('./icons.font')

// Directives

// Route components
let home = require('./components/home/home')
let projects = require('./components/projects/projects')
let contact = require('./components/contact/contact')

// Elements
let points = require('./components/point/point')

// Router
let router = require('./router')
