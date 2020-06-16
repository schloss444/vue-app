<template>
  <div class="secure">
    <img alt="Vue logo" src="../assets/logo.png">
    <SecureWorld msg="Espace sécurisé ... by Luc"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SecureWorld from '@/components/SecureWorld.vue'

export default {
  name: 'Secure',
  components: {
    SecureWorld
  }
}
</script>
