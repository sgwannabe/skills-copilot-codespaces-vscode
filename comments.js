// Create web server

// Require modules
const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// Define routes
router.post('/posts/:id/comments', commentsCtrl.create);
router.delete('/comments/:id', commentsCtrl.delete);

// Export module
module.exports = router;