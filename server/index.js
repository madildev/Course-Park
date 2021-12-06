const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require("./DB/index");
const upload = require("express-fileupload");
const http = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(cors());
app.use(express.json());
app.use(upload());
app.use(morgan('combined'));
app.use(express.static(__dirname + "/public")); 

 /* This segment is for the chat sockets*/
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(`user ${socket.id} is connected.`)

    socket.on('message', data => {
        socket.broadcast.emit('message:received', data)
    })

    socket.on('disconnect', () => {
        console.log(`user ${socket.id} left.`)
    })
})


//The server is running on the port
server.listen(3000, () => {
    console.log('Course Park Server is running on port: 3000')
})



app.get('/',(req,res)=>{
    res.send('Welcome to the Course Park Server');
})

//The route for getting departments 
app.get('/departments',(request,response)=>{
    db.query('Select * from departments',(err,res)=>{
        if(err){
            throw(err);
        }
        else{
            console.log(res);
            response.send(res);
        }
    })    
});

//The route for getting courses 
app.get('/courses',(request,response)=>{
    db.query('Select * from course',(err,res)=>{
        if(err){
            throw(err);
        }
        else{
            console.log(res);
            response.send(res);
        }
    })
});

app.post("/upload", (request, response) => {
    if (request.files) {
      let file = request.files.file;
      let filename = file.name;
      let fileP
      ath = path.join(__dirname, "/public/images/");
      file.mv(filePath + filename, (err) => {
        console.log(err);
      });
      db.query(`Insert Into Videos values ('${filename}')`, (err, res) => {
        if (err) {
          throw err;
        } else {
          console.log("File Saved Successfully!!");
          response.send({
            message: "File Uploaded Successfully!!",
          });
        }
      });
    } else {
      response.send("Error has occured!!");
    }
  });
  
  app.get("/videos", (request, response) => {
    db.query(`Select * from content where `, (err, res) => {
      if (err) {
        throw err;
      } else {
        console.log(res);
        const filename = res.recordset[0].Vid_Url;
        const filePath = path.join(__dirname,"/public/images/");
        /*const options = {
          root: path.join(__dirname, "public/images"),
        };*/
        response.sendFile(filePath + filename,(err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(" File " + filename + " Sent Successfully ");
          }
        });
      }
    });
  });
  

  //This route is for the log in the Users
  app.post("/login",(request,response)=>{
      db.query(`Select * from students where email= '${request.body.email}' And password= '${request.body.password}' `,(err,res)=>{
          if(err){
              throw(err)
          }else{
              if(res == null)
              {
                response.status(400).send("User Doesn't Exist!!!");
              }
              else
              {
                console.log("User Loged In Successfully!!!");
                console.log(res);
                response.send(res);
              }
          }
      })
  });

  //This route is for the SignUp User
  app.post("/signup",(request,response)=>{
    db.query(`Insert Into students (roll_no,username,email,password,depart_id) Values ('${request.body.roll_no}','${request.body.username}','${request.body.email}','${request.body.password}','${request.body.depart_id}')`,(err,res)=>{
       if(err){
          throw(err);
       }
       else{
        console.log(res);
        response.status(200).send("User Registered Successfully!!");
      }
    })
 
  });