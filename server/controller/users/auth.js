const { User } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);

  if(!accessTokenData) {
    res.status(401).send({ data: null, message: 'not authorized' });
  } else {
    User
      .findOne({ where: { id: accessTokenData.id } })
      .then((data) => {
        delete data.dataValues.password;
        return res.status(200).json({ data: { userInfo: data.dataValues }, message: 'ok!' })
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
