const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const blogSchema = new Schema ({
    title: String,
    author: String,
    body: String,
    date: {type: Date, default: Date.now},       
});


module.exports = mongoose.model('Post', blogSchema);