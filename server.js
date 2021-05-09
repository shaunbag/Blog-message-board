const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;


const apiRouter = require('./server/api');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.use('/api', apiRouter);




app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`);
});

module.exports = app;