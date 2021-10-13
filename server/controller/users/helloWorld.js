// 기본적으로 hello world를 응답해주는 페이지

module.exports = (req, res) => {
    return res.status(201).send('Hello World!');
}
