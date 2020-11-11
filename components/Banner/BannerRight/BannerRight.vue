<template lang="pug">
  .header-right(:class="{'header-height-contact': $route.name === 'contact', 'header-height': $route.name !== 'contact'}")
    v-img(v-if="image" :src="image" :class="{'contact-img': contact, 'banner-img': !contact}")
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

@media only screen and (max-width: 960px) {
  .banner-img {
    max-width: 550px !important;
  }
}

@media only screen and (max-width: 600px) {
  .banner-img {
    max-width: 500px !important;
  }
}

@media only screen and (max-width: 500px) {
  .banner-img {
    max-width: 400px !important;
  }
  #header-right-contact {
    min-height: 55vh !important;
  }

}

@media only screen and (max-width: 400px) {
  .banner-img {
    max-width: 350px !important;
  }
}
</style>
