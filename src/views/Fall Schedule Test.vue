<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        :value="search"
        @input="updateSearch"
        append-icon="search"
        v-model="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      v-bind:headers="headers"
      v-bind:items="$store.state.items"
      v-bind:search="search"
      class="elevation-1"
    >
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
      <v-alert
        v-slot:no-results
        :value="true"
        color="error"
        icon="warning"
      >Your search for "{{ search }}" found no results.</v-alert>
    </v-data-table>
  </v-card>
</template>


<script>
export default {
  data: function() {
    return {
      search: "   ",
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

  name: "FallScheduleTest",
  methods: {
    updateSearch(e) {
      this.$store.commit("updateSearch", e.target.value);
    }
  },
  computed: {
    getData() {
      return this.$store.getters.data;
    },

    getItems() {
      return this.store.getters.items;
    }

    // ...mapState({
    //   search: state => state.obj.search
    // })
  }
};
</script>