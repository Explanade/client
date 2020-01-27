<template>
    <div>
<<<<<<< HEAD
         <b-navbar class="header" toggleable="lg" type="light" variant="faded">
         <a @click="homePage()" href=""> <img class="logoBrand" src="../assets/explanade-logo-white.png" alt=""></a>
=======
         <b-navbar class="header" toggleable="lg" type="light" variant="faded" sticky>
         <a href="/"> <img class="logoBrand" src="../assets/explanade-logo-white.png" alt=""></a>
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
<<<<<<< HEAD
            <h5><a style="color:white;text-decoration: none;  color:white; font-weight: 100; margin:60px;" href="#" @click.prevent="plannerPage()">PLANNER </a></h5>
            <h5><a style="color:white;text-decoration: none;  color:white; font-weight: 100; margin:60px;" href="#" @click="itineraryPage()" >ITINERARIES </a></h5>
            <h5><a style="color:white;text-decoration: none;  color:white; font-weight: 100; margin:60px;" href="#">ABOUT US </a></h5>
            <h5><a style="color:white;text-decoration: none;  color:white; font-weight: 100; margin:60px;" v-if="this.$store.state.isLogin" href="#" @click="logout()" >LOGOUT </a></h5>
            <h5><a style="color:white;text-decoration: none;  color:white; font-weight: 100; margin:60px;" v-if="!this.$store.state.isLogin"  href="#" @click="userPage()" >LOGIN </a></h5>
=======
            <h5><a style="color:white;text-decoration: none;" href="#" @click="plannerPage()">PLANNER </a></h5>
            <h5><a style="color:white;text-decoration: none;" href="#" @click="itineraryPage()" >ITINERARIES </a></h5>
            <h5><a style="color:white;text-decoration: none;" href="#">ABOUT US </a></h5>
            <h5><a style="color:white;text-decoration: none;" href="#" @click="userPage()" >LOGOUT </a></h5>

>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    data(){
        return {
<<<<<<< HEAD
            isLogin : false
        }
    },
    methods : {
        homePage(){
            this.$router.push('/')
        },
=======
            
        }
    },
    methods : {
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
        plannerPage(){
            this.$router.push('/create')
        },
        itineraryPage(){
            this.$router.push('/itinerary')
        },
        userPage(){
            this.$router.push('/user')
<<<<<<< HEAD
        },
        logout(){
            this.$store.dispatch('logout',false)
        },
    },
=======
        }
    },

>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
}
</script>

<style scoped>
.header{
<<<<<<< HEAD
    /* padding: 0rem 1rem; */
=======
    padding: 0rem 1rem;
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff
    position: absolute;
    height: 100px;
    width: 100vw;
    padding-left:70px;
    padding-right:70px;
    z-index: 1;
}
.logoBrand{
    width:200px; 
<<<<<<< HEAD
    margin-left:20px; 
    margin-right:20px;
}

=======
    margin-left:2vw; 
    margin-right:20px;
}

h5{
    color:white;
    font-weight: 100;
    margin:60px;
}
>>>>>>> 3e84681e55adf96a3fd2ed3e6d52254382ffdaff

</style>