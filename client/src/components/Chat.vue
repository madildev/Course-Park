/* eslint-disable */
<template>
  <div class="chat">
    <!-- This is the pop to join the group chat-->

    <div v-if="!joined" class="pop-up">
      <i class="fas fa-times"></i>
      <h2>Welcome to the Chat Group</h2>
      <ul>
        <li>This group is for the Queries</li>
        <li></li>
        <button @click="join">Join</button>
      </ul>
    </div>

    <!-- This is where the messgages will show-->

    <div v-if="joined">
      <message
        class="chat-messages"
        v-for="txt in messages"
        :key="txt"
        :chat="txt"
      ></message>
    </div>

    <!-- This is the typing message area-->
    <div class="message-area" v-if="joined">
      <div class="emoji-area">
        <i class="far fa-grin-alt"></i>
      </div>
      <div class="text-area">
        <form action="">
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
            joined: false,
            currentUser: "",
            text: "",
            messages: [],
        }
    },
    methods: {
    join() {
      this.joined = true;
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
        user: this.currentUser,
      };
      this.messages = this.messages.concat(message);
      this.socketInstance.emit('message', message);
    },
  },
       
};  

  
</script>

<style>
.chat {
  height: 100vh;
}
.message-area {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;
}
.message-area .emoji-area {
  width: 10%;
  text-align: center;
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
</style>
