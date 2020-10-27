<template lang="pug">
  .header-right()
    v-img(:src="defaultpose" max-width="500")
</template>

<script>

import img from '~/assets/pose_1.png'

export default {
  props: {
    image: String,
  },
  data() {
    return {
      defaultpose: img
    }
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
