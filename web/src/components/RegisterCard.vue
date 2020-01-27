<template>
  <div class="form">
   <form @submit.prevent="register()" style="display:flex;flex-direction:row; justify-content:space-between" action="">
      <div style="width:50%">
          <div class="input">
            <h4>FULL NAME</h4>
            <input v-model="fullname" id="input" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Destination">
          </div>
          <div class="input">
            <h4>EMAIL</h4>
            <input v-model="email" id="input" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter Destination">
          </div>
          <div class="input">
            <h4>PASSWORD</h4>
            <input v-model="password" id="input" type="password" class="form-control" aria-describedby="emailHelp" placeholder="Enter Destination">
          </div>
          <button style="background-color:#19459b; border-radius:0px; margin-left:15px" type="submit" class="btn btn-primary">Register</button>
          <button style="background-color:#2b2b2b; border-radius:0px; margin-left:15px" type="button" class="btn btn-primary" @click="loginPage()" >Back</button>
      </div>
      <div style="display:flex; justify-content:center;align-items:center">
        <button @click.prevent="$refs.file.click()" for="exampleFormControlFile1" id="addButton" type="file" class="btn btn-primary">+</button>
        <input type="file" ref="file" @change="processFile($event)" style="display: none">
      <div id="avatar"></div>
      </div>
    </form>          
  </div>
</template>

<script>
export default {
  data(){
    return{
      file : '',
      fullname: '',
      email: '',
      password: ''
    }
  },
  methods:{
    loginPage(){
      this.$emit('isLoginPage',true)
    },
    processFile(event) {
      this.file = event.target.files
    },
    register(){
      let formData = new FormData()

      formData.set('name', this.fullname)
      formData.set('email', this.email)
      formData.set('password', this.password)
      formData.append('file', this.file)

      this.$store.dispatch('register',formData)
    }
  }
}
</script>

<style>


#addButton {
    background-color:#ffda69;
    border-radius:100%;
    height: 80px;
    width: 80px;
    font-size: 50px;
    margin-left:15px;
    top:50px;
    left:50px;
    position: relative;
    padding-top:0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black
}
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