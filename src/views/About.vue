<template>
  <div class="about">
    <h1>About Luc ... </h1>
    <boutonExtra :param="param" @extraBtn="clic(param, 'pink')" @extraMouseOver="hover(param, 'lightgreen')"/>

    <!-- plug in et composant Flickity-->
    <flickity ref="flickity" :options="flickityOptions">
        <div  v-for="(picture,idx) in pictures" :key="idx">
          <div class="carousel-cell"> 
            <p>{{idx}}</p>
            <img v-if="picture.type == 'img'" v-bind:src = "picture.url" v-bind:alt = "picture.alt" style = "width: 100 px; height: auto">
            <audio v-if="picture.type == 'audio'" v-bind:src = "picture.url" v-bind:alt = "picture.alt"></audio>
            <video v-if="picture.type == 'video'" v-bind:src = "picture.url" v-bind:alt = "picture.alt"></video>
          </div>
        </div>
        <!-- <div class="carousel-cell">2</div>
        <div class="carousel-cell">3</div>
        <div class="carousel-cell">4</div>
        <div class="carousel-cell">5</div> -->
      </flickity>
      <!-- if you don't want to use the buttons Flickity provides -->
      <button @click="previous()">Previous Button</button>
      <button @click="next()">Next Button</button>
  </div>
</template>

<script>
// @ is an alias to /src
import boutonExtra from '@/components/boutonExtra.vue'
// après avoir fait npm install vue-flickity --save
import Flickity from 'vue-flickity';

export default {
  name: 'About',
  components: {
    boutonExtra,
    Flickity
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
      },
      pictures: [
        {
          id: 1,
          url: 'https://www.photo-paysage.com/albums/userpics/10001/thumb_Monument-Valley.jpg',
          alt: 'monument_valley',
          type: 'img'
      
        },
        {
          id: 2,
          url: '../../dist/audio/\'San Francisco - Maxime Le Forestier.mp3\'',
          alt: "audio maison bleue",
          type: "audio"
      
        },
        {
          id: 3,
          url: 'https://www.photo-paysage.com/albums/userpics/10001/normal_Le_lac_de_Montriond~0.jpg',
          alt: 'lac de montriond',
          type: "img"
      
        },
        {
          id: 4,
          url: 'https://www.photo-paysage.com/images_accueil/Plus-belles-photos-de-nature.jpg',
          alt: 'photo de nature',
          type: "img"
      
        },
        {
          id: 5,
          url: 'https://media.istockphoto.com/videos/calm-surface-of-a-lake-in-the-forest-reflecting-the-beautiful-mount-video-id864526000',
          // url: 'http://www.youtube.com/v/HVMoJqg41Bw',
          alt: 'video de nature',
          type: "video"
      
        }

      ]

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
    // 2 méthodes du plug in Flickity
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }

}
</script>
