<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!$root.connect" to="/login">Login</router-link>
      <router-link v-if="$root.connect" to="/secure">MySpace</router-link> 
      <button v-if="$root.connect" id="btn_disconnect" @click="disconnect()">Deconnexion</button>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {

  methods: {
    disconnect: function () {
          this.$root.connect =  false,
          this.$router.push({'name': 'Home'});
    }

  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav button {
  font-weight: bold;
  color: green;
  margin-left: 20px;
}
</style>
