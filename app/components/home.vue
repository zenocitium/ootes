<template>
  <div>
    <div class="section full-height" id="particles">
      <div class="eye-catcher vertical-center">
        <div class="col-md-12">
          <h1 class="text-center">Wij bouwen webapps</h1>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="point in points">
            <point :title="point.title" :icon="point.icon" :text="point.text"></point>
          </div>
        </div>
      </div>
    </div>
    <div class="section bg-gray-lightest">
      <div class="container">
        <h1 class="text-center">Werkwijze</h1>
        <br />
        <div class="row">
          <div class="container">
            <step v-for="(step, index) in steps" :title="step.title" :icon="step.icon" :text="step.text" :index="index" ></step>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <img src="img/Vue.js_Logo.svg.png" class="img-fluid" alt="Vue.js">
          </div>
          <div class="col-8">
            <h1>Techniek</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

let particles = require('particles.js')

export default {
  name: 'home',
  data: function(){
    return {
      points: [
        {
          title: 'Kwaliteit',
          icon: 'icon icon-cog',
          text: 'Bij het bouwen van een project houden wij schaalbaarheid altijd in het achterhoofd. Flexibel opgezette projecten zorgen ervoor dat je makkelijk veranderingen kunt doorvoeren, zo wordt het project zo agile als maar kan.'
        },
        {
          title: 'Gebruiksvriendelijk',
          icon: 'icon icon-usability',
          text: 'Door onze praktijkervaring weten wij welke drempels er zijn en welke regels er nageleeft moeten worden om een app logisch en gebruiksvriendelijk te laten werken.'
        },
        {
          title: 'Design',
          icon: 'icon icon-design-mug',
          text: 'Om een project te laten slagen is het belangrijk dat mensen het resultaat een aantrekkelijk product vinden. Wij besteden veel aandacht aan het automatiseren van het design en het design opzich, zodat het eindresultaat overzichtelijk en mooi is.'
        }
      ],
      steps: [
        {
          title: 'Specificaties',
          icon: 'icon icon-clipboard-edit',
          text: 'We stellen specificaties op aan de hand van de bestaande wensen en eisen. Deze maak ik even langer.'
        },
        {
          title: 'Bouwen',
          icon: 'icon icon-hammer-1',
          text: 'We stellen specificaties op aan de hand van de bestaande wensen en eisen. Deze maak ik even langer.'
        },
        {
          title: 'Feedback',
          icon: 'icon icon-chat-double-bubble-1',
          text: 'We stellen specificaties op aan de hand van de bestaande wensen en eisen. Deze maak ik even langer.'
        },
        {
          title: 'Bouwen',
          icon: 'icon icon-tools-wrench-screwdriver',
          text: 'We stellen specificaties op aan de hand van de bestaande wensen en eisen. Deze maak ik even langer.'
        },
        {
          title: 'Opleveren',
          icon: 'icon icon-upload-box-5',
          text: 'We stellen specificaties op aan de hand van de bestaande wensen en eisen. Deze maak ik even langer.'
        },
      ]
    }
  },
  mounted: function() {
    initParticles()
    initNavScroll()
    setPointsEvenHeight()
  }
}

function setPointsEvenHeight(){

  let pointElements = document.getElementsByClassName("point")

  let pointsArray = [].slice.call(pointElements)
  let max = Math.max.apply(null, pointsArray.map(function(a){
    return a.offsetHeight}
  ))

  for (let element of pointElements) {
    element.style.height = max + 'px'
  }

}

function initNavScroll(){
  var bgWhiteString = 'bg-white-transparent'
  let bgPrimaryString = 'bg-primary-transparent'
  var navbarElement = document.getElementsByClassName("navbar")[0]
  window.onscroll = function() {
    if (document.body.scrollTop > ( window.innerHeight - navbarElement.offsetHeight) || document.documentElement.scrollTop > ( window.innerHeight - navbarElement.offsetHeight) ){
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

function initParticles(){

  particlesJS("particles", {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.7,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  })
  var count_particles
  var update
  var count_particles = document.querySelector('.js-count-particles')

}

</script>

<style >
</style>
