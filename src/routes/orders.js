const express = require('express');
const router = express.Router(); 

const controller = require('../controllers/orders_controllers'); 

router.get('/', controller.home); 
router.post('/add', controller.add); 

module.exports = router; 