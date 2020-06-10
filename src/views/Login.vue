<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="ESPACE SECURISE by Luc ........ Vue.js"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginWorld from '@/components/LoginWorld.vue'

export default {
  name: 'Login',
  components: {
    LoginWorld
  }
}
</script>