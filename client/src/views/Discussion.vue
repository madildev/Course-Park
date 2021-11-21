/* eslint-disable */ 
<template>
  
  <div class="discussion">
     <chat></chat>
  </div>

</template>

<script>
import chat from "../components/Chat.vue";

export default {
    name: "discussion",
    data(){
        return{

        }
    },
    components:{
      chat
    }  
}
</script>

<style>

</style>