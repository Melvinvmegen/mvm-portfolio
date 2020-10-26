<template lang='pug'>
  .logo
    img(:src="whitelogo" alt="" class="" v-if="color")
    img(:src="defaultlogo" alt="" class="" v-else)
</template>

<script>
import Logo from '~/assets/LOGO.svg'
import WhiteLogo from '~/assets/logo blanc.svg'

export default {
  props: {
    color: String
  },
  data () {
    return {
      defaultlogo: Logo,
      whitelogo: WhiteLogo
    }
  }
}
</script>


<style scoped>
  .logo {
    width: 100px;
    height: 100px;
    margin-left: 10px;
  }
</style>
