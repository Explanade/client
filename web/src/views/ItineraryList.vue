<template>
  <div class="itineraryList">
      <div class="list">
          <div style="height:200px;width:100%;display:flex;justify-content:center;align-items:center">
            <div class="input">
                <h3 style="text-align:center">SEARCH FOR SOME PLACES</h3>
                <br>
                <input v-model="searchCity" id="inputSearch" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter City Name..">
            </div>
          </div>
          <div class="itineraries">

              <div class="idea" v-for="(itinerary,i) in fetching" :key="i" >

                <div v-for="(hero,j) in itinerary.activities" :key="j">
                <div v-if="hero.orderIndex == 0" style="width:auto; height:auto;">
                  
                  
                  <div class="images"
                    :style="`background-image: url('${hero.places[0].photo}');
                    background-size:cover;
                    height:30vh;
                    display:flex;
                    justify-content:center;`"
                    @click="summaryItin(itinerary._id)"
                  > 
                  </div>

              <div class="captions" style="height:30%;max-width:100%;padding:15px;">
                  <div style="min-height:60px;margin-bottom:10px">
                        <h1 style="color:black; font-weight:600;margin-top:20px;">{{itinerary.name}}</h1>              
                </div>    
                <p style="color:black; font-size:15px;color:grey  "><i class="fas fa-feather-alt" style="margin-right:10px"></i>by {{itinerary.user_id.name}}</p>
                <p style="color:black; font-size:15px; margin-top:-10px;color:grey "><i class="fas fa-location-arrow" style="margin-right:10px"></i>{{itinerary.location.name}}</p>
              </div>
            </div>

            </div>
            </div>

          </div>
                    
            
        </div>
    </div>   
</template>

<script>

import { mapState } from 'vuex'

export default {
   name:'itineraryList',
    data(){
        return{
          searchCity : ''
        }
    },
    methods :{
       summaryItin(id){
        this.$router.push(`/summary/${id}`)
      }
    },
    created(){
      this.$store.dispatch('fetchHighlightItinerary')
    },
    computed : {
      fetching(){
        if(this.searchCity === ''){
          return this.$store.state.itineraries
        }else{
          let filtered = this.$store.state.itineraries.slice(0)
          let regex = new RegExp(this.searchCity.toLowerCase())
          return filtered.filter(x => {
            return regex.test(x.location.name.toLowerCase())  
          })
        }
      }
    }
}
</script>

<style>

#inputSearch{

}

.list::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.3);
	background-color: #F5F5F5;
}

.list::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

.list::-webkit-scrollbar-thumb
{
	background-color: #cecece;
}

.images{
  height:70%;
  width:100%;
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.images:hover {
  opacity: 1;
  box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
  transform: scale(1.05);
}

.input{
  padding: 30px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color:white;
}


.idea{
  margin:50px;
  height: 45vh;
  width: 15vw;
}

.ideas{
  height: 120vh;
  
}

.itineraries{
    height: 20vh;
    background-color: white;
    position:absolute;
    top:20vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.list{
    height: 80vh;
    width: 75vw;
    background-color: white;
    position:absolute;
    margin-left:15%;
    top:30vh;
    display: flex;
    flex-wrap: wrap;
    overflow-x: auto;
}
.itineraryList{
    height: 150vh;
    width: 100vw;
    background-image: url('../assets/photoAssets/explanade-list.jpg');
    background-size:cover;
}


p{
  font-weight: 100;
  font-size:12px;
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

</style>