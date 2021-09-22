<template>
 <div>
    <div class="site-wrapper">
      <!-- mobile header -->
     <nav-header  @toggle-nav="toggleNav" :is-active="isActive"></nav-header>
      <!-- main content area -->
      <main class="content float-right " :class="{ push: isActive }">
        <!-- section hero -->
      <introduction></introduction>

        <!-- section about -->
        <about/>

        <!-- section skills -->
        <my-skills/>

        <!-- section facts -->
        <project-completed/>

        <!-- section services -->
        <services/>

        <!-- section experience -->
        <experience/>

        <!-- section works -->
        <portfolio/>

        <!-- section pricing table -->
        <price-table/>

        <!-- section testimonials -->
        <testimonial/>

        <!-- section clients -->
        <clients/>

        <!-- section blog -->
        <blog/>

        <!-- section contact -->
        <get-in-touch/>
      </main>
    </div>
  </div>
</template>

<script>
  import NavHeader from './Sections/NavHeader.vue'
  import Introduction from './Sections/Introduction.vue';
  import About from "./Sections/About";
  import MySkills from "./Sections/MySkills";
  import ProjectCompleted from "./Sections/ProjectCompleted";
  import Services from "./Sections/Services";
  import Experience from "./Sections/Experience";
  import Portfolio from "./Sections/Portfolio";
  import PriceTable from "./Sections/PriceTable";
  import Testimonial from "./Sections/Testimonial";
  import Clients from "./Sections/Clients";
  import Blog from "./Sections/Blog";
  import GetInTouch from "./Sections/GetInTouch";

  export default {
  components: {
    GetInTouch,
    Blog,
    Clients,
    Testimonial,
    PriceTable,
    Portfolio,
    Experience,
    Services,
    ProjectCompleted,
    MySkills,
    About, NavHeader,
    Introduction, },
  name: "CynthiaObasuyi",
  mounted() {},

  data() {
    return {
        isActive: false
    };
  },
  props: {},
  methods: {
      toggleNav(){
          this.isActive = !this.isActive;
      }
  },
};
</script>
