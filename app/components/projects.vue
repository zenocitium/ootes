<template>

  <div>
    <div class="intro one-third">
      <particles></particles>
      <div class="container">
        <div class="vertical-center">
          <div class="text-wrapper text-center">
            <h3 class=""><span class="icon icon-folder-2"></span></h3>
            <h3>Projecten</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">

        <div class="card-deck">

          <div class="card project" v-for="project in projects">

            <div class="card-header vertical-center image">
              <img class="card-img-top" :src= "project.img" :alt="project.project">
            </div>

            <div class="card-block">
              <h4 class="card-title">{{ project.name }}</h4>
              <p class="card-text">{{ project.text }}</p>
              <a v-bind:href="'#/project/' + project.url">
                <button type="button" class="btn btn-outline-secondary">Meer</button>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>

import ProjectsResource from '../services/projectsResource.js';
const restProjectsResource = new ProjectsResource();

let particles = require('particles.js')

export default {
  name: 'projects',
  data () {
    return {
      projects: restProjectsResource.getProjects()
    }
  },
  mounted: function(){
    // var project =
    // this._data.projects = projects;
  }
}

</script>
