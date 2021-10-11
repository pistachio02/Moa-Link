const { User } = require('../../models');
const { generateAccessToken } = require('../tokenFunctions');


// 신규 유저 등록 (회원가입)

module.exports = async (req, res) => {
    const { email, password, username } = req.body;

    if(!email || !password || !username) {
        res.status(422).json({ messagd: "insufficient parameters supplied!" });
    };

    const userInfo = await User.findOne({ where: { email }});

    if(userInfo === null) {
        const newUser = await User.create({ 
            email: email,
            password: password,
            username: username
        });
        const accessToken = generateAccessToken(newUser.dataValues);
        res.set(
                "Set-Cookie",
                `jwt=${accessToken}; Domain=localhost; Path=/; Secure; HttpOnly; SameSite=None;`
           )
           .status(201)
           .json({ message: "Successfully Signed Up!" })
    } else {
        res.status(409).json({ message: "Email Already Exists!" });
    }
};
