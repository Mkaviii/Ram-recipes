
const express = require('express');
const router = express.Router();

const {
  getAllRams,
  getRamById,
  createRam,
  updateRam,
  deleteRam
} = require('../controllers/ramController');

router.get('/', getAllRams);
router.get('/:id', getRamById);
router.post('/', createRam);
router.put('/:id', updateRam);
router.delete('/:id', deleteRam);

module.exports = router;
