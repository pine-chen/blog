var express = require('express');
var router = express.Router();
var { login, register, userInfo } = require('../controller/user');
var { SuccessModel, ErrorModel } = require('../model/resModel');

/* GET home page. */
router.post('/login', function(req, res, next) {
    const { username, password } = req.body;
    const result = login(username, password);
    return result.then(data => {
        if (data.user_name) {
            //设置session
            req.session.username = data.user_name;
            req.session.ID = data.user_id

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
            req.session.ID = data.id;

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
    const { nickname, oldPassword, newPassword, age, email, telephone, information } = req.body;
    if (oldPassword === oldPassword) {
        res.json(
            new ErrorModel('新密码不能与旧密码相同')
        )
        return
    }el
    const result = userInfo(id, nickname, oldPassword, newPassword, age, email, telephone, information);
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
