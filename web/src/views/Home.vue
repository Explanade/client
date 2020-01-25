<template>
  <div class="home">
    <div class="flying-leaf"></div>
      <div class="header">
        <div class="header-content">
          <h1 class ="title">Create Your</h1>
          <h1 class ="title">Awesome Trip</h1>
          <button type="button" id="button" class="btn btn-info">Let's do it</button>
        </div>
      </div>

      <div class="itineraryCards">
        <ItineraryHome/>
        <ItineraryHome/>
        <ItineraryHome/>
        <ItineraryHome/>
      </div>

      <div class="brief">
        <div>
          <img class="icon" src="../assets/icon2.png" alt="">
          
          <h1 class ="icon-text"><span class="step">1</span>Planner Tools</h1>
        </div>

        <div>
          <img class="icon" src="../assets/icon1.png" alt="">
          <h1 class ="icon-text"><span class="step">2</span>Easy To Share</h1>
        </div>
       
        <div>
          <img class="icon" src="../assets/icon3.png" alt="">
          <h1 class ="icon-text"><span class="step">3</span>Itenarary Library</h1>
        </div>
      </div>

       <div class="testimonial">
          <div>
            <b-img src="https://picsum.photos/125/125/?image=58" rounded="circle" alt="Circle image" style="margin-bottom:30px"></b-img>
            <p>In promotion and of advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. 
              The term "testimonial" most commonly applies to the sales-pitches attributed to ordinary citizens, 
              whereas the word "endorsement" usually applies to pitches by celebrities.
            </p>
            <h3>Hendrikus Sirait</h3>
            <p style="font-style:italic">@hecrikus</p>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ItineraryHome from '../components/IteneraryHome'

export default {
  name: 'home',
  components: {
    ItineraryHome
  }
}
</script>

<style scoped>

.flying-leaf{
  background-image: url('../assets/home-leaf.png');
  height: 100vh;
  top:100px;
  position: absolute;
  z-index: 1;
}

span.step {
  background:  #68C7BD;
  border-radius: 2em;
  -moz-border-radius: 2em;
  -webkit-border-radius: 2em;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 2em;
  margin-right: 12px;
  text-align: center;
  width: 2em; 
}

.icon{
  height: 250px;
}

.icon-text{
  font-size: 25px;
  text-align: center;
}

.brief{
  justify-content: space-around;
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 20vh;
  display: flex;
}

ItineraryHome{
  margin:100px;
}

h1{
  font-size: 60px;
}

.brief{
  height: 70vh;
  background-color: rgb(252, 252, 252);
  box-shadow: 0px 11px 31px -15px rgba(0,0,0,0.36);
}

.testimonial{
  height: 50vh;
  display: flex;
  background-color:  #68C7BD;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 35vw;
  padding-right: 35vw;
}

.itineraryCards{
  display: flex;
  padding:4%;
  margin-top: -40vh;
  margin-left:15vw;
  margin-right:15vw;
  margin-bottom: -10vh;
  position: relative;
  background-color: white;
  width:70vw;
  align-self: center;
  flex-wrap: wrap;
  justify-content:space-around;
  box-shadow: 10px 10px 23px -12px rgba(0,0,0,0.39);
}

.header{
  height: 120vh;
  align-items: center;
  background-color: black;
  background-image: url('../assets/home-hero.jpg');
  background-size:cover
}

.header-content{
  display: flex;
  flex-direction: column;
  padding-top:30vh;
  padding-left:65vw;
}

.title{
  color: white;
}
.subtitle{
  color: gray;
}

#button{  
  width:120px;
  padding:10px;
  margin-top:20px;
}

.btn-info {
    color: #fff;
    background-color:#007D62;
    border-color: #68C7BD;
}

</style>
