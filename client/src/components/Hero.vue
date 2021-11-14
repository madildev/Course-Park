<template>
  <div class="hero">
    <!-- This is the intro/landing section -->
    <section class="landing" id="home">
      <div class="landing-text">
        <div class="main-text">
          <p class="line-one">This is UET's</p>
          <p class="line-two">Biggest</p>
          <p class="line-three">Learning Platform</p>
        </div>

        <div class="welcome-text" v-if="isLogin">
          <p>Welcome Muhammad Adil</p>
        </div>        

        <div class="btn" v-if="!(isLogin)">
          <router-link to="/login">Join Us</router-link>
        </div>
      </div>

      <div class="landing-image">
        <img src="../assets/uet_logo_emboss.png" alt="" />
      </div>
    </section>

    <!-- This is the motto section-->
    <section class="moto">
      <div class="moto-left">
        <h1>OUR MOTTO</h1>
      </div>

      <div class="moto-right">
        <p>WHATEVER IS OUR MOTTO</p>
        <p>LET US ALL CRAM TOGETHER</p>
      </div>
    </section>

     <!--This is section the section with description  -->
    <section class="description">
      <div class="descp-left">
        <div class="upper-text">
          <h1>UNVEIL</h1>
          <h1>THE <span>TUTOR</span></h1>
          <h1>IN YOU</h1>
        </div>

        <div>
          <h2>Be a source of light and improve</h2>
          <h2>your own visison as well as others</h2>
        </div>
      </div>

      <div class="descp-right">
        <div>
          <h1>Departments</h1>
        </div>

        <div>
          <h2>Search for your deaprment</h2>
          <h2>and go for a particular course</h2>
        </div>
      </div>
    </section>

    <!-- This the section for the services cards -->

    <section class="services">
      <div class="services-body">
        <div class="header">
          <h1>HOW IT WORKS</h1>
        </div>
        
        <div class="services-cards">
          <div v-for="(data, index) in imgs" :key="index" class="card">
            <div class="card-header">
              <img :src="data.img" />
            </div>

            <div class="card-body">
              <h2>{{ data.title }}</h2>
              <p>{{ data.descp }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Here the section of memes will be added-->
    <section class="Attraction">
       <div class="main-body">
          
          <div class="left-meme">
              <img src="../assets/Meme.png" alt="">
          </div>
         
          <div class="right-quote">
              <div class="upper-quote">
                <p>EVERY <span>STUDENT</span></p>
                <p>DESERVES</p>
                <p>TO PASS THEIR</p>
                <p><span>SEMESTER</span></p>
              </div>
              
              <div class="lower-quote">
                <p>We are willing to help you out,</p>
                <p>to make sure of no obstacle between</p>
                <p>you and your next semester</p>
              </div>

          </div>
         
       </div>
    </section>

  </div>
</template>

<script>

export default {
  name: "Hero",   
  data() {
    return {
      imgs: [
        {
          img: require("../assets/1.png"),
          title: "Trusted Content",
          descp:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quasi velit est quo quam eum, eos incidunt aspernatur corporis voluptatem ex totam sed consequuntur odio unde ut perspiciatis rerum alias!",
        },
        {
          img: require("../assets/2.png"),
          title: "Tools to empower students",
          descp:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quasi velit est quo quam eum, eos incidunt aspernatur corporis voluptatem ex totam sed consequuntur odio unde ut perspiciatis rerum alias!",
        },
        {
          img: require("../assets/3.png"),
          title: "Personalized Learning",
          descp:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quasi velit est quo quam eum, eos incidunt aspernatur corporis voluptatem ex totam sed consequuntur odio unde ut perspiciatis rerum alias!",
        },
      ],
    };
  },
  computed:{
    isLogin() {
      return this.$store.state.isLogin;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

/* This is the css for the lading section */
.landing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  height: 100vh;
  width: 100%;
}

.landing-text {
  font-family: "Poppins", sans-serif;
  width: 50%;
  text-align: center;
}
.main-text {
  height: 100%;
  width: 100%;
}
.main-text .line-one {
  font-size: 50px;
}
.main-text .line-two {
  font-size: 80px;
}
.main-text .line-three {
  font-size: 40px;
  color: var(--primary);
}
.welcome-text{
  font-size: 26px;
  padding: 20px 0;
  color: var(--secondary);

}
.btn {
  margin: 30px 0;
}
.btn a {
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 30px;
  background-color: #ffcf5a;
  color: var(--ternary);
  font-size: 20px;
}
.landing-image {
  width: 50%;
  text-align: center;
}
.landing-image img {
  height: 500px;
  width: 500px;
}

/* This is the css for the Motto Section*/

.moto {
  background: url("../assets/Motto.jpeg");
  display: flex;
  align-items: center;
  padding: 30px 0;
  justify-content: space-between;
  background-position-y: 350px;
  background-size: cover;
  color: white;
  height: 40vh;
  position: relative;
   font-family: Segoe UI;
}

.moto::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.moto-left {
  z-index: 10;
  width: 35%;
  text-align: center;
  border-right: 4px solid var(--primary);
  padding: 15px;
}
.moto-left h1 {
  font-size: 60px;
}

.moto-right {
  z-index: 10;
  width: 60%;
  padding: 0 20px;
}
.moto-right p {
  font-size: 50px;
}

/*This is the CSS for the description section*/

.description {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
  font-family: Segoe UI;
}

.descp-left h1 {
  font-size: 60px;
}
.descp-left span {
  color: var(--primary);
}
.descp-left h2 {
  font-size: 30px;
}
.descp-left .upper-text {
  border-bottom: 2px solid var(--primary);
  margin: 10px;
}

.descp-right h1 {
  font-size: 60px;
  margin: 15px 0;
  padding: 10px 0;
  color: var(--primary);
  border-bottom: 2px solid gray;
  width: 30%;
}
.descp-right h2 {
  font-size: 30px;
}

/* This is the CSS for the how it works section */

.services {
  background: url("../assets/services_background.jpg");
  height: 100vh;
  background-size: cover;
  position: relative;
  font-family: Segoe UI;
}
.services::before {
  content: "";
  z-index: 5;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.services-body {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 20;
  text-align: center;
}
.header {
  margin: 30px;
}
.header h1 {
  font-size: 50px;
  color: white;
  padding: 10px 0;
}
/* This is the CSS for the services cards*/

.services-cards {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 60px;
  padding: 0 70px;
}

.card {
  height: 450px;
  background-color: white;
  border-radius: 30px;
}
.card-body h2 {
  padding: 10px;
}
.card-header img {
  height: 250px;
  width: 250px;
}
.card-body {
  padding: 10px;
}
.card-body p {
  text-align: left;
}


/* This is the Css fro the Attraction or Meme Section */

.Attraction{
  width: 100%;
  height: 90vh;
  position: relative;
  background: url("../assets/AttractionBackground.png");
  background-size: cover;
  align-items: center;
  overflow: hidden;
}
.Attraction .main-body{
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 10px 20px;
}
.left-meme 
{
  width: 35%;

}
.left-meme img{
  
  height: 100%;
  width: 100%;

}
.right-quote 
{
  /* This Css for the background adjustment */
  width: 50%;
  background: url('../assets/QuoteBackground.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;

  /* This is for the Quotes in the section*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.upper-quote {
  font-family: Segoe UI;
}
.upper-quote p{
 font-size: 65px;
 color: var(--primary);
}
.upper-quote span{
  color: var(--ternary);
}
.lower-quote{
  padding: 15px 0;
  font-family: Segoe UI;
}
.lower-quote p{
  color: var(--secondary);
  font-size: 30px;
}

</style>

