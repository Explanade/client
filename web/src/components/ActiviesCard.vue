<template>
        <div class="card mb-3" style="max-width: auto;max-height:15vh;margin:10px"> 
            <div class="row no-gutters">
                <div class="col-md-4">
                <div style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBKsEDRAzp13nh2mKkIMMeQvxbuBNKbTvpxt0axtB1sOwKgakI');height:15vh;width:7vw; background-size:cover">
                </div>
                </div>
                <div class="col-md-8">
                <div class="card-body" style="display:flex;justify-content:center;align-self:center;flex-direction:column;padding:30px;">
                    <h6 style="margin-top:-10px; margin-bottom:10px" class="card-title">Destination Name</h6>
                    <p style="font-size:12px;" class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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