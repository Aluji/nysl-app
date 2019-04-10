<template>
  <v-card>
    <v-data-table v-bind:headers="headers" v-bind:items="filter" class="elevation-1">
      <template slot="headerCell" scope="props">
        <span>
          <th>{{ props.header.text }}</th>
        </span>
      </template>
      <template slot="items" scope="props">
        <td>{{ props.item.date}}</td>
        <td>{{ props.item.team1}}</td>
        <td>{{ props.item.team2}}</td>
        <td>{{ props.item.location}}</td>
        <td>{{ props.item.time}}</td>
      </template>
    </v-data-table>
  </v-card>
</template>
 


<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("getItems");
  },
  // computed: {

  // },
  name: "Team",
  props: ["id"],
  data: function() {
    return {
      headers: [
        {
          text: "Date",
          align: "left",
          sortable: false,
          value: "date"
        },
        { text: "Local Team", value: "team1" },
        { text: "Adversary Team", value: "team2" },
        { text: "Location", value: "location" },
        { text: "Time", value: "time" }
      ]
    };
  },
  computed: {
    filter(items) {
      return this.$store.state.items.filter(match => {
        return match.team1 == this.id || match.team2 == this.id;
      });
    },

    ...mapState(["items"])
  }
};
</script>
