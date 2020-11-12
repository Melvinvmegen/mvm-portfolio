<template lang="pug">
  .full
    .d-flex
      Banner(:blabla='BannerBlabla', :image="image" :ctaText="ctaText" :link="link")
    .section-sm.primary.flex-column.white--text
      br
      br
      TextHeader(:blabla="{title: 'Ma méthodologie'}" side="center" :white="true")
      .d-flex.flex-wrap.container
        .block.col-md-4.col-sm-12(v-for="step in steps" :key="step.id" :class="{'text-center': $vuetify.breakpoint.smAndDown}")
          img.step-img(:src="require(`~/assets/marketing-digital/${step.image}.png`)")
          h3.d-flex(:class="{'align-center justify-center': $vuetify.breakpoint.smAndDown}")
            strong.surrounded-text.mr-2 {{ step.id }}
            | {{ step.name }}
          p.ml-11 {{ step.desc }}

    .section.flex-column
      v-container
        TextHeader(:blabla="parcoursHeader" side="center" :color="true")
        br
        

    .section-sm.secondary.flex-column.white--text
      v-container
        TextHeader(:blabla="{title: 'Mes certifications', teaser: 'Et leurs notations pas du tout exagéré et souvent approuvé par 100 personnes'}" side="center" :color="true")
        br
        .d-flex.flex-wrap
          .block.col-md-3.col-sm-6.col-12.d-flex.justify-center.align-center.p-5(v-for="certif in certifications")
            .inner-certif
              img(:src="require(`~/assets/marketing-digital/${certif}.png`)")
    .section-sm.flex-column.white--text
      v-container
        TextHeader(:blabla="textHeader" side="center" :color="true")
        .col-lg-8.col-11.logo-list
          .d-flex.flex-wrap
            CompanyLogo(v-for="company in companies" :company="company")
</template>

<script>
import img from '~/assets/marketing-digital/marketingdigital.png'

export default {
  data() {
    return {
      BannerBlabla: {
        title: "Marketeur digital",
        teaser: "Du SEO au SEA en passant par du marketing de contenu",
        text: "Détenteur d'un bachelor de l'école de commerce, Kedge Business School me voilà embauché par l'entre Royal Brinkman pour assurer la transition digital dans une entreprise veillissante."
      },
      ctaText: "Découvrez mes projets",
      link: "/projets",
      image: img,
      steps: [
        {id: 1, image: 'magnifier', name: "Réalisation d'un audit technique", desc: "Détection des points d'attentions et optimisations"}, 
        {id: 2, image: 'noutbook', name: "Amélioration des points définis", desc: "Modification et optimisation des points d'attentions"},
        {id: 3, image: 'dashboard', name: "Analyse de l'impact des modifications", desc: "Mise en place d'un différentiel avant après"}
      ],
      textHeader: {
        title: "Mes clients",
        teaser: "Ils ont fait appel à mes services pour du développement front-end",
        text: ''
      },
      parcoursHeader: {
        title: 'Mon parcours', 
        teaser: "De l'école de commerce au développement web"
      },
      certifications: [
        'ahrefs',
        'google-ads',
        'google-analytics',
        'google-tag-manager'
      ],
      companies: [
        { 
          name: "ReflexOsteo",
          src: "logo_reflex_osteo.png"
        },
        { 
          name: "Royal Brinkman",
          src: "royal_brinkman.png"
        },
        { 
          name: "Thomas Krief",
          src: "tk.png"
        },
        { 
          name: "Platon formation",
          src: "platonformation.png"
        },
      ]
      
    };
  },
}
</script>

<style>
.step-img {
  max-height: 100px;
  margin: auto;
  display: block;
}

.surrounded-text {
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 8px;
  background: #f5423a;
  color: white;
  font: 24px Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inner-certif {
  box-shadow: rgba(0, 0, 0, 0.04) 0px 12px 16px, rgba(0, 0, 0, 0.04) 0px 0px 8px;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>