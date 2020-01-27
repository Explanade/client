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
<<<<<<< HEAD
        <draggable v-model="places" :list="places">
=======
        <draggable v-model="places" :list="places" group="activities">
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
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
<<<<<<< HEAD
=======
    props: ['restaurants', 'landmarks'],
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
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
<<<<<<< HEAD
            if(this.$store.state.restaurants && this.$store.state.landmarks){
                return this.$store.state[this.selectedCate]
            }
=======
            return this.selectedCate == 'landmarks' ? this.landmarks : this.restaurants;
            // if(this.$store.state.restaurants && this.$store.state.landmarks){
            //     return this.$store.state[this.selectedCate]
            // }
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
        }
    }
}
</script>

<style>

</style>