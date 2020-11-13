<template lang="pug">
  .full
    .d-flex
      Banner(:blabla='BannerBlabla', :image="image" :ctaText="ctaText" :link="link")
    .section-sm.primary.flex-column.white--text
      TextHeader(:blabla="{title: 'Mes réalisations', teaser: 'Du site vitrine au backoffice de gestion en passant par des applications web (PWA)'}" side="center" :white="true")
      .d-flex.flex-wrap.justify-center.col-10.center-middle
        v-flex.col-10.col-lg-6.mb-12(v-for="item in items" :key='item.title')
          ProjectCard(:project="item")
    .section-sm.white.flex-column.justify-center
      .d-flex.justify-center.align-center.col-10.flex-wrap
        .col-sm-6.col-12.d-flex.justify-center.align-center
          v-img(:src="contactImg")
        .col-sm-6.col-12
          h2 Alors convaincus par mon profil ?
          span Prenez contact et échangons sur votre projet.
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
        teaser: "Du site vitrine au backoffice de gestion en passant par des applications web (PWA)",
        text: "En décembre 2019, suite à 3 mois de bootcamp intensif à apprendre à coder, me voilà face à un choix draconien auquel tout développeur web est un jour confronté, plutôt front ou plutôt back ? Après des jours à tergiverser, je me décide... le Javascript parce que oui avec lui on peut faire les deux mais aussi et surtout créer des applications web toujours plus animées."
      },
      ctaText: "Prenons contact",
      link: "/contact",
      image: img,
      contactImg: contactImg,
      items: {
        reflexosteo: {
          title: 'REFLEX OSTEO',
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
        },
        thomaskrief: {
          title: 'THOMAS KRIEF',
          teaser: "Site vitrine de l'ancien skieur freestyle français : Thomas Krief",
          desc: "Projet de création d'un site vitrine pour l'ancien skieur professionnel et nouvel artiste : Thomas Krief. <br><br>L'objectif rechercher mettre en avant ses dernières créations et inviter les visiteurs à se rediriger vers son compte Artmajeur pour acceder à toute sa collection, ses prix.",
          solution: "Un site vitrine détaillant son parcours d'athlète accompli à l'artiste en reconversion. <br><br>Les oeuvres qu'il a choisi sont alors exposées par l'intermédiaire d'un carousel offrant la possibilté de se diriger vers un site e-commerce pour artiste (ArtMajeur).Là sont exposés tous ses oeuvres, les caractéristiques associés mais aussi et surtout le prix. <br><br>Un lien vers ses réseaux sociaux des plus entretenus sont également suggérés car Thomas dispose d'une grande communauté de par son passé.",
          img: 'thomaskrief.png',
          notebook: 'noutbooktk.png',
          alt: 'thomaskrief',
          href: 'http://www.thomaskrief.fr/',
          projectImages: [
            {img: 'www-thomaskrief-com', text: "Intégralité du site vitrine Thomaskrief.com"}, 
          ],
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
          desc: "Projet de deux semaines réalisé au cours du Bootcamp proposé par la formation de développeur web Full-Stack, le Wagon. La problématique ? 80% de l'apprentissage classique est oublié après seulement une semaine. L'approche ? Apprendre aux utilisateurs à apprendre en créant une application proposant une expérience suffisamment attractive et structurée pour donner aux étudiants envie d'apprendre differemment.",
          solution: "Une application web offrant la possibilité de structurer ses cours à la manière d'un mindmap. <br><br>Une fois les cours structurés en différentes parties et sous parties, l'utilisateur à la possibilité d'importer un jeu de carte existant ou de créer lui même un jeu de carte en quelques clics (un clic sur un mot suggère une définition adapté grâce à un call API), questions réponses. <br><br>Une fois le jeu de carte créé une jeune pousse représentant la connaissance de l'utilisateur est ajouté à sa carte de connaissance. <br><br>Celui-ci est alors proposé à l'utilisateur pour tester ses connaissances, à l'issu du test la plante est arrosée puis grandit tel une connaissance qui se développe. <br><br>Lorsque l'utilisateur se reconnecte sur l'application, un jeu de carte lui est automatiquement suggéré afin qu'il puisse litéralement entretenir ses connaissances. <br><br>Et le cycle se répète et les connaissances des utilisateurs s'enrichissent.", 
          img: 'mindseed.png',
          notebook: 'noutbookmindseed.png',
          alt: 'mindseed',
          href: 'https://www.mindseed.app/',
          projectImages: [
            {img: 'mindseed1', text: "Screen intégral de la homepage, le reste du contenu étant encore tenu secret.."}, 
          ],
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