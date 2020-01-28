import Vue from 'vue'
import Vuex from 'vuex'
import serverAPI from '../apis/server'
import Swal from 'sweetalert2'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idItinerary : '',
    isLogin : false,
    errorMessage: '',
    successMessage: '',
    itineraryDetail : [],
    restaurants : [],
    landmarks : [],
    events : [],
    highlight : [],
    myItin : []
  },
  
  mutations: {
    SET_ITINERARY(state, payload) {
      state.itineraryDetail = payload
    },
    SET_ID_ITINERARY(state, payload) {
      state.idItinerary = payload
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
    },
    SET_ISLOGIN(state, payload){
      state.isLogin = payload
    },
    SET_HIGHLIGHT(state,payload){
      state.highlight = payload
    },
    SET_MY_ITIN(state,payload){
      state.myItin = payload
      console.log(payload)
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
        console.log(data)
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
      })
    },
    register(context,payload){
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
    fetchEvents({ commit }, payload) {
      return serverAPI({
        url: `/events/${payload}`
      })
    },
    updateItinerary({ commit }, payload) {
      return serverAPI({
        url: `/itineraries/${payload._id}`,
        method: 'put',
        data: { itinerary: payload },
        headers: {
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
    },
    fetchHighlightItinerary(context,payload){
      serverAPI({
        method: 'get',
        url:'/itineraries/',
      })
      .then(({data})=>{
      
        this.commit('SET_HIGHLIGHT',data.slice(0,3))
        // console.log(data.slice(0,2))
      })
      .catch(err => {
        console.log(err)
      })
    },
    fetchMyItinerary(context, payload){
      serverAPI({
        method: 'get',
        url:'/itineraries/my-itineraries',
        headers:{
          token : localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        this.commit('SET_MY_ITIN',data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  

  modules: {
  }
})
