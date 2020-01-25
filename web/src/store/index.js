import Vue from 'vue'
import Vuex from 'vuex'
import googlePlaces from '@/config/serverAPI';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants: []
  },
  mutations: {
    SET_RESTAURANTS(state, payload) {
      state.restaurants = payload
    }
  },
  actions: {
    fetchRestaurants({ commit }, payload) {
      // return new Promise((resolve, reject) => {
        googlePlaces({
          url: '/google/places',
          method: 'get',
          params: {
            query: 'restaurants+in+Sydney',
          }
        })
        .then(({ data }) => {
          commit('SET_RESTAURANTS', data.results)
          // resolve(data.results);
        })
        .catch(err => {
          console.log(err)
        })
      // })
    }
  },
  modules: {
  }
})
