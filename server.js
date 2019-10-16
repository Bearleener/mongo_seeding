require('dotenv').config();
const express = require('express');
const app = express();

app.use('/', express.static('public'));

// express.json ersetzt den Body-Parser!!
app.use(express.json());

// siehe ganz unten app.listen
const port = process.env.PORT || 3000

// /////////////////////
// Part mongo-seeds Start
const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();
// unten dann Kurzform

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Post = require('./Post');

//Part mongo-seeds Ende
///////////////////////////

app.get('/blogposts', async (req, res) => {

    // Blogposts sortiert nach ID's
    const posts = await Post.find().sort({
        _id: -1
    });
    res.json(posts);
})

app.post('/blogposts', async (req, res) => {
    const post = await Post.create(req.body);
    res.json(post);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));