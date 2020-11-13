<template lang="pug">
  nuxt-link(:to="{ name: 'projets-name', params: { name: project.title, project: project }}")
    v-img.project-img(:src="require(`~/assets/projects/${project.alt}/${project.img}`)" :alt="project.alt" :href="project.href" data-aos="zoom-in" data-aos-once="true")
      .img-text
        h2.title-project {{ project.title }}
        p.teaser-project {{ project.teaser }}
</template>

<script>

export default {
  props: {
    project: Object
  }
}
</script>

<style>
  .project-img {
    max-width: 100%;
    box-shadow: 0 0.3125rem 1rem 0 rgba(0,0,0,.24);
  }

  .project-img .v-image__image {
    transition: all .5s;
    filter: grayscale(100%);
  }

  .project-img:hover .v-image__image {
    transform: scale(1.1);
    filter: grayscale(0%);
  }

  .project-img:hover .v-image__image:before {
    display: block;
  }

  .project-img:hover .v-responsive__content .img-text {
    display: block;
  }


  .v-image__image:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(52,73,94,0.75);
    transition: all .6s ease;
  }

  .img-text {
    width: 16rem;
    height: 9em;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
    display: none;
    transition: all .6s ease;
  }

  .teaser-project {
    color: #D1DDE6;
    border-top: 1px solid #D1DDE6;
    padding-top: 16px;
  }

  .title-project {
    font-size: 30px;
    text-decoration: none;
    line-height: 2;
    font-weight: 800;
    text-align: center;
    color: #D1DDE6;
  }
</style>