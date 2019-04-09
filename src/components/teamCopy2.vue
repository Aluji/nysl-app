<template>
  <div>
    <table class="table1">
      <th>September</th>
      <th>Date</th>
      <th>Teams</th>
      <th>Location</th>
      <th>Time</th>
      <tr v-for="(value, i ) in filter" :key="i">
        <td>{{value.date}}</td>
        <td>{{value.team1}}</td>
        <td>{{value.team2}}</td>
        <td>{{value.location}}</td>
        <td>{{value.times}}</td>
      </tr>
    </table>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: "Team",
  props: ["id"],
  computed: {
    filter() {
      return this.$store.getters.items.filter(match => {
        return match.team1 == this.id || match.team2 == this.id;
      });
    }
  }
};
</script>
