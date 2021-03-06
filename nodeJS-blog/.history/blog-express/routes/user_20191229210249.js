var express = require('express');
var router = express.Router();
var { login, register, userInfo } = require('../controller/user');
var { SuccessModel, ErrorModel } = require('../model/resModel');

/* GET home page. */
router.post('/login', function(req, res, next) {
    const { username, password } = req.body;
    const result = login(username, password);
    return result.then(data => {
        if (data.username) {
            console.log('data')
            //设置session
            req.session.username = data.username;
            req.session.realname = data.realname;
            req.session.id = data.id

            res.json(
                new SuccessModel()
            )
        }
        res.json(
            new ErrorModel('登录失败')
        )
    })
});

router.post('/register', function(req, res, next) {
    const { username, password, realname } = req.body;
    const result = register(username, password, realname);
    return result.then(data => {
        if (data.username) {
            //设置session
            req.session.username = data.username;
            req.session.realname = data.realname;

            res.json(
                new SuccessModel()
            )
        }
        res.json(
            new ErrorModel('登录失败')
        )
    })
});

router.post('/info', function (req, res, next) {
    const id = req.query.id
    const { username, oldPassword, newPassword, information } = req.body;
    console.log('userID:', req.query);
    const result = userInfo(id, username, oldPassword, newPassword, information);
    return result.then(data => {
        if (data) {
          res.json(
            new SuccessModel()
          )
        }else{
          res.json(
            new ErrorModel('更新失败')
          )
        }
    })
})

module.exports = router;
