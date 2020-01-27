import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import serverAPI from '../apis/server'
import Swal from 'sweetalert2'
import router from '../router/index'
=======
import serverAPI from '@/config/serverAPI';
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
=======
    errorMessage: '',
    successMessage: '',
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
    isLogin : false,
    errorMessage: '',
    successMessage: '',
    itineraryDetail : [],
    restaurants : [],
    landmarks : [],
    events : [],
  },
  
  mutations: {
<<<<<<< HEAD
=======
    SET_RESTAURANTS(state, payload) {
      state.restaurants = payload
    },
  },
  mutations: {
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
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
<<<<<<< HEAD
    },
    SET_ISLOGIN(state, payload){
      state.isLogin = payload
=======
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
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
<<<<<<< HEAD
        this.commit('SET_ISLOGIN', true)
        localStorage.setItem('token',data.token)
        Swal.fire({
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          width: 200,
          height: 50,
          padding: '2em',
          background: '#fff url("/success-notification.jpg")',
        })
        router.push({
          name:'home'
        })
      })

      .catch(({err}) => {
        Swal.fire({
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          width: 200,
          height: 50,
          padding: '2em',
          background: '#fff url("/failed-notification.png")',
        })
=======
        localStorage.setItem('token',data.token)
        this.$route.push('/')
      })
      .catch(({err}) => {
        console.log(err)
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
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
<<<<<<< HEAD
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        router.push({
          name:'home'
        })
      })
      .catch(({err}) => {
        console.log(err)
=======
        this.$route.push('/')
      })
      .catch(({err}) => {
        // console.log(err)
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
      })
    },
    createItinerary({ commit }, payload) {
      return serverAPI({
        url: '/itineraries',
        method: 'post',
        data: payload,
        headers: {
<<<<<<< HEAD
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
=======
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
    },
    fetchLandmarks({ commit }, payload) {
      return serverAPI({
        url: '/google/places',
        method: 'get',
        params: {
          query: `point+of+interest+in+${payload}`
        }
      })
    },
    // fetchItineraryDetail({ commit, dispatch }, payload) {
    //   serverAPI({
    //     url: `/itineraries/${payload}`
    //   })
    //     .then(({data}) => {
    //       commit('SET_ITINERARY', data)
    //       dispatch('fetchRecommendation', data.location.name)
    //     })
    //     .catch(console.log)
    // },
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
    fetchRecommendation({ commit }, payload){
      serverAPI({
        url: '/google/places',
        method: 'get',
        params: {
        query: `restaurants+in+${payload}`,
        }
      })
<<<<<<< HEAD
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
    updateItinerary({ commit }, payload) {
=======
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
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
      return serverAPI({
        url: `/itineraries/${payload._id}`,
        method: 'put',
        data: { itinerary: payload },
        headers: {
<<<<<<< HEAD
          token: localStorage.getItem('token')
        }
      })
    },
    logout(context,payload){
      Swal.fire({
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        width: 200,
        height: 50,
        padding: '2em',
        marginTop:'50px',
        background: 'url("/logout-notification.jpg")',
      })

      context.commit('SET_ISLOGIN',payload)
      localStorage.removeItem('token')
=======
          token: localStorage.getItem('access_token')
        }
      })
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
    }
  },

  


  modules: {
  }
})
