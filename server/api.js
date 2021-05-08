const express = require('express');
const apiRouter = express.Router();
const postsRouter = require('./postsRouter');

apiRouter.use('/posts', postsRouter);

apiRouter.get('/', (req, res) => {
    res.send('Response within the api router');
});


module.exports = apiRouter;