<template>
  <div class="Locations">
    <v-container>
      <h1>Game locations</h1>
      <v-layout column>
        <v-btn round large class="pink white--text" v-for="(value, i ) in getLocation" :key="i">
          <a :href="value.map">{{value.location}}</a>
        </v-btn>

    
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
    }
}
};
</script>