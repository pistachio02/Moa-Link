const { User } = require('../../models');

// 유저의 id로 유저 정보 조회

module.exports = (req, res) => {
    const id = req.query.id;

    User
        .findOne({ where: { id } })
        .then((data) => {
            if(!data) {
                res.status(404).json({ message: 'Invalid User!' });
            }
            const userInfo = data;
            res.json({ userinfo: userInfo })
        })
        .catch((err) => {
            console.log(err);
          });
};
