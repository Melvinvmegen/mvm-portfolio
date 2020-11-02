<template lang="pug">
  .header-right
    v-img(:src="image" max-width="500")
</template>

<script>


export default {
  props: {
    image: String,
  }
};
</script>

<style>
.header-right {
  width: 80%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
}
.sm {
  padding: 50px 0 !important;
}
</style>
