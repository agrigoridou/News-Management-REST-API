const express = require('express');
const { createNews, submitNews } = require('../controllers/newsController');
const router = express.Router();

// Δημιουργία είδησης
router.post('/', createNews);

// Υποβολή είδησης
router.put('/:id/submit', submitNews);

module.exports = router;
