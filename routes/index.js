var express = require('express');
var router = express.Router();
const {list} = require('../data/list')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { list });
});

router.post('/', function(req,res){
  list.push({
    item: req.body.item,
    needed: true,
  })
  res.redirect('/');
})

module.exports = router;
