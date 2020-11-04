<template lang="pug">
  .full
    v-container
      TextHeader(:blabla="{title: title, teaser: teaser}" :side="true" :color="true")
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
      title: this.$route.params.item.title,
      teaser: this.$route.params.item.teaser,
      desc: this.$route.params.item.desc,
      img: this.$route.params.item.img,
      alt: this.$route.params.item.alt,
      href: this.$route.params.item.href,
      btnText: this.$route.params.item.btnText,
      tags: this.$route.params.item.tags
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