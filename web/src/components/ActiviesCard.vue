<template>
        <div class="card mb-3" style="max-width: auto;max-height:15vh;margin:10px"> 
            <div class="row no-gutters">
                <div class="col-md-4">
                    
                <div :style="`background-image: url('${place.photo}');height:15vh;width:7vw; background-size:cover`">
                </div>
                </div>
                <div class="col-md-8">
                <div class="card-body" style="display:flex;justify-content:center;align-self:center;flex-direction:column;padding:30px;">
                    <h6 style="margin-top:-10px; margin-bottom:10px" class="card-title">{{place.name}}</h6>
                    {{place.photo_reference}}
                    <p style="font-size:12px;" class="card-text">{{place.formatted_address}}</p>
                </div>
                </div>
            </div>
        </div>
</template>
<script>

import StarRating from 'vue-star-rating'
import key from '../config/key'

export default {
    StarRating,
    props: ['index', 'place'],
    components:{
        StarRating
    },
    data(){
        return{
            key : key
        }
    },
    props:['place']
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