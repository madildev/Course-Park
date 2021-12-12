<template>

<!-- This is the Contact Us Section -->
    <section class="contact-us" id="contact-us">
      <div class="contact-info">
        <div class="contact-header">
          <h1>Contact Us</h1>

          <h2>Getting In Touch Is Easy</h2>
        </div>

        <div class="contact-body">
          <div class="contact">
            <h2><i class="fas fa-phone-alt"></i> Call us at</h2>
            <p>0300-00000000</p>
            <p>0300-00000000</p>
          </div>

          <div class="location">
            <h2><i class="fas fa-map-marker-alt"></i> Location</h2>
            <p>UET-LHR</p>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <form>
          
          <input 
          type="text"
          name="text"
          id="text"
          placeholder="Enter Your Name" />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Type your message" />

      

          <input type="submit" value="submit" />
        
        </form>
      
      </div>

    </section>
    
</template>

<script>
export default {
    name: "contact",

}
</script>

<style scoped>

/* This is the CSS for the contact us section */

.contact-us {
  background-image: url("../assets/contact_background.jpeg");
  background-size: auto;
  background-position-y: 950px;
  display: flex;
  justify-content: space-evenly;
  height: 70vh;
  width: 100%;
  position: relative;
  font-family: Segoe UI;
}
.contact-us::before {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgb(168, 171, 172,0.15);
}
.contact-info {
  z-index: 10;
  width: 50%;
  color: white;
  margin: 40px 40px;
}
.contact-header h1 {
  padding: 20px 0;
  font-size: 40px;
}
.contact-header h2{
   padding: 0 40px;
}

.contact {
  margin: 30px 0;
}
.contact h2 {
  margin: 15px 0;
}
.contact p {
  padding: 0 20px;
  font-size: 20px;
}
.location {
  margin: 30px 0;
}
.location h2 {
  margin: 15px 0;
}
.location p {
  padding: 0 30px;
  font-size: 20px;
}
.contact-form {
  z-index: 10;
  margin: 50px 40px;
}
.contact-form form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Segoe UI;
}

.contact-form form input[type="text"] {
  margin: 20px;
  padding: 10px 60px;
  border-radius: 20px;
  border: none;
  font-family: Segoe UI;
}

.contact-form form input[type="email"] {
  margin: 20px;
  padding: 10px 60px;
  border-radius: 20px;
  border: none;
  font-family: Segoe UI;
}
.contact-form form textarea {
  border-radius: 10px;
  text-align: center;
  margin: 10px 0;
  padding: 0 30px;
  font-family: Segoe UI;
}

.contact-form form input[type="submit"] {
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  font-family: Segoe UI;
  background-color: var(--secondary);
}


</style>