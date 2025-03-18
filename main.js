const express = require("express")
const app = new express()

app.get("/", function(req,res){
    return res.json("Worked")
})

app.listen(80, function(){
    console.log("Hosting runned.")
})