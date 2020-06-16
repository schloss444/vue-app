<template>

  <div class="login">
  
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginWorld msg="Se connecter"/>

<form>
<div class="form-example" id="main">
	<div class="form-example1">
    <label for="pseudo"> Pseudo: </label>
    <input type="text" v-model="pseudo" name="pseudo" id="pseudo" required>
  </div>
  <div class="form-example1">
    <label for="password"> Mot de Passe: </label>
    <input type="password" v-model="password" name="password" id="password" required>
  </div>
  <div class="form-example1">
    <input type="submit" @click="login()" value="Valider">
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
        pseudo: '',
        password: ''

      }

    },

    methods: {
      login() {
        if ((this.pseudo === 'admin') && (this.password === 'admin')) {
          console.log('connect ?');
          console.log(this.app)
          this.router.app.connect = 'connected';
          this.$router.push({'name': 'Secure'});
        } else {this.router.app.connect = '';}
        console.log('toujours connecté ?');
        console.log(this.router.app.connect);
      }
    }
}

</script>

<style>

  .form-example{
    margin-top: 40px;
    width: 50px;
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