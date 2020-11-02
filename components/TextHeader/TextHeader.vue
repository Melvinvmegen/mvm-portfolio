<template lang="pug">
  v-container(:class="{'align-center': $vuetify.breakpoint.smAndDown}")
    h1.text-left(:class="{'text-center' : side, 'primary-border': color, 'white--text': white}") {{ blabla.title }}
    br
    h3(:class="{'text-center' : side, 'primary--text': color}") {{ blabla.teaser }}
    p.subtitle-1(:class="{'text-justify' : side}") {{ blabla.text }}
    slot
</template>

<script>
export default {
  props: {
    blabla: Object,
    side: Boolean,
    color: Boolean,
    white: Boolean
  }
};
</script>

<style scoped>
  h1 {
    color: #234A5D
  }

  h1:after {
    content: "";
    display: block;
    margin-top: 1rem;
    height: 10px;
    width: 65px;
    border-bottom: 0.1rem solid #d8d8d8;
  }

  h1.primary-border:after {
    border-bottom: 0.1rem solid #234A5D !important;
  }

  h1.text-center:after {
    content: "";
    display: block;
    margin: 2rem auto 1rem;
    height: 10px;
    width: 65px;
    border-bottom: 0.1rem solid #d8d8d8;
  }

  h3 {
    color: #D1DCDF
  }
</style>
