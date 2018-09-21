var express = require('express');
var router = express.Router();

router.get('/tasks', function(req, res, next){
    res.send('Tasks Api');
});

module.exports = router;