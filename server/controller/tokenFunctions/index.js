require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    delete data.password;
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "3d" });
  },
    sendAccessToken: (res, accessToken) => {
    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .status(200)
      .json({ message: 'Successfully Logged In!' });
  },
  isAuthorized: (req) => {
    const authorization = req.cookies.accessToken;
    if(!authorization) {
      return null;
    }
    const userInfo = authorization
    try {
      return verify(userInfo, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  }
};
