<template>
  <v-container>
    <v-layout column>
      <v-btn v-for="(value, i ) in getDate" :key="i">{{getDate}}</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("getItems");
  },
  name: "today_matches",
  computed: {
    ...mapState(["items"]),

    getDate() {
      let today = new Date();
      let todayDate = today.getDate();
      let todayMonth = today.getMonth();

      // let jsonDate = this.$store.state.items.filter(match => match.date);
      // console.log(jsonDate);
      // let getJsonDate = this.$store.state.items.map(match =>
      //   match.items.date.split("/").pop()
      // );
      // console.log(getJsonDate);

      const storeItems = this.$store.state.items;

      storeItems.forEach((item, index) => {
        return (storeItems[index].splitDate = item.date.split("/"));
      });

      console.log("storeItems: ", storeItems);
      //forof/forin
    }

    // games.filter(function (game) {
    //   const dia = game.date.split()
    //   const mes = game.date.split()

    //   // comparas con el dia de hoy y si coincide con uno de new date, que devuelva true
    // })

    // if (games.length !== 0) {

    // }
  }
};

// console.log(
//   this.$store.state.items.filter(match => {
//     return (
//       today.getDate() === match.date.split("/").pop() &&
//       today.getMonth() === match.date.split("/").shift()
//     );
//   })
// );
</script>


