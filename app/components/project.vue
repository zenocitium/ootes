<template>

  <div>
    <div class="intro one-third">
      <particles></particles>
      <div class="container">
        <div class="vertical-center">
          <div class="text-wrapper text-center">
            <h3 class=""><span class="icon icon-window-application-7"></span></h3>
            <h3>{{ project.name }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <h3>{{ project.client }} <small class="text-muted">{{ project.type }}</small></h3>
        <p>{{ project.text }}</p>
        <div class="badge badge-primary" v-for="technique in project.techniques">{{ technique }}</div>
      </div>
    </div>
    <div class="section bg-gray-lightest">

      <div class="container">
        <div class="row">
          <div class="col-md-3 screenshot" v-for="screenshot in project.screenshots">
            <a v-bind:href=" 'img/' + project.url +  '/' + screenshot">
              <img v-bind:src=" 'img/' + project.url +  '/' + screenshot" class="img-fluid" alt="Responsive image">
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
  name: 'project',
  data () {
    return {
      project: restProjectsResource.getProject(this.$route.params.name)
    }
  }
}

</script>
