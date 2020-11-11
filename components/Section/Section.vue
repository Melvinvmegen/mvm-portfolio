<template lang="pug">
  .section(:style="{ background: color }")
    a.section-anchor(id='Developpeur-Back-end')
    .section-main
      .section-wrapper.flex-md-row.flex-sm-column(:class="{'flex-md-row-reverse': reverse}")
        .col-md-6.col-12.d-flex.justify-center.align-center
          v-img(:src="sectionImage")
        .col-md-6.col-12.flex-column.d-flex.justify-center.align-center
          BlaBla(:blabla="blabla")
          ButtonProject(:text="ctaText" :href="link" :textColor="blabla.textColor")
</template>

<script>
export default {
  props: {
    blabla: Object,
    ctaText: String,
    link: String,
    color: String,
    reverse: Boolean,
    sectionImage: String
  }
}
</script>

<style>

</style>
