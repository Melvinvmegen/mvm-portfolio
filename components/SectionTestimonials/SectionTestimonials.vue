<template lang="pug">
  .section-testimonial(:style="$route.name === 'contact' && $vuetify.breakpoint.smAndDown ? 'margin-top: 50vh;' : 'margin-top: 0;'")
    .section-main-testimonials
      .section-title.text-center
        h2.title-bold.primary--text ILS M'ONT FAIT CONFIANCE
        h3.featured-item-subheader.text-center.italic.primary--text Pour leurs projets de développement d'application web
      .row-fluid
        .section-testimonials
          Testimonial(:testimonials="testimonials")
</template>

<script>
import Testimonial from './Testimonial/Testimonial'

export default {
  components: {
    Testimonial
  },

  data () {
    return {
      testimonials: [
        {
          id: 1,
          avatar: 'RobHelderman',
          name: 'Rob Helderman',
          company: `E-commerce Manager, Royal Brinkman`,
          quote: `Il prend des mesures générales visant tous les facteurs environnementaux de la partie digitale. De la gestion d'articles, CRM, aux campagnes e-mail, en passant par le référencement naturel et le SEA.`
        },
        {
          id: 2,
          avatar: 'JonathanChaffanjon',
          name: 'Jonathan Chaffanjon',
          company: 'Gérant, Platon Formation',
          quote: 'Sérieux et impliqué dans les projets, nous avons colloboré sur plusieurs projets dont un de référencement naturelle ( Platonformation.com ) ainsi que mon logiciel de gestion de base de données. Travail en autonomie.'
        },
        {
          id: 3,
          avatar: 'LucasJamelin',
          name: 'Lucas Jamelin',
          company: 'Label Manager, 6K RIO RECORDS',
          quote: 'Il a été de bons conseils et surtout très volontaire et force de proposition. Ses qualités stratégiques ne peuvent qu’optimiser son travail et ses rendus qui sont toujours bien ficellés et accompagnés d’une justification de ses choix toujours très pertinente.'
        }
      ]
    }
  }
}
</script>

<style>
  .section-testimonial {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    min-height: 90vh;
  }

  .section-main-testimonials {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    position: relative;
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10%;
    min-height: 900px;
  }

  .section-testimonials {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }

  .section-testimonials-inner {
    height: 500px;
    margin: auto;
  }

  @media (max-width: 768px) {
    .testimonials-list {
      justify-content: space-evenly;
    }

    .testimonials {
      padding: 20px 20px 0 20px;
    }

    .testimonial-infos {
      margin: 0;
      height: 120px;
    }

    .testimonial-quote {
      font-size: 14px;
    }

    .testimonial-quote blockquote {
      text-align: center;
      font-size: 17px;
    }

    .testimonial-text {
      padding-left: 10px;
    }
  }

  @media (max-width: 600px) {
    .section-main-testimonials {
      min-height: 1000px;
    }
  }

  @media (max-width: 450px) {
    .section-main-testimonials {
      min-height: 1100px;
    }
  }

  @media (max-width: 400px) {
    .section-main-testimonials {
      min-height: 900px;
    }
  }


  @media (max-width: 375px) {
    .section-title {
      margin-bottom: 0 !important;
    }

    .testimonials-slide {
      margin: 0 20px;
    }

    .testimonial-infos {
      height: 80px;
    }

    .testimonial-quote blockquote {
      text-align: center;
      font-size: 15px;
    }
  }
</style>
