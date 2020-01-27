<template>
  <div>
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
    <div class="home">
      <div class="content">
      <div class="header">
        <h2>EXPLORE</h2>
        <h2>PLAN</h2>
        <h2>&</h2>
        <h2>ENJOY</h2>
      </div>
      <div class="form" style="z-index:0">
        <div class="input">
          <h4>ITENERARY NAME</h4>
          <p>Name your awesome itenerary before you gonna share it to others</p>
          <input id="input" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter Itenerary Name">
        </div>
        <div class="input">
          <h4>DESTINATION</h4>
          <p>Looking for holiday? Do you have any ideas or places in your mind?</p>
          <input id="input" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter Destination">
        </div>
        <div class="input" style="width:400px">
          <h4>DATES</h4>
          <p>Choose your days so you can prepare and ready for your awesome trip!</p>
          <HotelDatePicker/>
        </div>
          <div class="button"  style="cursor: pointer;">
                <h1>SUBMIT</h1>
          </div>
      </div>

      </div>
      <!-- <div class="background"> -->
      <div style="z-index:-1;max-width:100vw;">
        <Background />
      </div>
      <!-- </div> -->
    </div>
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
    <div class="planner">
      <div class="backgroundPlanner">
      <lottie style="position:absolute;z-index:0;left:-5vw;top:-10vh;height:110%;width:110%" :options="defaultOptions" v-on:animCreated="handleAnimation"/>
      </div>

      <div class="header2">
        <h2 style="color:black">NO MORE</h2>
        <h2 style="color:black">SCATTERED</h2>
        <h2 style="color:black">PLAN</h2>
      </div>

       <div class="subheader">
        <h6>We help you to manage and let you know interesting places near your destination</h6>
      </div>

        <div class="button2" @click="createItinerary" >
          <h1 style="color:black; text-align: left; font-weight:600; margin-bottom:0px; margin-left:50px ">SEE</h1>
          <h1 style="color:black; text-align: left; font-weight:600; margin-bottom:0px; margin-left:50px ">HOW IT</h1>
          <h1 style="color:black; text-align: left; font-weight:600; margin-bottom:0px; margin-left:50px ">WORKS</h1>
        </div>

    </div>
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->

    <div class="ideas">

      <div class="header3">
        <h2 style="color:black">WE CREATE</h2>
        <h2 style="color:black">WE SHARE</h2>
      </div>

       <div class="subheader3">
        <h6>We not just share the wonder of the earth, but also share how we enjoy the moments. Let's inspiring and be inspired together</h6>
      </div>

      <div class="ideasSections">
        <div class="blueContainer" style="width:20vw; height:50vh; background-color:#19459b"></div>
        <div class="ideasList">
          <div class="set1"  style="max-width:80vw; height:40vh; display:flex; flex-wrap:wrap; margin-top:-50px;">
            
            <div class="idea">
              
              <div class="images" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMi_GbJzOz7ycKAqETsro16E3Urw-xp6S0rvBn9ZBF3CmDWIbk'); background-size:cover; display:flex;justify-content:center;">
              </div>
              <div class="captions" style="height:30%;max-width:100%;padding:15px;">
                <h1 style="color:black; font-weight:600;margin-top:20px;">3days 2night in Bali</h1>              
                <p style="color:black; font-size:15px;color:grey  "><i class="fas fa-feather-alt" style="margin-right:10px"></i>by Dwitama Alfred</p>
                <p style="color:black; font-size:15px; margin-top:-10px;color:grey "><i class="fas fa-location-arrow" style="margin-right:10px"></i>Bali</p>
              </div>
            </div>

            <div class="idea">
              <div class="images" style=" background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9eKIRE27oUSKzAodD3qqtKboeLSLBRsnQ6sNLiOnKMa4HOKn5'); background-size:cover"></div>
              <div class="captions" style="height:30%;max-width:100%;padding:15px;">
                <h1 style="color:black; font-weight:600;margin-top:20px;">3days 2night in Bali</h1>              
                <p style="color:black; font-size:15px;color:grey  "><i class="fas fa-feather-alt" style="margin-right:10px"></i>by Dwitama Alfred</p>
                <p style="color:black; font-size:15px; margin-top:-10px;color:grey "><i class="fas fa-location-arrow" style="margin-right:10px"></i>Bali</p>
              </div>
            </div>

            <div class="idea">
              <div class="images" style=" background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwY_4fOndGpRSuxe_1MxYjFsDPc0gYLWtAc4ghT0AMrPglY2yu'); background-size:cover"></div>
              <div class="captions" style="height:30%;max-width:100%;padding:15px;">
                <h1 style="color:black; font-weight:600;margin-top:20px;">Damai Sejahtera di Ubud</h1>              
                <p style="color:black; font-size:15px; color:grey "><i class="fas fa-feather-alt" style="margin-right:10px"></i>by Dwitama Alfred</p>
                <p style="color:black; font-size:15px; margin-top:-10px; color:grey "><i class="fas fa-location-arrow" style="margin-right:10px"></i>Bali</p>
              </div>
            </div>

            <div class="button3" @click="listPage">
                  <h1 style="color:black; text-align: left; font-weight:600; margin-bottom:0px; margin-left:50px ">SHOW</h1>
                  <h1 style="color:black; text-align: left; font-weight:600; margin-bottom:0px; margin-left:50px ">MORE</h1>      
              </div>
            </div>

          
          </div>

        </div>
        

      </div>

     
    </div>

</template>

<script>

import Background from '../components/BackgroundParallax'
import HotelDatePicker from 'vue-hotel-datepicker'
import Lottie from 'vue-lottie';
import * as animationData from '../assets/animation/explanade-home-1.json';

export default {
  name: 'home',
  components: {
    HotelDatePicker,
    Lottie,
    Background
  },
  data(){
    return{
      defaultOptions: {animationData: animationData.default},
      animationSpeed: 1
    }
  },
   methods: {
      handleAnimation: function (anim) {
        console.log('test')
        this.anim = anim;
      },
  
      onSpeedChange: function () {
        this.anim.setSpeed(this.animationSpeed);
      },
      listPage(){
        this.$router.push('/itinerary')
      },
      createItinerary(){
        this.$router.push('/create')
      }
   }
}
</script>

<style scoped>

.images{
  height:70%;
  width:100%;
  transition: all .2s ease-in-out;
}

.images:hover {
  opacity: 1;
  box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
  transform: scale(1.05);
}

.datepicker__dummy-wrapper {
    border: 1px solid #d7d9e2;
    cursor: pointer;
    display: block;
    float: left;
    width: 100%;
    height: 100%;
}

.button3{
  height: 15vh;
  width: 12vw;
  top: 15vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-content:flex-start;
  text-align: left;
  flex-direction: column;
  background-color: #ffda69;
  transition-property: background;
  transition-duration: 0.5s;
  transition-timing-function: linear;
  transition: all .2s ease-in-out;
}

.button3:hover{
  height: 15vh;
  width: 12vw;
  top: 15vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-content:flex-start;
  text-align: left;
  flex-direction: column;
  background-color: #f3b806;
  box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
  transform: scale(1.1);
}

.idea{
  margin:50px;
  height: 45vh;
  width: 15vw;
}

.ideas{
  height: 120vh;
}

.ideasSections{
  margin-top:15rem;
  display:flex;
  flex-direction: row;
  height: 80vh;
  width: 100vw;
}


.header3{
  /* left:20vw; */
  margin-left:20vw;
  top:10vh;
  position: relative;
}

.subheader3{
  left:26vw;
  top:15vh;
  position: relative;
  width: 16vw;
}


.button2{
  height: 150px;
  width: 250px;
  top: 26vh;
  left: 50vw;
  display: flex;
  position: relative;
  justify-content: center;
  align-content:flex-start;
  text-align: left;
  flex-direction: column;
  background-color: #ffda69;
  transition-property: background;
  transition-duration: 0.5s;
  transition-timing-function: linear;
  transition: all .2s ease-in-out;
}

.button2:hover{
  height: 150px;
  width: 250px;
  top: 26vh;
  left: 50vw;
  display: flex;
  position: relative;
  justify-content: center;
  align-content:flex-start;
  text-align: left;
  flex-direction: column;
  background-color: #f3b806;
  box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
  transform: scale(1.1);
}
.header{
  position: absolute;
  top:22vh;
  left: 7vw;
}

.header2{
  margin-left:57vw;
  top:20vh;
  position: relative;
}

.subheader{
  left:63vw;
  top:23vh;
  position: relative;
  width: 10vw;
}

.backgroundPlanner{
  background-image: url('../assets/photoAssets/explande-planner.jpg');
  position: absolute;
  background-position: bottom;
  margin-top: 150px;
  margin-bottom: 150px;
  z-index: -1;
  height: 70vh;
  width:60vw;
  background-size:cover;
}

.planner{
  height: 100vh;
  widows: 100vw;
  z-index: -1;
}
.input{
  padding: 30px;
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color:white;
}

p{
  font-weight: 100;
  font-size:12px;
}

h6{
  font-size: 20px;
  font-weight: 200;
  margin-bottom: -0px;
  letter-spacing:0.2ch;
  color:black

}
h5{
    color:white;
    font-weight: 100;
    margin:60px;
}


h2{
  color: white;
  font-size: 55px;
  font-weight: 300;
  margin-bottom: -0px;
}

h1{
  color:white;
  font-size: 24px;
  font-weight: 300;
}

h4{
  font-weight: 300;
  font-size:24px;
}


#input{
  width: 100%;
  border: 1px solid rgb(203, 203, 203);
  border-radius: 0px;
  height: 400px;
}

.form-control{
  padding:.850rem .80rem;
}


.button{
  background-color: #19459b;
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-property: background;
  transition-duration: 0.5s;
  transition-timing-function: linear;
  transition: all .2s ease-in-out;
}

.button:hover{
  background-color: #0a152b;
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
  transform: scale(1.1);
}

.form{
  display: flex;
  /* justify-content: space-between; */
  /* background-color:white; */
  position: absolute;
  bottom: 20vh;
  left:7vw;
  width:70vw;
  height: 20vh;
  flex-direction: row;
}

.content{
  background-color: #19459b;
  width: 40vw;
  height: 100vh;
  margin-right:-100px;
  position: absolute;
}

.background{
  /* background-image: url('../assets/photoAssets/explande-home.jpg'); */
  height: 100vh;
  width: 60vw;
  background-size: cover;
  background-position: left;
}

.home{
  height: 100vh;
  display: flex;
  flex-direction: row;

}


</style>
