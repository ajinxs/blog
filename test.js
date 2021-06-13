const mongoose = require('mongoose')
const Post = require('./models/Blogpost')

mongoose.connect('mongodb://localhost:27017/blog', { useUnifiedTopology:true, useNewUrlParser: true})

Post.create({
    title: "The Monkey Game",
    body: "There is a game that is called the Monkey Game and it is played by very few monkeys"
}, (error, post)=>{
    console.log(error, post)
})
