<template>

  <div>

    <div class="intro one-third">
      <particles></particles>
      <div class="container">
        <div class="vertical-center">
          <div class="text-wrapper text-center">
            <h3 class=""><span class="icon icon-id-card-2"></span></h3>
            <h3>Over</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-3 vertical-center">
            <img src="img/pixel-me-nobg.png" class="img-fluid bg-primary-light" alt="Vue.js">
          </div>
          <div class="col-9">
            <p><b>Ootes</b> Web is het bedrijf van Tom Ootes en is voorgekomen uit de wens om zelfstandig goede platformen te bouwen voor mooie initiatieven. Door nauw samen te werken kan er snel waarde ontstaan en een idee snel tot leven komen.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section bg-gray-lightest">
      <div class="container">
        <h1 class="text-center">Kontakt me</h1>
        <br>
        <div class="row kontakt text-center">
          <div class="col">
            <a target="_blank" href="https://github.com/zenocitium" >
              <span class="icon icon-logo-github"></span>
            </a>
          </div>
          <div class="col">
            <a href="mailto:tomootes@gmail.com" class="icon icon-email"></a>
          </div>
          <div class="col">
            <a target="_blank" href="https://www.linkedin.com/in/tootes/" class="icon icon-logo-linkedin"></a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

let particles = require('particles.js')

export default {
  name: 'about',
  data () {
    return {
      projects: {}
    }
  }
}

</script>
