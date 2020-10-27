<template lang="pug">
  .full 
    .d-flex
      Banner(:blabla='bannerBlaBla', :image="image" :ctaText="ctaText" :link="link")
    Section(v-for="section in Sections" :blabla='section.blabla', :polygonInputs="section.inputs" :ctaText="section.ctaText" :link="section.link" :color="section.color" :reverse="section.reverse")
    SectionProject
    SectionTestimonials
</template>

<script>
import Section from "~/components/Section/Section";
import SectionProject from "~/components/SectionProject/SectionProject";
import SectionTestimonials from "~/components/SectionTestimonials/SectionTestimonials";
import img from '~/assets/pose_1.png'
import JS from '~/assets/JS.png'
import REACT from '~/assets/react.png'
import PostGreSQL from '~/assets/PostGreSQL.png'
import Rails from '~/assets/Rails.png'
import Ruby from '~/assets/RUBY.png'
import Mailchimp from '~/assets/MailC.jpg'

export default {
  components: {
    Section,
    SectionProject,
    SectionTestimonials
  },
  data() {
    return {
      bannerBlaBla: {
        title: "Une solution à tous vos projets web",
        teaser: "Du front au back en passant par du SEO",
        text:
          "Développeur Web passionné, je suis constamment à la recherche d'améliorations, que ce soit à des fins personnelles ou professionnelles. Dans un monde poussé par l'innovation, la lecture quotidienne et la curiosité semblent obligatoires mais, pour moi c'est inné. J'ai toujours aimé plonger au plus profond des sujets qui me passionnent."
      },
      ctaText: "Découvrez mes projets",
      link: "/projets",
      image: img,
      Sections: {
        SectionFront: {
          blabla: {
            id: 1,
            title: 'DEVELOPPEUR FRONT-END',
            subtitle: 'React.js, Vue.js, Freelance',
            text: "Grâce à mon expérience professionnelle, j'ai pu suivre de multiples cours sur les languages suivants : HTML, CSS, Javascript. Et ainsi étendre mes compétences digitale. Certifié du Wagon après deux mois de bootcamp, j'ai décider d'étendre mes compétences en <strong>Javascript</strong>. Language à l'aide duquel je me suis spécialisé dans le front-end avec pour framework : <strong>React.js</strong>. Dans la continuité et au vu d'une opportunité professionelle j'en suis venu à découvrir et apprécier le framework <strong>Vue.js</strong>",
            textColor: "#D1DDE5"
          },
          inputs: [
            { id: 1, alt: 'Javascript', img: JS },
            { id: 2, alt: 'React', img: REACT },
            { id: 3, alt: 'Vue', img: 'https://www.ambient-it.net/wp-content/uploads/2017/03/Vue.JS2-Logo-200.jpg' }
          ],
          ctaText: 'Découvrez mes projets',
          link: '#Mes-Projets',
          color: '#234A5D',
          reverse: false
        },
        SectionBack: {
          blabla: {
            id: 1,
            title: 'DEVELOPPEUR BACK-END',
            subtitle: 'Ruby on Rails, Freelance',
            text: "Certifié du Wagon après un bootcamp de deux mois, où j'ai pu compléter mes compétences par un language supplémentaire, <strong>Ruby</strong> et son framework, <strong>Rails</strong>. Le Wagon m'a également initié à la gestion de base de données avec son language SQL et des outils tel que MongoDB ou encore <strong>PostgreSQL</strong>. Actuellement en mission pour Reflex Osteo avec pour référent technique Studio HB agence web spécialisé sur rails.",
            textColor: "#234A5D"
          },
          inputs: [
            { id: 1, alt: 'Ruby', img: Ruby },
            { id: 2, alt: 'Rails', img: Rails },
            { id: 3, alt: 'PostgreSQL', img: PostGreSQL }
          ],
          ctaText: 'Découvrez mes projets',
          link: '#Mes-Projets',
          color: '#fff',
          reverse: true
        },
        SectionMarketingDigital: {
          blabla: {
            id: 1, 
            title: 'MARKETEUR DIGITAL',
            subtitle: 'Bachelor, spécialisation Marketing', 
            text: "Etudes réalisées à Kedge Business School ou j'ai eu la chance de développer mes compétences numériques à travers de nombreux stages et expériences. Tel que mes 2 années passées en tant que responsable de la transition digitale pour le marché français au sein de l'entreprise, Royal Brinkman. Au cours de cette expérience j'ai appris à maîtriser le <strong>SEO</strong>, le <strong>SEA</strong> ainsi que l'email marketing à l'aide de différents outils tels que <strong>Mailchimp</strong>, Hotjar, <strong>Adwords</strong>, <strong>Google Analytics</strong>, ahrefs et Joomla pour CMS.",
            textColor: "#234A5D"
          },
          inputs: [
            { id: 1, alt: 'MailChimp', img: Mailchimp },
            { id: 2, alt: 'Ahrefs', img: 'https://3x5yp62s8loz3jw8273enqos16xh-wpengine.netdna-ssl.com/wp-content/uploads/icon360-Analytics.png' },
            { id: 3, alt: 'AdWords', img: 'https://www.pngitem.com/pimgs/m/242-2422855_transparent-google-adwords-logo-png-google-adwords-logo.png' }
          ],
          ctaText: 'Découvrez mes projets',
          link: '#Mes-Projets',
          color: '#D1DDE5',
          reverse: false
        }
      }
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