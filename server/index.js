const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const helmet = require('helmet');
// const morgan = require('morgan');
const controller = require('./controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true
  })
  );
  // app.use(morgan());
app.use(cookieParser());

// 유저에 관한 요청들 처리
app.get('/', controller.helloWorld);
app.get('/user', controller.userInfo);
app.post('/signup', controller.signUp);
app.post('/user', controller.signOut);
app.put('/user', controller.updateUserInfo);
app.post('/login', controller.logIn);
app.post('/logout', controller.logOut);
app.get('/auth', controller.auth);

// Url에 관한 요청들 처리
app.get('/urlpage', controller.urlPage);

app.get('/games', controller.games);
app.get('/shopping', controller.shopping);
app.get('/works', controller.works);
app.get('/music', controller.music);
app.get('/etc', controller.etc);
app.post('/private', controller.private);

app.post('/addurl', controller.addUrl);
app.put('/updateurl', controller.updateUrl);
app.post('/deleteurl', controller.deleteUrl);



const port = 4000;

let Server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  Server = https.createServer(credentials, app);
  Server.listen(port, () => console.log(`https 서버가 ${port}번에서 작동중입니다.`));
} else {
  Server = app.listen(port, () => console.log(`http 서버가 ${port}번에서 작동중입니다.`));
}
module.exports = Server;