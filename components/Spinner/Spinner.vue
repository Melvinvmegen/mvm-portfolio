<template lang="pug">
  svg.spinner(width='65px' height='65px' viewbox='0 0 66 66' xmlns='http://www.w3.org/2000/svg')
    circle.path(fill='none' stroke-width='6' stroke-linecap='round' cx='33' cy='33' r='30')

</template>

<style scoped>
.spinner {
  animation: rotator 1.4s linear infinite;
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}
.path {
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
}

@keyframes colors {
  0% {
    stroke: #234A5D;
  }
  50% {
    stroke: #D1DCDF;
  }
  100% {
    stroke: #F5423A;
  }
}
@keyframes dash {
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 46.75;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
}
</style>