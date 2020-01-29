<template>
  <div class="containerItinForm">
    <div class="button" @click="submitItinerary">
        <h5>SUBMIT</h5>
    </div>
    <div class="button2" @click="homePage">
        <h5>BACK</h5>
    </div>
    <div class="left">
        <div class="titleContent">
            <h2>START YOUR</h2>
            <h2>AWESOME PLAN</h2>
        </div>
        <div class="mapsCreate">
            <gmap-map
                :center="center"
                :zoom="12"
                style="width: auto; height:100%;;"
                :options="mapStyle"
                >
                <gmap-marker
                    :position="m"
                    :animation="Number(4)"
                    v-for="(m, index) in activities[selectedDay]" :key="index"
                    @click="center=m.geometry.location"
                    :icon="{url : require('../assets/icon-pin-poin.png')}"
                >
                </gmap-marker>
                <gmap-polyline :path.sync="activities[selectedDay]" 
                    :options="{
                        strokeColor:'#ffa31a',
                        geodesic: true,
                        strokeWeight: 8
                        }"
                >
                </gmap-polyline>
            </gmap-map>
        </div>
    </div>
    <div class="inputItinInfo">
        <div class="optionsCreateItin" style="display:flex; padding-left:10vw;padding-top:50px;padding-bottom:50px;padding-right:50px;background-color:white;width:60vw;margin-right:5vw;">
            <Recommendation :restaurants="restaurants" :landmarks="landmarks" :events="events"/>

            <div class="listCategory" style="width:22vw;margin-left:40px">
               <div class="form-group-itin">
                   <div style="display:flex">
                    <h2 style="color:black">Select Days</h2>
                    <button type="button" id="button-optimized" class="btn btn-primary" @click="sortPlaces">Optimize</button>
                   </div>
                    <br>
                
                    <select class="form-control" id="exampleFormControlSelect1" v-model="selectedDay">
                        <option v-for="(day, i) in itineraryDetail.date.total_days" :key="i" :value="i">Day {{i + 1}}</option>
                    </select>
                </div>
                <div class="options-images">
                        <div v-for="(itin, index) in activities" :key="index">
                            <div v-if="index == selectedDay">
                                <draggable v-model="activities[index]" group="activities" @change="updateIndex()" style="min-height:50px;min-width:50px;">
                                    <div v-for="(element, index2) in activities[index]" :key="element.id"  >
                                        <ActivityCard :place="element" :index="index2" />
                                    </div>
                                </draggable>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import draggable from 'vuedraggable';
import StarRating from 'vue-star-rating'
import ActivityCard from '../components/ActiviesCard'
import Recommendation from '../components/Recommend'

export default {
    components :{
        StarRating,
        ActivityCard,
        draggable,
        Recommendation
    },
    data() {
        return {
            itineraryDetail: null,
            activities: {},
            selectedDay: 0,
            restaurants: [],
            landmarks: [],
            events: [],
            center: { lat: 35.5817149, lng: 139.4148582 },
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
            if (this.activities) return this.activities.selectedDay;
        },
    },
    mounted() {
        this.geolocate();
        this.getItinDetail()
    },
    methods:{
        homePage(){
            this.$router.push('/')
        },
        calculateDistance(lat1, lon1, lat2, lon2, unit) {
            var radlat1 = Math.PI * lat1/180
            var radlat2 = Math.PI * lat2/180
            var radlon1 = Math.PI * lon1/180
            var radlon2 = Math.PI * lon2/180
            var theta = lon1-lon2
            var radtheta = Math.PI * theta/180
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist)
            dist = dist * 180/Math.PI
            dist = dist * 60 * 1.1515
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist
        },
        sortPlaces(){
            const uniqueNodes = this.activities[this.selectedDay].slice(0)
            for ( let i = 0; i < uniqueNodes.length; i++) {
                uniqueNodes[i]["distance"] = this.calculateDistance(uniqueNodes[0]["lat"],uniqueNodes[0]["lng"],uniqueNodes[i]["lat"],uniqueNodes[i]["lng"],"K");
            }
            uniqueNodes.sort(function(a, b) { 
                return a.distance - b.distance;
            });
            this.activities[this.selectedDay] = uniqueNodes
        },
        updateIndex() {
            this.center = this.activities[this.selectedDay][this.activities[this.selectedDay].length - 1]
            for (let act in this.activities) {
                let places = this.activities[act];
                for (let i = 0; i < places.length; i++) {
                places[i].order = i;
                }
            }
        },
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        },
        getItinDetail() {
            const id = this.$store.state.idItinerary;
            let locationName;
            this.$store.dispatch('fetchItineraryDetail', id)
                .then(({ data }) => {
                    this.itineraryDetail = data;
                    let activities = {};

                    if (data.activities.length <= 0) {
                        for (let i = 0; i < data.date.total_days; i++) {
                            activities[i] = []
                        }
                    } else {
                        for (let i = 0; i < data.activities.length; i++) {
                            activities[data.activities[i].orderIndex] = data.activities[i].places
                        }
                    }
                    this.center = data.location
                    this.activities = activities;
                    locationName = data.location.name;

                    this.fetchLandmarks(locationName)
                    this.fetchRestaurants(locationName)
                    this.fetchEvents(locationName)
                })
        },
        fetchLandmarks(locationName) {
            this.$store.dispatch('fetchLandmarks', locationName)
                .then(({ data }) => {
                    for (let i = 0; i < data.results.length; i++) {
                        data.results[i].lat = data.results[i].geometry.location.lat;
                        data.results[i].lng = data.results[i].geometry.location.lng;
                    }

                    this.landmarks = data.results;
                })
                .catch(err => {
                    this.$store.commit('SET_ERROR_MESSAGE', err)
                })
        },
        fetchRestaurants(locationName) {
            this.$store.dispatch('fetchRestaurants', locationName)
                .then(({ data }) => {
                    for (let i = 0; i < data.results.length; i++) {
                        data.results[i].lat = data.results[i].geometry.location.lat;
                        data.results[i].lng = data.results[i].geometry.location.lng;
                    }

                    this.restaurants = data.results;
                    return this.$store.dispatch('fetchEvents', this.itineraryDetail.location.name)
                })
                .catch(err => {
                    this.$store.commit('SET_ERROR_MESSAGE', err)
                })
        },
        fetchEvents(locationName) {
            this.$store.dispatch('fetchEvents', locationName)
                .then(({ data }) => {
                    this.events = data;
                })
                .catch(err => {
                    this.$store.commit('SET_ERROR_MESSAGE', err)
                })
        },
        submitItinerary() {
            this.itineraryDetail.activities = this.activities;
            this.$store.dispatch('updateItinerary', this.itineraryDetail)
                .then(({ data }) => {
                    this.itineraryDetail = data;
                    this.$router.push(`/summary/${data._id}`)
                })
                .catch(err => {
                    this.$store.commit('SET_ERROR_MESSAGE')
                })
        }
    }
}
</script>

<style>

#button-optimized{
    margin-left:30px;
    background-color: #19459b;
    border-color: #19459b;
    transition: all .2s ease-in-out;
  
}

#button-optimized:hover{
    margin-left:30px;
    background-color: #ffda69;
    border-color: #ffda69;
    color:black;
    box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
    transform: scale(1.1);
}


.test {
overflow: auto;
    white-space: nowrap;
}
.options-images{
    flex-direction: row;
    display: inline-block;
    max-width: 20vw;
    width: 800px;
    overflow-x: scroll;
    margin-top:50px;
    
}

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



.containerItinForm{
    height: 120vh;
    background-color: white;
    display: flex;
    width:100vw;
    flex-direction: row;
    background-image: url('../assets/photoAssets/explanade-itinerary.jpg');
    background-size:cover;
    justify-content: center;
    align-items: center;
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

.mapsCreate{
    margin-top: 20px;
    margin-left:5vw;
    height: 50vh;
    width: 35vw;
    position: absolute;
    left:0px;
    background-image: url('../assets/map-template.png');
    background-size: cover;
    transition: all .2s ease-in-out;
    
}

.mapsCreate:hover{
    margin-top: 20px;
    margin-left:5vw;
    height: 50vh;
    width: 35vw;
    position: absolute;
    left:0px;
    background-image: url('../assets/map-template.png');
    background-size: cover;
    transition: all .2s ease-in-out;
    transform: scale(1.02);
    box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
}

</style>