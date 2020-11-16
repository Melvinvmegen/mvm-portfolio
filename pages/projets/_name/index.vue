<template lang="pug">
  .full
    v-container
      TextHeader(:blabla="{title: title, teaser: teaser}" side="center" :color="true")
      Tags(:tags="tags")
      v-img(:src="require(`~/assets/projects/${alt}/${notebook}`)" contain)
      .pb-15.pt-15
        h2.subheader Le projet...
        span(v-html='desc')
    .secondary.align-start
      v-container
        .pb-15.pt-15
          h2.subheader La solution...
          span(v-html='solution')
          br
          .d-flex.justify-center.flex-column
            .col-12.justify-center.align-center.d-flex.flex-column(v-for='projectImage in projectImages')
              v-img.img-project( :src="require(`~/assets/projects/${alt}/${projectImage.img}.png`)" contain)
              span.font-italic.text-center {{ projectImage.text }}
</template>

<script>
import Tags from '~/components/Tags/Tags'

export default {
  components: {
    Tags
  },
  data() {
    return {
      title: this.$route.params.project.title,
      teaser: this.$route.params.project.teaser,
      desc: this.$route.params.project.desc,
      solution: this.$route.params.project.solution,
      img: this.$route.params.project.img,
      notebook: this.$route.params.project.notebook,
      projectImages: this.$route.params.project.projectImages,
      alt: this.$route.params.project.alt,
      href: this.$route.params.project.href,
      btnText: this.$route.params.project.btnText,
      tags: this.$route.params.project.tags
    }
  }
}
</script>

<style>
  .subheader {
    font-size: 40px;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .img-project {
    margin: 40px 0;
  }
</style>