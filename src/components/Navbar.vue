<template>
  <nav>
    <v-toolbar flat app class="teal darken-3">
      <v-icon class="white--text">keyboard_arrow_left</v-icon>
      <v-toolbar-side-icon class="white--text" @click="drawer= !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase white--text font-weight-light">game information</v-toolbar-title>
      <v-spacer></v-spacer>
      <img src="../assets/nysl_logo.png">
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="blue-grey darken-3">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <spacer></spacer>
      <!--<img class="nav_image" src="../assets/net.jpg">-->
    </v-navigation-drawer>
  </nav>
</template>


<script>
// @ is an alias to /src

// import Layout from "./components/Layout.vue";

export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "map", text: "Locations", route: "/Locations" },
        { icon: "email", text: "Contact", route: "/Contact" }
      ]
    };
  }
};
</script>

<style>
img {
  width: 60px;
  height: auto;
}

.nav_image {
  width: 300px;
  height: auto;
}
</style>
