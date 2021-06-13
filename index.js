const express = require('express')
const path = require('path')
const app = new express()

const ejs = require('ejs')
app.set('view engine','ejs')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true});


app.get('/',(request, response)=>{
  response.render('index')
})

app.get('/about',(request,response)=>{
   response.render('about')
})

app.get('/contact',(request, response)=>{
    response.render('contact')
})

app.get('/post',(request, response)=>{
    response.render('post')
})

app.get('/post/new',(request, response)=>{
    response.render('create')
})

app.listen(8000, ()=>{
    console.log('Server is listening on port 8000');   
})