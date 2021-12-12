<template>
  <section class="learning">
    <div class="section1">
      <div class="imgTop"><img src="../assets/images/learn.jpg" /></div>
      <h1>Learning Section</h1>
    </div>

    <ul class="BD">
      <li class="breadcrumbs__item">
        <p class="BD-1">Departments</p>
        <a href="" class="BD-1" id="link"
          >All Departments
          <i
            class="fa fa-angle-down"
            style="
              padding-top: 5px;
              padding-left: 5px;
              color: #3a3a3a;
              font-size: 18px;
            "
          ></i
        ></a>
      </li>
    </ul>

    <div class="section2">
      <router-link to="/videos">
        <div class="content" v-for="(department,index) in departments" :key="index">
          <div class="card1">
            <div class="imgBx"><img :src="department.img" /></div>
            <div class="icon-name">
              <div class="icon"><i :class="department.icon"></i></div>
              <div class="depName">{{department.name}}</div>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <div class="section3">
      <router-link to="/departments"
        ><button class="btn">View All Departments</button></router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "learning",
  data() {
    return {
      departments:[
        {
          name: "Computer Science Dept.",
          img: require("../assets/images/Computer.jpg"),
          icon: "fas fa-laptop-code"
        },
        {
          name: "Electrical Department",
          icon: "fas fa-bolt",
          img: require("../assets/images/Electric.jpg")
        },
        {
          name: "Mechanical Department",
          icon: "fas fa-cogs",
          img: require("../assets/images/Mechanical.jpg")
        },
        
      ]
    };
  },
};
</script>

<style scoped>
.learning {
  font-family: "Poppins", sans-serif;
}
.section1 {
  position: relative;
  padding: none;
  display: block;
  align-items: center;
}

.section1 h1 {
  margin-left: auto;
  margin-right: auto;
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
  border: none;
  margin: none;
  padding: none;
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

.BD-1 {
  display: inline-block;
  padding: 10px 5px 0 10px;
  margin-left: 15px;
  color: #999999;
}

#link {
  text-decoration: none;
  color: #3a3a3a;
}

.section2 {
  /* margin: 30px; */
  display: inline-block;
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 50px 0 50px 0;
}

.section2 .content {
  display: inline-block;
  margin: 0;
  bottom: 0;
  max-width: 100%;
  align-items: center;
  align-content: space-between;
  position: relative;
  left: 12%;
  cursor: pointer;
}

.section2 .content .imgBx {
  border: none;
  overflow: hidden;
  height: 150px;
  width: 320px;
  margin: 10px;
  border-radius: 10px;
  position: relative;
}

.section2 .content .imgBx img {
  width: 100%;
}

.section2 .content .card1 .imgBx {
  border: none;
  overflow: hidden;
  background: rgb(27, 32, 51);
  cursor: pointer;
}

.section2 .content .card1 .imgBx img {
  opacity: 0.4;
}

.section2 .content .card2 .imgBx {
  border: none;
  overflow: hidden;
  background: rgb(36, 0, 0);
}

.section2 .content .card2 .imgBx img {
  opacity: 0.2;
}

.section2 .content .card3 .imgBx {
  border: none;
  overflow: hidden;
  background: rgb(94, 87, 0);
}

.section2 .content .card3 .imgBx img {
  opacity: 0.2;
}

.section2 .content .icon-name .icon {
  position: absolute;
  color: white;
  top: 30%;
  left: 45%;
  transform: scale(200%);
}

.section2 .content .icon-name .depName {
  position: absolute;
  align-items: center;
  color: white;
  top: 50%;
  margin-left: 20%;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 17px;
}

.section2 .content .icon-name {
  align-items: center;
  justify-content: center;
  text-align: center;
}

.section3 {
  width: 100%;
  position: relative;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  right: 0;
  margin: 0 auto;
}

.section3 .btn {
  position: absolute;
  bottom: 0;
  border: none;
  border-radius: 4px;
  box-shadow: #3a3a3a;
  padding: 6px 20px 6px 20px;
  transition-duration: 0.4s;
  margin: 10px 0;
  cursor: pointer;
}

.section3 .btn:hover {
  background-color: #232325;
  /* Green */
  color: white;
}

/* .section2 .card .content .icon i {
color: rgb(0, 3, 5);
margin: -300px;
align-items: center;
}





.section2 .card .content .imgBx img {
opacity: 0.4;
}

.section2 .card2 .content .imgBx {
position: absolute;
border: none;
border-radius: 100px;
overflow: hidden;
background: rgb(229, 233, 2);
}

.section2 .card2 .content .imgBx img {
opacity: 0.4;
}

.section2 .card3 .content .imgBx {
position: absolute;
border: none;
border-radius: 100px;
overflow: hidden;
background: rgb(4, 83, 253);
}

.section2 .card3 .content .imgBx img {
opacity: 0.4;
} */
</style>
