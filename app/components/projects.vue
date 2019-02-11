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
          <card v-for="project in sortByDate(projects)" :key="project" :title="project.type" :url="project.url" :text="project.text" :image="project.img"  />
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import _ from 'lodash';

import ProjectsResource from '../services/projectsResource.js';
const restProjectsResource = new ProjectsResource();

let particles = require('particles.js')

export default {
  name: 'projects',
  methods: {
    sortByDate(projects) {
      return _.orderBy(projects, 'date', 'desc'); 
    }
  },
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
