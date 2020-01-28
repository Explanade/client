<template>
<div class="wrapper">
  <div id="scene" class="container">
    <div data-depth="0" id="background" class="item"></div>
    <div data-depth="0.1" id="mountain" class="item"></div>
    <div data-depth="0.2" id="mountain2" class="item"></div>
    <div data-depth="0.3" id="girl" class="item"></div>
  </div>
</div>


</template>

<script>
export default {
  mounted : function (){
    if(document.getElementById('scene')){
      var scene = document.getElementById('scene');
      var parallaxInstance = new Parallax(scene);
      parallaxInstance.limit(true, true);
      }
  } 

}
</script>

<style scoped>

#girl {
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-size: 100%;
  margin:80px;
  background-repeat: no-repeat;
  background-position:bottom;
  background-position-x: 40vw;
  background-position-y: 30vw;
  background-image: url('../assets/parallaxAssets/explande-home-4.jpg');
  z-index: 0;
}

#mountain2 {
  height: 100vh;
  width: 100vw;
  z-index: 1;
  margin:50px;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position:bottom;
  background-position-x:35vw;
  background-position-y: 35vw;
  background-image: url('../assets/parallaxAssets/explande-home-3.jpg');
  z-index: 0;
}

#mountain {
  height: 100vh;
  width: 100vw;
  z-index: 1;
  margin-left:30px;
  margin-bottom:100px;
  background-size: cover;
  background-position:bottom;
  background-position-x: 100px;
  background-position-y: 0px;
  background-image: url('../assets/parallaxAssets/explande-home-2.jpg');
  z-index: 0;
}

#background {
  height: 50vh;
  width: 100vw;
  z-index: 0;
  background-size: cover;
  background-position:top;
  background-image: url('../assets/parallaxAssets/explande-home-1.jpg')
}

.container {
  position: relative;
  max-width:100vw;
  height: 100vh;
  background-color:#B6B5B3;
  border:1px solid red;
  display:inline-block;
  clip-path: inset(0% 0% 0% 0%);
  overflow: hidden;
}

.item {
  position: absolute;
  /* transform: translate(-50%, -50%); */
}



</style>