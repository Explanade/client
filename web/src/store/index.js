import Vue from 'vue'
import Vuex from 'vuex'
import ServerApi from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false,
    errorMessage: '',
    successMessage: '',
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
    login(context,payload){
      ServerApi({
        method: 'post',
        url:'/user/login',
        data : {
          email: payload.email,
          password: payload.password
        }
      })
      .then(({data}) => {
        console.log(data)
      })
      .catch(({err}) => {
        console.log(err)
      })
    },
    register(context,payload){
      // console.log(payload)
      ServerApi({
        method: 'post',
        url:'/user/register',
        data : payload,
        headers :{
          'Content-Type' : 'multipart/form-data'
        }
      })
      .then(({data}) => {
        localStorage.setItem('token',data.access_token)
        console.log('berhasil login')
        this.$router.push('/')
      })
      .catch(({err}) => {
        // console.log(err)
      })
    },
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
    }
  },

  


  modules: {
  }
})
