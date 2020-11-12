<template lang="pug">
  .timeline-item(:class="{'left-side': left}")
    .timeline-item-child(data-aos="fade-up" data-aos-once="true")
      h2 {{ timeLineItemData.title }}
      p {{ timeLineItemData.description }}
</template>

<script>
export default {
  props: {
    timeLineItemData: Object,
    left: Boolean
  }
}
</script>

<style>
  .timeline-item {
    margin-bottom: 40rem;
    position: relative;
    text-align: left;
  }

  .timeline-item:last-of-type {
    margin-bottom: 10rem;
  }

  .timeline-item::after {
    position: absolute;
    content: '';
    width: 20%;
    height: 4px;
    top: 20px;
    background: #F9423A;
    display: block;
    right: 0;
  }

  .timeline-item.left-side::after {
    left: -30px;
  }

  .timeline-item.left-side .timeline-item-child {
    margin-left: 30%;
  }

  .js-img .scene {
    position: sticky;
    top: 400px;
    padding-bottom: 80px;
  }

  .timeline-item-child {
    width: 70%;
  }
  
  .timeline-item-child p {
    font-size: 1.3rem
  }

  @media (max-width: 768px) {
    .timeline-item-child {
      width: 90%;
    }
  }

</style>
