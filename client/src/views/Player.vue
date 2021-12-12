<template>
  <section class="player">
    <div class="header">What is an algorithm?</div>

    <div class="video-section">
      <div class="video">
        <video controls>
          <source src="Video.mp4" type="Video/mp4" />
        </video>

        <div class="like">
          <i class="far fa-heart"></i>
          <p>10 Likes</p>
        </div>
      </div>

      <div class="descContainer">
        <div class="content">
          <h2>Description</h2>
          <p>
            olor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <h3>Resources/Links</h3>
          <a href="https://www.youtube.com/watch?v=61QSHrOuGEA" target="_blank"
            >Visit Countdown!</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.player {
  height: 100vh;
}
.video-section {
  display: flex;
  justify-content: space-around;
}
.header {
  font-size: 50px;
  font-weight: 500;
}

.descContainer {
  width: 20%;
  height: inherit;
  background: rgba(168, 167, 167, 0.37);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
}

.descContainer .content {
  padding: 40px 40px;
}

.descContainer .content h2 {
  font-size: 30px;
}

.descContainer .content p {
  font-size: 18px;
}

.descContainer .content h3 {
  font-size: 20px;
  margin-top: 20px;
}

.descContainer .content a {
  font-size: 20px;
}

.like i {
  color: #444444;
  cursor: pointer;
}

.like i:hover {
  cursor: pointer;
  color: rgb(252, 0, 0);
}

.like p {
  color: #444444;
}

.video {
  border: 2px solid rgba(253, 253, 253, 0);
  width: 70%;
}
.video video {
  height: 100%;
  width: 100%;
}
</style>
