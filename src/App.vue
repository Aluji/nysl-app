<template>
  <v-app id="test" class="grey darken-1">
    <v-content>
      <Navbar/>
      <router-view></router-view>
    </v-content>
    <footerApp/>
  </v-app>
</template>


<script>
// @ is an alias to /src
import footerApp from "./components/footerApp.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    footerApp
  },
  data() {
    return {
      //
    };
  }
};
</script>



