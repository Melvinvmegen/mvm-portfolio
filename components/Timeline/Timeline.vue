<template lang="pug">
  .timeline.d-flex(v-if="$vuetify.breakpoint.smAndUp")
    .d-flex.col-sm-4.col-6.white--text
      TimelineItem(v-for="item in timeLineItemsLeft" :key="item.title" :timeLineItemData="item" ref="items-left" v-if="show")
    .col-sm-4.col-6.js-img(data-aos="fade-down" data-aos-once="true")
      Cube(:scrollPosition="scrollPosition" :faceImgs="faceImgs" :folder="folder" :arrPositions="arrPositions")
    .d-sm-flex.d-inline-flex.col-sm-4.col-6.white--text
      TimelineItem(v-for="item in timeLineItemsRight" :key="item.title" :timeLineItemData="item" :left="true" ref="items-right" v-if="show")
  .timeline.d-flex(v-else)
    .d-flex.col-sm-4.col-6.white--text
      TimelineItem(v-for="item in timeLineItems" :key="item.title" :timeLineItemData="item" ref="items" v-if="show")
    .col-sm-4.col-6.js-img(data-aos="fade-down" data-aos-once="true")
      Cube(:scrollPosition="scrollPosition" :faceImgs="faceImgs" :folder="folder" :arrPositions="arrPositions")
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
      scrollPosition: null,
      arrPositions: null,
      show: false
    }
  },
  computed: {
    timeLineItems() {
      return [...this.timeLineItemsLeft, ...this.timeLineItemsRight].sort((a, b) => {
        return a.id - b.id
      })
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    stepsPosition() {
      this.show = true
      this.$nextTick(function() {
        const arr = this.$vuetify.breakpoint.smAndUp ? [...this.$refs['items-left'], ...this.$refs['items-right']] : [...this.$refs['items']] 
        const posArr = []
        console.log(this.arrPositions)
        for (const ar of arr) {
          let item = ar.$el.getBoundingClientRect()
          posArr.push((item.top))
        }
        console.log(posArr)
        this.arrPositions = posArr.sort(function(a, b) {
          return a - b;
        })
      });
    }
  },
  mounted() {
    this.stepsPosition()
    window.addEventListener('scroll', this.updateScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll);
  },
}
</script>

<style>
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

  @media (max-width: 600px) {
    .timeline-item {
      margin-bottom: 10rem;
    }
  }
</style>
