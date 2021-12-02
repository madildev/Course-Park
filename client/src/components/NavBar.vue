<template>
  <div class="navbar">
    <div class="navbar-upper">
      <div class="logo">
        <div class="first-part">
          <h2>LOGO</h2>
        </div>

        <div class="second-part">
          <p>UET Largest</p>
          <p>Learning Platform</p>
        </div>
      </div>

      <div class="other-links" v-if=" !(isLogin)">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </div>

      <div class="other-links" v-if="isLogin">
        <p @click="SignOut">Sign Out</p>
      </div>

    </div>

    <div class="navlinks">
      <ul>
        <li> <router-link to="/"><i class="fas fa-home"></i> Home</router-link> </li>
        <li> <router-link to="/about"><i class="fas fa-user-alt"></i>  About Us</router-link></li>
        <li v-if="isLogin"> <router-link to="/about"><i class="fas fa-book-open"></i> Learning</router-link></li>
        <li v-if="isLogin"> <router-link to="/"><i class="far fa-comments"></i> Discussion</router-link></li>
        <li @click="goTo('contact-us')"> <i class="fas fa-phone-alt"></i> Contact Us</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
   name: "NavBar",
   data(){
      return{

      }
   },
   methods:{
     goTo(id){
       document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
     },
     SignOut(){
       this.$store.dispatch('UserSignOut');
     }
   },
   computed: {
     isLogin() {
       return this.$store.state.isLogin;    //This will check the status of the login
     }
   }
};
</script>

<style scoped>
.navbar-upper {
  background-color: var(--dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.logo {
  display: flex;
}
.logo .first-part {
  color: var(--primary);
  border-right: 2px solid var(--primary);
  padding: 10px;
}
.logo .second-part {
  color: white;
  padding: 10px;
  font-size: 18px;
}

.other-links a, .other-links p {
  text-decoration: none;
  color: white;
  margin: 10px;
  transition: 0.4s;
  font-size: 20px;
  cursor: pointer;
}
.other-links a:hover, .other-links p:hover {
  color: #ffcc00;
}

.navlinks {
  background-color: #232222;
  width: 100%;
  height: 50px;
  text-align: center;
}
.navlinks ul {
  float: right;
  margin: 0 10px;
}
.navlinks li {
  display: inline-block;
  margin: 0 10px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  padding: 10px;
 
}
.navlinks li a{
   text-decoration: none;
   color: white;
}

.navlinks li:hover{
   color: var(--primary);
}

.navlinks li a:hover {
  color: var(--primary);
}

</style>
>>>>>>> c31c0ea71dfd9cd86e1973194002929d7c5913ab
