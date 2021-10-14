const { Url } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);

  if(!accessTokenData) {
    res.status(401).send({ data: null, message: 'not authorized' });
    return;
  } else {
    Url
        .findAll({ where: { userId: accessTokenData.id, allUrlId: 1 }})
        .then((data) => {
            if(data.length === 0) {
                res.json({ message: "No Urls Posted Yet!"})
                return;
            }
            return res.status(200).json({ data })
        })
  }
};
