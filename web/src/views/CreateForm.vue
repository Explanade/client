<template>
  <div class="user-page">
    
      <form class="create-form">
        <div class="form-group">
          <label for="exampleInputEmail1">Itinerary Name</label>
          <input type="email" class="form-control" id="input" aria-describedby="emailHelp" placeholder="Insert your itinerary name..">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Destination</label>
          <input type="email" class="form-control" id="input" aria-describedby="emailHelp" placeholder="Insert city..">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Pick dates</label>
          <HotelDatePicker/>
          <!-- <input type="password" class="form-control" id="input" placeholder="Insert password.."> -->
        </div>
        <button type="button" id="button" class="btn btn-primary">Primary</button>
      </form>

    </div>
</template>

<script>

import HotelDatePicker from 'vue-hotel-datepicker'

export default {
    components: {
        HotelDatePicker,
    },
}
</script>


<style>
.form-group{
  width: 25vw;
}
h1{
  color:white;
  font-size: 24px;
  font-weight: 300;
}


#button{
  background-color: #19459b;
  border-color: #19459b;
  height: 50px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  transition: all .2s ease-in-out;
}


#button:hover{
  background-color: #eec925;
  border-color: #eec925;
  color:black;
  height: 50px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
  transform: scale(1.1);
}



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
  width:25vw;
  border-radius: 0px;
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
  align-items: center;
  background-image: url('../assets/photoAssets/explanade-create2.jpg');
  background-size:cover;
  
}
</style>