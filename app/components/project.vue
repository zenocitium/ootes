<template>
    <div>
        <main id="project">

            <div class="intro one-third">
                <particles></particles>
                <div class="overlay">
                    <div class="container">
                        <div class="flex flex-center">
                            <span class="intro-text">
                                <h3 class=""><span class="icon icon-window-application-7"></span></h3>
                                <h3>{{ project.name }}</h3>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="section">
                <div class="container">
                    <h3 class="project-title">{{ project.client }} <small class="text-muted">{{ project.type }}</small></h3>
                    <p>{{ project.text }}</p>
                    <p><div class="badge badge-primary" v-for="technique in project.techniques">{{ technique }}</div></p>
                    <p v-if="project.address">Bezoek het project op <a class="link" v-bind:href="project.address" target="_blank">{{ project.address }}</a></p>
                </div>
            </div>
            <div class="section bg-gray-lightest">
                <div class="container">
                    <div class="screenshots">
                        <project-image v-for="(image, index) in project.screenshots" :file="image.file" :direction="image.direction" :url="image.url" ></project-image>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>



import ProjectsResource from '../services/projectsResource.js';
const restProjectsResource = new ProjectsResource();

let particles = require('particles.js')

export default {
    name: 'project',
    mounted: () => {
        window.scrollTo(0, 0);
    },
    data () {
        return {
            project: restProjectsResource.getProject(this.$route.params.name)
        }
    },
    computed: {
    }
}

</script>
