<template>
<div class="message">
    <div class="message-body">
        <p>{{chat.username}}: {{chat.text}} </p>
    
    </div>
</div>    
</template>

<script>
export default {
    name: "message",
    data(){
        return{

        }
    },
    props:{
       chat: {
         type: Object,
       }
    }

}
</script>

<style scoped>
.message-body{
    padding: 15px 0;
    margin: 10px;
    border: 1px solid black;
    width: auto;
    border-radius: 15px;
}
.message-body p{
  margin: 0 10px;  
}


</style>