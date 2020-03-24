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
    const result = register(username, password, ra)
});


router.post('/register', async function (ctx, next) {
    const { username, password, realname } = ctx.request.body
    const data = await register(username, password, realname)

    ctx.body = new SuccessModel(data)
    if (data) {
        //设置session
        ctx.session.insertId = data

        ctx.body = new SuccessModel()
        return
    }
    ctx.body = new ErrorModel('登录失败')
})

router.post('/info', async function (ctx, next) {
    const { username, oldPassword, newPassword, information } = ctx.request.body
    console.log('user:', ctx.request.body)
    const data = await userInfo(username, oldPassword, newPassword, information)

    if (data) {
        ctx.body = new SuccessModel()
       } else {
         ctx.body = new ErrorModel('更新失败')
       }
})



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
