<template>
  <div class="about">
    <h1>About Luc ... </h1>
    <boutonExtra :param="param" @extraBtn="clic(param, 'pink')" @extraMouseOver="hover(param, 'lightgreen')"/>
  </div>
</template>

<script>
// @ is an alias to /src
import boutonExtra from '@/components/boutonExtra.vue'

export default {
  name: 'About',
  components: {
    boutonExtra
  },
  data () {
    return {
      param: {
        titre: "en savoir plus",
        couleur: "orange"
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
