<template lang="pug">
  .full
    .d-flex
      Banner(:blabla='BannerBlabla', :image="image" :ctaText="ctaText" :link="link")
    .section-sm.primary.flex-column.white--text
      TextHeader(:blabla="blabla" side="center" :white="true")
      .d-flex.flex-wrap.justify-center.col-10.center-middle
        v-flex.col-10.col-lg-6.mb-12(v-for="item in items" :key='item.title')
          ProjectCard(:project="item")
    .section-sm.white.flex-column.justify-center
      .d-flex.justify-center.align-center.col-10.flex-wrap
        .col-sm-6.col-12.d-flex.justify-center.align-center
          v-img(:src="contactImg")
        .col-sm-6.col-12
          h2 Alors convaincu par mon profil ?
          span Prenez contact et échangons sur la réalisation de votre projet, son coût et ses délais.
          CTA(v-if="ctaText && link" :className="true" color="accent" :text="ctaText" :link="link")
      nuxt-child
</template>

<script>
import Section from "~/components/Section/Section";
import img from '~/assets/projects/projects.png'
import ProjectCard from '~/components/ProjectCard/ProjectCard'
import contactImg from '~/assets/projects/envelope.png'

export default {
  components: {
    Section,
    ProjectCard
  },
  data() {
    return {
      BannerBlabla: {
        title: "Mes réalisations",
        teaser: "Du site vitrine à l\'application de gestion en passant par des applications PWA",
        text: "Equipé de ma stack front-end et back-end (ou fullstack) je développe des sites vitrines (sans gestion de contenu), blogs (avec gestion de contenu) ou encore des applications de gestion (commande, stock, facturation) le tout adapté aux différents format d'écran : mobile, tablette, écran. J'ai récemment développé une applications web progressives pour offrir une experience mobile similaire à celle d'une application mobile sans les contraintes de cette dernière."
      },
      blabla: {
        title: "Mes réalisations"
      },
      ctaText: "Prenons contact",
      link: "/contact",
      image: img,
      contactImg: contactImg,
      items: {
        reflexosteo: {
          title: 'REFLEXOSTEO',
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
          title: 'THOMASKRIEF',
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
 .center-middle {
   margin: 0 auto;
 }
</style>