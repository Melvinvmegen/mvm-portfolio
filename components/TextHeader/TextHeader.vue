<template lang="pug">
  v-container(:class="{'align-center': $vuetify.breakpoint.smAndDown}")
    h1(:class="{'primary-border': color, 'white--text': white, 'side-right': side === 'right', 'side-center': side === 'center'}" :style="{textAlign: side + '!important'}") {{ blabla.title }}
    br
    h3(:class="{'primary--text': color }" :style="{'text-align': side}") {{ blabla.teaser }}
    p.subtitle-1.text-justify(:style="{textAlign: side + '!important'}") {{ blabla.text }}
    slot
</template>

<script>
export default {
  props: {
    blabla: Object,
    side: {
      type: String,
      default: 'left'
    },
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

  h1.side-center:after {
    content: "";
    display: block;
    margin: 2rem auto 1rem;
    height: 10px;
    width: 65px;
    border-bottom: 0.1rem solid #d8d8d8;
  }

  h1.side-right:after {
    content: "";
    display: block;
    margin: 2rem 0 1rem auto;
    height: 10px;
    width: 65px;
    border-bottom: 0.1rem solid #d8d8d8;
  }

  h3 {
    color: #D1DCDF
  }
</style>
