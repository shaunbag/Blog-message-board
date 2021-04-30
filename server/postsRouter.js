const express = require('express');
const postsRouter = express.Router();


postsRouter.get('/', (req, res) => {
    res.send("Its Still Working, and now i can start to send this data through my own API");
})

module.exports = postsRouter;