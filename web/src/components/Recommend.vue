<template>
  <div class="listCategory" style="width:22vw;">
    <div class="form-group-itin">
        <h2 style="color:black">Select Attractions</h2>
        <br>
        <select class="form-control" id="exampleFormControlSelect1" v-model="selectedCate">
        <option value="landmarks">Landmarks</option>
        <option value="restaurants">Restaurants</option>
        <option value="events">Events</option>
        </select>
    </div>
    <div class="options-images">
        <span v-if="restaurants.length == 0 || landmarks.length == 0">-loading-</span>
        <draggable v-model="places" :list="places" group="activities">
            <ActivityCard v-for="(place, i) in places" :key="i" :place="place"/>
        </draggable>
    </div>
</div>
</template>

<script>
import ActivityCard from '../components/ActiviesCard'
import serverAPI from '../apis/server'
import draggable from 'vuedraggable';

export default {
    props: ['restaurants', 'landmarks', 'events'],
    data(){
        return{
            recommendation : {},
            selectedCate : 'landmarks'
        }
    },
    components:{
        ActivityCard,
        draggable
    },
    computed:{
        places(){
            this.selectedCate
            return this.selectedCate == 'landmarks' ? this.landmarks 
                : this.selectedCate == 'restaurants' ? this.restaurants : this.events;
        }
    }
}
</script>

<style>

</style>