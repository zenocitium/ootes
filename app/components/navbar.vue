<template>

  <nav class="navbar navbar-light navbar-toggleable-md fixed-top bg-white-transparent">
    <nav class="container">
      <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#"><b>Ootes</b> Web</a>
      <div class="navbar-collapse collapse" id="navbarCollapse" aria-expanded="false">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projecten</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Over</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </nav>

</template>

<script>

export default {
  name: 'navbar',
  mounted: function() {
    initNavScroll()
  },
  watch: {
    '$route': function(){
      initNavScroll()
    }
  }
}

function initNavScroll(){

  var bgWhiteString = 'bg-white-transparent'
  let bgPrimaryString = 'bg-primary-transparent'

  var navbarElement = document.getElementsByClassName("navbar")[0]
  var introElement = document.getElementsByClassName("intro")[0]

  window.onscroll = function() {
    if (document.body.scrollTop > ( introElement.offsetHeight - navbarElement.offsetHeight ) || document.documentElement.scrollTop > ( introElement.offsetHeight - navbarElement.offsetHeight ) ){
      var newClassName = navbarElement.className
      newClassName = newClassName.replace(bgWhiteString, bgPrimaryString)
      navbarElement.className = newClassName
    } else {
      var newClassName = navbarElement.className
      newClassName = newClassName.replace(bgPrimaryString, bgWhiteString)
      navbarElement.className = newClassName
    }
  }
}

</script>
