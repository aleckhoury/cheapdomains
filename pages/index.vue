<template>
  <div class="full-width">
    <div class="header">
      <div class="cta">
        <h2>
          Search your domain once. We'll find the cheapest price. That's it.
        </h2>
      </div>
      <div class="search">
        <v-text-field
          v-model="search"
          color="#f08080"
          prepend-inner-icon="fa fa-search"
          solo
          clearable
          persistent-hint
          hint="Type the exact domain you'd like to search, or you may get worse results. i.e. 'example.com'"
          @keydown.enter="search ? searchPrice() : ''"
        >
          <template v-if="!$vuetify.breakpoint.xsOnly" slot="append">
            <VBtn
              light
              :dark="!search"
              color="rgb(174, 198, 247)"
              :disabled="!search"
              @click="searchPrice()"
              >Search</VBtn
            >
          </template>
        </v-text-field>
        <VBtn
          v-if="$vuetify.breakpoint.xsOnly"
          light
          :dark="!search"
          color="rgb(174, 198, 247)"
          :disabled="!search"
          @click="searchPrice()"
          >Search</VBtn
        >
        <v-overlay :value="loading">
          <div class="progress-box pa-5">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
            <div>
              <h2 class="pa-4">
                Please allow 10-15 seconds to find the best price...
              </h2>
            </div>
          </div>
        </v-overlay>
        <VDialog
          v-model="open"
          :width="$vuetify.breakpoint.xsOnly ? '100%' : '50%'"
        >
          <VCard v-if="best === 'Taken'" class="text-center">
            <h1 class="pa-2">🚫🚫🚫🚫</h1>
            <h1 class="pa-2">
              That domain is taken. You'll have to search again!
            </h1>
          </VCard>
          <VCard v-else class="text-center">
            <h1 class="pa-2">🎉🎉🎉🎉</h1>
            <h1 class="pa-2">
              We found the best price on {{ best.registrar }}!
            </h1>
            <h1 class="pa-2">${{ best.price.toFixed(2) }}</h1>
            <VBtn
              color="#f08080"
              light
              class="ma-2"
              :href="best.url"
              target="_blank"
              >Get Domain</VBtn
            >
          </VCard>
        </VDialog>
      </div>
    </div>
    <div class="infoBlock">
      <div class="copy">
        <p class="ma-5">
          We get prices from top domain providers, and we send you to the best
          deal.
        </p>
      </div>
      <div class="imageOne"></div>
    </div>
    <div class="infoBlock">
      <div class="imageTwo"></div>
      <div class="copy">
        <p class="ma-5">It's just that simple.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      search: '',
      best: {
        price: 0,
        url: '',
        registrar: '',
      },
      loading: false,
      open: false,
      rules: {},
    }
  },
  methods: {
    async searchPrice() {
      this.loading = true

      this.best = await this.$axios.$get(
        'https://us-central1-cheapest-domains.cloudfunctions.net/hello_http',
        {
          params: {
            name: this.search,
          },
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      this.open = true
      this.loading = false
    },
  },
}
</script>
<style scoped>
.full-width {
  width: 100%;
}
.header {
  display: grid;
  width: 100%;
  height: 20em;
  text-align: center;
  background-color: #f08080;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}
.cta {
  align-self: center;
}
.search {
  width: 50%;
  margin: 0 auto;
}
.infoBlock {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  min-height: 25em;
}
.imageOne {
  background-image: url('../assets/abstract-sign-in.png');
  background-size: cover;
  background-color: #e6c0d2;
}
.copy {
  font-size: 2em;
  font-weight: 500;
  justify-self: center;
  align-self: center;
  text-align-last: center;
}
.imageTwo {
  background-image: url('../assets/good-job.png');
  background-size: cover;
  background-color: #94d4c3;
}
.progress-box {
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 20px;
}
@media screen and (max-width: 768px) {
  .infoBlock {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
  .copy {
    order: 1;
  }
  .imageOne,
  .imageTwo {
    order: 2;
    height: 15em;
    background-size: contain;
  }
  .search {
    width: 90%;
  }
  .progress-box {
    width: 100%;
  }
}
</style>
