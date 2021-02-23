//MONGODB PASSWORD : G5ayv6CrtrZOmJzv
//MONGODB CONNCECTION : mongodb+srv://admin:<password>@cluster0.mqvo4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://admin:G5ayv6CrtrZOmJzv@cluster0.mqvo4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(()=>{
        console.log('Successfully connected')
    })
    .catch((error)=> {
        console.log("Problems with connection")
        console.error(error)
    })


app.use((req, res) => {
    res.json({ message : 'Your request was succeful'})
})

module.exports = app

