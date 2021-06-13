const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('public'))

app.listen(8000, ()=>{
    console.log("Listening the server on port 8000");
})

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})

app.get('/about', (request, response)=>{
    response.sendFile(path.resolve(__dirname,'about.html'))
})

app.get('/contact', (request, response)=>{
    response.sendFile(path.resolve(__dirname,'contact.html'))
})

app.get('',(request, response)=>{
    response.writeHead(404)
    response.sendFile(path.resolve(__dirname,'pagenotfound.html'))
})

