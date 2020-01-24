<template>
  <div class="user-page">
    
    <form class="create-form" @submit.prevent="submitIten">
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

export default {
  data(){
    return{
      currentCity : null,
      startDate : null,
      endDate : null,
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
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
      }
      return location
    },
    submitIten(){
      console.log(this.getLatLng())
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