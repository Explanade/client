<template>
  <div class="formLogin">
        <form style="display:flex;flex-direction:row; justify-content:space-between" action="">
                <div style="width:100%;">
                    <div class="inputLogin">
                      <h4>EMAIL</h4>
                      <input v-model="email" id="input" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter Destination" required>
                    </div>
                    <div class="inputLogin">
                      <h4>PASSWORD</h4>
                      <input v-model="password" id="input" type="password" class="form-control" aria-describedby="emailHelp" placeholder="Enter Destination" required>
                    </div>
                    <button style="background-color:#19459b; border-radius:0px; margin-left:15px" type="button" class="btn btn-primary" @click.prevent="login()" >Login</button>
                    <button style="background-color:#2b2b2b; border-radius:0px; margin-left:15px" type="button" class="btn btn-primary" v-on:click.prevent="register()" >Register</button>
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
  data(){
    return{
      email : '',
      password : ''
    }
  },
  methods : {
    register(){
      this.$emit('isLoginPage',false)
    },
    login(){
      let payload = {
        email : this.email,
        password : this.password
      }
      this.$store.dispatch('login',payload)
    }

 }
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

.formLogin{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:white;
  position: absolute;
  left:7vw;
  width:40vw;
  height: 50vh;
  padding:50px;
}


.inputLogin{
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