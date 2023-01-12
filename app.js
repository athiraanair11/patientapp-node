const Bodyparser=require("body-parser")
const Cors=require("cors")
const Express=require("express")
const Mongoose=require("mongoose")

var app=Express()

app.listen(2016)

app.get("/",(req,res)=>{


    res.send("welcome to my website")

  
})


app.get("/add",(req,res)=>{

  res.send("add patient details")
})

app.get("/view",(req,res)=>{


  res.send("view patient details")
})

app.get("/edit",(req,res)=>{

  res.send("edit patient details")
})

app.get("/delete",(req,res)=>{

  res.send("delete patient details")
})

app.get("/enter",(req,res)=>{

  res.send("enter into patients page")
})