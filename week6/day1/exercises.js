console.log("im working")

const express = require("express")
const app = express();
const PORT = 3001

const cowsay = require("cowsay")

app.get('/getCowUserName',(req,res)=>  {
res.send(cowsay.say({
    text : "Adding Cow User",
    e : "Oo",
    T: "U"
}))
}
)
app.get('/getCowAppointment', (req,res) => {
    res.send(cowsay.think({
       text: "Setting Up Cow Appointment",
       e: "Oo",
       T: "U"

    }))
})
app.post('/sendCowUserName', (req,res) => {
    res.send(cowsay.think({
       text: "AddingCowUser",
       e: "Oo",
       T: "U"

    }))
})
app.post('/sendCowAppointment', (req,res) => {
    res.send(cowsay.say({
       text: "Setting Up Cow Appointment",
       e: "Oo",
       T: "U"

    }))
})
app.delete('/delete', (req,res) => {
    console.log("item deleted")
}
)
app.listen(PORT)