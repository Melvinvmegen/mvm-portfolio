<template lang="pug">
  .full
    .d-flex
      Banner(:blabla='BannerBlabla', :image="image" :ctaText="ctaText" :link="link" :upside="true")
    .section.primary.flex-column.white--text.timeline-container
      br
      br
      TextHeader(:blabla="{title: 'Mon parcours Front-End'}" side="center" :white="true")
      v-container
        Timeline(:timeLineItemsLeft="timeLineItemsLeft", :timeLineItemsRight="timeLineItemsRight" :faceImgs="faceImgs" folder="front")
    .section-sm.secondary.flex-column.white--text
      v-container
        TextHeader(:blabla="{title: 'Un résumé de ma Stack Front-End', teaser: 'Et leurs notations pas du tout exagéré et souvent approuvé par 100 personnes'}" side="center" :color="true")
        .d-flex.flex-wrap(data-aos="fade-down")
          .col-md-4.col-12(v-for="skill in skills" :id="skill.name")
            Skill(:skill="skill" folder="front")

    .section-sm.white.flex-column.white--text
      v-container
        TextHeader(:blabla="textHeader" side="center" :color="true")
        .col-lg-8.col-11.logo-list
          .d-flex.flex-wrap
            .col-md-4.col-sm-6.col-12.company-logo(v-for="company in companies" :key="company.name")
              img.company-logo(:src="require(`~/assets/companies/${company.src}`)" :alt="company.name")
</template>

<script>
import img from '~/assets/front/frontend.png'
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
        title: "Développement front-end",
        teaser: "Création d'application web sur Vuejs & Reactjs",
        text: "En décembre 2019, suite à 3 mois de bootcamp intensif à apprendre à coder, me voilà face à un choix draconien auquel tout développeur web est un jour confronté, plutôt front ou plutôt back ? Après des jours à tergiverser, je me décide... le Javascript parce que oui avec lui on peut faire les deux mais aussi et surtout créer des applications web toujours plus animées."
      },
      ctaText: "Découvrez mes projets",
      link: "/projets",
      image: img,
      timeLineItemsLeft: [ 
        { 
          id: 1,
          title: "Novembre 2019",
          description: "5ème semaine du wagon et initiation à la programmation côté client. Les bases du Javascript sont abordés ainsi que la manipulation du DOM et les requête Ajax."
        },
        { 
          id: 3,
          title: "Avril 2020",
          description: "Suite à une opportunité professionelle, je suis amené à me former sur Vuejs. En effet celui-ci était utilisé pour la création de composants javascript en combination du framework Ruby on Rails."
        },
        { 
          id: 5,
          title: "Octobre 2020",
          description: "Après plusieurs projets sur Vuejs et mon affinité pour le référencement j'envisage le SSR et par extension Nuxt qui intègre vue-router par une architecture de fichier précise et un serveur node afin de générer le HTML une première fois coté serveur afin de laisser place à la magie de vue côté client."
        },
      ],
      timeLineItemsRight: [ 
        { 
          id: 2,
          title: "Décembre 2019",
          description: "Après reflexion je découvre reactjs et ses multiples possibilités allant même jusqu'au développement d'application avec React Native, me voilà conquis, cours udemy en poche. J'entreprend la création de mon portfolio sur Reactjs."
        },
        { 
          id: 4,
          title: "Juin 2020",
          description: "Après de multiple manipulation de composants Vue je décide convertir mon portfolio sur vue et ainsi de m'initier à vue-router et vuex."
        }
      ],
      faceImgs: ['JS_text.png', 'React_text.png', 'Webpack_text.png', 'Vuejs_text.png', 'Nuxtjs_text.png'],
      textHeader: {
        title: "Mes clients",
        teaser: "Ils ont fait appel à mes services pour du développement front-end",
        text: ''
      },
      skills: [
        {
          img: "Webpack.png",
          name: "Webpack l'immanquable",
          price: '300',
          description: "Mon Framework de predilection pour sa facilité d'usage et sa réactivité predilection pour sa facilité d'usage et sa réactivité",
          rating: 3
        },
        {
          img: "Nuxtjs.png",
          name: "NuxtJs",
          price: '300',
          description: "J'adore le fait de pas avoir à me préoccuper des routes.. J'adore le fait de pas avoir à me préoccuper des routes..",
          rating: 4
        },
        {
          img: "Reactjs.png",
          name: "ReactJs",
          price: '300',
          description: "Le premier framwork à m'avoir fait apprécier les composents mais j'ai assez peu d'expérience dessus..",
          rating:3.5
        },
        {
          img: "JS.png",
          name: "Js (ES6)",
          price: '300',
          description: "La base de la base mais en même temps toujours tellement plus à apprendre dessus.",
          rating:3.5
        },
        {
          img: "Vuejs.png",
          name: "VueJs",
          price: '300',
          description: "Mon Framework de predilection pour sa facilité d'usage et sa réactivité.",
          rating:4
        },
        {
          img: "Css.png",
          name: "Css & animation",
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
          name: "Thomas Krief",
          src: "tk.png"
        },
        { 
          name: "Platon formation",
          src: "platonformation.png"
        },
        { 
          name: "6krio",
          src: "6krio.png"
        },
      ]
      
    };
  },
}
</script>

<style>
.timeline-container {
  height: auto !important;
}

.logo-list {
    margin: 5rem auto;
}

.company-logo {
  display: block;
  margin: 0 auto;
  filter: grayscale(100%);
  opacity: .5;
  transition: all .25s ease;
}

.company-logo:hover {
  filter: grayscale(0);
  opacity: 1;
}
</style>