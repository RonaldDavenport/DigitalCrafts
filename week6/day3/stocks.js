// env
require("dotenv").config();
const token = process.env.ApiToken
const URL = process.env.supaURL

//supa-base connection
const {createClient} = require("@supabase/supabase-js");
const supabase = createClient(URL, token);
//server
const express = require("express")
const app = express();
const PORT = 3002

//middleware
app.use(express.json());
// template engine
const es6Renderer = require("express-es6-template-engine")
 app.use(express.static(__dirname + '/public'));
  app.engine("html", es6Renderer)
  app.set("views", "templates")
  app.set("view engine", "html")

//send data to database table
app.post("/sendStocks",async (req,res)=> {
 const { data, error } = await supabase.from("stockTable").insert([req.body]);
 res.send(console.log(req.body))

 
})
// delete data from the database
app.delete("/deleteStocks/:stocksID", async(req,res)=>{
const id = req.params.stocksID;
    const { data, error } = await supabase
  .from('stockTable')
  .delete()
  .match({ id : id })
  res.send(console.log(data))
})

//update data from database
app.put("/updateStocks/:stocksID", async(req,res)=>{
    const id = req.params.stocksID
    const { data, error } = await supabase
  .from('stockTable')
  .update(req.body)
  .match({ id: id })
  res.send(console.log(data))

})
//view all stocks from database
app.get("/viewStocks", async(req,res)=>{
    const { data, error } = await supabase.from("stockTable").select();
    res.send(data)

    
     


})

app.get("/viewStock/:stocksID", async(req,res)=>{
    const id = req.params.stocksID
    const { data, error } = await supabase.from("stockTable").select(id);
    res.send(console.log(req.body))

})
app.get("/viewStockSpecific/name", async(req,res)=>{
    const { data, error } = await supabase
  .from('stockTable')
  .select('name')
  res.send(data)
})
app.get("/viewStockSpecific/ticker", async(req,res)=>{
    const { data, error } = await supabase
  .from('stockTable')
  .select('ticker')
  res.send(data)
})
app.get("/viewStockSpecific/price", async(req,res)=>{
    const { data, error } = await supabase
  .from('stockTable')
  .select('price')
  res.send(data)
})

app.get("/", async(req,res)=>{
  const { data, error } = await supabase.from("stockTable").select();
 res.render("home",{
    locals:{
      data:data,
    },
    partials:{
      head: '/partials/head'
    }


  })
})

app.listen(PORT, console.log("Working"))