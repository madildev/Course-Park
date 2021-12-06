<template>
  <div class="login">
    
    
    <div class="modal-content-left">
      <form
        class="modal-form"
        id="form"
        @submit.prevent="event.preventDefault"
      >
        <h1>LOGIN</h1>

        <!-- email -->
        <div class="form-validation">
          <div class="icon"><i class="fas fa-envelope"></i> Email</div>

          <input
            type="email"
            class="modal-input"
            id="email"
            name="email"
            placeholder="Enter Email ID"
            v-model="email"
          />
          <p>Error msg</p>
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
            v-model="password"
          />
          <p>Error msg</p>
        </div>

        <a class="forgetPass" href="#">Forget Password?</a>

        <input type="submit" class="modal-input-btn" value="Continue"  @click="login"/>

        <div class="line">
          <div class="line1"></div>
          <div><p>Or</p></div>
          <div class="line2"></div>
        </div>

        <span class="modal-input-login"
          >Not Signed up?
            <router-link to="/signup"> Create an Account </router-link>   
        </span>
      </form>
    </div>

  </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            email: "",
            password: "",
        }
    },
    methods:{
        login(){
           this.$store.dispatch('UserLogin',{
               email: this.email,
               password: this.password
           }); 
           this.$router.replace('/');  
        }
    },
    computed:{
        isLogin(){
            return this.$store.state.isLogin
        }
    } 
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

.login {
    background: url("../assets/login_background.jpg");
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
     font-family: 'Poppins',sans-serif;
}
.login::before{
    content: '';
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.3);

}
.modal-content-left {
    position: absolute;
    z-index: 10;
    background: linear-gradient(90deg,rgba(0,0,0,.6) 0%, rgba(0,0,0,0.6) 100% ); 
    border-radius:  3px 0 0 3px;
    width: 350px;
    padding: 20px;
}

.modal-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} 

.modal-form h1{
    font-size: 1.3rem;
    text-align: start;
    width: 80%;
    margin-bottom: 1rem;
    color: white;
}

.icon{
    color: white;
    font-size: .8rem;
}

.fas{
    padding-right: 4px;
}

.form-validation{
    margin-bottom: .5rem;
    width: 80%;
}

.form-validation.error{
    margin-bottom: 1.5rem;
    position: relative;
}

.form-validation.valid{
    margin-bottom: .5rem;
    position: relative;
}

.form-validation p{
    font-size: .7rem;
    margin-top: .5rem;
    color:red;
    position: absolute;
    top:2.4rem;
    display: none;
    font-weight: bold;
}

.form-validation.error p{
    display: block;
}

.modal-input{
    display: block;
    padding-left: .5rem;
    outline: none;
    border-radius: 15px;
    border: none;
    height: 1.6rem;
    width: 100%;
    box-shadow: 1px  1px 1px rgba(0,0,0,.05);
}

.modal-input::placeholder{
    color: #b1b1b1;
}

.modal-input-btn{
    width: 85px;
    height: 1.7rem;
    background-color: #FFCC00 ;
    border-radius: 15px;
    border: none;
    outline: none;
    color: white;
    font-weight: bold;
}
.modal-input-btn:hover{
    cursor: pointer;
    background-color: #002D62 ;
    color: white;
    transition: all .4s ease-out;
}
.modal-input-login{
    font-size: .8rem;
    margin-top: 1rem;
    color: white;
    text-align: center;
    width: 80%;
}

.modal-input-login a{
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

.line1{
    width: 80%;
    height: 2px;
    background: #bebbbb; 
    margin-top: 40px;
    align-items: center;
}
.line2{
    width: 80%;
    height: 2px;
    background: #bebbbb;
    align-items: center;  
    margin-top: 40px;
}

.line p{
    color: #bebbbb;
    margin-top: 30px;
    text-align: center;
}

.line{
    width: 80%;
    display: grid;
    
    /* keeping in left right  mid positions */
    grid-template-columns: 1fr .1fr 1fr;
    grid-gap: 1px;
    justify-items: center;    
}
.forgetPass{
text-decoration: none;
color: white;
font-size: .8rem;
margin-bottom: 5px;
}


</style>
