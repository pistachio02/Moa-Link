const { User } = require('../../models');

// 유저의 id로 유저 정보 수정

module.exports = (req, res) => {
    const id = req.query.id;
    const { username, password } = req.body;

    User
        .findOne({ where: { id } })
        .then((data) => {
            if(!data) {
                res.status(404).json({ message: 'Invalid User!' });
            }
            User.update({ 
                username: username, password: password
            }, { where: {
                id: id
            } })
            res.json({ message: 'Successfully Changed Username & Password!' })
        })
        .catch((err) => {
            console.log(err);
        });
};
