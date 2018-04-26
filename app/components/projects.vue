<template>

  <div>
    <div class="intro one-third">
      <particles></particles>
      <div class="overlay">
        <div class="container">
          <div class="flex flex-center">
            <span class="intro-text">
              <span class="icon icon-folder-2"></span>
              <h3>Projecten</h3>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">

        <div class="row cards-holder">
          <div class="col-4" v-for="project in projects">

            <div class="card project">

              <div class="card-header vertical-center image">
                <img class="card-img-top img-fluid" :src= "project.img" :alt="project.project">
              </div>

              <div class="card-block">
                <!-- <h4 class="card-title">{{ project.name }}</h4> -->
                <p class="card-text">{{ project.text | truncate(140, '...') }}</p>
                <a v-bind:href="'#/project/' + project.url">
                  <button type="button" class="btn btn-outline-secondary">Lees meer</button>
                </a>
              </div>
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
