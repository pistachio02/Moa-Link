const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const controller = require('./controller');


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
app.use(cookieParser());


// 라우터 경로

app.get('/', controller.helloWorld);
app.get('/user', controller.userInfo);
app.post('/signup', controller.signUp);
app.post('/user', controller.signOut);
app.put('/user', controller.updateUserInfo);
app.post('/login', controller.logIn);
app.post('/logout', controller.logOut);



app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});

module.exports = app;