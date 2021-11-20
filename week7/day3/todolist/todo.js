const Sequelize = require("sequelize")
const {todolists} = require("./models")
console.log(todolists)
const express = require("express")
const users = require("./models/todolist")
const todolist = require("./models/todolist")
const es6Renderer = require("express-es6-template-engine")
const cors = require('cors')
const path = require("path")
const app = express();
app.use(cors());

const PORT = 3002




app.use("/js",express.static(path.join(__dirname, 'js')));
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');
app.use(express.json())

app.post("/createTask", async (req,res)=>{
const task = req.body.task
const newtask= await todolists.create({
    task: task
  
})
console.log(newtask)
// res.render("index",{locals: {newtask:newtask}});
// res.send(newtask)

})

app.get("/", async (req,res)=>{
    const task = req.body.task
    const newtask= await todolists.findAll(
    
)
    res.render('index',{locals: {newtask}});
    })


app.post("/updateTask/:id", async (req,res)=>{
    const task = req.body.task
    const newtask= await todolists.update(req.body,{
            where:{
                id:req.params.id
            }
            
        
        })
        res.send(newtask)
        })

   app.post("/deleteTask/:id", async (req,res)=>{
   const newtask = await todolists.destroy({
       where:{
           id:req.params.id
       }
   })
   res.send("task deleted")
   })     

  
   


   
  



app.listen(PORT,console.log("Port Working"))

