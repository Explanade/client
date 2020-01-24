import Vue from 'vue'
import Vuex from 'vuex'
import googlePlaces from '@/config/googlePlaces';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    fetchRestaurants({ commit }, payload) {
      return new Promise((resolve, reject) => {
        googlePlaces({
          method: 'get',
          params: {
            query: 'restaurants+in+Sydney',
            key: ':)'
          }
        })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
      })
    }
  },
  modules: {
  }
})
