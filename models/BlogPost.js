const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String
});

const Post = mongoose.model('Post',BlogPostSchema);
module.exports = Post