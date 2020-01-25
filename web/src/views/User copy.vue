<template>
  <div class="user-page">
    
      <form class="login-form">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="input" aria-describedby="emailHelp" placeholder="insert email..">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="input" placeholder="insert password..">
        </div>
        <div>
          <button type="button" id="button" class="btn btn-info">Login</button>
          <button type="button" id="button" class="btn btn-info">Register</button>
        </div>
      </form>

    </div>
</template>

<script>
export default {

}
</script>

<style>

.btn-info {
  color: #fff;
  background-color:transparent;
  border:3px solid #fff;
  border-radius: 40px;
  margin:20px;
  height: 50px;
  width: 150px;
}

#input{
  border-radius: 50px;
  height: 50px;
  border: 3px solid white;
  background-color: transparent;
  padding: 30px;
  font-size: 22px;
  width:20vw;
}

.login-form{
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  color: white
}
.user-page{
  height: 100vh;
  background-color: #68C7BD;
  display: flex;
  justify-content: center;
  align-items: center
}
</style>