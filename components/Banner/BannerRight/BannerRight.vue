<template lang="pug">
  .header-right
    v-img(v-if="image" :src="image" max-width="500")
    ContactForm(v-if="contact")
</template>

<script>
import ContactForm from '~/components/ContactForm/ContactForm'

export default {
  components: {
    ContactForm
  },
  props: {
    image: String,
    contact: Boolean
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
