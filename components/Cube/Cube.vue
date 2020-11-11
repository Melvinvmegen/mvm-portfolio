<template lang="pug">
  .scene
    .cube(v-if="arrPositions" :class="{'show-right': scrollPosition > arrPositions[0], 'show-top':  scrollPosition > arrPositions[1] && scrollPosition < arrPositions[2], 'show-left': scrollPosition > arrPositions[2], 'show-bottom':  scrollPosition > arrPositions[3]}")
      .cube__face.cube__face--front(:class="{'drop-face-flat': dropFaceValue}")
        img(:src="require(`~/assets/${folder}/${faceImgs[0]}`)" width="150px")
      .cube__face.cube__face--back(:class="{'drop-face-flat': dropFaceValue}")
        img(:src="require(`~/assets/${folder}/${faceImgs[0]}`)" width="150px")
      .cube__face.cube__face--right(:class="{'drop-face-right': dropFaceValue}")
        img(:src="require(`~/assets/${folder}/${faceImgs[1]}`)" width="150px")
      .cube__face.cube__face--left(:class="{'drop-face-left': dropFaceValue}")
        img(:src="require(`~/assets/${folder}/${faceImgs[2]}`)" width="150px")
      .cube__face.cube__face--top(:class="{'drop-face-bottom': dropFaceValue}")
        img(:src="require(`~/assets/${folder}/${faceImgs[3]}`)" width="150px")
      .cube__face.cube__face--bottom(:class="{'drop-face-front': dropFaceValue}")
        img(:src="require(`~/assets/${folder}/${faceImgs[4]}`)" width="150px")
</template>

<script>
export default {
  props: {
    scrollPosition: Number,
    faceImgs: Array,
    folder: String,
    arrPositions: Array
  },
  computed: {
    dropFaceValue() {
      const additionalValue = this.$vuetify.breakpoint.smAndUp ? 0 : 200
      return this.scrollPosition > this.arrPositions[4] + additionalValue
    }
  }
}
</script>

<style>
  .scene {
    width: 200px;
    height: 200px;
    margin: auto;
    perspective: 400px;
  }

  .cube {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: transform 1s;
  }

  .cube__face {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 2px solid #D1DCDF;
    line-height: 200px;
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8%;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2) !important;
    background-color: white !important;
  }

  .cube__face--front  { 
    background: transparent; 
    transform: rotateY(0deg) translateZ(100px);
  }
  .cube__face--right  { 
    background: transparent;
    transform: rotateY(90deg) translateZ(100px);
  }
  .cube__face--back   { 
    background: transparent;
    transform: rotateY(180deg) translateZ(100px); 
  }
  .cube__face--left   { 
    background: transparent;
    transform: rotateY(-90deg) translateZ(100px); 
  }
  .cube__face--top    { 
    background: transparent;
    transform: rotateX(90deg) translateZ(100px); 
  }
  .cube__face--bottom { 
    background: transparent;
    transform: rotateX(-90deg) translateZ(100px);
  }
  .cube.show-front  { transform: translateZ(-100px) rotateY(   0deg); }
  .cube.show-right  { transform: translateZ(-100px) rotateY( -90deg); }
  .cube.show-back   { transform: translateZ(-100px) rotateY(-180deg); }
  .cube.show-left   { transform: translateZ(-100px) rotateY(  90deg); }
  .cube.show-top    { transform: translateZ(-100px) rotateX( -90deg); }
  .cube.show-bottom { transform: translateZ(-100px) rotateX(  90deg); }

  .drop-face-right {
    transform: rotateY(160deg) translateZ(300px) rotate3d(1, 1, 1, 0deg);
    transition: transform 2s ease-in-out;
  }

  .drop-face-left {
    transform: rotateY(-160deg) translateZ(300px) rotate3d(1, 1, 1, 0deg);
    transition: transform 2s ease-in-out;
  }

  .drop-face-front {
    transform: rotateX(-180deg) translateZ(195px);
    transition: transform 2s ease-in-out;
  }

  .drop-face-bottom {
    transform: rotateX(180deg) translateZ(195px);
    transition: transform 2s ease-in-out;
  }

  .drop-face-flat {
    transform: translateZ(-300px);
    transition: transform 2s ease-in-out;
  }

  @media (max-width: 1200px) {
    .cube {
      transform: translateZ(-200px);
    }
    .cube.show-front  { transform: translateZ(-200px) rotateY(   0deg); }
    .cube.show-right  { transform: translateZ(-200px) rotateY( -90deg); }
    .cube.show-back   { transform: translateZ(-200px) rotateY(-180deg); }
    .cube.show-left   { transform: translateZ(-200px) rotateY(  90deg); }
    .cube.show-top    { transform: translateZ(-200px) rotateX( -90deg); }
    .cube.show-bottom { transform: translateZ(-200px) rotateX(  90deg); }
  }

  @media (max-width: 600px) {
    .cube {
      transform: translateZ(-300px);
    }
    .cube.show-front  { transform: translateZ(-300px) rotateY(   0deg); }
    .cube.show-right  { transform: translateZ(-300px) rotateY( -90deg); }
    .cube.show-back   { transform: translateZ(-300px) rotateY(-180deg); }
    .cube.show-left   { transform: translateZ(-300px) rotateY(  90deg); }
    .cube.show-top    { transform: translateZ(-300px) rotateX( -90deg); }
    .cube.show-bottom { transform: translateZ(-300px) rotateX(  90deg); }
  }

  @media (max-width: 400px) {
    .scene {
      width: 100px;
      height: 100px;
      margin: auto;
      perspective: 200px;
    }

    .cube {
      transform: translateZ(-350px);
    }
    .cube.show-front  { transform: translateZ(-350px) rotateY(   0deg); }
    .cube.show-right  { transform: translateZ(-350px) rotateY( -90deg); }
    .cube.show-back   { transform: translateZ(-350px) rotateY(-180deg); }
    .cube.show-left   { transform: translateZ(-350px) rotateY(  90deg); }
    .cube.show-top    { transform: translateZ(-350px) rotateX( -90deg); }
    .cube.show-bottom { transform: translateZ(-350px) rotateX(  90deg); }
  }
</style>
