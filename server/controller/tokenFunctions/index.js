require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    delete data.password;
    return sign(data, process.env.ACCESS_SECRET);
  },
  sendAccessToken: (res, accessToken) => {
    res.set(
      "Set-Cookie",
      `jwt=${accessToken}; Domain=localhost; Path=/; Secure; HttpOnly; SameSite=None;`
    ).status(200).json({ message: 'Successfully Logged In!' });
  },
  isAuthorized: (req) => {
    const authorization = req.cookies.jwt;
    if(!authorization) {
      return null;
    }
    const token = authorization
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  }
};
