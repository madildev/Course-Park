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

      <div class="other-links">
        <img src="" alt="" />

        <router-link to="/">Login</router-link>
        <router-link to="/">Sign Up</router-link>
      </div>
    </div>

    <div class="navlinks">
      <ul>
        <li> <router-link to="/"><i class="fas fa-home"></i> Home</router-link> </li>
        <li> <router-link to="/about"><i class="fas fa-user-alt"></i>  About Us</router-link></li>
        <li @click="goTo('contact-us')"> <i class="fas fa-phone-alt"></i> Contact Us</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
   name: "NavBar",
   methods:{
     goTo(id){
       document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
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

.other-links a {
  text-decoration: none;
  color: white;
  margin: 10px;
  transition: 0.4s;
  font-size: 20px;
}
.other-links a:hover {
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
