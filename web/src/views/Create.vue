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
                <h1 class ="description"><span class="step">2</span> Looks for available Itineraries </h1>
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
                <h1 class ="description"><span class="step">1</span>Tell us your plan</h1>
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
                <h1 class ="description"><span class="step">3</span> Not interested? Create your own! </h1>
                <router-link to="/create/form">
                    <button type="button" id="button" class="btn btn-info">Create Yours!</button>
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#button{
font-size: 25px;
padding: 15px;
box-shadow: 6px 6px 0px -1px rgba(0,0,0,0.19);
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
    background-color:#007D62;
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
    background-color:transparent;
}



.textContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: auto;
    background-color:#007D62;
    
}
</style>