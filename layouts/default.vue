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
        { id: 1, title: 'FRONT END', link: 'front-end' },
        { id: 2, title: 'BACK END', link: 'back-end' },
        { id: 3, title: 'MARKETING DIGITAL', link: 'marketeur-digital' },
        { id: 4, title: 'PROJETS', link: 'projets' },
        { id: 5, title: 'CONTACTS', link: 'contact' }
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
