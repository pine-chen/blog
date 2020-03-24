var express = require('express');
var router = express.Router();
var { 
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require('../controller/blog');
var { SuccessModel, ErrorModel } = require('../model/resModel');
var loginCheck = require('../middleware/loginCheck');

/* GET home page. */
router.get('/list', (req, res, next) => {
  let author = req.query.author || '';
  const keyword = req.query.keyword || '';

  if (req.query.isadmin) {
      //管理员界面
      if (req.session.username == null) {
          //未登录
          res.json(
            new ErrorModel('未登录')
          )
          return  
      }
      //强制查询自己的博客
      author = req.session.username;
  }

  const result = getList(author, keyword);
  return result.then(data => {
      res.json(
        new SuccessModel(data)
      )
  })
});

router.get('/detail', (req, res, next) => {
  const result = getDetail(req.query.article_id);
  return result.then(data => {
    res.json(
      new SuccessModel(data)
    )
  })
});

router.post('/new', loginCheck, (req, res, next) => {
  req.body.author = req.session.username;
  const result = newBlog(req.body);
  return result.then(data => {
    res.json(
      new SuccessModel(data)
    )
  })
});

router.post('/update', loginCheck, (req, res, next) => {
  const result = updateBlog(req.query.article_id, req.body);
  return result.then(data => {
      if (data) {
        res.json(
          new SuccessModel()
        )
      }else{
        res.json(
          new ErrorModel('更新博客失败')
        )
      }
  })
});

router.post('/del', loginCheck, (req, res, next) => {
  const author = req.session.username;
  const result = delBlog(req.query.article_id, author)
  return result.then(data => {
      if (data) {
        res.json(
          new SuccessModel()
        )
      }else{
        res.json(
          new ErrorModel('删除博客失败')
        )
      }
  })
});

module.exports = router;
