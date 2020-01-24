<template>
    <div class="card mb-3" style="max-width: auto;max-height:20vh"> 
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
                                    v-bind:star-size="50"
                                    v-bind:rating="3"
                                    style="heigth:100px, background-color:yellow"
                                    >
                    </star-rating>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>

import StarRating from 'vue-star-rating'

export default {
    StarRating
}
</script>

<style scoped>

.review{
    margin-top:-10px;
}

span.step {
  background:#007D62;
  color: rgb(255, 255, 255);
  display: inline-block;
  font-weight: bold;
  line-height: 2em;
  margin-right: 12px;
  text-align: center;
  width: 2em; 
  height: 2em; 
}

</style>