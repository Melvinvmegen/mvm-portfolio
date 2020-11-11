<template lang="pug">
  .section-gallery
    a.section-anchor(id='Mes-Projets')
    .section-slide
      TextHeader(:blabla="textHeader" side="center" :white="true")
      .d-flex.flex-wrap.justify-center
        v-flex.col-10.col-lg-6.mb-12(v-for="item in items" :key='item.title')
          ProjectCard(:project="item")
      .d-flex.justify-center
        CTA(v-if="ctaText && link" :className="true" color="accent" :text="ctaText" :link="link")
</template>

<script>
import CarouselContent from './CarouselContent/CarouselContent'
import Mindseed from '~/assets/projects/mindseed.png'
import ThomasKrief from '~/assets/projects/thomaskrief.png'
import SecuryGard from '~/assets/projects/Securygard.png'
import ReflexOsteo from '~/assets/projects/Reflex_osteo.png'
import TimePass from '~/assets/projects/Timepass.png'
import ProjectCard from '~/components/ProjectCard/ProjectCard'

export default {
  components: {
    CarouselContent,
    ProjectCard
  },
  data () {
    return {
      ctaText: "Découvrez tous mes projets",
      link: "/projets",
      textHeader: {
        title: "MES DERNIERS PROJETS",
        teaser: "Découvrez un exemple concret de tout ce qui précède",
        text: ''
      },
      items: {
        reflexosteo: {
          title: 'REFLEX OSTEO',
          teaser: 'Site de mise en relation entre ostéopathe et patient',
          desc: "Site de mise en relation entre ostéopathe et patient. Totalisant jusqu'ici 4 mois de travail avec différentes missions, tel que l'implementation de commentaires sur des articles de blog, la création d'un hub blog avec système de recherche (auparavant wordpress), l'amélioration des performances sur mobile, un système de mise en avant des meilleurs ostéopathes en fonction de leurs recommandations, mise en place de téléconsultation et bien d'autres...",
          img: 'Reflex_osteo.png',
          alt: 'REFLEX OSTEO',
          href: 'https://www.reflexosteo.com/',
          btnText: '► Se rendre sur le site',
          tags: [
            { id: 1, name: 'HTML5' },
            { id: 2, name: 'CSS3' },
            { id: 3, name: 'Javascript' },
            { id: 4, name: 'Ruby' },
            { id: 5, name: 'Ruby on Rails' },
            { id: 6, name: 'PostGreSQL' },
            { id: 7, name: 'Vue.js' }
          ]
        },
        tpass: {
          title: 'TIME PASS',
          teaser: "Site de mise en relation entre expert et personnes ayant besoin d'aide dans un domaine spécifique",
          desc: "Site de mise en relation entre expert et personnes ayant besoin d'aide dans un domaine spécifique. Mise en place d'un système de chat à l'attribution d'une mission, d'un système de recherche d'expert par tags, gestion de l'affection et de l'échange de la monnaie virtuelle : le tpass et implémentation de la charte graphique.",
          img: 'Timepass.png',
          alt: 'Time Pass',
          href: 'https://timepasse.herokuapp.com/',
          btnText: '► Se rendre sur le site',
          tags: [
            { id: 1, name: 'HTML5' },
            { id: 2, name: 'CSS3' },
            { id: 3, name: 'Javascript' },
            { id: 4, name: 'Ruby' },
            { id: 5, name: 'Ruby on Rails' },
            { id: 6, name: 'PostGreSQL' },
            { id: 7, name: 'Heroku' }
          ]
        },
        securygard: {
          title: 'SECURYGARD',
          teaser: 'SecuryGard, entreprise de sécurité située à Valence',
          desc: "Projet de création d'une application Web de gestion de base de données clients avec partage de documents sécurisés entre administrateurs et utilisateurs, création dynamique de contrats (format pdf) et distribution et remplissage d'enquête clients. Création et mise en place de la charte graphique.",
          img: 'Securygard.png',
          alt: 'SECURYGARD',
          href: 'https://serene-falls-79228.herokuapp.com/',
          btnText: '► Se rendre sur le site',
          tags: [
            { id: 1, name: 'HTML5' },
            { id: 2, name: 'CSS3' },
            { id: 3, name: 'Javascript' },
            { id: 4, name: 'Ruby' },
            { id: 5, name: 'Ruby on Rails' },
            { id: 6, name: 'PostGreSQL' },
            { id: 7, name: 'Heroku' }
          ]
        }
      }
    }
  }
}
</script>

<style>
  .section-gallery {
    background: #254A5D;
    min-height: 1200px !important;
    width: 100%;
    display: flex;
    min-height: 90vh;
    position: relative;
    align-items: center;
    z-index: 2;
  }

  .section-slide {
    width: 80%;
    max-width: 1200px;
    margin: 100px auto;
    height: 100vh;
  }

  .section-slide .featured-item-subheader {
    color: #D1DDE6;
  }

  .section-slide .title-bold {
    color: #D1DDE6;
  }

  .title-slide {
    font-size: 30px;
    text-decoration: none;
    line-height: 2.5;
    font-weight: 800;
    text-align: center;
    color: #D1DDE6;
  }

  .description-slide {
    line-height: 2;
    font-family: 'Open Sans', sans-serif;
    text-align: justify;
    padding-right: 10%;
    color: white;
  }

  .theme--dark.v-btn.v-btn--icon {
    color: #d8dcee;
  }

  .v-window__next, .v-window__prev {
    background: transparent!important;
  }

  .v-window__next button.v-btn {
    color: #F9423A !important;
  }

  .v-window__prev button.v-btn {
    color: #F9423A !important;
  }

  .v-window__prev {
    left: 33.33% !important;
  }

  .v-carousel__item {
    align-items: center;
  }

  .v-window__next {
    right: 0;
  }

  .v-carousel__controls {
    right: 0!important;
    width: 66.67%!important;
  }

  .v-carousel__controls {
    background: transparent!important;
  }

  @media (max-width: 1281px) {
    .section-slide {
      margin: 50px auto!important;
      height: initial;
    }

    .section-title {
      margin-bottom: 60px;
    }

    .v-window, .v-carousel__item {
      height: 900px!important;
    }

    .v-carousel__item {
      align-items: flex-start!important;
    }

    .v-window__prev {
      left: 0!important;
    }

    .v-window__next, .v-window__prev {
      top: 30%!important;
      transform: translateY(-50%);
    }

    .title-slide {
      padding-right: 0!important;
    }

    .description-slide {
      padding-right: 0!important;
    }

    .tag-list {
      padding-right: 0 !important;
    }
  }

  @media (max-width: 769px) {
    .section-gallery {
      min-height: 1000px !important;
      align-items: flex-start;    
    }
  }
</style>
