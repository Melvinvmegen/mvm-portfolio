<template lang="pug">
  .fakeTerminal.col-sm-10.col-12
    .fakeMenu.col-sm-10.col-12
      .fakeButtons.ml-2
        .fakeButton.fakeClose
        .fakeButton.fakeMinimize
        .fakeButton.fakeZoom
    .fakeScreen.col-sm-10.col-12
      .typed-container
        vue-typed-js(:strings="strings" :typeSpeed="40" :loop="false" contentType: 'html' :smartBackspace="true" @onComplete="showButton()")
          span.line
            |  
            span.typing
      slot
</template>

<script>
export default {
  data () {
    return {
      strings:
        [
          '<span style="color: chartreuse;"> -> </span> cd Melvinvmegen/code/developpeur-back-end ^1000\n `<br><span style="color: aqua">developpeur-back-end</span>`',
          '<span style="color: chartreuse;"> -> </span> cd Melvinvmegen/code/developpeur-back-end<br><span style="color: aqua">developpeur-back-end</span><br><span style="color: chartreuse;"> -> </span> cd teaser ^1000\n `<br><span style="color: aqua">teaser</span> Pour vos applications web sur Ruby on Rails`',
          '<span style="color: chartreuse;"> -> </span> cd Melvinvmegen/code/developpeur-back-end<br><span style="color: aqua">developpeur-back-end</span><br><span style="color: chartreuse;"> -> </span> cd teaser<br><span style="color: aqua">teaser</span> Pour vos applications web sur Ruby on Rails<br><span style="color: chartreuse;"> -> </span> cd description ^1000\n `<br><span style="color: aqua">description</span> En décembre 2019, suite à 3 mois de bootcamp intensif à apprendre à coder, me voilà face à un choix draconien auquel tout développeur web est un jour confronté, plutôt front ou plutôt back ? Après des jours à tergiverser, je me décide... le Javascript parce que oui avec lui on peut faire les deux mais aussi et surtout créer des applications web toujours plus animées.`'
        ]
    }
  },
  methods: {
    showButton() {
      this.$emit('show-button')
    }
  }
};
</script>

<style>
/* Terminal */
.fakeButtons {
  width: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.fakeButton {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #ff3b47;
  border-color: #9d252b;
}

.fakeMinimize {
  left: 11px;
  background-color: #ffc100;
  border-color: #9d802c;
}

.fakeZoom {
  left: 16px;
  background-color: #00d742;
  border-color: #049931;
}

.fakeMenu {
  height: 35px;
  background-color: #bbb;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.fakeScreen {
  background-color: #151515;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.line {
  color: white;
  font: 1rem Inconsolata, monospace;
  -webkit-animation: type .5s 1s steps(20, end) forwards;
  -moz-animation: type .5s 1s steps(20, end) forwards;
  -o-animation: type .5s 1s steps(20, end) forwards;
  animation: type .5s 1s steps(20, end) forwards;
  overflow-wrap: anywhere;
}

.cursor {
  -webkit-animation: blink 1s 2s 2 forwards;
  -moz-animation: blink 1s 2s 2 forwards;
  -o-animation: blink 1s 2s 2 forwards;
  animation: blink 1s 2s 2 forwards;
}

.waiting-line {
    color: #fff;
    -webkit-animation: type .5s 10.75s steps(20, end) forwards;
    -moz-animation: type .5s 10.75s steps(20, end) forwards;
    -o-animation: type .5s 10.75s steps(20, end) forwards;
    animation: type .5s 10.75s steps(20, end) forwards;
}

.waiting-cursor {
  -webkit-animation: blink 1s infinite;
  -moz-animation: blink 1s infinite;
  -o-animation: blink 1s infinite;
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
