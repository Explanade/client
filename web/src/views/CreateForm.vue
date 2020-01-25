<template>
  <div class="user-page">
    
    <form class="create-form" @submit.prevent="submitItem">
      <div class="form-group">
        <label for="exampleInputEmail1">Itinerary Name</label>
        <input 
          type="text" 
          class="form-control"
          placeholder="Insert name.."
          v-model="itinName"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Destination</label>
        <gmap-autocomplete
          @place_changed="setPlace"
          class="form-control"
          id="input"
          placeholder="Insert city.."
        >
        </gmap-autocomplete>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Pick dates</label>
        <HotelDatePicker
          @check-in-changed="setStartDate"
          @check-out-changed="setEndDate"
        />
        <!-- <input type="password" class="form-control" id="input" placeholder="Insert password.."> -->
      </div>
      <div>
        <button type="submit" id="button" class="btn btn-info">Submit</button>
      </div>
    </form>

  </div>
</template>

<script>

import HotelDatePicker from 'vue-hotel-datepicker'
import axios from 'axios'

export default {
  data(){
    return{
      currentCity : null,
      startDate : null,
      endDate : null,
      itinName : '',
      currentPlace: null
    }
  },
  methods : {
    setPlace(place) {
      this.currentPlace = place;
    },
    setStartDate(date){
      this.startDate = date
    },
    setEndDate(date){
      this.endDate = date
    },
    getLatLng(){
      const location = {
          name : this.currentPlace.name,
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
      }
      return location
    },
    submitItem(){
      const data = {
        name : this.itinName,
        start_date : this.startDate,
        end_date : this.endDate,
        location : this.getLatLng()
      }

      this.$store.dispatch('createItinerary')
        .then(({data}) => {
          this.$router.push(`/itinerary/${data[0]._id}`)
        })
        .catch(err => {
          this.$store.commit('SET_ERROR_MESSAGE', err)
        })
    }
  },
  components: {
      HotelDatePicker,
  },
}
</script>


<style>

.btn-info {
  color: #fff;
  background-color:transparent;
  border:3px solid #fff;
  border-radius: 40px;
  margin:20px;
  height: 50px;
  width: 150px;
}

#input{
  height: 40px;
  background-color: white;
  padding: 25px;
  font-size: 20px;
  width:20vw;
}

.create-form{
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  font-size: 25px;
  font-weight: 600;
  margin-left: 200px;
  color: white;
}
.user-page{
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center
}
</style>