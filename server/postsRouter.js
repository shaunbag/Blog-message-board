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

postsRouter.post('/', (req, res, next) => {
    
    db.run('INSERT INTO Blogs (title, content) VALUES ($title, $content)', {
        $title: req.title,
        $content: req.content
    }, function(err){
    if(err){
        next(err);
    } 
    db.get(`SELECT * FROM Blogs WHERE id=${this.lastId}`, (err, blog) => {
        res.status(201).json({blogs: blog});
    });
})});

module.exports = postsRouter;