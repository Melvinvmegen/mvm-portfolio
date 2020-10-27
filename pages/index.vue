<template lang="pug">
  .full 
    .d-flex
      Banner(:blabla='blabla', :image="image" :ctaText="ctaText" :link="link")
    SectionFront
    SectionBack
    SectionMarketingDigital
    SectionProject
    SectionTestimonials
</template>

<script>
import SectionFront from "~/components/SectionFront/SectionFront";
import SectionBack from "~/components/SectionBack/SectionBack";
import SectionMarketingDigital from "~/components/SectionMarketingDigital/SectionMarketingDigital";
import SectionProject from "~/components/SectionProject/SectionProject";
import SectionTestimonials from "~/components/SectionTestimonials/SectionTestimonials";

export default {
  components: {
    SectionFront,
    SectionBack,
    SectionMarketingDigital,
    SectionProject,
    SectionTestimonials
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

<style>
  .full {
    width: 100%;
    height: 100%;
  }

  .section {
    width: 100%;
    display: flex;
    min-height: 90vh;
    position: relative;
    align-items: center;
  }

  .title-bold {
    color: #254A5D;
    font-size: 30px;
    text-decoration: none;
    line-height: 2.5;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-align: center;
  }

  .section-main {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .section-wrapper {
    width: 100%;
    position: relative;
    display: flex;
    margin-top: 100px
  }

  .section-left {
    padding-right: 5%;
    left: 0;
    max-width: 50%;
    flex: 0 0 50%;
  }

  .section-right {
    flex: 0 0 50%;
    max-width: 50%;
    text-align: center;
  }

  .section-wrapper-right {
    margin-bottom: 160px;
    display: inline-block;
  }

  .section-wrapper-left {
    display: inline-block;
  }

  .featured-item-body {
    line-height: 1.8;
    text-align: justify;
  }

  @media (max-width: 769px) {
    .section {
      min-height: 1000px !important;
      height: 90vh;
    }

    .section-wrapper {
      flex-direction: column;
    }

    .section-left {
      padding-right: 0% !important;
      max-width: 100% !important;
      flex: 0 0 100% !important;
      margin-bottom: 50px;
    }

    .section-right {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    .section {
      min-height: 1200px !important;
    }
  }
</style>