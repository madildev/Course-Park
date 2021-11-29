//Importing all the important pacakges needed to create a server
const express = require('express');
const cors = require('cors');

const app = express();  // Created the server
const port = process.env.PORT || 3000 ;  //The port where the server will run

//Now Using the middleware for the server
app.use(cors());
app.use(express.json());

//Now creating the routes for the servers
app.listen(port,()=>{
    console.log('Server Started listening to port: ' +  port);
})

//The Home Route (Default Route)
app.get('/',(req,res)=>{
   res.send('Welcome To the Server');
})
