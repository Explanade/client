<template>
  <div class="mainContainer">
    <div class="maps">
      <img class="maps-images" src="../assets/map-template.png" alt="">
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
                        <h3>Day 1</h3>
                    </div>
                     <div class="days">
                        <h3>Day 2</h3>
                    </div>
                     <div class="days">
                        <h3>Day 3</h3>
                    </div>
                </div>
                <div class="days-detail">

                    <div class="card mb-3" style="max-width: auto;">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBKsEDRAzp13nh2mKkIMMeQvxbuBNKbTvpxt0axtB1sOwKgakI" class="card-img" alt="...">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Destination Name</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div class="review">
                                    <star-rating    v-bind:increment="0.5"
                                                    v-bind:max-rating="5"
                                                    active-color="#ed8a19"
                                                    inactive-color="#737373"
                                                    v-bind:star-size="20"
                                                    v-bind:rating="3"
                                                    >
                                    </star-rating>
                                </div>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3" style="max-width: auto;">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBKsEDRAzp13nh2mKkIMMeQvxbuBNKbTvpxt0axtB1sOwKgakI" class="card-img" alt="...">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Destination Name</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div class="review">
                                    <star-rating    v-bind:increment="0.5"
                                                    v-bind:max-rating="5"
                                                    active-color="#ed8a19"
                                                    inactive-color="#737373"
                                                    v-bind:star-size="20"
                                                    v-bind:rating="3"
                                                    >
                                    </star-rating>
                                </div>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    </div>

  </div>
</template>

<script>

import StarRating from 'vue-star-rating'

export default {
    components :{
        StarRating
    },
    data() {
        return {
           
        }
    }
}
</script>

<style>

.days-detail{
    width: 40vw;
    margin-top:-4vh;
    background-color: rgb(239, 239, 239);
    padding:30px;
    padding-top:100px;
}

.days{
    background-color:#68C7BD;
    width: 120px;
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
    margin-left:50px;
   
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
    width: auto;
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

}

</style>