<template>
  <div class="mainContainer">
    <div class="button">
        <h5>SUBMIT</h5>
    </div>
    <div class="button2">
        <h5>BACK</h5>
    </div>
    <div class="left">
            <div class="titleContent">
                <h2>START YOUR</h2>
                <h2>AWESOME PLAN</h2>
            </div>
            <div class="maps">
            </div>
    </div>
    <div class="input">
        <div class="options" style="display:flex">
            <div class="listCategory" style="width:22vw;">
               <div class="form-group">
                    <h2 style="color:black">Select Attractions</h2>
                    <br>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>Landmarks</option>
                    <option>Restaurants</option>
                    <option>Events</option>
                    </select>
                </div>
                <div class="options-images">
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                </div>
            </div>

            <div class="listCategory" style="width:22vw;margin-left:100px;">
               <div class="form-group">
                    <h2 style="color:black">Select Days</h2>
                    <br>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>Day 1 : 16/07/202</option>
                    <option>Day 2 : 17/07/202</option>
                    <option>Day 3 : 18/07/202</option>
                    </select>
                </div>
                <div class="options-images">
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>

import StarRating from 'vue-star-rating'
import ActivityCard from '../components/ActiviesCard'

export default {
    components :{
        StarRating,
        ActivityCard
    },
    data() {
        return {
           
        }
    }
}
</script>

<style>

.button{
  background-color: #ffda69;
  height: 7%;
  width: 7%;
  display: flex;
  bottom:0vh;
  right:14vw;
  position: absolute;
  z-index: 1;
  justify-content: center;
  align-items: center;
}

.button2{
  background-color: #545454;
  color:white;
  height: 7%;
  width: 7%;
  display: flex;
  bottom:0vh;
  right:6vw;
  position: absolute;
  z-index: 1;
  justify-content: center;
  align-items: center;
}



.options-images::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.3);
	background-color: #F5F5F5;
}

.options-images::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

.options-images::-webkit-scrollbar-thumb
{
	background-color: #cecece;
}

h2{
  color: white;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: -0px;
}


.titleContent{
  position: absolute;
  top:25vh;
  left:20vw;
  color:white;
  z-index: 1;
  text-align: right;
}

.left{
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#button{
    background: #68C7BD;   
    border: #68C7BD;
    font-size: 25px;
    margin-top:50px;
    margin-left:20px
}

#button-sort{
    margin-top:-30px;
    margin-bottom:50px;
    background: #007D62;   
    border: #68C7BD;
}

span.step {
  background: #68C7BD;
  color: white;
  display: inline-block;
  font-weight: bold;
  line-height: 3em;
  left: 10px;
  top:-10px;
  text-align: center;
  font-size: 20px;
  width: 3em;
  height: 3em;
  position: absolute;
}

.days-detail{
    width: 40vw;
    margin-top:-4vh;
    background-color: rgb(239, 239, 239);
    padding:30px;
    padding-top:100px;
}

.days{
    background-color:#68C7BD;
    width: 100px;
    height: 60px;
    display: flex;
    margin:5px;
    justify-content: center;
    align-items: center;
    color: white;

}

.day-list{
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    margin-left:20px;
   
}

#highlight-options{
    min-height:100px;
    min-width:100px; 
    background-size: cover;
    background-position: center;
    border-radius:100%;
    margin:10px
 
}

.mainContainer{
    height: 120vh;
    background-color: white;
    display: flex;
    width:100%;
    flex-direction: row;
    background-image: url('../assets/photoAssets/explanade-itinerary.jpg');
    background-size:cover;
    justify-content: center;
    align-items: center;
}

.input{
    height: 70vh;
    width: 80vw;
    padding-left: 200px;
    padding-top:70px;
    padding-bottom:70px;
    background-color: white;
}

.options-images{
    flex-direction: row;
    display: flex;
    width: 22vw;
    margin-top:50px;
    flex-wrap: wrap;
    overflow-y:auto;
    height: 40vh;
    padding-bottom: 50px;
}

.maps{
    margin-top: 20px;
    height: 50vh;
    width: 40vw;
    position: absolute;
    left:0px;
    background-image: url('../assets/map-template.png');
    background-size: cover;

}

</style>