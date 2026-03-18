const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.getAll.bind(movieController));
router.get('/:id', movieController.getById.bind(movieController));
router.post('/', movieController.create.bind(movieController));
router.put('/:id', movieController.update.bind(movieController));
router.delete('/:id', movieController.delete.bind(movieController));

module.exports = router;