<template>
  <div class="Locations">
    <v-container>
      <h1>Game locations</h1>
      <v-layout column>
        <v-btn round large class="pink white--text" v-for="(value, i ) in getLocation" :key="i">
          <a :href="value">{{value}}</a>
        </v-btn>

        <!-- <v-layout column>
          <btn>
            <a href="https://goo.gl/maps/NXh7R2mWFEn">AJ Katzenmaier Elementary</a>
          </btn>

          <a href="1734 N. Orleans St., Chicago, IL 60614">Greenbay Elementary</a>

          <a href="https://goo.gl/maps/5RUEf4pE2oK2">Howard A Yeager Elementary</a>

          <a href="https://goo.gl/maps/6j9emFGNH3G2">Marjorie P Hart Elementary</a>

          <a href="https://goo.gl/maps/5CRSv7EgaL32">North Elementary</a>

          <a href="https://goo.gl/maps/g9mFZDDsMh22">South Elementary</a>
        </v-layout>-->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Locations",

  computed: {
    getLocation() {
      return this.$store.getters.location.filter(
        (v, i) => this.$store.getters.location.indexOf(v) === i
      );
      x(this.$store.getters.location);
    }
  }
  // getMaps() {
  //   return this$.store.getters.maps;
  // }
};
</script>