<template>
  <div class="mainContainer">
    <div class="maps">
      <gmap-map
        :center="center"
        :zoom="12"
        style="width: auto; height:100%;;"
        :options="mapStyle"
        >
        <gmap-marker
            :position="m"
            v-transition
            v-for="(m, index) in markers" :key="index"
            @click="center=m"
            :icon="{url : require('../assets/icon-pin-poin.png')}"
        >
        </gmap-marker>
        <gmap-polyline :path.sync="markers" 
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
    <div class="input">

        <div class="options">
               <div class="form-group">
                   
                    <h3>Select Options</h3>
                   
                    <br>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Landmarks</option>
                        <option>Restaurants</option>
                        <option>Events</option>
                    </select>
                </div>

                <draggable class="test" v-model="restaurants" group="activities">
                    <div
                        class="options-images"
                        v-for="element in restaurants"
                            :key="element.name"
                        >
                        {{element.name}}
                        <div 
                            id='highlight-options' 
                            :style="{backgroundImage: 'url(' + element.icon + ')'}"
                        >
                    </div>
                    </div>
                </draggable>

                <ItineraryTable :itinerary="itineraryDetail" :activities="activities" />
                
                <!-- <div class="day-list">
                    <div class="days">
                        <h5>Day 1</h5>
                    </div>
                     <div class="days">
                        <h5>Day 2</h5>
                    </div>
                     <div class="days">
                        <h5>Day 3</h5>
                    </div>
                </div> -->
                
                <!-- <div class="days-detail"> -->
                    <!-- <button type="submit" class="btn btn-primary" id="button-sort">
                        <i class="fas fa-sort-amount-down" style="font-size:20px;margin-right:10px"></i> Sort by distance
                    </button>                   -->
                    <!-- <div class="list">
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                    </div> -->
                    <!-- <div class="card mb-3" style="max-width: auto;max-height:20vh"> 
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <span class="step">1</span>
                            <div style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBKsEDRAzp13nh2mKkIMMeQvxbuBNKbTvpxt0axtB1sOwKgakI');height:20vh;width:11vw; background-size:cover">
                            </div>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h6 class="card-title">Destination Name</h6>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div class="review">
                                    <star-rating    v-bind:increment="0.5"
                                                    v-bind:max-rating="5"
                                                    active-color="#ed8a19"
                                                    inactive-color="#737373"
                                                    v-bind:star-size="15"
                                                    v-bind:rating="3"
                                                    >
                                    </star-rating>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> -->
                <!-- </div> -->
                <button type="button" id="button" class="btn btn-info" @click="submitItinerary">Create</button>
                <button type="button" id="button" style="background:gray" class="btn btn-info">Back</button>
        </div>
    </div>

  </div>
</template>

<script>
import draggable from 'vuedraggable';
import StarRating from 'vue-star-rating'
import ActivityCard from '../components/ActiviesCard'
import ItineraryTable from '../components/ItineraryTable'

export default {
    components :{
        StarRating,
        ActivityCard,
        ItineraryTable,
        draggable
    },
    data() {
        return {
            itineraryDetail: null,
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

    mounted() {
        this.geolocate();
    },

    created () {
        this.getItinDetail();
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
        getItinDetail() {
            const id = this.$route.params.id;
            let locationName;
            this.$store.dispatch('fetchItineraryDetail', id)
                .then(({ data }) => {
                    this.itineraryDetail = data;
                    let activities = {};
                    if (!data.activities) {
                        for (let i = 0; i < data.date.total_days; i++) {
                            activities[i] = []
                        }
                        this.activities = activities;
                    } else {
                        this.activities = data.activities
                    }
                    locationName = data.location.name;
                    return this.$store.dispatch('fetchRestaurants', locationName)
                })
                .then(({ data }) => {
                    this.restaurants = data.results;
                    
                    return this.$store.dispatch('fetchLandmarks', locationName)
                })
                .then(({ data }) => {
                    this.landmarks = data.results;
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

.review{
    margin-top:-10px;
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
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: row;
}

.maps-images{
    background-size:cover;
    width: 50vw;
    height:100%;
}

.input{
    height: 100vh;
    width: 50vw;
    padding: 100px;
    overflow-y: scroll;
}

.maps{
    height: 100vh;
    width: 50vw;
    background-image: url('../assets/map-template.png');
    background-size: cover;

}

</style>