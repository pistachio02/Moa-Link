const { User } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

// Email과 Password로 로그인

module.exports = (req, res) => {
    const { email, password } = req.body;

    User
        .findOne({ where: { email, password } })
        .then((data) => {
            if(!data) {
                res.status(404).json({ message: 'Invalid!' });
            }
            const accessToken = generateAccessToken(data.dataValues);
            sendAccessToken(res, accessToken);
        })
        .catch((err) => {
            console.log(err);
        });
};
