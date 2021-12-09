<template>
  
  <div class="signup">
    <div class="modal-content-right">
      <form class="modal-form" id="form" @submit.prevent="event.preventDefault">
        <h1>Create Account</h1>

        <div class="form-validation" v-if="errors.length">
          <p
            v-for="(error, index) in errors"
            :key="index"
            class="form-validation"
          >
            {{ error }}
          </p>
        </div>

        <!-- username -->
        <div class="form-validation" required>
          <div class="icon"><i class="fas fa-user"></i> User Name</div>
          <input
            type="text"
            class="modal-input"
            id="name"
            name="name"
            placeholder="Enter Username"
            v-model="info.name"
          />
        </div>

        <!-- email -->
        <div class="form-validation">
          <div class="icon"><i class="fas fa-envelope"></i> Email</div>

          <input
            type="email"
            class="modal-input"
            id="email"
            name="email"
            placeholder="Enter Email ID"
            required
            v-model="info.email"
          />
        </div>

        <!-- Departments -->

        <div class="form-validation">
          <div class="icon"><i class="fas fa-building"></i> Department</div>

          <select
            class="modal-input"
            v-model="info.depart_id"
            required
          >
            <option value="" disabled>Select your Department</option>
            <option
              v-for="(depart, index) in Departments"
              :key="index"
              :value="depart.id"
            >
              {{ depart.name }}
            </option>
          </select>
        </div>

        <!-- password -->
        <div class="form-validation">
          <div class="icon"><i class="fas fa-lock"></i> Password</div>

          <input
            type="password"
            class="modal-input"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
            v-model="info.password"
          />
        </div>

        <!-- confirm password -->
        <div class="form-validation">
          <div class="icon"><i class="fas fa-lock"></i> Confirm Password</div>

          <input
            type="password"
            class="modal-input"
            id="password-confirm"
            name="password"
            placeholder="Confirm Password"
            required
            v-model="info.confirmPassword"
          />
        </div>

        <input
          type="submit"
          class="modal-input-btn"
          value="Sign Up"
          @click="SignUp"
        />

        <span class="modal-input-login"
          >Already have an account?
          <router-link to="/login">Login Here</router-link>
        </span>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "SignUp",
  data() {
    return {
      info: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        roll_no: "",
        depart_id: 0,
      },
      errors: [],
    };
  },
  
  methods: {
    //Check the Email
    checkEmail(email) {
      if (email.includes("@student.uet.edu.pk")) {
        return true;
      } else {
        this.errors.push("Enter Valid University Email!!");
      }
    },
    //Check the Password
    checkLength(input, min, max) {
      if (input.length < min) {
        this.errors.push(
          `The password must be at least ${min} characters long`
        );
      } else if (input.length > max) {
        this.errors.push(
          `The password cannot be longer than ${max} characters`
        );
      } else {
        return true;
      }
    },
    //Matches the Password
    passwordMatch(input1, input2) {
      if (input1 !== input2) {
        this.errors.push(`Passwords do not match!!`);
      } else {
        return true;
      }
    },
    //class the signup fucntion
    SignUp() {
      this.errors = [];
      if (
        this.checkLength(this.info.password, 8, 25) &&
        this.passwordMatch(this.info.password, this.info.confirmPassword) &&
        this.checkEmail(this.info.email)
      ) {
        console.log("All The Data hass been validated!!");

        this.$store.dispatch("UserSignUp", {
          roll_no: this.info.roll_no,
          username: this.info.name,
          email: this.info.email,
          password: this.info.password,
          depart_id: this.info.depart_id,
        });
      }
    },
  },
  computed: {
    Departments() {
        return this.$store.state.departments;
      },
    getRollNo() {
      return this.info.roll_no = this.info.email.substr(0,this.info.email.indexOf("@"));
    },
  },
};


</script>

<style scoped>
.signup {
  height: 100vh;
  background: url("../assets/services_background.jpg");
  background-size: cover;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.signup::before {
  content: "";
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.modal-content-right {
  position: absolute;
  z-index: 10;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  border-radius: 3px 0 0 3px;
  width: 350px;
  padding: 20px;
}

.modal-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal-form h1 {
  font-size: 1.3rem;
  text-align: start;
  width: 80%;
  margin-bottom: 1rem;
  color: white;
  /* for moveing left right */
}

.icon {
  color: white;
  font-size: 0.8rem;
}

.fas {
  padding-right: 4px;
}

.form-validation {
  margin-bottom: 0.5rem;
  width: 80%;
}

.form-validation.error {
  margin-bottom: 1.5rem;
  position: relative;
}

.form-validation.valid {
  margin-bottom: 0.5rem;
  position: relative;
}

.form-validation p {
  font-size: 0.7rem;
  margin-top: 0.5rem;
  color: red;
  position: absolute;
  top: 2.4rem;
  font-weight: bold;
}

.form-validation.error p {
  display: block;
}

.modal-input {
  display: block;
  padding-left: 0.5rem;
  outline: none;
  border-radius: 15px;
  border: none;
  height: 1.6rem;
  width: 100%;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
}

.modal-input::placeholder {
  color: #b1b1b1;
}

.modal-input-btn {
  width: 85px;
  height: 1.7rem;
  background-color: #ffcc00;
  border-radius: 15px;
  border: none;
  outline: none;
  color: white;
  font-weight: bold;
}
.modal-input-btn:hover {
  cursor: pointer;
  background-color: #002d62;
  color: white;
  transition: all 0.4s ease-out;
}
.modal-input-login {
  font-size: 0.8rem;
  margin-top: 1rem;
  color: white;
  text-align: center;
  width: 80%;
}

.modal-input-login a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 15px;
}

/* .googleSign-btn
{

    background: url(goole.jpg);
    background-repeat: no-repeat;
    position: left;
    padding-left: 20px;
}
#googleSign{
    text-align: center;
    background-color: white;
} */

.line1 {
  width: 80%;
  height: 2px;
  background: #bebbbb;
  margin-top: 40px;
  align-items: center;
}
.line2 {
  width: 80%;
  height: 2px;
  background: #bebbbb;
  align-items: center;
  margin-top: 40px;
}

.line p {
  color: #bebbbb;
  margin-top: 30px;
  text-align: center;
}

.line {
  width: 80%;
  display: grid;

  /* keeping in left right  mid positions */
  grid-template-columns: 1fr 0.1fr 1fr;
  grid-gap: 1px;
  justify-items: center;
}
.forgetPass {
  text-decoration: none;
  color: white;
  font-size: 0.8rem;
  margin-bottom: 5px;
}
</style>
