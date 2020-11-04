<template lang="pug">
  .timeline.d-flex
    .d-flex.col-4.white--text
      TimelineItem(v-for="item in timeLineItemsLeft" :key="item.title" :timeLineItemData="item")
    .col-4.js-img
      Cube(:scrollPosition="scrollPosition" :faceImgs="faceImgs" :folder="folder")
    .d-flex.col-4.white--text
      TimelineItem(v-for="item in timeLineItemsRight" :key="item.title" :timeLineItemData="item" :left="true")

</template>

<script>
import TimelineItem from './TimelineItem/TimelineItem'
import Cube from '~/components/Cube/Cube'

export default {
  props: {
    timeLineItemsLeft: Array,
    timeLineItemsRight: Array,
    faceImgs: Array,
    folder: String
  },
  components: {
    TimelineItem,
    Cube
  },
  data() {
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll);
  },
}
</script>

<style>
  .timeline {
    margin-top: 80px;
  }
  
  .timeline > div:nth-child(1) {
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  .timeline > div:nth-child(2) {
    display: block;
    text-align: center;
  }

  .timeline > div:nth-child(3) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

</style>
