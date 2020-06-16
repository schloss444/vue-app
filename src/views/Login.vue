<template>

  <div class="login">
  
    <img alt="Vue logo" src="../assets/logo.png">
    <loginWorld msg="Se connecter"/>

<form>
<div class="form-example" id="main">
	<div class="form-example1">
    <label for="name"> Pseudo: </label>
    <input type="text" v-model="name" name="name" id="name" required>
  </div>
  <div class="form-example1">
    <label for="password"> Mot de Passe: </label>
    <input type="password" v-model="password" name="password" id="password" required>
  </div>
  <div class="form-example1">
    <input type="submit" value="Valider">
  </div>
</div>  
</form>
    
  </div>
</template>

<script>

  // @ is an alias to /src
  import LoginWorld from '@/components/LoginWorld.vue'

  export default {
    name: 'Login',
    components: {
      LoginWorld
    },
   
    data () {
      return {
      }
    }
}

</script>

<style>

  .form-example{
    margin-top: 40px;
    widht: 50px;
    border: 3px solid #5fac64;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    border-radius: 5px;
  }

  .form-example1{
    margin-top:10px
  }
  
</style>