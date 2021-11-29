<template>
<div class="message">
    <div class="message-body">
        <h2>{{chat.username}}: </h2>
        <p>{{chat.text}}</p>
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

</style>