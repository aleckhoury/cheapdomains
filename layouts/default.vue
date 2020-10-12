<template>
  <v-app class="app">
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar v-if="$vuetify.breakpoint.xsOnly">
        <nuxt-link to="/" class="home">
          <v-toolbar-title id="title">
            <logo />
            <span class="pl-2 pt-1">Cheap Domains</span>
          </v-toolbar-title>
        </nuxt-link>

        <v-spacer></v-spacer>
        <v-menu transition="slide-x-transition" bottom left>
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on">
              <v-icon>fa fa-ellipsis-v</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item to="/about" nuxt>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
            <v-list-item to="/blog" nuxt>
              <v-list-item-title>Blog</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-toolbar v-else>
        <nuxt-link to="/" class="home">
          <logo />

          <v-toolbar-title id="title" class="pl-3">
            Cheap Domains
          </v-toolbar-title>
        </nuxt-link>

        <v-spacer></v-spacer>
        <v-toolbar-items
          ><v-btn depressed to="/about" nuxt>About</v-btn></v-toolbar-items
        >
        <v-toolbar-items
          ><v-btn depressed to="/blog" nuxt>Blog</v-btn></v-toolbar-items
        >
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
.app {
  background-color: #383a47;
}
#title {
  font-family: 'Permanent Marker';
  font-size: 2em;
  color: white;
  display: flex;
  vertical-align: middle;
}
.v-btn {
  font-family: 'Helvetica';
}
.home {
  text-decoration: none;
  display: contents;
}
@media screen and (max-width: 768px) {
  #title {
    font-size: 1.5em;
  }
}
</style>
