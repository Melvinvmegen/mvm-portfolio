<template lang="pug">
  v-app(dark='')
    v-app-bar(:clipped-left='clipped' fixed='' app='')

    v-main
      v-container
        nuxt
    v-footer(:absolute='!fixed' app='')
      span &copy; {{ new Date().getFullYear() }}

</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
