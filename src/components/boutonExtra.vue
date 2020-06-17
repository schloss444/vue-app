<template>
  <div class="btn-primary">
    <h1>message en dur du composant bouton Extra</h1>
    
    <button> {{ msg }} </button>

    
  </div>
</template>

<script>
export default {
  name: 'boutonExtra',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: 1em;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
