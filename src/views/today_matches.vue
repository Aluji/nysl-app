<template>
  <v-card>
    <v-data-table v-bind:headers="headers" v-bind:items="getToday" class="elevation-1">
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
import { mapState } from "vuex";
import { debug } from "util";
export default {
  mounted() {
    this.$store.dispatch("getItems");
  },
  name: "today_matches",
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
    ...mapState(["items"]),

    getToday() {
      let today = new Date();
      let todayDate = today.getDate();
      // let todayMonth = today.getMonth();
      const storeItems = this.$store.state.items;
      storeItems.forEach((item, index) => {
        return (storeItems[index].splitDate = item.date.split("/"));
      });
      // const date = storeItems.filter(match => {
      //   // console.log(match.splitDate[0])
      //   return todayDate == match.splitDate[0];
      // });

      var newArray = [];
      //get today. problem with splitDate[0].
      if (todayDate !== storeItems[i]) {
        for (var i = 0; i < storeItems.length; i++) {
          newArray.push(storeItems[i]);
          console.log("newarray", newArray);
        }
        return newArray;
      }
    }
  }
};

//   getNextDay(){

//  const nextDate = storeItems.filter(match => {
//         // console.log(match.splitDate[0])
//         return todayDate == match.splitDate[0];
//       });

//   }
</script>


