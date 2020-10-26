<template lang="pug">
  v-card.flex(max-height="150")
    v-footer(dark='' padless='' absolute)
      v-card.primary.white--text.flex(flat='' tile='')
        v-card-title.primary.white--text
          v-container.d-flex.flex-row(:class="{'flex-column': $vuetify.breakpoint.smAndDown, 'align-center': $vuetify.breakpoint.smAndDown}")
            Logo(color='white')
            .d-flex.justify-space-around.col-9
              div(v-for="link in links" :key="link.id")
                h4.v-list-item {{ link.title }}
                ul
                  v-list-item(v-for="sublink in link.sublinks" :key='sublink.id')
                    | {{ sublink.name }}
            v-spacer
            .icons.col-2
              v-btn.white--text(v-for='link in socialLinks' :key='link.id' icon='')
                a(:href="link.link")
                  v-icon.white--text(size='24px')
                    | {{ link.icon }}
        v-divider
        v-card-text.white--text.text-center
          | {{ new Date().getFullYear() }} &mdash; 
          strong Melvinvmegen
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  props: {
    socialLinks: Array,
  },
  data () {
    return {
      links: {
        linksfront: {
          id: 1,
          title: 'Front-End',
          sublinks: [
            { id: 1, name: 'Javascript' },
            { id: 2, name: 'Vue' },
            { id: 3, name: 'Nuxt' },
            { id: 4, name: 'React' }
          ]
        },
        linksMar: {
          id: 2,
          title: 'Back-End',
          sublinks: [
            { id: 5, name: 'Ruby' },
            { id: 6, name: 'Rails' },
            { id: 7, name: 'postgresql' },
            { id: 8, name: 'Heroku' }
          ]
        },
        linksTra: {
          id: 3,
          title: 'Marketing Digital',
          sublinks: [
            { id: 9, name: 'SEO' },
            { id: 10, name: 'SEA' },
            { id: 11, name: 'Email Marketing' },
            { id: 12, name: 'Marketing de contenu' }
          ]
        }
      }
    }
  }
};
</script>

<style scoped>
  .icons {
    display: flex;
    justify-content: space-around;
    width: 40%;
  }

  ul {
    padding: 0;
  }

  ul .v-list-item {
    font-size: 16px;
  }
</style>
