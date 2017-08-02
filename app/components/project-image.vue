<template>
  <div class="screenshot col-md-3" v-bind:class="direction">
    <a v-bind:href=" 'img/' + directory +  '/' + file">
      <img v-bind:src=" 'img/' + directory +  '/' + file" class="img-fluid" alt="Responsive image" />
    </a>
  </div>
</template>

<script>

export default {
  name: 'project-image',
  props: [
    'directory',
    'direction',
    'file'
  ]
}

</script>
