import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    
    isLogin: false, //This value will determine whether a user is login or not
    
  },
  mutations: {

    toggleLogin(state) {
       state.isLogin = !(state.isLogin);    //This will toogle the login status 
    }

  },
  actions: {
    UserLogin(context){           //Action to change status on login
       context.commit('toggleLogin'); 
    },
    UserSignOut(context){            //Action to change status on SignOut
        context.commit('toggleLogin');
    }

  },
  modules: {},

});
