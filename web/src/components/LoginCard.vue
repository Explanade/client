<template>
  <div class="formLogin" style="justify-contentCenter">
        <form style="display:flex;flex-direction:row;" action="">
                <div style="width:100%;">
                    <div class="inputLogin">
                      <h4>EMAIL</h4>
                      <input v-model="email" id="input" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter Email" required>
                    </div>
                    <div class="inputLogin">
                      <h4>PASSWORD</h4>
                      <input v-model="password" id="input" type="password" class="form-control" aria-describedby="emailHelp" placeholder="Enter Password" required>
                    </div>
                    <button style="background-color:#19459b; border-radius:0px; margin-left:15px" type="button" class="btn btn-primary" @click.prevent="login()" >Login</button>
                    <button style="background-color:#2b2b2b; border-radius:0px; margin-left:15px" type="button" class="btn btn-primary" v-on:click.prevent="register()" >Register</button>
                    <div style="margin-top:10px">
                      <p style="margin-left:20px;font-size:18px;font-style:italic;color:grey;margin-top:20px; margin-bottom:10px">Have an google account?</p>

                     <!-- -------------------- -->
                    
                      <GoogleLogin style="margin-left:10px" :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                     <!-- -------------------- -->
                  
                    </div>
                </div>
        </form>
    </div>
</template>

<script>

import Swal from 'sweetalert2'
import GoogleLogin from 'vue-google-login';
import serverAPI from '../apis/server';

export default {
  data(){
    return{
      email : '',
      password : '',
      params: {
        client_id:'685004490772-vbs12jca3p2uaqfnhh7kt53avms3sch3.apps.googleusercontent.com'
      },
      renderParams: {
        width: 200,
        height: 40,
        longtitle: true,
  
      }
    }
  },
  components :{
    GoogleLogin
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
    },
    onSuccess(googleUser) {
            var id_token = googleUser.getAuthResponse().id_token;
            serverAPI({
                method : 'post',
                url : 'user/googleLogin',
                data : {
                    token : id_token
                }
            })
            .then(({data})=>{
                Swal.fire(
                    `Hello ${data.user.name}!`,
                    'Now you are signed in',
                    'success'
                )
                localStorage.setItem('token',data.token)
                this.email = ''
                this.password = ''
                this.$store.commit('SET_ISLOGIN',true)
                this.$router.push('/')
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong email/password', 
                })

                console.log(err)
            })
    }
  }
}
</script>

<style>

#input{
  width:100%;
}

.formLogin{
  display: flex;
  flex-direction: column;
  background-color:white;
  position: absolute;
  left:7vw;
  width:40vw;
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