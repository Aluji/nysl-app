
import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    items: [],

    //   items: [
    //     {
    //       date: '9/01',
    //       team1: 'U1',
    //       team2: 'U4',
    //       location: 'AJ Katzenmaier Elementary',
    //       time: '9:30 a.m.',

    //     },
    //     {
    //       date: '9/01',
    //       team1: 'U3',
    //       team2: 'U2',
    //       location: 'Greenbay Elementary',
    //       time: '1:00 p.m.',

    //     },
    //     {
    //       date: '9/08',
    //       team1: 'U5',
    //       team2: 'U6',
    //       location: 'Howard A Yeager Elementary',
    //       time: '9:30 a.m.',
    //     },
    //     {
    //       date: '9/08',
    //       team1: 'U6',
    //       team2: 'U1',
    //       location: 'Marjorie P Hart Elementary',
    //       time: '1:00 p.m.',
    //     },
    //     {
    //       date: '9/15',
    //       team1: 'U2',
    //       team2: 'U4',
    //       location: 'North Elementary',
    //       time: '9:30 a.m.',
    //     },
    //     {
    //       date: '9/15',
    //       team1: 'U3',
    //       team2: 'U5',
    //       location: 'AJ Katzenmaier',
    //       time: '1:00 p.m.',
    //     },
    //     {
    //       date: '9/22',
    //       team1: 'U1',
    //       team2: 'U3',
    //       location: 'South Elementary',
    //       time: '9:30 a.m.',
    //     },
    //     {
    //       date: '9/22',
    //       team1: 'U2',
    //       team2: 'U6',
    //       location: 'Howard A Yeager',
    //       time: '1:00 p.m.',
    //     },
    //     {
    //       date: '9/29',
    //       team1: 'U4',
    //       team2: 'U5',
    //       location: 'Greenbay Elementary',
    //       time: '9:30 a.m.',
    //     },
    //     // {
    //     //   value: false,
    //     //   date: '10/6',
    //     //   team1: 'U2',
    //     //   team2: 'U5',
    //     //   location: 'Marjorie P Hart',
    //     //   time: '9:30 a.m.',
    //     // },
    //     // {
    //     //   value: false,
    //     //   date: '10/13',
    //     //   team1: 'U4',
    //     //   team2: 'U5',
    //     //   location: 'Greenbay Elementary',
    //     //   time: '9:30 a.m.',
    //     // },
    //   ],
    // },
    // // headers2: [
    // //   {
    // //     text: 'Date',
    // //     align: 'left',
    // //     sortable: false,
    // //     value: 'date2'
    // //   },
    // //   { text: 'Local Team', value: 'team1' },
    // //   { text: 'Adversary Team', value: 'team2' },
    // //   { text: 'Location', value: 'location2' },
    // //   { text: 'Time', value: 'time2' },
    // // ],
  },



  mutations: {
    updateSearch(state, search) {
      state.obj.search = search
    }
  },

  actions: {
    getItems({ commit }) {

      axios
        .get('https://nysl-app1.firebaseio.com/team1.json')
        .then(results => {
          console.log(results)
          let items = results.data
          commit('SET_POSTS', items)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  mutations: {
    SET_POSTS(state, items) {
      state.items = items

    }

  },



  getters: {

    // headers(state) {
    //   return state.headers;
    // },

    // items(state) {
    //   return state.items;
    // },
  },

})