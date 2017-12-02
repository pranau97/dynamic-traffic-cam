var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/api/:id', db.getLicensePlateData);
router.post('/api/', db.postData);

// application -------------------------------------------------------------
router.get('/', function (req, res) {

    res.render('index', {title: 'Traffic Backend'}); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
