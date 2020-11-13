<template lang="pug">
  .full 
    .d-flex
      Banner(:blabla='bannerBlaBla', :image="image" :ctaText="ctaText" :link="link")
    Section(v-for="section in Sections" :key="section.blabla.id" :blabla='section.blabla', :sectionImage="section.sectionImage" :ctaText="section.ctaText" :link="section.link" :color="section.color" :reverse="section.reverse")
    SectionProject
    SectionTestimonials
</template>

<script>
import Section from "~/components/Section/Section";
import SectionProject from "~/components/SectionProject/SectionProject";
import SectionTestimonials from "~/components/SectionTestimonials/SectionTestimonials";
import img from '~/assets/homepage.png'
import computerFront from '~/assets/computer.png'
import computerBack from '~/assets/computer_back.png'
import chartmarketing from '~/assets/chartmarketing.png'

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
          "Moi c'est Melvin, 24 ans, développeur Web passionné et constamment à la recherche d'améliorations, que ce soit à des fins personnelles ou professionnelles. Dans un monde poussé par l'innovation, la lecture quotidienne et la curiosité semblent obligatoires mais, pour moi c'est inné. J'ai toujours aimé plonger au plus profond des sujets qui me passionnent."
      },
      ctaText: "Découvrez mes projets",
      link: "/projets",
      image: img,
      Sections: {
        SectionFront: {
          blabla: {
            id: 1,
            title: 'DEVELOPPEUR FRONT-END',
            subtitle: 'Vue.js, React.js, Freelance',
            text: "Au cours de ma première expérience professionnelle en tant de marketeur digital, j'ai eu la chance de suivre de multiples formations sur le web sans rentrer dans le côté technique. Seulement voilà après quelques mois je me retrouve fréquemment confronté à des barrières techniques et je décide alors d'étendre mes compétences digitale. Certifié du Wagon après trois mois de bootcamp, j'enchaine avec des cours sur Udemy pour compléter mes bases en <strong>Javascript</strong>. Language à l'aide duquel je me spécialise dans le front-end avec pour framework : <strong>React.js</strong>. Dans la continuité et au vu d'une opportunité professionelle j'en suis venu à découvrir et favoriser le framework <strong>Vue.js</strong> pour sa facilité de prise en main.",
            textColor: "#D1DDE5"
          },
          sectionImage: computerFront,
          ctaText: 'Découvrez mon profil front-end',
          link: 'frontEnd',
          color: '#234A5D',
          reverse: false
        },
        SectionBack: {
          blabla: {
            id: 2,
            title: 'DEVELOPPEUR BACK-END',
            subtitle: 'Ruby on Rails, Freelance',
            text: "Certifié du Wagon après trois mois de bootcamp, où j'ai pu enrichir mes compétences web avec un language supplémentaire, <strong>Ruby</strong> et son framework, <strong>Rails</strong>. Le Wagon m'a également initié à la gestion de base de données relationnelle avec son language SQL et des outils tel que <strong>PostgreSQL</strong>. Je travail actuellement en collaboration avec une agence web spécialisée sur rails (Studio HB) qui m'a énormément fait progresser dans la structure de mon code, m'a appris les bonnes pratiques à suivre et m'a aussi fait prendre conscience des notions de sécurité et de performance.",
            textColor: "#234A5D"
          },
          sectionImage: computerBack,
          ctaText: 'Découvrez mon profil back-end',
          link: 'backEnd',
          color: '#fff',
          reverse: true
        },
        SectionReferencement: {
          blabla: {
            id: 3, 
            title: 'MARKETEUR DIGITAL',
            subtitle: 'Bachelor, spécialisation Marketing', 
            text: "Diplômé de Kedge Business School après 3 ans de formations où je me suis spécialisé dans le marketing digital. Au cours de ces 3 années, j'ai pu étendre mes compétences numériques à travers de nombreux stages et expériences. Une fois diplomé j'ai passé 2 années en tant que responsable de la transition digitale pour le département français au sein de l'entreprise, Royal Brinkman. Au cours de cette expérience j'ai appris à maîtriser le <strong>SEO</strong>, le <strong>SEA</strong> ainsi que l'email marketing à l'aide de différents outils tels que <strong>Mailchimp</strong>, Hotjar, <strong>Adwords</strong>, <strong>Google Analytics</strong>, ou encore semrush et ahrefs. Le tout avec Joomla pour CMS.",
            textColor: "#234A5D"
          },
          sectionImage: chartmarketing,,
          ctaText: 'Découvrez mon profil',
          link: 'referencement',
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
    z-index: 2;
  }

  .section-sm {
    width: 100%;
    display: flex;
    min-height: 50vh;
    position: relative;
    align-items: center;
    z-index: 2;
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
  }

  .section-left {
    padding-right: 5%;
    left: 0;
    max-width: 50%;
    flex: 0 0 50%;
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
  }

  @media (max-width: 400px) {
    .section {
      min-height: 1200px !important;
    }
  }
</style>