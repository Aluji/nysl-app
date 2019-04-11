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

    getDate(items) {
      let today = new Date();

      console.log(
        this.$store.state.items.filter(match => {
          return (
            today.getDate() === match.date.split("/").pop() &&
            today.getMonth() === match.date.split("/").shift()
          );
        })
      );
    }
  }
};
</script>