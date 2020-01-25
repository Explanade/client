<template>
  <div id="app">
    
    <NavBar style="z-index:0"/>
    <router-view/>
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
  }
}
</script>

<style>
  
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

</style>
