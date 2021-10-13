const { Url } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);
  const categoryId  = 6;
  
  if(!accessTokenData) {
    res.status(401).send({ data: null, message: 'not authorized' });
  } else {
    await Url
        .findAll({ where: { userId: accessTokenData.id, categoryId: categoryId }})
        .then((data) => {
            if(data.length === 0) {
                return res.json({ message: "No Urls Posted Yet!"})
            }
            return res.status(200).json({ data })
        })
  }
};
