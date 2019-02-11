<template>

  <a v-bind:href="'#/project/' + url" class="card project">

    <div class="card-header">

      <div class="card-header__image">
        <img
          class="card-img-top img-fluid"
          :src="image"
          :alt="image"
        >
      </div>

      <h3 class="card-header__title">{{ title }}</h3>

    </div>

    <div class="card-block">
      <!-- <h4 class="card-title">{{ project.name }}</h4> -->
      <p class="card-text">{{ text | truncate(130, '...') }}</p>
    </div>

    <a
      v-if="url"
      class="card-link"
      
    >Lees meer ➝</a>

  </a>

</template>

<script>
export default {
  name: "point",
  props: ["title", "url", "text", "image"]
};
</script>
