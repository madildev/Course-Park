<template>
  <section class="videos">
    <div class="section1">
      <div class="imgTop"><img src="../assets/images/learn.jpg" /></div>
      <h1>Computer Science</h1>

      <input type="text" name="text" id="input" placeholder="Search Course" />
    </div>

    <div class="section2">Course Videos</div>

    <div class="card-area">
       <VideoCard></VideoCard>
    </div>
  </section>
</template>

<script>
import VideoCard from "../components/Video-Card.vue";
export default {
  name: "videos",
  data() {
    return {};
  },
  components:
  {
     VideoCard
  }
};
</script>

<style scoped>
.section1 {
  position: relative;
  align-items: center;
}

.section1 h1 {
  position: absolute;
  font-size: 50px;
  color: rgb(255, 255, 255);
  top: 50%;
  margin: 0;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.section1 .imgTop {
  position: relative;
  overflow: hidden;
  height: 250px;
  width: 100%;
  background: linear-gradient(to top, #1a1b1ae5, #421d7ece);
}

.section1 .imgTop img {
  opacity: 0.2;
  filter: hue-rotate(45deg);
  margin: -90px -15px 0 -100px;
}

#input {
  padding: 20px 20px;
  text-decoration: #ffffff;
  background: #e7e6e6;
  border: 3px solid #f1eeee;
  border-radius: 20px;
  text-align: center;
  opacity: 0.8;
}

#input:hover {
  opacity: 1;
  display: block;
  padding: 20px 25px;
  width: 30%;
  height: 30%;
  background: #f3f1f1;
  border: 2px solid #0f0f0f;
  border-radius: 60px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.section2 {
  font-size: 60px;
  opacity: 0.9;
  color: rgb(29, 29, 29);
  text-decoration: underline;
  text-decoration-style: 2px solid;
  text-decoration-color: #383838;
}

</style>
