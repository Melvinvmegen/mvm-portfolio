<template lang="pug">
  v-app(dark='')
    NavBar(:navItems="navItems", :socialLinks="socialLinks")

    v-main
      v-container
        nuxt
    v-footer()
      span &copy; {{ new Date().getFullYear() }}

</template>

<script>
import NavBar from '~/components/Navbar'

export default {
  components: {
    NavBar
  },
  data () {
    return {
      navItems: [
        { id: 1, title: 'Developpeur Front-end', href: 'Developpeur-Front-end' },
        { id: 2, title: 'Back-end', href: 'Developpeur-Back-end' },
        { id: 3, title: 'Marketeur Digital', href: 'Marketeur-Digital' },
        { id: 4, title: 'Mes Projets', href: 'Mes-Projets' }
      ],
      socialLinks: [
        { id: 1, icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/melvin-van-megen/' },
        { id: 2, icon: 'mdi-twitter', href: '' },
        { id: 3, icon: 'mdi-skype', href: '' },
        { id: 4, icon: 'mdi-github', href: 'https://github.com/Melvinvmegen' }
      ]
    }
  }
}
</script>
