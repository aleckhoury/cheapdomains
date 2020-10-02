<template>
  <v-app>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar>
        <logo />

        <v-toolbar-title id="title" class="pl-3">Cheap Domains</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items><v-btn depressed>About</v-btn></v-toolbar-items>
        <v-toolbar-items><v-btn depressed>Blog</v-btn></v-toolbar-items>
      </v-toolbar>
    </v-card>
    <v-layout>
      <nuxt />
    </v-layout>
    <v-footer padless>
      <v-col cols="6">&copy; Cheap Domains {{ new Date().getFullYear() }}</v-col
      ><v-spacer />
      <v-col cols="6" class="text-right"
        >Illustrations by &nbsp;<a href="https://icons8.com/"> Icons8 </a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import logo from '../components/Logo'

export default {
  components: {
    logo,
  },
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style scoped>
#title {
  font-family: 'Permanent Marker';
  font-size: 2em;
}
.v-btn {
  font-family: 'Helvetica';
}
</style>
