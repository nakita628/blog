<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="video-container">
    <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
