import Vue from 'vue'
import Vuex from 'vuex'
import GetData from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false,
  },
  mutations: {
  },
  actions: {
    login(context,payload){
      GetData({
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
      GetData({
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
    }

  },

  


  modules: {
  }
})
