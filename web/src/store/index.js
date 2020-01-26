import Vue from 'vue'
import Vuex from 'vuex'
import serverAPI from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false,
    errorMessage: '',
    successMessage: '',
    itineraryDetail : [],
    restaurants : [],
    landmarks : [],
    events : [],
  },
  mutations: {
    SET_ITINERARY(state, payload) {
      state.itineraryDetail = payload
    },
    SET_RESTAURANT(state, payload) {
      state.restaurants = payload
    },
    SET_LANDMARK(state, payload) {
      state.landmarks = payload
    },
    SET_EVENT(state, payload) {
      state.events = payload
    },
    SET_ERROR_MESSAGE(state, payload) {
      state.errorMessage = payload
      setTimeout(state.errorMessage = null, 2000);
    }
  },
  actions: {
    login(context,payload){
      serverAPI({
        method: 'post',
        url:'/user/login',
        data : {
          email: payload.email,
          password: payload.password
        }
      })
      .then(({data}) => {
        localStorage.setItem('token',data.token)
        this.$route.push('/')
      })
      .catch(({err}) => {
        console.log(err)
      })
    },
    register(context,payload){
      // console.log(payload)
      serverAPI({
        method: 'post',
        url:'/user/register',
        data : payload,
        headers :{
          'Content-Type' : 'multipart/form-data'
        }
      })
      .then(({data}) => {
        localStorage.setItem('token',data.token)
        this.$route.push('/')
      })
      .catch(({err}) => {
        // console.log(err)
      })
    },
    createItinerary({ commit }, payload) {
      return serverAPI({
        url: '/itineraries',
        method: 'post',
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    fetchItineraryDetail({ commit, dispatch }, payload) {
      serverAPI({
        url: `/itineraries/${payload}`
      })
        .then(({data}) => {
          commit('SET_ITINERARY', data)
          dispatch('fetchRecommendation', data.location.name)
        })
        .catch(console.log)
    },
    fetchRecommendation({ commit }, payload){
      serverAPI({
        url: '/google/places',
        method: 'get',
        params: {
        query: `restaurants+in+${payload}`,
        }
      })
        .then(({data}) => {
          commit('SET_RESTAURANT', data.results)
          return serverAPI({
            url: '/google/places',
            method: 'get',
            params: {
            query: `point+of+interest+in+${payload}`
            }
          })
        })
        .then(({data}) => {
          commit('SET_LANDMARK', data.results)
        })
        .catch(console.log)
    },
    updateItinerary({ commit }, payload) {0
      return serverAPI({
        url: `/itineraries/${payload._id}`,
        method: 'put',
        data: { itinerary: payload },
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },

  


  modules: {
  }
})
