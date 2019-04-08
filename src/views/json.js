import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numero: 10,
    data: [

      {
        month: "September",
        date: "9/01",
        teams: {
          local: "U1",
          adv: "U4"
        },
        location: "AJ Katzenmaier Elementary",
        address: "24 W. Walton St.  Chicago IL 60610",
        times: "9:30 a.m.",
        map: "https://goo.gl/maps/uuCAnUMe7vy"
      },
      {
        month: "September",
        date: "9/01",
        teams: {
          local: "U3",
          adv: "U2"
        },
        location: "Greenbay Elementary",
        address: "1734 N. Orleans St. Chicago IL 60614",
        times: "1:00 p.m.",
        map: "https://goo.gl/maps/9BzPFU13TB82"
      },
      {
        month: "September",
        date: "9/08",
        teams: {
          local: "U5",
          adv: "U6"
        },
        location: "Howard A Yeager Elementary",
        address: "2245 N. Southport Ave. Chicago IL 60614",
        times: "9:30 a.m.",
        map: "https://goo.gl/maps/iRJ3fn1voFF2"
      },
      {
        month: "September",
        date: "9/08",
        teams: {
          local: "U6",
          adv: "U1"
        },
        location: "Marjorie P Hart Elementary",
        address: "2625 N. Orchard St. Chicago IL 60614",
        times: "1:00 p.m",
        map: "https://goo.gl/maps/AWZcMm3MNcL2"
      },
      {
        month: "September",
        date: "9/15",
        teams: {
          local: "U2",
          adv: "U4"
        },
        location: "North Elementary",
        address: "1409 N. Ogden Ave Chicago IL 60610",
        times: "9:30 a.m.",
        map: "https://goo.gl/maps/gZ796L1bJKt"
      },
      {
        month: "September",
        date: "9/15",
        teams: {
          local: "U3",
          adv: "U5"
        },
        location: "AJ Katzenmaier Elementary",
        address: "24 W. Walton St.  Chicago IL 60610",
        times: "1:00 p.m."
      },
      {
        month: "September",
        date: "9/22",
        teams: {
          local: "U1",
          adv: "U3"
        },
        location: "South Elementary",
        address: "2101 N. Fremont St. Chicago IL 60614",
        times: "9:30 a.m",
        map: "https://goo.gl/maps/ASGKqwTzyN12"
      },
      {
        month: "September",
        date: "9/22",
        teams: {
          local: "U2",
          adv: "U6"
        },
        location: "Howard A Yeager Elementary",
        address: "2245 N. Southport Ave. Chicago IL 60614",
        times: "1:00 p.m."
      },

      {
        month: "September",
        date: "9/29",
        teams: {
          local: "U2",
          adv: "U6"
        },
        location: "Howard A Yeager Elementary",
        address: "2245 N. Southport Ave. Chicago IL 60614",
        times: "1:00 p.m."
      },
      {
        month: "October",
        date: "10/06",
        teams: {
          local: "U2",
          adv: "U5"
        },
        location: "Marjorie P Hart Elementary",
        address: "2625 N. Orchard St. Chicago IL 60614",
        times: "9:30 a.m."
      },
      {
        month: "October",
        date: "10/06",
        teams: {
          local: "U1",
          adv: "U6"
        },
        location: "South Elementary",
        address: "2101 N. Fremont St. Chicago IL 60614",
        times: "1:00 p.m"
      },
      {
        month: "October",
        date: "10/13",
        teams: {
          local: "U3",
          adv: "U4"
        },
        location: "Howard A Yeager Elementary",
        address: "2245 N. Southport Ave. Chicago IL 60614",
        times: "9:30 a.m"
      },
      {
        month: "October",
        date: "10/13",
        teams: {
          local: "U5",
          adv: "U1"
        },
        location: "Greenbay Elementary",
        address: "1734 N. Orleans St. Chicago IL 60614",
        times: "1:00 p.m."
      },
      {
        month: "October",
        date: "10/20",
        teams: {
          local: "U6",
          adv: "U3"
        },
        location: "North Elementary",
        address: "1409 N. Ogden Ave Chicago IL 60610",
        times: "9:30 a.m."
      },
      {
        month: "October",
        date: "10/20",
        teams: {
          local: "U2",
          adv: "U4"
        },
        location: "Marjorie P Hart Elementary",
        address: "2625 N. Orchard St. Chicago IL 60614",
        times: "1:00 p.m."
      },
      {
        month: "October",
        date: "10/27",
        teams: {
          local: "U3",
          adv: "U1"
        },
        location: "AJ Katzenmaier Elementary",
        address: "24 W. Walton St.  Chicago IL 60610",
        times: "9:30 a.m."
      },
      {
        month: "October",
        date: "10/27",
        teams: {
          local: "U5",
          adv: "U6"
        },
        location: "Howard A Yeager Elementary",
        address: "2245 N. Southport Ave. Chicago IL 60614",
        times: "1:00 p.m."
      }
      // {
      //   map: "https://goo.gl/maps/uuCAnUMe7vy",
      //   year: "2019"
      //   // map: "https://goo.gl/maps/9BzPFU13TB82",
      //   // map: "https://goo.gl/maps/iRJ3fn1voFF2",
      //   // map: "https://goo.gl/maps/AWZcMm3MNcL2",
      //   // map: "https://goo.gl/maps/gZ796L1bJKt"
      // }
    ]
  },

  mutations: {
    aumentar() {
      this.state.numero++;
    }
  },
  actions: {},
  getters: {
    teams(state) {
      var team = [];
      for (var i = 0; i < state.data.length; i++) {
        team.push(state.data[i].teams);
      }
      return team;
    },
    location(state) {
      var loc = [];
      for (var i = 0; i < state.data.length; i++) {
        loc.push({ map: state.data[i].map, location: state.data[i].location });
        console.log(loc);
      }
      return loc;
    },
    // address(state) {
    //   var ad = [];
    //   for (var i = 0; i < state.data.length; i++) {
    //     ad.push(state.data[i].address);
    //   }
    //   return ad;
    // },
    // maps(state) {
    //   var map = [];
    //   for (var i = 0; i < state.data.length; i++) {
    //     map.push(state.data[i].map);
    //   }
    //   return map;
    // },

    data(state) {
      return state.data;
    }
  }
});
