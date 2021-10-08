// Moa-Link Server 쪽 Issue 
// /server -> install -> npm run start X
// 이유? package.json -> script -> "start index.js" 
// 누락이 원인
 
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
const port = 80;

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.get('/', (req, res) => {
  res.status(201).send('Hello World');
});

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});
