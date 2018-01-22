<template>
  <div>

    <div class="intro full-height">
      <particles></particles>
      <div class="overlay">
        <div class="container">

            <span class="intro-text">
              <span class="icon icon-greenhouse"></span>
              <h2 class="heading">Wij bouwen slimme web oplossingen.</h2>
			  <a href="#/about">
				  <button type="button" class="btn btn--light">Bel/mail Tom</button>
			  </a>
            </span>
            <div class="bottom">
              <span class="down">Δ</span>
            </div>

        </div>
      </div>
    </div>

    <div class="section point-section">
      <div class="container">
        <h2 class="intro-text flex-center">Onze oplossingen zijn</h2>
        <div class="row points">
          <div class="col-4" v-for="point in points">
            <point :title="point.title" :icon="point.icon" :text="point.text"></point>
          </div>
        </div>
      </div>
    </div>

    <div class="section bg-gray-lightest">
      <div class="container">

        <h1 class="flex-center"><span class="icon icon-map-treasure"></span></h1>
        <h1 class="flex-center">Hoe komen we er?</h1>
        <br />
        <div class="row">
          <div class="container">
            <step v-for="(step, index) in steps" :icon="step.icon" :text="step.text" :index="index" :key="step.title" :title="step.title" ></step>
          </div>
        </div>
        <div class="block">
          <h1 class="flex-center"><span class="icon icon-synchronize-3 icon-big"></span></h1>
          <p class="flex-center">De lengte van een sprint (timebox) spreken we gezamenlijk af.</p>
        </div>

      </div>
    </div>

    <div class="section">
      <div class="container">
        <h1 class="flex-center">Opdrachtgevers</h1>
        <p class="flex-center">Wij hebben eerder samengewerkt met</p>
        <div class="flex">
          <a v-bind:href="'#/project/' + project.url" class="client" v-for="project in projects">
            <img :src= "project.img" />
          </a>
        </div>
        <p class="flex-center">
          <a href="#/projects"><button type="button" class="btn btn-primary">Naar projecten</button></a>
        </p>
      </div>
    </div>

    <div class="section bg-gray-lightest">
      <div class="container">
        <h1 class="flex-center">Techniek</h1>
        <br>
        <div class="row technique">
          <div class="col-3 vertical-center">
            <img src="img/vuejs.png" class="img-fluid" alt="Vue.js">
          </div>
          <div class="col-9">
            <h4 class="heading">Framework</h4>
            <p>Als framework voor onze projecten gebruiken wij Vue. Vue is een lichtgewicht framework dat niet teveel zijn stempel drukt op een project. Dit zorgt ervoor dat je zelf moet blijven nadenken maar ook dat een project niet teveel aan een framework vastzit. Een project kan zo makkelijker worden omgezet naar een ander framework als dit nodig is. Ook de herbruikbaarheid van code is een stuk hoger als het project niet aan een framework vastzit.</p>
          </div>
        </div>
        <br/>
        <div class="row technique">
          <div class="col-3 flex-center">
            <img src="img/sass.svg" class="img-fluid" alt="Sass">
          </div>
          <div class="col-9">
            <h4 class="heading">Styling</h4>
            <p>Voor styling gebruiken wij SASS. Deze techniek zorgt ervoor dat we variabelen kunnen gebruiken en efficiënter kunnen werken. De opmaak is hierdoor consistenter en dit werkt door in de gebruikerservaring en de uitstraling.</p>
          </div>
        </div>
      </div>
    </div>

	<location></location>

  </div>
</template>

<script>

import ProjectsResource from '../services/projectsResource.js';
const restProjectsResource = new ProjectsResource();

let particles = require('particles.js')

export default {
  name: 'home',
  data: function(){
    return {
      points: [
        {
          title: 'Solide',
          icon: 'icon icon-cog',
          text: 'Technisch goed opgezette projecten zorgen ervoor dat er makkelijk veranderingen doorgevoerd kunnen worden en kwaliteit gewaardborgd blijft. Zo wordt het project zo agile als het maar zijn kan.'
        },
        {
          title: 'Gebruiksvriendelijk',
          icon: 'icon icon-usability',
          text: 'Door onze praktijkervaring weten we welke regels er nageleeft moeten worden om een app gebruiksvriendelijk maken. Daarnaast zorgt iteratief werken ervoor dat we het product samen kunnen bijschaven.'
        },
        {
          title: 'Prachtig',
          icon: 'icon icon-design-mug',
          text: 'Om een project te laten slagen is het belangrijk dat de stakeholders het resultaat een aantrekkelijk product vinden. Wij automatiseren design zodat het eindresultaat mooi en overzichtelijk is.'
        }
      ],
      steps: [
        {
          title: 'Praten',
          icon: 'icon icon-clipboard-edit',
          text: 'We kijken samen naar het idee.'
        },
        {
          title: 'Bouwen',
          icon: 'icon icon-hammer-1',
          text: 'We bouwen aan de afgesproken functionaliteit binnen een sprint.'
        },
	    {
	      title: 'Feedback',
	      icon: 'icon icon-chat-double-bubble-1',
	      text: 'Nieuwe versie online, hier wordt feedback op gegeven. Prioriteiten kunnen heroverwogen worden. '
	    },
        {
          title: 'Bouwen',
          icon: 'icon icon-tools-wrench-screwdriver',
          text: 'Aan de hand van de feedback wordt er verder gebouwd.'
        },
        {
          title: 'Opleveren',
          icon: 'icon icon-treasure-chest-open',
          text: 'Als alle functionaliteit is afgevinkt en we allebei tevreden zijn wordt er opgeleverd.'
        },
      ],
      projects: restProjectsResource.getProjects()
    }
  },
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

</script>

<style >
</style>
