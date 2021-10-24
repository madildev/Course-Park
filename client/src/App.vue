<template>
  <div id="app">
     <NavBar></NavBar>
     <router-view />
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>

import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";
export default {
  name: "app",
  components: {
    NavBar,
    Footer,
    Contact
  },
}
</script>

<style>
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  scroll-behavior: smooth;
    --webkit-font-smoothing: antialiased;
}

/* The basic color pallete for the application */
:root {
  --primary: #FFCC00;
  --dark: #1D1D1D;
  --ternary: #303030;
  --secondary: #999999;
  --light: #F2F2F2;
  --pure: #FFFFFF;
}
</style>
