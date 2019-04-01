<template>
  <div>
    <v-container>
      <!-- <testContact msg="hola k tal"/> -->
      <v-layout column>
        <span>Please direct all questions to: Michael Randall, League Coordinator</span>
        <v-btn round large depressed class="pink white--text">
          <span>michael.randall@soccer.org</span>
          <v-icon right large>email</v-icon>
        </v-btn>
        <v-btn round large depressed class="pink white--text">
          <span>Phone: (630) 690-8132</span>
          <v-icon right large>phone</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>








<script>
// @ is an alias to /src

// import testContact from "@/components/testContact.vue";

export default {
  name: "Contact"
  // components: {
  //   testContact
  // }
};
</script>



