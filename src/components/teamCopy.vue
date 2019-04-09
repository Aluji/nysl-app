<template>
  <div>
    <table class="table1">
      <th>September</th>
      <th>Date</th>
      <th>Teams</th>
      <th>Location</th>
      <th>Address</th>
      <th>Time</th>
      <tr v-for="(value, i ) in filter" :key="i" v-if="value.month == 'September' ">
        <!-- <td>{{value.month}}</td> -->
        <td>{{value.date}}</td>
        <td>{{value.teams.local}} and {{ value.teams.adv}}</td>
        <td>{{value.location}}</td>
        <td>{{value.address}}</td>
        <td>{{value.times}}</td>
      </tr>
    </table>

    <table class="table2">
      <th>October</th>
      <th>Date</th>
      <th>Teams</th>
      <th>Location</th>
      <th>Address</th>
      <th>Time</th>
      <tr v-for="(value, i ) in printDataOct" :key="i">
        <!-- <td>{{value.month}}</td> -->
        <td>{{value.date}}</td>
        <td>{{value.teams.local}} and {{ value.teams.adv}}</td>
        <td>{{value.location}}</td>
        <td>{{value.address}}</td>
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
      return this.$store.getters.data.filter(match => {
        return match.teams.local == this.id || match.teams.adv == this.id;
      });
    },
    printDataOct() {
      return this.$store.getters.data.filter(val => {
        return (
          val.month == "October" &&
          (val.teams.local == this.id || val.teams.adv == this.id)
        );
      });
    }
  }
};
</script>



