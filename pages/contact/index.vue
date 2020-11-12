<template lang="pug">
  .full
    .d-flex
      Banner(:blabla='BannerBlabla' :contact="true", :image="image", :ctaText="ctaText" :link="link")
    SectionTestimonials
</template>

<script>
import SectionTestimonials from "~/components/SectionTestimonials/SectionTestimonials";
import img from "~/assets/contact/contact.png";

export default {
  name: "Contact",
  components: {
    SectionTestimonials
  },
  data() {
    return {
      BannerBlabla: {
        title: "Hello, on discute ?",
        teaser: "Vous avez des questions ?",
        text: "Sed nec magna sed augue tempor iaculis a in sapien. Aenean dapibus felis enim, vel efficitur dui posuere at. Donec purus odio, posuere nec posuere sit amet, commodo ut erat."
      },
      image: img,
      ctaText: "Ou contactez-moi sur Malt",
      link: "https://www.malt.fr/profile/melvinvanmegen",
    };
  }
};
</script>

<style scoped>
.section-home {
  padding: 0;
  width: 100%;
  display: flex;
  position: relative;
  padding: 0;
  height: calc(100vh - 64px);
  min-height: 900px;
}

.banner-bottom {
  opacity: 0.16;
  z-index: 0;
}

.banner-gradient {
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 20%;
  background: linear-gradient(
    90deg,
    #ab6bff,
    #9ad5f9 15%,
    #575df0 35%,
    #ab6bff 50%,
    #9ad5f9 65%,
    #575df0 85%,
    #ab6bff
  );
  pointer-events: none;
}

.banner-cancel-gradient {
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 20%;
  background: linear-gradient(
    rgb(255, 255, 255) 0%,
    rgba(246, 246, 248, 0) 100%
  );
  pointer-events: none;
}

@media only screen and (max-width: 960px) {
  .section-home {
    height: 100% !important;
  }

  .header {
    margin: 0 !important;
  }

  .contact-container {
    width: 90% !important;
    left: 0 !important;
  }
}
</style>
