<template>
  <div class="btn-primary">
    <h6 style="color: lightblue">composant bouton Extra</h6>
    
    <button :style="{'background-color': param.couleur}" @click="$emit('extraBtn', 'red')" v-on:mouseover="$emit('extraMouseOver', 'lightgray')" > {{ param.titre }} </button>

    
  </div>
</template>

<script>
export default {
  name: 'boutonExtra',
  props: {
    msg: String,
    param: Object
  },
  watch: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    extra: function () {
      // utilisée ?
    }
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
