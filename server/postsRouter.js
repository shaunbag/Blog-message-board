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
    console.log(req.body);
    db.run('INSERT INTO Blogs (title, content) VALUES ($title, $content)', {
        $title: req.body.title,
        $content: req.body.content
    }, function(err){        
    if(err){
        next(err);
    } 
    db.get(`SELECT * FROM Blogs WHERE id=${this.lastId}`, (err, blogs) => {
        res.status(201).json({blogs: blogs});
    });
})
});


postsRouter.delete('/:id', (req, res, next) => {
    db.run('DELETE FROM Blogs WHERE id=$id', {
        $id: req.params.id
    }, (err)=> {
        if(err){
            console.log(err);
            next(err);
        } else {
            db.get(`SELECT * FROM Blogs WHERE id=${this.lastId}`, (err) => {
                res.sendStatus(200).send()
            })
        }
    }    
    )
});

module.exports = postsRouter;