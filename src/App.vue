<template>
  <v-app id="test" class="grey lighten-">
    <v-content>
      <Navbar/>

      <router-view></router-view>

      <!-- <router-link to="/">
          <i class="fas fa-home fa-3x"></i>
        </router-link>
        <router-link to="/Locations">
          <i class="fas fa-map-marked fa-3x"></i>
        </router-link>
        <router-link to="/Contact">
          <i class="fas fa-envelope fa-3x"></i> CON BOTON O
          <v-btn depressed class="pink white--text">
            <v-icon>email</v-icon>
          </v-btn>
      </router-link>-->
    </v-content>
  </v-app>
</template>


<script>
// @ is an alias to /src

import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
  data() {
    return {
      //
    };
  }
};
</script>



