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
        <p><div class="badge badge-primary" v-for="technique in project.techniques">{{ technique }}</div></p>
        <p><a v-bind:href=" project.address ">{{ project.address }}</a></p>
      </div>
    </div>
    <div class="section bg-gray-lightest">
      <div class="container">
        <div class="row">
          <project-image v-for="(image, index) in project.screenshots" :file="image.file" :direction="image.direction" :directory="project.url" ></project-image>
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
  },
  computed: {
  }
}

</script>
