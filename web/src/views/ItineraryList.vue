<template>
  <div class='itineraryList'>
      <div class="list">
          <div style="height:200px;width:99%;display:flex;justify-content:center;align-items:center">
            <div class="input">
                <h3>SEARCH FOR SOME PLACES</h3>
                <br>
                <input id="input" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter Itenerary Name">
            </div>
          </div>
          <div class="list2">
              <div class="idea">
              <div class="images" style="height:70%;width:100%; background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMi_GbJzOz7ycKAqETsro16E3Urw-xp6S0rvBn9ZBF3CmDWIbk'); background-size:cover"></div>
              <div class="captions" style="height:30%;max-width:100%;padding:15px;">
                  <div style="min-height:60px;margin-bottom:10px">
                        <h1 style="color:black; font-weight:600;margin-top:20px;">Awesome 1 Week Trip in Bali</h1>              
                </div>    
                <p style="color:black; font-size:15px;color:grey  "><i class="fas fa-feather-alt" style="margin-right:10px"></i>by Dwitama Alfred</p>
                <p style="color:black; font-size:15px; margin-top:-10px;color:grey "><i class="fas fa-location-arrow" style="margin-right:10px"></i>Bali</p>
              </div>
            </div>

            <div class="idea">
                <div class="images" style="height:70%;width:100%; background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9eKIRE27oUSKzAodD3qqtKboeLSLBRsnQ6sNLiOnKMa4HOKn5'); background-size:cover"></div>
                <div class="captions" style="height:30%;max-width:100%;padding:15px;">
                    <div style="min-height:60px;margin-bottom:10px">
                        <h1 style="color:black; font-weight:600;margin-top:20px;margin-top:20px;">3days 2night in Bali</h1>              
                    </div>
                    <p style="color:black; font-size:15px;color:grey  "><i class="fas fa-feather-alt" style="margin-right:10px"></i>by Dwitama Alfred</p>
                    <p style="color:black; font-size:15px; margin-top:-10px;color:grey "><i class="fas fa-location-arrow" style="margin-right:10px"></i>Bali</p>
                </div>
            </div>

            <div class="idea">
                <div class="images" style="height:70%;width:100%; background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwY_4fOndGpRSuxe_1MxYjFsDPc0gYLWtAc4ghT0AMrPglY2yu'); background-size:cover"></div>
                <div class="captions" style="height:30%;max-width:100%;padding:15px;">
                    <div style="min-height:60px;margin-bottom:10px">
                        <h1 style="color:black; font-weight:600;margin-top:20px;margin-top:20px;">Unforgetable Moments Company Trips</h1>              
                    </div>            
                    <p style="color:black; font-size:15px; color:grey "><i class="fas fa-feather-alt" style="margin-right:10px"></i>by Dwitama Alfred</p>
                    <p style="color:black; font-size:15px; margin-top:-10px; color:grey "><i class="fas fa-location-arrow" style="margin-right:10px"></i>Bali</p>
                </div>
            </div>

              <div class="idea">
                <div class="images" style="height:70%;width:100%; background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMi_GbJzOz7ycKAqETsro16E3Urw-xp6S0rvBn9ZBF3CmDWIbk'); background-size:cover"></div>
                <div class="captions" style="height:30%;max-width:100%;padding:15px;">
                  <div style="min-height:60px;margin-bottom:10px">
                        <h1 style="color:black; font-weight:600;margin-top:20px;margin-top:20px;">3days 2night in Bali</h1>              
                    </div>              
                <p style="color:black; font-size:15px;color:grey  "><i class="fas fa-feather-alt" style="margin-right:10px"></i>by Dwitama Alfred</p>
                <p style="color:black; font-size:15px; margin-top:-10px;color:grey "><i class="fas fa-location-arrow" style="margin-right:10px"></i>Bali</p>
                </div>
            </div>

          </div>
                    
            
        </div>
    </div>   
</template>

<script>
export default {

}
</script>

<style>

.list::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.3);
	background-color: #F5F5F5;
}

.list::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

.list::-webkit-scrollbar-thumb
{
	background-color: #cecece;
}

.images{
  height:70%;
  width:100%;
  transition: all .2s ease-in-out;
}

.images:hover {
  opacity: 1;
  box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.22);
  transform: scale(1.05);
}


.input{
  padding: 30px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color:white;
}


.idea{
  margin:50px;
  height: 45vh;
  width: 15vw;
}

.ideas{
  height: 120vh;
  
}

.list2{
    height: 20vh;
    background-color: white;
    position:absolute;
    top:20vh;
    display: flex;
    flex-wrap: wrap;
}

.list{
    height: 80vh;
    width: 70vw;
    background-color: white;
    position:absolute;
    margin-left:15%;
    top:30vh;
    display: flex;
    flex-wrap: wrap;
    padding-left:100px;
    overflow-x: auto;
}
.itineraryList{
    height: 150vh;
    width: 100vw;
    background-image: url('../assets/photoAssets/explanade-list.jpg');
    background-size:cover;
}


p{
  font-weight: 100;
  font-size:12px;
}

h5{
  font-size: 20px;
  font-weight: 200;
  margin-bottom: -0px;
  letter-spacing:0.2ch;

}

h2{
  color: white;
  font-size: 55px;
  font-weight: 300;
  margin-bottom: -0px;
}

h1{
  color:white;
  font-size: 24px;
  font-weight: 300;
}

h4{
  font-weight: 300;
  font-size:24px;
}

</style>