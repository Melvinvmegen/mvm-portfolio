<template lang="pug">
  v-card.mx-auto.my-12.skill-card(max-width='374')
    template(slot='progress')
      v-progress-linear(color='deep-purple' height='10' indeterminate='')
    v-card.inner-card
      img(height='150' :src="require(`~/assets/${folder}/${skill.img}`)")
      v-card-title {{ skill.name }}
      v-card-text.white--text
        v-row.justify-space-between.mx-0(align='center')
          .d-flex
            v-rating(:value='skill.rating' color='amber' background-color="grey lighten-2" dense='' half-increments='' readonly='' size='14')
          .my-4.subtitle-1
            | {{ skill.price }} €/j
        div
          | {{ skill.description }}
      hr.separator
      v-card-actions
        v-btn.white--text(text to='/contact')
          | Alors on discute ?
</template>

<script>
export default {
  props: {
    skill: Object,
    folder: String
  }
}
</script>

<style>
  .skill-card {
    border: 2px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent !important;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2) !important;
    background-color: rgba(255, 255, 255, .15) !important;
    border-radius: 8% !important;
  }

  .inner-card {
    border-radius: 8% !important;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, rgba(42,95,121,1) 40%, rgba(246,80,74,1) 100%) !important;
    color: white !important;
  }

  .separator {
    border: 1px solid white;
    width: 20%;
  }
</style>
