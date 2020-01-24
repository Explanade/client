<template>
  <div class="user-page">
    
      <form class="create-form">
        <div class="form-group">
          <label for="exampleInputEmail1">Destination</label>
          <input type="email" class="form-control" id="input" aria-describedby="emailHelp" placeholder="Insert city..">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Pick dates</label>
          <HotelDatePicker/>
          <!-- <input type="password" class="form-control" id="input" placeholder="Insert password.."> -->
        </div>
        <div>
          <button type="button" id="button" class="btn btn-info">Submit</button>
        </div>
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