<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <ItineraryTable /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ItineraryTable from '@/components/ItineraryTable.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ItineraryTable
  }
}
</script>
