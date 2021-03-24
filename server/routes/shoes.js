// const { shoes } = require('../controllers/shoes');

const express = require('express'),

router = express.Router(),

shoes = require('../controllers/shoes')


router.get('/',shoes.shoes);


module.exports = router