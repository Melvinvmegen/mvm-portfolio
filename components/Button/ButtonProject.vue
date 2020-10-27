<template lang="pug">
  .line-anim
    a(:href="href")
      span.text {{ text }}
      span.line.-right
      span.line.-top
      span.line.-left
      span.line.-bottom
</template>

<script>
export default {
  props: {
    text: String,
    href: String
  }
}
</script>

<style>
  .line-anim {
    text-align: center;
  }

  .line-anim a {
    color: black;
    padding: 0.7em calc(0.7em * 1.2);
    display: inline-block;
    border: 3px solid transparent;
    position: relative;
    cursor: pointer;
    letter-spacing: 0.07em;
    text-decoration: none;
  }

  .line-anim a .text {
    transform: translate3d(0, 0.7em, 0);
    display: block;
    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
  }

  .line-anim a:after {
    position: absolute;
    content: '';
    bottom: -3px;
    left: calc(0.7em * 1.2);
    right: calc(0.7em * 1.2);
    height: 3px;
    background: #F9423A;
    transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
    transform-origin: left;
  }

  .line-anim .line {
    position: absolute;
    background: #F9423A;
  }

  .line-anim .line.-right,
  .line-anim .line.-left {
    width: 3px;
    bottom: -3px;
    top: -3px;
    transform: scale3d(1, 0, 1);
  }

  .line-anim .line.-top,
  .line-anim .line.-bottom {
    height: 3px;
    left: -3px;
    right: -3px;
    transform: scale3d(0, 1, 1);
  }

  .line-anim .line.-right {
    right: -3px;
    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
    transform-origin: top;
  }

  .line-anim .line.-top {
    top: -3px;
    transition: transform 0.08s linear 0.43s;
    transform-origin: left;
  }

  .line-anim .line.-left {
    left: -3px;
    transition: transform 0.08s linear 0.51s;
    transform-origin: bottom;
  }

  .line-anim .line.-bottom {
    bottom: -3px;
    transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
    transform-origin: right;
  }

  .line-anim a:hover .text,
  .line-anim a:active .text {
    transform: translate3d(0, 0, 0);
    transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
  }

  .line-anim a:hover:after,
  .line-anim a:active:after {
    transform: scale3d(0, 1, 1);
    right: -3px;
    left: -3px;
    transform-origin: right;
    transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;
  }

  .line-anim a:hover .line,
  .line-anim a:active .line {
    transform: scale3d(1, 1, 1);
  }

  .line-anim a:hover .line.-right,
  .line-anim a:active .line.-right {
    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
    transform-origin: bottom;
  }

  .line-anim a:hover .line.-top,
  .line-anim a:active .line.-top {
    transition: transform 0.08s linear 0.4s;
    transform-origin: right;
  }

  .line-anim a:hover .line.-left,
  .line-anim a:active .line.-left {
    transition: transform 0.08s linear 0.48s;
    transform-origin: top;
  }

  .line-anim a:hover .line.-bottom,
  .line-anim a:active .line.-bottom {
    transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
    transform-origin: left;
  }
</style>
