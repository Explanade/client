<template>
    <div class="containerCreate" style="z-index:-3">
        <div class="white-line">
            <img style="height:251vh" src="../assets/white-line-with-plane.png" alt="">
        </div>
         <div class="animation">
            <div class="section-1">
                <img class="icon" src="../assets/icon1.png" style="z-index:0" alt="">
            </div>
            <div class="section-1" style="z-index:1">
                <h1 class ="description"> LOOK FOR AVAILABLE ITINERARIES </h1>
                  <p>
                    We have no difficulty in locating information. The key is that the information is selected and structured appropriately. 
                    With Rationale’s grouping maps you can drag information from the web onto your workspace via the scratchpad and include colour,
                    hyperlinks and images.
                </p>
                
            </div>
            <div class="section-1" style="z-index:0">
                <img class="icon" src="../assets/icon3.png" alt="">
            </div>
        </div>
         <div class="textContent">
            <div class="section-1" style="z-index:1">
                <h1 class ="description">TELL US YOUR PLAN</h1>
                <p>
                    We have no difficulty in locating information. The key is that the information is selected and structured appropriately. 
                    With Rationale’s grouping maps you can drag information from the web onto your workspace via the scratchpad and include colour,
                    hyperlinks and images.
                </p>
            </div>
            <div class="section-1">
               <img class="icon" src="../assets/icon2.png" alt="">
            </div>
            <div class="section-1" style="z-index:1">
                <h1 class ="description"> YOU CAN ALSO CREATED YOUR OWN AND SHARE YOUR ITINERARY!</h1>
                <button type="button" id="button" class="btn btn-info" @click="goToForm">Create Yours!</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    methods: {
        goToForm(){
            this.$router.push('/create/form')
        }
    }
}
</script>

<style scoped>

#button{
font-size: 25px;
background-color: #19459b;
border-color: #19459b;
padding: 15px;
border-radius:0px;
transition: all .2s ease-in-out;
}

#button:hover{
font-size: 25px;
background-color: #eec925;
border-color: #eec925;
color:black;
padding: 15px;
border-radius:0px;
box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
transform: scale(1.1);
}

.white-line{
  position: absolute;
  display: flex;
  justify-content: center;
  margin-left: 15vw;
  z-index:0;
}

h1{
    color:white;
    margin-bottom: 50px;
    font-weight: 200;
}

p{
    text-align: center;
    color:white
}

.description{
  font-size: 35px;
  text-align: center;
}

.animation{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    align-items: center;
    height: auto;
    
}

.section-1{
    height: 70vh;
    width: 25vw;
    margin-top:100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.containerCreate{
    display: flex;
    flex-direction: row;
    height: auto;
    background-color:black;
    background-image: url('../assets/photoAssets/explanade-create.jpg')
}



.textContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: auto;

    
}
</style>