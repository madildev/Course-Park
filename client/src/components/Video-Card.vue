<template>
  <div class="card">
    <div class="content">
      <div class="imgBx">
        <img src="../assets/algo.png" />
      </div>

      <div class="contentBx">
        <p>{{CourseName}}</p>
        <h1>{{Title}}</h1>
      </div>
      <div class="like">
        <i class="far fa-heart"></i>
        <p>{{likes}} Likes</p>
      </div>
      <input type="button" class="button" value="let's see" />
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  props:
  {
     VideoData:{
       type: Object,
     }
  }   
};
</script>

<style scoped>
.card {
  position: relative;
  width: 300px;
  height: 350px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(10px);
}
.imgBx img {
  height: 100%;
  width: 100%;
}
.card .content .imgBx {
  border: 1px solid #0f0f0f;
}

.card .content .contentBx p {
  color: #444444;
  font-size: 18px;
}

.card .content .contentBx h1 {
  color: #3d3d3d;
  font-size: 30px;
}

.card .content .like {
  margin-left: 5%;
}

.card .content .like i {
  margin-top: 15px;
  color: #444444;
  font-size: 20px;
  cursor: pointer;
}

.card .content .like i:hover {
  cursor: pointer;
  color: rgb(252, 0, 0);
}

.card .content .like p {
  margin-top: -7.5%;
  margin-left: 10%;
  color: #444444;
  font-size: 20px;
}

.card .content .button {
  background: transparent;
  cursor: pointer;
  border: none;
  outline: 1px solid var(--ternary);
  padding: 10px 25px;
  border-radius: 40px;
  font-size: 10px;
  float: right;
  margin-top: -7.5%;
  margin-right: 5%;
}

.card .content .button:hover {
  cursor: pointer;
  transition: 0.2s ease-in-out;
  background: #444444;
  color: #f1eeee;
}
</style>
