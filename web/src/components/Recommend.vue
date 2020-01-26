<template>
  <div class="listCategory" style="width:22vw;">
    <div class="form-group">
        <h2 style="color:black">Select Attractions</h2>
        <br>
        <select class="form-control" id="exampleFormControlSelect1" v-model="selectedCate">
        <option value="landmarks">Landmarks</option>
        <option value="restaurants">Restaurants</option>
        <option value="events">Events</option>
        </select>
    </div>
    <div class="options-images">
        <ActivityCard v-for="(place, i) in places" :key="i" :place="place"/>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
    </div>
</div>
</template>

<script>
import ActivityCard from '../components/ActiviesCard'
import serverAPI from '../apis/server'

export default {
    data(){
        return{
            recommendation : {},
            selectedCate : 'landmarks'
        }
    },
    components:{
        ActivityCard
    },
    computed:{
        places(){
            if(this.$store.state.restaurants && this.$store.state.landmarks){
                return this.$store.state[this.selectedCate]
            }
        }
    }
}
</script>

<style>

</style>