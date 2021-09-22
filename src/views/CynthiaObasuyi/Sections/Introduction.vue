
<template>
  <div>
     <section
          class="hero background parallax shadow-dark d-flex align-items-center"
          id="home"
          data-image-src="images/hero.jpg"
        >
          <div class="cta mx-auto mt-2">
            <h1 class="mt-0 mb-4">I’m Bako Doe<span class="dot"></span></h1>
            <p class="mb-4">
              He lay on his armour-like back, and if he lifted his head a little
              he could see his brown belly, slightly domed and divided by arches
              into stiff sections.
            </p>
            <a href="#" class="btn btn-default btn-lg mr-3"
              ><i class="icon-grid"></i>View Portfolio</a
            >
            <spacer :classes="'d-md-none d-lg-none d-sm-none'" :size="10"></spacer>
    
            <a href="#" class="btn btn-border-light btn-lg"
              ><i class="icon-envelope"></i>Hire me</a
            >
          </div>
          <div class="overlay"></div>
        </section>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props:{
    introduction:Object,
    default:{
      name:"I'm Cynthia Obasuyi",
      info:" He lay on his armour-like back, and if he lifted his head a little\
             he could see his brown belly, slightly domed and divided by arches into stiff sections.",


    }
  },
  created() {

  },
  data() {
    return {
    }
  },
  methods: {
   
  },
}
</script>

<style lang="scss" scoped>

</style>

