const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/', reviewController.getAll.bind(reviewController));
router.get('/:id', reviewController.getById.bind(reviewController));
router.post('/', reviewController.create.bind(reviewController));
router.put('/:id', reviewController.update.bind(reviewController));
router.delete('/:id', reviewController.delete.bind(reviewController));

module.exports = router;