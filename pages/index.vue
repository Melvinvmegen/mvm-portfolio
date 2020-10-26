<template lang="pug">
  .full 
    .d-flex
      Banner(:blabla='blabla', :image="image" :ctaText="ctaText" :link="link")
</template>

<script>
import Banner from "~/components/Banner/Banner";

export default {
  components: {
    Banner
  },
  data() {
    return {
      blabla: {
        title: "Une solution à tous vos projets web",
        teaser: "Du front au back en passant par du SEO",
        text:
          "Développeur Web passionné, je suis constamment à la recherche d'améliorations, que ce soit à des fins personnelles ou professionnelles. Dans un monde poussé par l'innovation, la lecture quotidienne et la curiosité semblent obligatoires mais, pour moi c'est inné. J'ai toujours aimé plonger au plus profond des sujets qui me passionnent."
      },
      ctaText: "Découvrez mes projets",
      link: "/projets",
      image:
        "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
    };
  }
}
</script>

<style scoped>
  .full {
    width: 100%;
    height: 100%;
  }
</style>