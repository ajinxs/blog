const express = require('express')
const path = require('path')
const app = new express()

const ejs = require('ejs')
app.set('view engine','ejs')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const mongoose = require('mongoose')
const { request } = require('express')
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true});

const Post = require('./models/BlogPost.js')


app.get('/',async (request, response)=>{
    const post = await Post.find({})
    response.render('index', {
        blogpost
    })
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

//POST REQUEST
app.post('/post/store', async(request, response)=>{
    await Post.create(request.body,(error, blogpost)=>{
        response.redirect('/')
    })
})

app.listen(8000, ()=>{
    console.log('Server is listening on port 8000');   
})