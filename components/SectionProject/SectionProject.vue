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
import Mindseed from '~/assets/projects/mindseed/mindseed.png'
import ThomasKrief from '~/assets/projects/thomaskrief/thomaskrief.png'
import SecuryGard from '~/assets/projects/Securygard/Securygard.png'
import ReflexOsteo from '~/assets/projects/reflexosteo/Reflex_osteo.png'
import TimePass from '~/assets/projects/timepass/Timepass.png'
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
          title: 'REFLEXOSTEO',
          teaser: 'Site de mise en relation entre ostéopathe et patient',
          desc: "Les besoins a moyen termes étaient les suivants :<ul><li>Implémentations d'un système de temoignage sur les articles de blog, la plus grande source de trafic.</li> <li>Création d'un hug de blog qui était jusque la hébergé sur wordpress. <li>Optimisations techniques SEO</li> <li>Renforcement de l'automatisation des process du backoffice.</li><li>Representation des statistiques essentielle à la gestion quotidienne de l'entreprise.</li> <li>Création d'un hug de blog qui était jusque la hébergé sur wordpress. <li>Optimisations techniques SEO</li> <li>Renforcement de l'automatisation des process du backoffice.</li><li>Optimisation du parcours client.</li></ul>",
          solution: "Totalisant jusqu'ici 4 mois de travail, j'ai pu réaliser la plupart des besoins initiaux de Reflex Osteo avec : <ul><li>l'implementation de commentaires sur des articles de blog</li> <li>La création d'un hub blog avec système de recherche et structure d'article par tags </li> <li>Amélioration des performances sur mobile</li> <li>Système de mise en avant des meilleurs ostéopathes en fonction de leurs recommandations</li> <li>Mise en place de téléconsultation d'un système de téléconsultation</li> <li>Envoi automatique de mail lors de différent évenement, reception de paiement, activation du compte ostéopathe etc...</li> <li>Conformités au RGPD </li> <li>Résolution de différents bugs </li>",
          img: 'Reflex_osteo.png',
          notebook: 'noutbookreflexosteo.png',
          alt: 'reflexosteo',
          href: 'https://www.reflexosteo.com/',
          projectImages: [
            {img: 'reflexosteo1', text: "Création de temoignage pour les utilisateurs identifié ou non."}, 
            {img: 'reflexosteo2', text: "Mise en place d'un hub de blog avec module de recherche d'article."}, 
            {img: 'reflexosteo3', text: "Representation graphique de statistiques avec les éléments nécessaires."}, 
            {img: 'reflexosteo4', text: "Classement des meilleurs ostéopathes par ville en fonction de leurs notations."},
            {img: 'reflexosteo5', text: "Module de recherche préfiltré en fonction de la page actuelle (ici ostéopathie pour bébé filtre les ostéopathes pour bébé)."}
          ],
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
          teaser: "Site de mise en relation entre expert et personnes ayant besoin d'une expertise dans un domaine spécifique",
          desc: "Plusieurs problématiques ont été abordées: <ul><li>les experts doivent être classé et ainsi trouvable par mots clés </li>. <li>Une fois trouvés les utilisateurs et experts doivent pouvoir échanger sur les modalités d'une mission.</li> <li>Une fois la mission acceptée et terminée une monnaie doit être échangée : le tpass.</li> <li>Un dernier élément est envisagé.. un sytème de parrainage entre expert pour développer l'adhésion.</li></ul>",
          solution: "Pour répondre aux différentes problématiques j'ai mis en place les éléments suivants : <ul><li>Mise en place d'un système de chat à l'attribution d'une mission</li> <li>Un système de recherche d'expert par tags</li> <li>Gestion de l'affection et de l'échange de la monnaie virtuelle : le tpass</li> <li>Implémentation de la charte graphique.</li> <li>Un système de parrainage a également été développé avec une attribution de la monnaie virtuelle au parrain suite à un parrainage ou encore le parrainage.</li></ul>",
          img: 'Timepass.png',
          notebook: 'noutbooktpass.png',
          alt: 'timepass',
          href: 'https://timepasse.herokuapp.com/',
          projectImages: [
            {img: 'tpass1', text: "Module de recherche et presentation des experts disponibles."}, 
            {img: 'tpass2', text: "Chat reactif entre expert et demandeur"}, 
            {img: 'tpass3', text: "Tableau de bord des demande de missions, en cours ou terminés. La clotûre de la missions implique un échange de tpass, ici 5."}, 
            {img: 'tpass4', text: "Representation visuelle de la hierarchie parrains, filleuls et l'attribution des tpass par chacun."}
          ],
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
          desc: "SecuryGard en tant qu'entreprise de sécurité à la besoin de créer et de partager un nombre de documents avec ses clients et salariés.",
          solution: "Projet de création d'une application Web de gestion de base de données clients avec : <ul><li>partage de documents sécurisés entre administrateurs et utilisateurs</li> <li>Création dynamique de contrats (format pdf)</li> <li> Distribution et remplissage d'enquête clients.</li> <li>CRUD classique pour les documents, la base de données clients et l'attribution des salaries.</li><li>Création et mise en place de la charte graphique.</li></ul>",
          img: 'Securygard.png',
          notebook: 'noutbooksecurygard.png',
          alt: 'Securygard',
          href: 'https://serene-falls-79228.herokuapp.com/',
          projectImages: [
            {img: 'securygard1', text: "Listing des clients avec recherche par nom ou email, création, modification et suppression client."}, 
            {img: 'securygard2', text: "Tableau de bord par client avec opérations à effectuer, les devis, documents et enquêtes clients téléchargés."}, 
            {img: 'securygard3', text: "Tableau de bord côté client des différents document mise à ça disposition."}, 
            {img: 'securygard4', text: "Questionnaire client avec la liste des questions modifiables."}
          ],
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
