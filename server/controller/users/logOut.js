// ๋ก๊ทธ์์

module.exports = (req, res) => {
    res
        .clearCookie('accessToken')
        .status(205).json({ message: 'Successfully Logged Out!' });
};
