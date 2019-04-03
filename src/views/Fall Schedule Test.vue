<template>
  <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.date }}</td>
      <td class="text-xs-right">{{ props.item.teams }}</td>
      <td class="text-xs-right">{{ props.item.location }}</td>
      <td class="text-xs-right">{{ props.item.times}}</td>

    </template>
  </v-data-table>
</template>


<script>
  export default {
   computed: {
    getData() {
      return this.$store.getters.data;     
      }
  }
  };
</script>