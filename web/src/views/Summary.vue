<template>
<div class="background">
  <div class="summaryContainer">
        <div class="profile">
            <div class="left">
                <img class="logoBrand" src="../assets/explanade-logo-1.png" alt="" style="height:100px;width:160px;margin-top:-50px;margin-left:-20px">
                <div class="name">
                    <h6 style="margin-bottom:0px; color:gray">Planner</h6>
                    <h1>Anya Geraldine</h1>
                </div>
            </div>
            <div class="right">
                <div class="name">
                    <p style="margin-bottom:0px; color:gray">Booking ID</p>
                    <h6>A1358013BASD5322</h6>
                    <hr align= "left" style="border: 0.5px solid #6D6D6D; width:100%;">
                </div>
                <div class="name">
                    <p style="margin-bottom:0px; color:gray">Booking Date</p>
                    <h6>Saturday, 16 Jan 2020</h6>
                    <hr align= "left" style="border: 0.5px solid #6D6D6D; width:100%;">
                </div>
                <div class="name">
                    <p style="margin-bottom:0px; color:gray">Date</p>
                    <h6>Anya Geraldine</h6>
                </div>
            </div>
        </div>
        <div class="destinations">
            <div class="maps"></div>
        </div>
        <div class="hotel">
            <div class="hotel-images"></div>
            <div class="hotel-details">
                <h6 style="margin-bottom:0px; color:gray">Hotel and Accomodations</h6>
                <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                <h1>Rimba Jimbara Bali</h1>
                <p style="margin-bottom:0px; color:gray"><strong>Total days : </strong> 3 days 2 nights </p>
            </div>
        </div>
        <div class="day">
            <h1>Day 1</h1>
            <div class="activities">
                <div class="activity">
                    <h6>1. Jungle retreat camping in Bali </h6>
                    <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                    <p>Jungle retreat camping in Bali </p>
                </div>
                <div class="activity">
                    <h6>2. Jungle retreat camping in Bali </h6>
                    <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                    <p>Jungle retreat camping in Bali </p>
                </div>
                <div class="activity">
                    <h6>3. Jungle retreat camping in Bali </h6>
                    <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                    <p>Jungle retreat camping in Bali </p>
                </div>
                <div class="activity">
                    <h6>4. Jungle retreat camping in Bali </h6>
                    <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                    <p>Jungle retreat camping in Bali </p>
                </div>
                
            </div>
        </div>
         <div class="day">
            <h1>Day 2</h1>
            <div class="activities">
                <div class="activity">
                    <h6>1. Jungle retreat camping in Bali </h6>
                    <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                    <p>Jungle retreat camping in Bali </p>
                </div>
                <div class="activity">
                    <h6>2. Jungle retreat camping in Bali </h6>
                    <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                    <p>Jungle retreat camping in Bali </p>
                </div>
                <div class="activity">
                    <h6>3. Jungle retreat camping in Bali </h6>
                    <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                    <p>Jungle retreat camping in Bali </p>
                </div>
                <div class="activity">
                    <h6>4. Jungle retreat camping in Bali </h6>
                    <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                    <p>Jungle retreat camping in Bali </p>
                </div>
                
            </div>
        </div>
         <div class="day">
            <h1>Day 3</h1>
            <div class="activities">
                <div class="activity">
                    <h6>1. Jungle retreat camping in Bali </h6>
                    <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                    <p>Jungle retreat camping in Bali </p>
                </div>
                <div class="activity">
                    <h6>2. Jungle retreat camping in Bali </h6>
                    <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                    <p>Jungle retreat camping in Bali </p>
                </div>
                <div class="activity">
                    <h6>3. Jungle retreat camping in Bali </h6>
                    <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                    <p>Jungle retreat camping in Bali </p>
                </div>
                <div class="activity">
                    <h6>4. Jungle retreat camping in Bali </h6>
                    <hr align= "left" style="border: 2px solid #6D6D6D; width:20%;">
                    <p>Jungle retreat camping in Bali </p>
                </div>
                
            </div>
        </div>
         <div class="terms-condition">
            <h6>Terms and Conditions</h6>
            <hr align= "left" style="border: 0.5px solid #6D6D6D; width:100%;">
            <p>Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.</p>
            <p>Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.</p>
            <hr align= "left" style="border: 0.5px solid #6D6D6D; width:100%;">
            <br>
            <button type="button" id="button" class="btn btn-info">Send Emails</button>
        </div>
  </div>
</div>
</template>

<script>

import ActiviesCard from '../components/ActiviesCard'
export default {
    components:{
        ActiviesCard
    }
}
</script>

<style scoped>

h6{
    font-size:18px;
}

p{
    font-size: 12px;
}

.terms-condition{
    display: flex;
    align-items: left;
    align-content: center;
    flex-direction: column;
    justify-content: space-around;
    background-color:rgb(255, 255, 255);
    box-shadow: 10px 10px 33px -23px rgba(0,0,0,0.75);
    border-radius: 20px;
    margin-left:50px;
    margin-right:50px;
    padding:50px;
}

.activity{
    margin:10px;
    max-width: 22%;
}

.activities{
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    margin-left:50px;
    
}

.day{
    display: flex;
    align-items: left;
    align-content: center;
    flex-direction: column;
    justify-content: space-around;
    background-color:rgb(255, 255, 255);
    box-shadow: 10px 10px 33px -23px rgba(0,0,0,0.75);
    border-radius: 20px;
    margin-left:50px;
    margin-right:50px;
    padding:50px;
    
}

.hotel-images{
    height: 100%;
    width: 30%;
    background-size: cover;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOvCBWRbKHES_t3qrxn2ZCXFVvnD5mfr-ZM_Lff-N55gVXiVFn')
}

.hotel{
    justify-content: space-around;
    align-items: center;
    height:30vh;
    background-color:rgb(255, 255, 255);
    box-shadow: 10px 10px 33px -23px rgba(0,0,0,0.75);
    border-radius: 20px;
    margin-left:50px;
    margin-right:50px;
    padding:50px;
    display: flex;
}

.right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:30%;
    align-items: left;
    align-content: left;
}
.left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.destinations{
    height:50vh;
    background-color:rgb(255, 255, 255);
    box-shadow: 10px 10px 33px -23px rgba(0,0,0,0.75);
    border-radius: 20px;
    margin-left:50px;
    margin-right:50px;
    margin-top:-50px
}

.background{
    background-color:rgb(3, 35, 34)
}
.profile{
    height:30vh;
    background-color:rgb(255, 255, 255);
    box-shadow: 10px 10px 33px -23px rgba(0,0,0,0.75);
    border-radius: 20px;
    margin:50px;
    padding:50px;
    display: flex;
    justify-content: space-between;
}
.maps{
    background-image: url('../assets/map-template.png');
    height:50vh;
    width:100%;
    background-size: cover;
    background-position: center;
    border-radius: 20px;

}
.days{
    height:50vh;
    width:100%;
    
}
.activities{
    width: 100vh;
    
}

.summaryContainer{
    display: flex;
    padding:7%;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    margin-left: 15%;
    margin-right: 15%;
    width:70%;
    height: auto;
    overflow-x: scroll;
    
}

</style>