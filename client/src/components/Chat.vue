/* eslint-disable */
<template>
  <div class="chat">

    <div class="chat-header" v-if="joined">
        <div class="grp-name">

        </div>
        <div class="options">

        </div>
    <div>
        
      </div>

    </div>
   
   <!-- This is the pop to join the group chat-->

    <div v-if="!joined" class="pop-up">
      <h2>Welcome to the Chat Group</h2>
      <ul>
        <li>This group is for the Queries</li>
        <li></li>
        <button @click="join">Join</button>
      </ul>
    </div>

    <!-- This is where the messgages will show-->

    <div v-if="joined" class="messages-box">
      <message
        v-for="(txt,index) in messages"
        :key="index"
        :chat="txt"
      ></message>
    </div>

    <!-- This is the typing message area-->
    <div class="message-area" v-if="joined">
      <div class="emoji-area">
        <i class="far fa-grin-alt"></i>
      </div>
      <div class="text-area">
        <form @submit.prevent="event.default">
          <input type="text" name="text" id="text" v-model="text" />
        </form>
      </div>
      <div class="submit-area">
        <button @click="sendMessage">Send</button>
      </div>
    </div>

  </div>
</template>

<script>
import message from "./Message.vue";
import io from "socket.io-client";

export default {
  name: "chat",
  components: {
    message,
  },
  data() {
       return{
            currentUser: "madildev",
            text: "",
            messages: [],
        }
    },
    computed:{
      joined(){
        return this.$store.state.joined;
      }
    },
    methods: {
    join() {
      this.$store.dispatch("JoinedChat");
      this.socketInstance = io("http://localhost:3000");
      
      this.socketInstance.on(
        "message:received", (data) => {
          this.messages = this.messages.concat(data);
        }
      )
    },

    sendMessage() {
      this.addMessage();
      this.text = "";
    },
    addMessage() {
      const message = {
        id: new Date().getTime(),
        text: this.text,
        username: this.currentUser,
      };
      this.messages = this.messages.concat(message);
      this.socketInstance.emit('message', message);
    },
  },
       
};  

  
</script>

<style>
.chat{
   overflow: hidden;

}
.chat-header{
  height: 40px;
  border-bottom: 1px solid black;
  position: fixed;

}

.pop-up{
 position: absolute;
 text-align: center;
 padding: 20px 20px;
 margin: 10px 0;
 z-index: 10;
 width: 30%;
 line-height: 50px;
 border: 1px solid black;
 transform: translate(50%,50%);
 background-color: var(--light);
}
.pop-up li{
  list-style: none;
}
.pop-up button{
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: var(--primary);
}

.message-area {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark);
  color: white;
}
.message-area .emoji-area {
  width: 10%;
  text-align: center;
  cursor: pointer;
}
.message-area .text-area {
  width: 80%;
}

.text-area form input[type="text"] {
  width: 100%;
  padding: 10px 10px;
}
.message-area .submit-area {
  width: 10%;
  text-align: center;
}
.submit-area button {
  padding: 10px 10px;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
}
.messages-box {
  overflow: auto;
  height: 70vh;
}

</style>
