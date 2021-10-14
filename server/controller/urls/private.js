const { Url } = require('../../models');
const { User } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);
  const { userPassword } = req.body;
  const categoryId  = 6;

  
  if(!accessTokenData) {
    res.status(401).send({ data: null, message: 'not authorized' });
    return;
  } else {
    await Url
        .findAll({ where: { userId: accessTokenData.id, categoryId: categoryId }})
        .then(async (data) => {
            if(data.length === 0) {
                return res.json({ message: "No Urls Posted Yet!"})
            }
            const userInfo = await User.findAll({ where: { id: accessTokenData.id } })
            const uPassword = userInfo[0].password
            if(uPassword !== userPassword) {
              return res.json({ data, isValid: false })
            }
            return res.status(200).json({ data, isValid: "true" })
        })
  }
};
