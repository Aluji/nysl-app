<template>
  <v-app id="test" class="grey darken-1">
    <v-content>
      <Navbar/>
      <router-view></router-view>
    </v-content>
    <footer/>
  </v-app>
</template>


<script>
// @ is an alias to /src
import footer from "./components/footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    footer
  },
  data() {
    return {
      //
    };
  }
};
</script>



