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
            //设置session
            req.session.username = data.username;
            req.session.realname = data.realname;
            req.session.ID = data.id

            res.json(
                new SuccessModel()
            )
            return
        }
        res.json(
            new ErrorModel('登录失败')
        )
    })
});

router.post('/register', function(req, res, next) {
    const { username, password, nickname } = req.body;
    const result = register(username, password, nickname);
    return result.then(data => {
        if (data.id) {
            //设置session
            req.session.username = req.body.username;
            req.session.nickname = req.body.nickname;

            res.json(
                new SuccessModel()
            )
            return
        }
        res.json(
            new ErrorModel('登录失败')
        )
    })
});

router.post('/info', function (req, res, next) {
    const id = req.session.ID
    const { username, oldPassword, newPassword, information } = req.body;
    const result = userInfo(id, username, oldPassword, newPassword, information);
    return result.then(data => {
        if (data.changedRows > 0) {
            req.session.username = req.body.username;
            req.session.information = req.body.information;
            
            res.json(
                new SuccessModel(req.session)
            )
        }else{
          res.json(
            new ErrorModel('更新失败')
          )
        }
    })
});

module.exports = router;
