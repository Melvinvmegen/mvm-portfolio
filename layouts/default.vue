<template lang="pug">
  v-app(dark='')
    NavBar(:navItems="navItems", :socialLinks="socialLinks")

    v-main
      nuxt
    Footer(:socialLinks='socialLinks')
</template>

<script>
import NavBar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default {
  components: {
    NavBar,
    Footer
  },
  data () {
    return {
      navItems: [
        { id: 1, title: 'FRONT END', link: 'frontEnd' },
        { id: 2, title: 'BACK END', link: 'backEnd' },
        { id: 3, title: 'REFERENCEMENT', link: 'referencement' },
        { id: 4, title: 'PROJETS', link: 'projets' },
        { id: 5, title: 'CONTACT', link: 'contact' }
      ],
      socialLinks: [
        { id: 1, icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/melvin-van-megen/' },
        { id: 2, icon: 'mdi-mail', href: 'mailto:melvin.vmegen@gmail.com' },
        { id: 4, icon: 'mdi-github', href: 'https://github.com/Melvinvmegen' }
      ]
    }
  }
}
</script>

<style>
  html {
    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;
  }

  body {
    font-family: Montserrat,BuenosAires,sans-serif;
    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;
  }

  .v-application {
    font-family: Montserrat,BuenosAires,sans-serif;
  }

  .v-list-item--active::before {
    opacity: 0 !important;
  }

  .theme--light.v-list-item:hover::before {
    opacity: 0 !important;
  }

  .v-application a {
    text-decoration: none !important;
  }

  .theme--light.v-btn:hover::before {
    opacity: 0;
  }
</style>