<template>
  <div class="home">
     <div class="content"></div>
      <div class="user-page">
        <LoginForm v-if="this.isLoginPage === true" @isLoginPage='changeLogin' />
        <RegisterForm v-else @isLoginPage='changeLogin' />
      </div>
  </div>
</template>

<script>

import LoginForm from '../components/LoginCard'
import RegisterForm from '../components/RegisterCard'

export default {
  name:'user',
  components:{
    LoginForm,
    RegisterForm
  },
  data(){
    return{
      isLoginPage : true
    }
  },
  methods : {
    changeLogin(value){
      this.isLoginPage = value
    }
  }
}
</script>

<style>

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
  display: flex;
  justify-content: center;
  align-items: center;
}


.form{
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

.content{
  background-color: #19459b;
  width: 40vw;
  height: 100vh;
}

.user-page{
  display: flex;
  align-items: center;
  background-image: url('../assets/photoAssets/explanade-login.jpg');
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
  font-size:12px;
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