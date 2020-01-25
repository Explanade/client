import Vue from 'vue'
import Vuex from 'vuex'
import serverAPI from '@/config/serverAPI';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errorMessage: '',
    successMessage: ''
  },
  mutations: {
    SET_RESTAURANTS(state, payload) {
      state.restaurants = payload
    },
    SET_ERROR_MESSAGE(state, payload) {
      state.errorMessage = payload
      setTimeout(state.errorMessage = null, 2000);
    }
  },
  actions: {
    createItinerary({ commit }, payload) {
      return serverAPI({
        url: '/itineraries',
        data: payload,
        headers: {
          token: localStorage.getItem('access_token')
        }
      })
    },
    fetchItineraryDetail({ commit }, payload) {
      return serverAPI({
        url: `/itineraries/${payload}`
      })
    },
    fetchRestaurants({ commit }, payload) {
      return serverAPI({
        url: '/google/places',
        method: 'get',
        params: {
          query: `restaurants+in+${payload}`,
        }
      })
      // .then(({ data }) => {
      //   commit('SET_RESTAURANTS', data.results)
      // })
      // .catch(err => {
      //   this.$store.commit('SET_ERROR_MESSAGE', err)
      // })
    }
  },
  modules: {
  }
})
