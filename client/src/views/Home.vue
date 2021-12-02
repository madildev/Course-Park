<template>
  <div class="home">
    <NavBar></NavBar>
     <router-view />
    <Contact></Contact>
    <Footer></Footer>
  </div>

</template>

<script>

import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Contact from "../components/Contact.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    Footer,
    Contact
  },

}
</script>