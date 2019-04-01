<template>
  <div>
    <v-container>
      <v-layout column>
        <v-btn round large class="pink white--text" to="/Team/U1">U1</v-btn>
        <v-btn round large class="pink white--text" to="/Team/U2">U2</v-btn>
        <v-btn round large class="pink white--text" to="/Team/U3">U3</v-btn>
        <v-btn round large class="pink white--text" to="/Team/U4">U4</v-btn>
        <v-btn round large class="pink white--text" to="/Team/U5">U5</v-btn>
        <v-btn round large class="pink white--text" to="/Team/U6">U6</v-btn>

        <!-- <li class="li" v-for="team in allteams" :key="team">{{team}}</li> -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Teams",
  //llamo una computed (arriba) para llamar una getter. (de store)
  computed: {
    // teams() {
    //   return this.$store.getters.teams;
    // },
    // month() {
    //   return this.$store.getters.month;
    // }
  }
};
</script>


<style scoped>
h1 {
  color: palevioletred;
}

.li {
  color: green;
}
</style>