var express = require('express')
var router = express.Router()
const controller = require('./../controller/index.js') 


// 에러 발생시에 리턴할 값 
const errorResp = (res, e) => {
    console.error(e)
    res.status(500).json({
        error: e.message
    })
}

// 요청 성공시에 보내줄 기본 값
const successResp = (res) => {
    res.json({ result: 'success' })
}

// Url 목록
router.get('/user', controller.getUser);


module.exports = router;