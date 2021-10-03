const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const apiRouter = require('./server/api');


app.use('/api', apiRouter);


module.exports = app;