<template>

  <nav class="navbar top">
    <div class="container">
      <div class="navbar-content">
        <a class="logo" href="#">
          <span><b>Ootes</b> Web</span>
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projecten</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Over</router-link>
          </li>
        </ul>
      </div>
    </div>
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

  var bgWhiteString = 'top'
  let bgPrimaryString = 'active'

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
