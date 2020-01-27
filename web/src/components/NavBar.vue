<template>
    <div>
         <b-navbar class="header" toggleable="lg" type="light" variant="faded" sticky>
         <a href="/"> <img class="logoBrand" src="../assets/explanade-logo-white.png" alt=""></a>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
            <h5><a style="color:white;text-decoration: none;" href="#" @click="plannerPage()">PLANNER </a></h5>
            <h5><a style="color:white;text-decoration: none;" href="#" @click="itineraryPage()" >ITINERARIES </a></h5>
            <h5><a style="color:white;text-decoration: none;" href="#">ABOUT US </a></h5>
            <h5><a style="color:white;text-decoration: none;" href="#" @click="userPage()" >LOGOUT </a></h5>

            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods : {
        plannerPage(){
            this.$router.push('/create')
        },
        itineraryPage(){
            this.$router.push('/itinerary')
        },
        userPage(){
            this.$router.push('/user')
        }
    },

}
</script>

<style scoped>
.header{
    padding: 0rem 1rem;
    position: absolute;
    height: 100px;
    width: 100vw;
    padding-left:70px;
    padding-right:70px;
}
.logoBrand{
    width:200px; 
    margin-left:2vw; 
    margin-right:20px;
}

h5{
    color:white;
    font-weight: 100;
    margin:60px;
}

</style>