const server = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/crud'
const app = server()

mongoose.connect(url, {useNewUrlParser : true})
const con = mongoose.connection

con.on('open', function(){
    console.log("connected..");
})


app.use(server.json())
const router = require("./routers/aliens")
app.use('/aliens', router)
app.listen(9000)