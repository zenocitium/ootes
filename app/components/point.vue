<template>
  <div class="point">
    <h4>{{ title }}</h4>
    <span v-bind:class="icon"></span>
    <p><small>{{ text }}</small></p>
  </div>
</template>

<script>

export default {
  name: 'point',
  props: ['title','icon','text']
}
</script>
