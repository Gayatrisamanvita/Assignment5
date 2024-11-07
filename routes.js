const express = require('express');
const { getData, addData } = require('../controllers/dataController');
const router = express.Router();

// Get all data
router.get('/', getData);

// Add new data
router.post('/', addData);

module.exports = router;
