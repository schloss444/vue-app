<template>
  <div class="secure">
    <img alt="Vue logo" src="../assets/luc.jpg" style="width: 250px">
    <SecureWorld msg="Espace sécurisé ... by Luc"/>
    <boutonExtra msg="bouton Extra SECURE"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SecureWorld from '@/components/SecureWorld.vue'
import boutonExtra from '@/components/boutonExtra.vue'

export default {
  name: 'Secure',
  components: {
    SecureWorld,
    boutonExtra
  }
}
</script>
