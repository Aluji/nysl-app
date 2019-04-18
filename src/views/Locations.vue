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
          @click="handleClick(value)"
          :key="i"
        >
          <a :href="value.map">{{value}}</a>
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  // data: function() {
  //   return {
  //     urls: {
  //       url1: (window.location.ref = "http://www.google.com"),
  //       url2: (window.location.ref = "https://goo.gl/maps/uwSmrJwfq7s")
  //     }
  //   };
  // },
  // methods: {
  //   handleClick(value) {
  //     const values = Object.values(this.urls);
  //     console.log(values);
  //   }
  // },

  mounted() {
    this.$store.dispatch("getItems");
  },
  name: "Locations",
  computed: {
    ...mapState(["items"]),

    getLocation() {
      //yo antes tenia filter. ahora, con map, tengo array de strings.
      // let array = this.$store.state.items.map(match => match.location);
      // console.log(array);
      // //forma de coger valores únicos
      // let uniqueArray = new Set(array);
      // console.log(uniqueArray);
      // return uniqueArray;
      // [{url:'wwww'},place:'lugar',{}]

      //for todo el array coger place y map.

      let array = this.$store.state.items.map(match => match.location);

      var key = Object.keys(o)[idx];
      value = o[key];

      console.log(key, value); // key2 value2
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