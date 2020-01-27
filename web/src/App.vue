<template>
  <div id="app">
    
    <NavBar style="z-index:0"/>
      <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="fadeOut">
        <router-view/>
      </transition>
    <Footer style="z-index:1" />
    
  </div>
</template>

<script>

import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default {
  components:{
    NavBar,
    Footer
  },
  created(){
    if(localStorage.getItem('token')){
      this.$store.commit('SET_ISLOGIN',true)
    }else{
      this.$store.commit('SET_ISLOGIN',false)
    }
  }
}
</script>

<style>
  
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

</style>
