import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  
  state: { 
    isLogin: false, //This value will determine whether a user is login or not
    joined: false,
    CurrentUser:{},
    messages:[],
    departments: [],
    courses: [],
    videos: []
  },
  
  mutations: {

    toggleLogin(state) {
       state.isLogin = !(state.isLogin);    //This will toggle the login status 
    },
    toggleJoined(state){                      //This will toggle the chat group
      state.joined = !(state.joined);
    },
    currentUser(state,user){    //This will update the state with new user data
      state.CurrentUser = user;
    },
    setCourses(state,courses){   //This will update the courses list
      state.courses = courses;
    },
    setDepartments(state,departments){  //This will update the departments list
        state.departments = departments;
    },
    setVideos(state,videos){
      state.videos = videos;
    }

  },
  
  actions: {
    UserSignOut(context){            //Action to change status on SignOut
        context.commit('toggleLogin');
    },

    JoinedChat(context){
      context.commit('toggleJoined');
    },

    UserLogin(context,credentials){   //This will call the user login from the server
      axios.post("http://localhost:3000/login",{
        email: credentials.email,
        password: credentials.password
      }).then(res =>{
          context.commit('currentUser',res.data[0]);  
          console.log(res);
          console.log(context.state.CurrentUser); 
          context.commit('toggleLogin');     
      })

    },
    UserSignUp(context,credentials){
       axios.post("http://localhost:3000/signup",{
          roll_no: credentials.roll_no,
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
          depart_id: credentials.depart_id
       }).then(res=>{
          console.log(res);
          if(res.status == 400){
            console.log("User wasn't created Successfully!!");
          }
          else{
            console.log("User Created Successfully!!");
          }
       })
    },
    GetCourses(context){
      axios.get("http://localhost:3000/courses",{

      }).then(res=>{
         context.commit('setCourses',res.data);
         console.log(context.state.courses);
      }) 
    },
    GetDepartments(context){
      axios.get("http://localhost:3000/departments",{
      }).then(res=>{
        context.commit('setDepartments',res.data);
        console.log(context.state.departments);
      })
    },
    GetVideos(context)
    {
      axios.get("http://localhost:3000/videos",{

      }).then(res=>{
         context.commit('setVideos',res.data);
         console.log(context.state.videos);
      })
    }

  },
  
  modules: {},

});
