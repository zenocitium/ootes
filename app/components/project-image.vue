<template>
  <div class="screenshot" v-bind:class="direction">
    <a>
      <lightbox album="a" v-bind:src="url">
        <img width="100px" v-bind:src="url" class="img-fluid">
      </lightbox>
      <!-- <img v-bind:src="url" class="img-fluid" alt="Responsive image" /> -->
    </a>
  </div>
</template>

<script>

export default {
  name: 'project-image',
  props: [
    'directory',
    'direction',
    'file',
    'url'
  ]
}

</script>
