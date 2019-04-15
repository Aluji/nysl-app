<template>
  <div class="Locations">
    <v-container>
      <!-- <h1>Game locations</h1> -->
      <v-layout column>
        <v-btn
          round
          large
          class="green accent-4 black--text"
          v-for="(value, i ) in getLocation"
          :key="i"
        >
          <!-- <a :href="value.map">{{value.location}}</a> //era un objeto y x eso funcionaba. -->
          {{value}}
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("getItems");
  },
  name: "Locations",
  computed: {
    ...mapState(["items"]),
    // getLocation(items) {
    //   return this.$store.state.items.filter(
    //     (v, i) => this.$store.state.items.location.indexOf(v) === i
    //   );
    // }

    getLocation() {
      //yo antes tenia filter. ahora, con map, tengo array de strings.
      let array = this.$store.state.items.map(match => match.location);
      console.log(array);
      //forma de coger valores únicos
      let uniqueArray = new Set(array);
      console.log(uniqueArray);
      return uniqueArray;
    },

    getMaps() {
      let array = this.$store.state.items.map(match => match.map);
      let uniqueArray = new Set(array);
      console.log(uniqueArray);
      return uniqueArray;
    }
  }
};
</script>