<template>
  <v-app id="test" class="grey lighten-">
    <v-content>
      <Navbar/>

      <router-view></router-view>
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



