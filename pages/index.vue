<template>
  <div class="full-width">
    <div class="grid">
      <div class="cta">
        <h2>
          Search once. We'll find you the cheapest domain provider. Simple as
          that.
        </h2>
      </div>
      <div class="search">
        <v-text-field
          v-model="search"
          color="#f08080"
          prepend-inner-icon="fa fa-search"
          solo
          clearable
        ></v-text-field>
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
    }
  },
}
</script>
<style scoped>
.full-width {
  width: 100%;
}
.grid {
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
  height: 25em;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  min-height: 20em;
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
    min-height: 15em;
    max-height: 20em;
    background-size: cover;
  }
  .search {
    width: 90%;
  }
}
</style>
