<template>
  <div class="layout-container">
    <h1>{{ msg }}</h1>
  </div>
</template>


<script>
export default {
  name: "Layout",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout-container {
  background-color: gold;
  height: 82vh;
}
</style>