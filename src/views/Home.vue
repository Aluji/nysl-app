<template>
  <div class="home">
    <v-container>
      <v-layout column>
        <!-- <v-btn round depressed large class="pink white--text">
        <router-link to="/Fall Schedule Test">Fall Schedule Test</router-link>|
        </v-btn>-->

        <v-btn
          round
          large
          class="green accent-4 black--text"
          to="/Fall Schedule Test"
        >Fall Schedule Test</v-btn>
        <v-btn round large class="green lighten-2 black--text" to="/Teams">Teams</v-btn>
        <v-btn round large class="green accent-1 black--text" to="/today_matches">Today matches</v-btn>
        <test msg="Just a test"/>

        <!-- <p>Additional Information: If deemed necessary by NYSL, games may be shortened or cancelled due to extreme weather conditions. Facility type: outdoor</p> -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

import test from "@/components/test.vue";

export default {
  name: "home",
  components: {
    test
  }
};
</script>

