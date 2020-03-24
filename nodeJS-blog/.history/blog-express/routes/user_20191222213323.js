var express = require('express');
var router = express.Router();
var { login, register } = require('../controller/user');
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
    const { username, password } = req.body;
  res.json({
      errno: 1,
      data: {
          username,
          password
      }
  })
});


// router.get('/login-test', (req, res, next) => {
//     if (req.session.username) {
//         res.json({
//             errno: 1,
//             msg: '测试成功'
//         })
//         return
//     }
//     res.json({
//         errno: 0,
//         msg: '测试失败'
//     })
// })

module.exports = router;
