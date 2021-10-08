const express = require('express');
const cors = require('cors');
const router = require('./routes/index.js');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = 8080;

app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: true,
    credentials: true
  })
);
// app.use(morgan());

app.get('/', (req, res) => {
  res.status(201).send('Hello World');
});


app.get('/user', router);


app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});

module.exports = app;