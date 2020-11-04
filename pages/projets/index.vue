<template lang="pug">
  .full
    .d-flex
      Banner(:blabla='BannerBlabla', :image="image" :ctaText="ctaText" :link="link")
    .section-sm.primary.flex-column.white--text
      TextHeader(:blabla="{title: 'Mes réalisations', teaser: 'Du site vitrine au backoffice de gestion en passant par des applications web (PWA)'}" :side="true" :white="true")
      .d-flex.flex-wrap.justify-center
        v-flex.col-10.col-lg-5.mb-12(v-for="item in items" :key='item.title')
          nuxt-link(:to="{ name: 'projets-name', params: { name: item.title, item: item }}")
            v-img.project-img(:src="require(`~/assets/projects/${item.img}`)" :alt="item.alt" :href="item.href" data-aos="zoom-in")
              .img-text
                h2.title-slide {{ item.title }}
                p.teaser-slide {{ item.teaser }}
      nuxt-child
</template>

<script>
import Section from "~/components/Section/Section";
import img from '~/assets/pose_1.png'
import Tags from '~/components/Tags/Tags'

export default {
  components: {
    Section,
    Tags
  },
  data() {
    return {
      BannerBlabla: {
        title: "Mes réalisations",
        teaser: "Du site vitrine au backoffice de gestion en passant par des applications web (PWA)",
        text: "En décembre 2019, suite à 3 mois de bootcamp intensif à apprendre à coder, me voilà face à un choix draconien auquel tout développeur web est un jour confronté, plutôt front ou plutôt back ? Après des jours à tergiverser, je me décide... le Javascript parce que oui avec lui on peut faire les deux mais aussi et surtout créer des applications web toujours plus animées."
      },
      ctaText: "Découvrez mes projets Front-end",
      link: "/projets",
      image: img,
      items: {
        reflexosteo: {
          title: 'REFLEX OSTEO',
          teaser: 'Site de mise en relation entre ostéopathe et patient',
          desc: "Totalisant jusqu'ici 4 mois de travail avec différentes missions, tel que l'implementation de commentaires sur des articles de blog, la création d'un hub blog avec système de recherche (auparavant wordpress), l'amélioration des performances sur mobile, un système de mise en avant des meilleurs ostéopathes en fonction de leurs recommandations, mise en place de téléconsultation et bien d'autres...",
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
          desc: "Mise en place d'un système de chat à l'attribution d'une mission, d'un système de recherche d'expert par tags, gestion de l'affection et de l'échange de la monnaie virtuelle : le tpass et implémentation de la charte graphique.",
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
        },
        thomaskrief: {
          title: 'THOMAS KRIEF',
          teaser: "Site vitrine de l'ancien skieur freestyle français : Thomas Krief",
          desc: "Projet de création d'un site vitrine pour l'ancien skieur professionnel et nouvel artiste : Thomas Krief. L'objectif rechercher, mettre en avant ses dernières créations et inviter les visiteurs à se rediriger vers son compte Artmajeur pour acceder à toute sa collection.",
          img: 'thomaskrief.png',
          alt: 'THOMAS KRIEF',
          href: 'http://www.thomaskrief.fr/',
          btnText: '► Se rendre sur le site',
          tags: [
            { id: 1, name: 'HTML5' },
            { id: 2, name: 'CSS3' },
            { id: 3, name: 'Javascript' },
            { id: 4, name: 'React.js' },
            { id: 5, name: 'Netlify' }
          ]
        },
        mindseed: {
          title: 'MINDSEED',
          teaser: 'MindSeed est une application d’apprentissage regroupant des méthodes issues de la recherche en sciences cognitives',
          desc: "Projet de deux semaines réalisé au cours du Bootcamp proposé par la formation de développeur web Full-Stack, le Wagon. Nous avons créé un site d'aide à l'apprentissage avec un système de flashcards poussé. Celui-ci est à destination des étudiants, professeurs ou simple curieux avare d'apprentissage.",
          img: 'mindseed.png',
          alt: 'MINDSEED',
          href: 'https://www.mindseed.app/',
          btnText: '► Se rendre sur le site',
          tags: [
            { id: 1, name: 'HTML5' },
            { id: 2, name: 'CSS3' },
            { id: 3, name: 'Javascript' },
            { id: 6, name: 'Ruby' },
            { id: 7, name: 'Ruby on Rails' },
            { id: 9, name: 'Heroku' }
          ]
        }
      }
    }
  },
}
</script>

<style>
  .project-img {
    max-width: 100%;
    box-shadow: 0 0.3125rem 1rem 0 rgba(0,0,0,.24);
  }

  .project-img .v-image__image {
    transition: all .5s;
    filter: grayscale(100%);
  }

  .project-img:hover .v-image__image {
    transform: scale(1.1);
    filter: grayscale(0%);
  }

  .project-img:hover .v-image__image:before {
    display: block;
  }

  .project-img:hover .v-responsive__content .img-text {
    display: block;
  }


  .v-image__image:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(52,73,94,0.75);
    transition: all .6s ease;
  }

  .img-text {
    width: 16rem;
    height: 9em;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
    display: none;
    transition: all .6s ease;
  }

  .teaser-slide {
    color: #D1DDE6;
    border-top: 1px solid #D1DDE6;
    padding-top: 16px;
  }

  .title-slide {
    font-size: 30px;
    text-decoration: none;
    line-height: 2.5;
    font-weight: 800;
    text-align: center;
    padding-right: 13%;
    color: #D1DDE6;
  }
</style>