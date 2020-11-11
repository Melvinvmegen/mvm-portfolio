<template lang="pug">
  .full
    v-container
      TextHeader(:blabla="{title: title, teaser: teaser}" side="center" :color="true")
      Tags(:tags="tags")
      v-img(:src="require(`~/assets/projects/${img}`)" contain)
      .pb-15.pt-15
        h2.subheader Le projet.
        span {{ desc }}
    .section.secondary.align-start
      v-container
        .pb-15.pt-15
          h2.subheader La solution.
          span {{ desc }}
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
      img: this.$route.params.project.img,
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
</style>