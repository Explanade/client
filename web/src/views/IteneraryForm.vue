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
            <gmap-map
                :center="this.$store.state.itineraryDetail.activities[this.selectedDay].places[0]"
                :zoom="12"
                style="width: auto; height:100%;;"
                :options="mapStyle"
                >
                <gmap-marker
                    :position="m"
                    :animation="Number(4)"
                    v-for="(m, index) in this.$store.state.itineraryDetail.activities[selectedDay].places" :key="index"
                    @click="center=m"
                    :icon="{url : require('../assets/icon-pin-poin.png')}"
                >
                </gmap-marker>
                <gmap-polyline :path.sync="this.$store.state.itineraryDetail.activities[selectedDay].places" 
                    :options="{
                    strokeColor:'red',
                    geodesic: true,
                    icons:  [{
                        icon: {
                        path: 'M 0,-1 0,1',
                        strokeOpacity:5,
                        scale: 7
                        },
                        offset: '100%',
                        repeat: '10px'
                    }], 
                    }"
                    >
                </gmap-polyline>
            </gmap-map>
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
                    <select class="form-control" id="exampleFormControlSelect1" v-model="selectedDay">
                        <option value=0>Day 1 : 16/07/202</option>
                        <option value=1>Day 2 : 17/07/202</option>
                        <option value=2>Day 3 : 18/07/202</option>
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
            itineraryDetail: null,
            selectedDay: 0,
            activities: {},
            restaurants: [],
            landmarks: [],
            center: { lat: -6.229728, lng: 106.6894304 },
            markers: [],
            currentPlace: null,
            mapStyle: {
                styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#523735"
                    }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#c9b2a6"
                    }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#dcd2be"
                    }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#ae9e90"
                    }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#93817c"
                    }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                    {
                        "color": "#a5b076"
                    }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#447530"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#fdfcf8"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#f8c967"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                    {
                        "color": "#92ddc8"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#92ddc8"
                    }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#e98d58"
                    }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.fill",
                    "stylers": [
                    {
                        "color": "#357b63"
                    }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#357b63"
                    }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#806b63"
                    }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#8f7d77"
                    }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                    {
                        "color": "#b9d3c2"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#92998d"
                    }
                    ]
                }
                ]
            }
        }
    },
    computed:{
        places(){
            if(this.$store.itineraryDetail){
                return this.$store.state.itineraryDetail.activities[this.selectedDay].places
            }else{
                return 
            }
        }
    },
    mounted() {
        this.geolocate();
        this.getItinDetail()
    },
    methods:{
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
                };
            });
        },
        getItinDetail(){
            const id = this.$route.params.id;
            let locationName;
            this.$store.dispatch('fetchItineraryDetail', id)
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
    transition: all .2s ease-in-out;
}

.button:hover{
    background-color: #f3b806;
    height: 7%;
    width: 7%;
    display: flex;
    bottom:0vh;
    right:14vw;
    position: absolute;
    z-index: 1;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
    transform: scale(1.1);
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
    transition: all .2s ease-in-out;
}

.button2:hover{
    background-color: #353535;
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
    transform: scale(1.1);
    box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
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


.day-list{
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    margin-left:20px;
   
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
    transition: all .2s ease-in-out;
    
}

.maps:hover{
    margin-top: 20px;
    height: 50vh;
    width: 40vw;
    position: absolute;
    left:0px;
    background-image: url('../assets/map-template.png');
    background-size: cover;
    transform: scale(1.05);
    box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
}

</style>