<template lang="pug">
  .section-home.flex-md-row.flex-column-reverse(v-if="upside")
    BannerRight.col-md-5.col-12(:image="image" :contact="contact")
    BannerLeft.col-md-7.col-12(:blabla='blabla' :ctaText="ctaText" :link="link" :side="sideReverse")
    img.cube-banner.d-md-flex.d-none(src="~/assets/front/cube_front.png" max-width="400" v-if="$route.name === 'frontEnd' || $route.name === 'backEnd'")
    .banner-bottom
      .banner-gradient
      .banner-cancel-gradient
  .section-home.flex-md-row.flex-column(v-else)
    BannerLeft.col-md-7.col-12(:blabla='blabla' :ctaText="ctaText" :link="link" :side="side")
    BannerRight.col-md-5.col-12(:image="image" :contact="contact")
    img.cube-banner.d-md-flex.d-none(src="~/assets/back/cube_back.png" max-width="400" v-if="$route.name === 'frontEnd' || $route.name === 'backEnd'")
    .banner-bottom
      .banner-gradient
      .banner-cancel-gradient
</template>

<script>
import BannerLeft from "./BannerLeft/BannerLeft";
import BannerRight from "./BannerRight/BannerRight";

export default {
  components: {
    BannerLeft,
    BannerRight
  },
  props: {
    blabla: Object,
    upside: Boolean,
    image: String,
    ctaText: String,
    link: String,
    contact: Boolean
  },
  computed: {
    sideReverse() {
      return this.$vuetify.breakpoint.smAndDown ? "center" : "right"
    },
    side() {
      return this.$vuetify.breakpoint.smAndDown ? "center" : "left"
    }
  }
};
</script>

<style>
.cube-banner {
  width: 400px;
  position: fixed;
  bottom: 10vh;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
}

.section-home {
  padding: 0;
  width: 100%;
  display: flex;
  position: relative;
  padding: 0;
  height: calc(100vh - 100px);
  min-height: 900px;
}

.banner-bottom {
  opacity: 0.16;
  z-index: 0;
}

.banner-gradient {
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 20%;
  background: linear-gradient(
    90deg,
    #F5423A,
    #D1DCDF 15%,
    #234A5D 35%,
    #F5423A 50%,
    #D1DCDF 65%,
    #234A5D 85%,
    #F5423A
  );
  pointer-events: none;
}

.banner-cancel-gradient {
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 20%;
  background: linear-gradient(
    rgb(255, 255, 255) 0%,
    rgba(246, 246, 248, 0) 100%
  );
  pointer-events: none;
}

@media only screen and (max-width: 960px) {
  .section-home {
    height: 100vh !important;
  }

  .header-height {
    width: 100% !important;
    max-height: 50vh !important;
  }

  .header-height-contact {
    width: 100% !important;
    min-height: 50vh !important;
  }

  .header {
    margin: 50px 0 0 0;
    max-height: 40vh !important;
  }
}

@media only screen and (max-width: 500px) {
  .header {
    margin: 20px 0 0 0;
    max-height: 60vh !important;
  }

  .header-height-contact {
    min-height: 45vh !important;
  }

  .header-height {
    max-height: 40vh !important;
  }
}

@media only screen and (max-width: 450px) {
  .header {
    max-height: 65vh !important;
    margin: auto;
  }

  .header-height {
    max-height: 35vh !important;
  }
}

@media only screen and (max-width: 350px) {
  .header {
    max-height: 60vh !important;
    margin: auto;
  }

  .header-height {
    max-height: 40vh !important;
  }
}
</style>
