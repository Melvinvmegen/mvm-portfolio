<template lang="pug">
  .col-md-4.col-sm-6.col-12.company-logo(:key="company.name")
    img.company-logo(:src="require(`~/assets/companies/${company.src}`)" :alt="company.name")
</template>

<script>
export default {
  props: {
    company: Object
  }
}
</script>

<style>
  .company-logo {
    display: block;
    margin: 0 auto;
    filter: grayscale(100%);
    opacity: .5;
    transition: all .25s ease;
  }

  .company-logo:hover {
    filter: grayscale(0);
    opacity: 1;
  }

  .logo-list {
    margin: 5rem auto;
  }

  @media (max-width: 600px) {
    .company-logo {
      margin: 10px auto;
    }

    .logo-list {
      margin: 2rem auto;
    }
  }
</style>
