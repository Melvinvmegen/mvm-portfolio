<template lang="pug">
  .full
    .d-flex
      Banner(:blabla='BannerBlabla', :image="image" :ctaText="ctaText" :link="link")
    .section.primary.flex-column.white--text.timeline-container
      br
      br
      TextHeader(:blabla="{title: 'Mon parcours Back-End'}" side="center" :white="true")
      v-container
        Timeline(:timeLineItemsLeft="timeLineItemsLeft", :timeLineItemsRight="timeLineItemsRight" :faceImgs="faceImgs" folder="back")
    .section-sm.secondary.flex-column.white--text
      v-container
        TextHeader(:blabla="{title: 'Un résumé de ma Stack Back-End', teaser: 'Et leurs notations pas du tout exagéré et souvent approuvé par 100 personnes'}" side="center" :color="true")
        .d-flex.flex-wrap(data-aos="fade-down" data-aos-once="true")
          .col-md-4.col-12(v-for="skill in skills" :id="skill.name")
            Skill(:skill="skill" folder="back")

    .section-sm.white.flex-column.white--text
      v-container
        TextHeader(:blabla="textHeader" side="center" :color="true")
        .col-lg-8.col-11.logo-list
          .d-flex.flex-wrap
            CompanyLogo(v-for="company in companies" :company="company")
</template>

<script>
import img from '~/assets/back/backend.png'
import Timeline from '~/components/Timeline/Timeline'
import Skill from '~/components/Skill/Skill'

export default {
  components: {
    Timeline,
    Skill
  },
  data() {
    return {
      BannerBlabla: {
        title: "Développement back-end",
        teaser: "Création d'application web sur Ruby on Rails",
        text: "En décembre 2019, suite à 3 mois de bootcamp intensif à apprendre à coder, me voilà face à un choix draconien auquel tout développeur web est un jour confronté, plutôt front ou plutôt back ? Après des jours à tergiverser, je me décide... le Javascript parce que oui avec lui on peut faire les deux mais aussi et surtout créer des applications web toujours plus animées."
      },
      ctaText: "Découvrez mes projets",
      link: "/projets",
      image: img,
      timeLineItemsLeft: [ 
        { 
          title: "Octobre 2019",
          description: "1er semaine du wagon et initiation à la programmation côté serveur. Les bases de Ruby sont abordés ainsi que les premieres notions tel que les variables, les arrays, puis progressivement les methodes etc..."
        },
        { 
          title: "Janvier 2020",
          description: "Après la formation je décide de revoir les principes que j'avais le moins compris, les bases de données et leur language SQL. Grâce à active record, PostgreSQL et pas mal de pratique ces notions me sont beaucoup plus abordables et lisibles qu'au départ. Pour approfondir un peu le sujet je m'empart d'un cours sur Udemy reprennant les bases jusqu'à un usage de PostGreSQL pour un data scientist"
        },
        { 
          title: "Octobre 2020",
          description: "Comment conclure autrement qu'avec le testing, cette mention dont tout offre d'emploi dispose mais surtout l'étape que tout développeur junior redoute. Alors mis cours en main, prêt à implémenter des tests sur tous mes projets."
        },
      ],
      timeLineItemsRight: [ 
        { 
          title: "Novembre 2019",
          description: "Semaine 6 découverte de Rails et de la simplification qu'il apporte à la création basique d'un projet CRUD. La formation achevée par deux projets me voilà à même de laisser place à ma créativité pour créer un projet from scratch. Quoi de plus utile qu'un portfolio ?"
        },
        { 
          title: "Mars 2020",
          description: "Après de nombreux projets avec l'utilisation de javascript et la découverte de webpacker avec Rails 6, je décide d'approfondir le sujet et plus précisement la doc."
        }
      ],
      textHeader: {
        title: "Mes clients",
        teaser: "Ils ont fait appel à mes services pour du développement front-end",
        text: ''
      },
      faceImgs: ['Ruby_text.png', 'Rails_text.png', 'Webpack_text.png', 'PostGreSQL_text.png', 'Rspec_text.png'],
      skills: [
        {
          img: "Webpack.png",
          name: "Webpack l'immanquable",
          price: '300',
          description: "Mon Framework de predilection pour sa facilité d'usage et sa réactivité predilection pour sa facilité d'usage et sa réactivité",
          rating: 3
        },
        {
          img: "Rspec.png",
          name: "Rspec",
          price: '300',
          description: "J'adore le fait de pas avoir à me préoccuper des routes.. J'adore le fait de pas avoir à me préoccuper des routes..",
          rating: 4
        },
        {
          img: "Rails.png",
          name: "Ruby on Rails",
          price: '300',
          description: "Le premier framwork à m'avoir fait apprécier les composents mais j'ai assez peu d'expérience dessus..",
          rating:3.5
        },
        {
          img: "Ruby.png",
          name: "Ruby",
          price: '300',
          description: "La base de la base mais en même temps toujours tellement plus à apprendre dessus.",
          rating:3.5
        },
        {
          img: "PostGreSQL.png",
          name: "PostGreSQL",
          price: '300',
          description: "Mon Framework de predilection pour sa facilité d'usage et sa réactivité.",
          rating:4
        }
      ],
      companies: [
        { 
          name: "ReflexOsteo",
          src: "logo_reflex_osteo.png"
        },
        { 
          name: "Le wagon",
          src: "lewagon.png"
        },
        { 
          name: "Platon Formation",
          src: "platonformation.png"
        },
        { 
          name: "SecuryGard",
          src: "securygard.png"
        }
      ]
      
    };
  },
}
</script>

<style>
.timeline-container {
  height: auto !important;
}
</style>