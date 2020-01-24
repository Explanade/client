<template>
  <div class="mainContainer">
    <div class="maps" style="background-images:url('')">
      
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
                <div class="options-images">
                    <div id='highlight-options' style="background-image: url('https://picsum.photos/125/125/?image=58')"></div>
                    <div id='highlight-options' style="background-image: url('https://picsum.photos/125/125/?image=58')"></div>
                    <div id='highlight-options' style="background-image: url('https://picsum.photos/125/125/?image=58')"></div>
                    <div id='highlight-options' style="background-image: url('https://picsum.photos/125/125/?image=58')"></div>
                    <div id='highlight-options' style="background-image: url('https://picsum.photos/125/125/?image=58')"></div>
                    <div id='highlight-options' style="background-image: url('https://picsum.photos/125/125/?image=58')"></div>
                    <div id='highlight-options' style="background-image: url('https://picsum.photos/125/125/?image=58')"></div>
                    <div id='highlight-options' style="background-image: url('https://picsum.photos/125/125/?image=58')"></div>
                </div>
                
                <div class="day-list">
                    <div class="days">
                        <h5>Day 1</h5>
                    </div>
                     <div class="days">
                        <h5>Day 2</h5>
                    </div>
                     <div class="days">
                        <h5>Day 3</h5>
                    </div>
                </div>
                <div class="days-detail">
                    <button type="submit" class="btn btn-primary" id="button-sort">
                        <i class="fas fa-sort-amount-down" style="font-size:20px;margin-right:10px"></i> Sort by distance
                    </button>                  
                    <div class="list">
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                    </div>
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
                </div>
                <button type="button" id="button" class="btn btn-info">Create</button>
                <button type="button" id="button" style="background:gray" class="btn btn-info">Back</button>
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

.options-images{
    flex-direction: row;
    display: flex;
    max-width: 40vw;
    width: 800px;
    overflow-x: scroll;
    margin-top:50px;

}

.maps{
    height: 100vh;
    width: 50vw;
    background-image: url('../assets/map-template.png');
    background-size: cover;

}

</style>