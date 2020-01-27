<template>
    <div class="containerCreate" style="z-index:-3">
        <div class="white-line">
            <lottie style="position:absolute;height:251vh;width:100vw;top:-50px;left:0vw;" :options="defaultOptions" v-on:animCreated="handleAnimation"/>
            <!-- <img style="height:251vh" src="../assets/white-line-with-plane.png" alt=""> -->
        </div>
         <div class="animation">
            <div class="section-1">
                <!-- <img class="icon" src="../assets/icon1.png" style="z-index:0" alt=""> -->
                <lottie style="height:400px;width:400px;margin-left:13vw;z-index:1;z-index:0" :options="defaultOptions2" v-on:animCreated="handleAnimation"/>
            </div>
            <div class="section-1" style="z-index:1">
                <h1 class ="description"> LOOK FOR AVAILABLE ITINERARIES </h1>
                  <p>
                    We have no difficulty in locating information. The key is that the information is selected and structured appropriately. 
                    With Rationale’s grouping maps you can drag information from the web onto your workspace via the scratchpad and include colour,
                    hyperlinks and images.
                </p>
                
            </div>
            <div class="section-1" style="z-index:0">
                <!-- <img class="icon" src="../assets/icon3.png" alt=""> -->
                <lottie style="height:400px;width:400px;margin-left:10vw;z-index:1;z-index:0" :options="defaultOptions4" v-on:animCreated="handleAnimation"/>
            </div>
        </div>
         <div class="textContent">
            <div class="section-1" style="z-index:1">
                <h1 class ="description">TELL US YOUR PLAN</h1>
                <p>
                    We have no difficulty in locating information. The key is that the information is selected and structured appropriately. 
                    With Rationale’s grouping maps you can drag information from the web onto your workspace via the scratchpad and include colour,
                    hyperlinks and images.
                </p>
            </div>
            <div class="section-1">
               <!-- <img class="icon" src="../assets/icon2.png" alt=""> -->
               <lottie style="height:400px;width:400px;margin-left:-5vw;z-index:1;z-index:0" :options="defaultOptions3" v-on:animCreated="handleAnimation"/>
            </div>
            <div class="section-1" style="z-index:1">
                <h1 class ="description"> YOU CAN ALSO CREATED YOUR OWN AND SHARE YOUR ITINERARY!</h1>
                <button type="button" id="button" class="btn btn-info" @click="goToForm">Create Yours!</button>
            </div>
        </div>
        
    </div>
</template>

<script>

import Lottie from 'vue-lottie';
import * as animationData from '../assets/animation/data-create-plane.json';
import * as animationData2 from '../assets/animation/explanade-holiday-time.json';
import * as animationData3 from '../assets/animation/explanade-icon-2.json';
import * as animationData4 from '../assets/animation/explanade-icon3.json';

export default {
    name:'create',
    data(){
        return{
            defaultOptions: {animationData: animationData.default},
            defaultOptions2: {animationData: animationData2.default},
            defaultOptions3: {animationData: animationData3.default},
            defaultOptions4: {animationData: animationData4.default},
            animationSpeed: 1
        }
    },
    components : {
        Lottie
    },
    methods: {
        handleAnimation: function (anim) {
            this.anim = anim;
        },

        onSpeedChange: function () {
            this.anim.setSpeed(this.animationSpeed);
        },
        goToForm(){
            this.$router.push('/create/form')
        }
    }
}
</script>

<style scoped>

#button{
font-size: 25px;
background-color: #19459b;
border-color: #19459b;
padding: 15px;
border-radius:0px;
transition: all .2s ease-in-out;
}

#button:hover{
font-size: 25px;
background-color: #eec925;
border-color: #eec925;
color:black;
padding: 15px;
border-radius:0px;
box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
transform: scale(1.1);
}

.white-line{
  position: absolute;
  display: flex;
  justify-content: center;
  z-index:0;
}

h1{
    color:white;
    margin-bottom: 50px;
    font-weight: 200;
}

p{
    text-align: center;
    color:white;
    font-size:20px;
    font-weight: 300;
    letter-spacing: 1px;
}

.description{
  font-size: 35px;
  text-align: center;
}

.animation{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    align-items: center;
    height: auto;
    
}

.section-1{
    height: 70vh;
    width: 25vw;
    margin-top:100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.containerCreate{
    display: flex;
    flex-direction: row;
    height: auto;
    background-color:black;
    background-size:cover;
    background-image: url('../assets/photoAssets/explanade-create.jpg')
}

.textContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: auto;

    
}
</style>