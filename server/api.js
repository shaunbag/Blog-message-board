const express = require('express');
const apiRouter = express.Router();
const postsRouter = require('./postsRouter');

apiRouter.use('/posts', postsRouter);


module.exports = apiRouter;