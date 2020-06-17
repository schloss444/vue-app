<template>
  <div class="secure">
    <img alt="Vue logo" src="../assets/luc.jpg" style="width: 250px">
    <SecureWorld msg="Espace sécurisé ... by Luc"/>
    <boutonExtra :param="param" @extraBtn="clic(param, $event)" @extraMouseOver="hover(param, $event)"/>
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
  },
  data () {
    return {
      param: {
        titre: "confirmer",
        couleur: "yellow"
      }
    }
  },
  methods: {
    clic(param, autre) {
        alert('Clic ' + param.couleur + ' ' + param.titre);
        param.couleur = autre
    },
    hover(param, autre) {
      param.couleur = autre
    },
  }

}
</script>
