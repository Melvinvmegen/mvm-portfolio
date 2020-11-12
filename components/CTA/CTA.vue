<template lang="pug">
  .my-2(:class="{centered: centered}" :style="{textAlign: side}")
    v-btn(:color='color' dark='' large='' :to="link" v-if='!link.includes("malt")')
      | {{ text }}
    v-btn(:color='color' dark='' large='' v-else)
      a.white--text(:href="link")
        | {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
    color: String,
    centered: Boolean,
    link: String,
    side: String
  }
};
</script>

<style>
.centered {
  display: flex;
  justify-content: center;
}
</style>
