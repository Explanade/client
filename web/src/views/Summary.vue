<template>
<div class="background">
  <div class="summaryContainer">
        <div class="profile">
            <div class="leftSummary">
                <img class="logoBrand" src="../assets/explanade-logo-1.png" alt="" style="height:130px;width:220px;margin-top:-50px;margin-left:-20px">
                <div class="name">
                    <h6 style="margin-bottom:0px; color:gray; font-weight:200">Planner</h6>
                    <h1 style="color:#151515; font-size:35px;font-weight:500">{{itineraryDetail.user_id.name}}</h1>
                </div>
            </div>
            <div class="rightSummary">
                <div class="name">
                    <p style="margin-bottom:0px; color:gray">Booking ID</p>
                    <h6>{{this.$route.params.id.toUpperCase()}}</h6>
                    <hr align= "left" style="border: 0.5px solid #6D6D6D; width:100%;">
                </div>
                <div class="name">
                    <p style="margin-bottom:0px; color:gray">Start Date</p>
                    <h6>{{ itineraryDetail.date.start.slice(0, 10) }}</h6>
                    <hr align= "left" style="border: 0.5px solid #6D6D6D; width:100%;">
                </div>
                <div class="name">
                    <p style="margin-bottom:0px; color:gray">End Date</p>
                    <h6>{{ itineraryDetail.date.end.slice(0, 10) }}</h6>
                </div>
            </div>
        </div>
        <div class="destinations">
            <div style="display:flex;padding:100px;width:50vw;">
            <div class="maps">
                <gmap-map
                    :center="center"
                    :zoom="12"
                    style="width: auto; height:100%;"
                    :options="mapStyle"
                    :streetView="false"
                    >
                    <gmap-marker
                        :position="center"
                        :animation="Number(4)"
                        v-for="(m, index) in activities[selectedDay]" :key="index"
                        @click="center=m.geometry.location"
                        :icon="{url : require('../assets/icon-pin-poin.png')}"
                    >
                    </gmap-marker>
                </gmap-map>
            </div>
            <div class="name" style="width:20vw;padding:50px;">
                <!-- <p style="margin-bottom:0px; color:gray; font-size:25px;">From</p>
                <h6 style="margin-bottom:0px; color:black; font-size:35px;">Jakarta, Indonesia</h6>
                <br> -->
                <br>
                <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                <p style="margin-bottom:0px; color:gray; font-size:25px;font-weight:200">Awesome trip itinerary to</p>
                <h6 style="margin-bottom:0px; color:black; font-size:35px;">{{center.name}}</h6>
                <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
            </div>
            </div>
        </div>    
        <div class="day" v-for="(activity,i) in activities" :key="i">
            <h1 style="color:black"> Day {{Number(i) + 1}} <span v-if="activity.length == 0"> - no activity -</span></h1>            
            <hr align= "left" style="border: 0.5px solid #6D6D6D; width:100%;">
            <br>
            <div class="activities">
                <div class="activity" style="width:25vw;" v-for="(place, j) in activity" :key="j">
                    <h6>{{place.name}}</h6>
                    <hr align= "left" style="border: 2px solid #848484; width:20%;">
                    <p>{{place.formatted_address}}</p>
                </div>
            </div>
        </div>
         <div class="terms-condition">
            <h1>Itinerary Reviews</h1>
            <hr align= "left" style="border: 0.5px solid #6D6D6D; width:100%;">
            <h6>Write a review</h6>
            
            <StarRating :active-color="'#ffda69'" v-model="ratingReview" :star-points="false" :star-size="30" style="margin-bottom:15px;"></StarRating>
            <textarea v-model="reviewContainer" placeholder="write a review" rows="4" cols="50" class="form-control" style="resize:none;">
            </textarea>
            <button type="button" id="button" class="btn btn-info" @click="addReview">Add Review</button>
            <hr align= "left" style="border: 0.5px solid #848484; width:100%;">
            <br>
            <br>
            <div id="reviews" v-for="(reviewList, i) in itineraryDetail.reviews" :key="i">
                <div style="padding:15px; display:flex; flex-direction:row;">
                    <img id="avatar-sm" :src="reviewList.user_id.profile_picture" alt="your image"/>
                    <div style="margin-left:10px">
                        <h5>{{reviewList.user_id.name}}</h5>
                        <StarRating :read-only="true" style="margin-top:-15px" :rating="reviewList.score" :star-size="15" :active-color="'#ffda69'" :star-points="false" ></StarRating>
                    </div>
                </div>
                <p style="font-size:20px; padding:10px; margin-top:-15px; color:#656565; font-style:italic">"{{reviewList.message}}"</p>
                <hr align= "left" style="border: 0.5px solid #848484; width:100%;">
            </div>
        </div>
  </div>
</div>
</template>

<script>
import ActiviesCard from '../components/ActiviesCard'
import StarRating from 'vue-star-rating'
import swal from 'sweetalert2';
export default {
    components:{
        ActiviesCard,
        StarRating
    },
    data(){
        return{
            ratingReview: 3,
            reviewContainer: '',
            itineraryDetail: null,
            activities: {},
            selectedDay: 0,
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
    mounted() {
        this.geolocate();
        this.getItinDetail()
    },
    methods:{
        addReview(){
            if(this.reviewContainer && localStorage.token){
                const data = {
                    score : this.ratingReview,
                    message : this.reviewContainer,
                    itinerary_id : this.$route.params.id
                }
                this.$store.dispatch('addReview', data)
                    .then(({data}) => {
                        this.ratingReview = 0
                        this.reviewContainer = ''
                        this.getItinDetail()
                    })
            }else if(this.reviewContainer == ''){
                swal.fire({
                    icon: 'error',
                    title: 'Cannot add Review',
                    text: 'make sure you fill the review!',
                })
            }else{
                swal.fire({
                    icon: 'error',
                    title: 'Cannot add review',
                    text: 'You need to login first!',
                })
                this.$router.push('/user')
            }
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
            const id = this.$route.params.id;
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
                })
        },
    }
}
</script>

<style scoped>

#button{
    background-color:#19459b;
    border-color: #19459b;
    margin-top:10px;
    border-radius: 0px;
}

#button2{
    background-color:#282828;
    border-color: #282828;
    margin-top:10px;
    border-radius: 0px;
}

#avatar-sm {
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: top center;
    border-radius: 50%;
    margin-right:10px;
}

h6{
    font-size:18px;
}

p{
    font-size: 12px;
}

.terms-condition{
    display: flex;
    align-items: left;
    align-content: center;
    flex-direction: column;
    justify-content: space-around;
    background: linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(252,252,252,1) 7%, rgba(250,250,250,1) 93%, rgba(246,246,246,1) 100%);
    box-shadow: 10px 10px 33px -23px rgba(0,0,0,0.75);
    border-radius: 25px;
    margin-left:50px;
    margin-right:50px;
    padding:50px;
}

.activity{
    margin:10px;
    max-width: 22%;
}

.activities{
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    /* margin-left:50px; */
}

.day{
    display: flex;
    align-items: left;
    align-content: center;
    flex-direction: column;
    justify-content: space-around;
    background: linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(252,252,252,1) 7%, rgba(250,250,250,1) 93%, rgba(246,246,246,1) 100%);
    box-shadow: 10px 10px 33px -23px rgba(0,0,0,0.75);
    border-radius: 20px;
    margin-left:50px;
    margin-right:50px;
    padding:50px;
    
}

.hotel-images{
    height: 100%;
    width: 30%;
    background-size: cover;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOvCBWRbKHES_t3qrxn2ZCXFVvnD5mfr-ZM_Lff-N55gVXiVFn')
}

.hotel{
    justify-content: space-around;
    align-items: center;
    height:30vh;
    background: linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(252,252,252,1) 7%, rgba(250,250,250,1) 93%, rgba(246,246,246,1) 100%);
    box-shadow: 10px 10px 33px -23px rgba(0,0,0,0.75);
    border-radius: 20px;
    margin-left:50px;
    margin-right:50px;
    padding:50px;
    display: flex;
}

.right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:30%;
    align-items: left;
    align-content: left;
}
.left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.destinations{
    height:50vh;
    background: linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(252,252,252,1) 7%, rgba(250,250,250,1) 93%, rgba(246,246,246,1) 100%);
    box-shadow: 10px 10px 33px -23px rgba(0,0,0,0.75);
    border-radius: 20px;
    margin-left:50px;
    margin-right:50px;
    margin-top:-50px
}

.background{
    background-color:rgb(3, 35, 34)
}
.profile{
    height:30vh;
    background: linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(252,252,252,1) 7%, rgba(250,250,250,1) 93%, rgba(246,246,246,1) 100%);
    box-shadow: 10px 10px 33px -23px rgba(0,0,0,0.75);
    border-radius: 25px;
    margin:50px;
    padding:50px;
    display: flex;
    justify-content: space-between;
}
.maps{
    background-image: url('../assets/map-template.png');
    height:30vh;
    width:50%;
    background-size: cover;
    background-position: center;

}
.days{
    height:50vh;
    width:100%;
    
}
.activities{
    width: 100vh;
    
}

.summaryContainer{
    display: flex;
    padding:7%;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    margin-left: 15%;
    margin-right: 15%;
    width:70%;
    height: auto;
    
}

</style>