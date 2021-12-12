<template>
  <section class="departments">
    <div id="myHeader" class="section1">
      <div class="imgTop"><img src="../assets/images/learn.jpg" /></div>
      <h1>Departments</h1>
    </div>

    <div class="parent-pro-ultra-max">
      <div class="parent" v-for="(department,index) in departments" :key="index">
        
        <div class="box-size">
          <ul class="items">
            <img class="svg-logo" :src="department.icon" alt="" />

            <p class="dept-name">{{department.name}}</p>
          </ul>
          <hr class="line-cl-1" />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "departments",
  data() {
    return {
      departments: [
        {
          name: "Architecture Department",
          icon: require("../assets/images/dept-logo-svgs/architect.svg"),
        },
        {
          name: "Industrial and Manufacturing Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/industrial.svg"),
        },
        {
          name: "Architecture Engineering and Design Department",
          icon: require("../assets/images/dept-logo-svgs/architect-eng.svg"),
        },
        {
          name: "Institute of Business and Management",
          icon: require("../assets/images/dept-logo-svgs/IBM.svg"),
        },
        {
          name: "Civil Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/civil.svg"),
        },
        {
          name: "Laser and Optronics Center",
          icon: require("../assets/images/dept-logo-svgs/Laser.svg"),
        },
        {
          name: "City And Regional Planning Department",
          icon: require("../assets/images/dept-logo-svgs/CRP.svg"),
        },
        {
          name: "Mathematics Department",
          icon: require("../assets/images/dept-logo-svgs/math.svg"),
        },
        {
          name: "Chemical Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/chemical.svg"),
        },
        {
          name: "Mechatronics and Control Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/mechatronic.svg"),
        },
        {
          name: "Computer Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/CE.svg"),
        },
        {
          name: "Mechanical Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/mechanical.svg"),
        },
        {
          name: "Department of Computer Science",
          icon: require("../assets/images/dept-logo-svgs/CS.svg"),
        },
        {
          name: "Metallurgical and Materials Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/metallurgical.svg"),
        },
        {
          name: "Electrical Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/electrical.svg"),
        },
        {
          name: "Mining Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/mining.svg"),
        },
        {
          name: "Environmental Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/environmental.svg"),
        },
        {
          name: "Physics Department",
          icon: require("../assets/images/dept-logo-svgs/physics.svg"),
        },
        {
          name: "Geological Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/geo.svg"),
        },
        {
          name: "Petroleum and Gas Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/petroleum&gas.svg"),
        },
        {
          name: "Humanities management and Social Sciences Department",
          icon: require("../assets/images/dept-logo-svgs/CS.svg"),
        },
        {
          name: "Polymer and Process Engineering Department",
          icon: require("../assets/images/dept-logo-svgs/polymer.svg"),
        },
        {
          name: "Islamic Studies/Pak Studies",
          icon: require("../assets/images/dept-logo-svgs/islam.svg"),
        },
        {
          name: "Product and industrial Design Department",
          icon: require("../assets/images/dept-logo-svgs/PID.svg"),
        },
        {
          name: "Transportation Engineering and Management Department",
          icon: require("../assets/images/dept-logo-svgs/transportation.svg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.departments {
  overflow: hidden;
}
.section1 {
  position: relative;
  padding: none;
  display: block;
  align-items: center;
  scroll-behavior: smooth;
  overflow: hidden;
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
  width: 1500px;
  margin-left: -280px;
  opacity: 0.2;
  filter: hue-rotate(45deg);
  object-fit: cover;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-right: 0;
  transform: translate(15%, -50%);
}

.parent-pro-ultra-max {
  margin: 0 0 50px 0;
  display: grid;
  grid-template-columns: auto auto;
}

.parent {
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  width: 90%;
  height: 100px;
  margin: 0 auto;
  bottom: 0;
  position: relative;
}

.box-size {
  width: 60%;
  margin-left: 25px;
}

.svg-logo {
  width: 75px;
  height: auto;
  float: left;
}

.parent .box-size .items {
  align-items: center;
  position: absolute;
  width: 100%;
  top: 30px;
  cursor: pointer;
}

.dept-name {
  position: relative;
  width: 100%;
  left: 30px;
  top: 16px;
  font-size: 20px;
}

.line-cl-1 {
  position: relative;
  display: flex;
  flex-direction: row;
  left: 100px;
  margin: 0;
  margin-top: 0;
  width: 70%;
  bottom: -50px;
}

.line-cl-2 {
  position: relative;
  display: flex;
  flex-direction: row;
  left: 100px;
  margin: 0;
  margin-top: 0;
  width: 70%;
  bottom: -50px;
}
</style>
