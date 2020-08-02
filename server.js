const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT | 3000 
app.use(express.static('./public/js'))
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.listen(PORT, ()=>{
    console.log("you are in the server")
})
