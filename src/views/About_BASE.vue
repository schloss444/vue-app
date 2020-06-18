<template>
  <div class="about">
    <h1>About Luc ... </h1>
    <boutonExtra :param="param" @extraBtn="clic(param, 'pink')" @extraMouseOver="hover(param, 'lightgreen')"/>
    <flickity ref="flickity" :options="flickityOptions">
        <div class="carousel-cell">1</div>
        <div class="carousel-cell">2</div>
        <div class="carousel-cell">3</div>
        <div class="carousel-cell">4</div>
        <div class="carousel-cell">5</div>
      </flickity>
      <!-- if you don't want to use the buttons Flickity provides -->
      <button @click="previous()">Custom Previous Button</button>
      <button @click="next()">Custom Next Button</button>
  </div>
</template>

<script>
// @ is an alias to /src
import boutonExtra from '@/components/boutonExtra.vue'
import flickity from '@/components/flickity.vue';

export default {
  name: 'About',
  components: {
    boutonExtra,
    flickity
  },
  data () {
    return {
      param: {
        titre: "en savoir plus",
        couleur: "orange"
      },
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
        
        // any options from Flickity can be used
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
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }

}
</script>
