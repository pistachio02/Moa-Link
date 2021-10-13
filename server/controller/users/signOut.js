const { User } = require('../../models');

// 유저의 id로 유저 삭제 (회원탈퇴)

module.exports = async (req, res) => {
    const id = req.query.id;

    User
        .findOne({ where: { id } })
        .then((data) => {
            if(!data) {
                res.status(404).json({message: 'Invalid User!'});
            }
            User.destroy({ where: { id } })
            res.json({ message: 'Account Successfully Deleted!' })
        })
        .catch((err) => {
            console.log(err);
          });
};
