<template lang="pug">
  .section(:style="{ background: color }")
    a.section-anchor(id='Developpeur-Back-end')
    .section-main
      .section-wrapper(:class="{'flex-row-reverse': reverse}")
        .section-right
          .section-wrapper-right
            Polygons(:inputs="polygonInputs" :color="blabla.textColor")
        .section-left
          BlaBla(:blabla="blabla")
          ButtonProject(:text="ctaText" :href="link" :textColor="blabla.textColor")
</template>

<script>
export default {
  props: {
    blabla: Object,
    polygonInputs: Array,
    ctaText: String,
    link: String,
    color: String,
    reverse: Boolean
  }
}
</script>

<style>

</style>
