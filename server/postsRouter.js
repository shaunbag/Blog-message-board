const express = require('express');
const postsRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./blogposts.sqlite');



postsRouter.get('/', (req, res, next) => {
    db.all('SELECT * FROM Blogs', (err, blogs) => {
        if(err){
            next(err);
        }
        res.status(200).json({blogs: blogs})
    })
    
})

module.exports = postsRouter;