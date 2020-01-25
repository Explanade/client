<template>
  <div class="form">
        <form style="display:flex;flex-direction:row; justify-content:space-between" action="">
                <div style="width:100%;">
                    <div class="input">
                      <h4>EMAIL</h4>
                      <input id="input" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter Destination">
                    </div>
                    <div class="input">
                      <h4>PASSWORD</h4>
                      <input id="input" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter Destination">
                    </div>
                    <button style="background-color:#19459b; border-radius:0px; margin-left:15px" type="button" class="btn btn-primary">Login</button>
                    <button style="background-color:#2b2b2b; border-radius:0px; margin-left:15px" type="button" class="btn btn-primary">Register</button>
                    <div style="margin-top:10px">
                    <p style="margin-left:20px;font-size:18px;font-style:italic;color:grey;margin-top:20px; margin-bottom:10px">Have an google account?</p>
                    <button style="background-color:#2b2b2b; border-radius:0px; margin-left:15px" type="button" class="btn btn-primary">Google-Signin
                    </button>
                    </div>
                </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

#avatar {
    background-image: url('http://i.stack.imgur.com/Dj7eP.jpg');
    width: 200px;
    height: 200px;
    background-size: cover;
    background-position: top center;
    border-radius: 50%;
}

#input{
  width:100%;
}

.input{
  margin: 20px;
}

.home{
  height: 100vh;
  display: flex;
  flex-direction: row;

}

.content{
  background-color: #19459b;
  width: 40vw;
  height: 100vh;
}



.content{
  background-color: #19459b;
  width: 40vw;
  height: 100vh;
}

.user-page{
  display: flex;
  align-items: center;
  background-image: url('../assets/photoAssets/explande-home.jpg');
  height: 100vh;
  width: 60vw;
  background-size: cover;
  justify-content: center;
}
.home{
  height: 100vh;
  display: flex;
  flex-direction: row;
}

p{
  font-weight: 100;
  font-size:24px;
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
  font-weight: 600;
  font-size:15px;
}


</style>