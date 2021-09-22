
<template>
  <div>
      <div class="mobile-header py-2 px-3 mt-4" :class="{ push: isActive }">
        <button @click="$emit('toggle-nav')" class="menu-icon mr-2">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="index.html" class="logo"
          ><img src="images/logo.png" alt="Bako Doe"
        /></a>
        <a href="index.html" class="site-title dot ml-2">Bako Doe</a>
      </div>

      <!-- header -->
      <header class="left float-left shadow-dark" id="header" :class="{ open: isActive }">
        <button @click="$emit('toggle-nav')" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="header-inner d-flex align-items-start flex-column">
          <a href="index.html"><img src="images/logo.png" alt="Bako Doe" /></a>
          <a href="index.html" class="site-title dot mt-3">Bako Doe</a>
          <span class="site-slogan">Web Developer</span>

          <!-- navigation menu -->
          <nav>
            <ul class="vertical-menu scrollspy">
              <li>
                <a href="#home" class="active"><i class="icon-home"></i>Home</a>
              </li>
              <li>
                <a href="#about"><i class="icon-user"></i>About</a>
              </li>
              <li>
                <a href="#services"><i class="icon-bulb"></i>Services</a>
              </li>
              <li>
                <a href="#resume"><i class="icon-graduation"></i>Resume</a>
              </li>
              <li>
                <a href="#works"><i class="icon-grid"></i>Works</a>
              </li>
              <li>
                <a href="#blog"><i class="icon-pencil"></i>Blog</a>
              </li>
              <li>
                <a href="#contact"><i class="icon-phone"></i>Contact</a>
              </li>
            </ul>
          </nav>

          <!-- footer -->
          <div class="footer mt-auto">
            <!-- social icons -->
            <ul class="social-icons list-inline">
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-instagram"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-youtube"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-dribbble"></i></a>
              </li>
            </ul>

            <!-- copyright -->
            <span class="copyright">© 2020 Bako Template</span>
          </div>
        </div>
      </header>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',

  created() {

  },
  data() {
    return {
    }
  },
  props: {
   isActive:{
     type:String,
     required:true
   }
  },
  methods: {
   
  },
}
</script>

<style lang="scss" scoped>

</style>

