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
        title: "Alors, on discute ?",
        teaser: "Vous souhaitez prendre contact ou faire évaluer votre projet ?",
        text: "Remplissez le formulaire ci-joint, exposer moi vos problématiques à résoudre ou projet à réaliser et je vous répondrai très bientôt."
      },
      image: img,
      link: "https://www.malt.fr/profile/melvinvanmegen",
    };
  },
  computed: {
    ctaText() {
      return this.$vuetify.breakpoint.smAndDown ? "Ou sur malt" : "Ou contactez-moi sur Malt"
    }
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
  height: calc(100vh - 100px);
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
  .header {
    margin: 0 !important;
  }

  .contact-container {
    width: 90% !important;
    left: 0 !important;
  }
}
</style>
