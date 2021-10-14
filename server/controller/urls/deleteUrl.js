const { Url } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {

    const accessTokenData = isAuthorized(req);
    const { id } = req.body;

    if(!accessTokenData) {
        res.status(401).send({ data: null, message: 'not authorized' });
        return;
    } else {
        Url
            .destroy({ where: { id } })
            .then(() => {
                return res.json({ message: 'Url Successfully Deleted!' })
            })
            .catch((err) => {
                console.log(err);
            });
    }
};
