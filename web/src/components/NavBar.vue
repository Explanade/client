<template>
    <div>
         <b-navbar class="header" toggleable="lg" type="light" variant="faded">
         <a @click="homePage()" href="#"> <img class="logoBrand" src="../assets/explanade-logo-white.png" alt=""></a>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse"  is-nav>
            <b-navbar-nav class="ml-auto" id="navigation">
            <h5><a style="color:white;text-decoration: none;  color:white; font-weight: 100; margin:60px;" href="#" @click.prevent="plannerPage()">PLANNER </a></h5>
            <h5><a style="color:white;text-decoration: none;  color:white; font-weight: 100; margin:60px;" href="#" @click="itineraryPage()" >ITINERARIES </a></h5>
            <h5><a style="color:white;text-decoration: none;  color:white; font-weight: 100; margin:60px;" href="#" @click="aboutPage()">ABOUT US </a></h5>
            <GoogleLogin :params="params" :logoutButton=true ref="logoutGoogle" style="background-color:transparent; border-color:transparent">
                <h5><a style="color:white;text-decoration: none;  color:white; font-weight: 100; margin:60px;" v-if="this.$store.state.isLogin" href="#" @click="logout()" >LOGOUT </a></h5>
            </GoogleLogin>
            <h5><a style="color:white;text-decoration: none;  color:white; font-weight: 100; margin:60px;" v-if="!this.$store.state.isLogin"  href="#" @click="userPage()" >LOGIN </a></h5>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

import GoogleLogin from 'vue-google-login';

export default {
    data(){
        return {
            isLogin : false,
            params: {
                client_id:'685004490772-vbs12jca3p2uaqfnhh7kt53avms3sch3.apps.googleusercontent.com'
            },
            renderParams: {
                width: 200,
                height: 20,
                longtitle: true
            }
        }
    },
    components :{
        GoogleLogin
    },
    methods : {
        homePage(){
            this.$router.push('/')
        },
        plannerPage(){
            this.$router.push('/create/form')
        },
        itineraryPage(){
            this.$router.push('/itinerary')
        },
        userPage(){
            this.$router.push('/user')
        },
        logout(){
            this.$store.dispatch('logout',false)
            this.$refs.logoutGoogle.click()
        },
        aboutPage(){
            this.$router.push('/create')
        }
        
    },
}
</script>

<style scoped>
.header{
    /* padding: 0rem 1rem; */
    position: absolute;
    height: 100px;
    width: 100vw;
    padding-left:70px;
    padding-right:70px;
    z-index: 1;
}
.logoBrand{
    width:200px; 
    margin-left:20px; 
    margin-right:20px;
}


</style>