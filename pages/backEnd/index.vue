<template lang="pug">
  .full
    .d-flex
      Banner(:blabla='BannerBlabla', :image="image" :ctaText="ctaText" :link="link")
    .section.primary.flex-column.white--text
      br
      br
      TextHeader(:blabla="{title: 'Mon parcours Front-End'}" :side="true" :white="true")
      v-container
        Timeline(:timeLineItemsLeft="timeLineItemsLeft", :timeLineItemsRight="timeLineItemsRight" :faceImgs="faceImgs" folder="back")
    .section-sm.secondary.flex-column.white--text
      v-container
        TextHeader(:blabla="{title: 'Un résumé de ma Stack Front-End', teaser: 'Et leurs notations pas du tout exagéré et souvent approuvé par 100 personnes'}" :side="true" :color="true")
        .d-flex.flex-wrap(data-aos="fade-down")
          .col-md-4.col-12(v-for="skill in skills" :id="skill.name")
            Skill(:skill="skill" folder="back")

    .section-sm.flex-column.white--text
      v-container
        TextHeader(:blabla="textHeader" :side="true" :color="true")
        .col-lg-8.col-11.logo-list
          .d-flex.flex-wrap
            .col-md-4.col-6.company-logo(v-for="company in companies" :key="company.name")
              img.company-logo(:src="require(`~/assets/companies/${company.src}`)" :alt="company.name")
</template>

<script>
import Section from "~/components/Section/Section";
import img from '~/assets/pose_1.png'
import Timeline from '~/components/Timeline/Timeline'
import Skill from '~/components/Skill/Skill'

export default {
  components: {
    Section,
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
      ctaText: "Découvrez mes projets back-end",
      link: "/projets",
      image: img,
      timeLineItemsLeft: [ 
        { 
          title: "Novembre 2019",
          description: "5ème semaine du wagon et initiation à la programmation côté. Les bases du Javascript sont abordés ainsi que la manipulation du DOM et les requête Ajax."
        },
        { 
          title: "Avril 2020",
          description: "Suite à une opportunité professionelle, je suis amené à me former sur Vuejs. En effet celui-ci était utilisé pour la création de composants javascript en combination du framework Ruby on Rails."
        },
        { 
          title: "Octobre 2020",
          description: "Après plusieurs projets sur Vuejs et mon affinité pour le référencement j'envisage le SSR et par extension Nuxt qui intègre vue-router par une architecture de fichier précise et un serveur node afin de générer le HTML une première fois coté serveur afin de laisser place à la magie de vue côté client."
        },
      ],
      timeLineItemsRight: [ 
        { 
          title: "Décembre 2019",
          description: "Après reflexion je découvre reactjs et ses multiples possibilités allant même jusqu'au développement d'application avec React Native, me voilà conquis, cours udemy en poche. J'entreprend la création de mon portfolio sur Reactjs."
        },
        { 
          title: "Juin 2020",
          description: "Après de multiple manipulation de composants Vue je décide convertir mon portfolio sur vue et ainsi de m'initier à vue-router et vuex."
        }
      ],
      textHeader: {
        title: "Mes clients",
        teaser: "Ils ont fait appel à mes services pour du développement front-end",
        text: ''
      },
      faceImgs: ['Ruby_text.png', 'Rails.png', 'Webpack_text.png', 'PostGreSQL.png', 'Rails.png'],
      skills: [
        {
          img: "Webpack.png",
          name: "Webpack l'immanquable",
          price: '300',
          description: "Mon Framework de predilection pour sa facilité d'usage et sa réactivité predilection pour sa facilité d'usage et sa réactivité",
          rating: 3
        },
        {
          img: "Rails.png",
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
          name: "SecuryGard",
          src: "securygard.png"
        }
      ]
      
    };
  },
}
</script>

<style>
.logo-list {
    margin: 5rem auto;
}

.company-logo {
  display: block;
  margin: 0 auto;
}
</style>