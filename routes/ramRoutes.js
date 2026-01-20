const express = require('express');
const router = express.Router();


const {
  getAllRams,
  getRamById,
  createRam,
  updateRam,
  deleteRam
} = require('../controllers/ramController');
const isAuthenticated = require('../middlewares/auth');

router.get('/', getAllRams);
router.get('/:id', isAuthenticated, getRamById);
router.post('/', isAuthenticated, createRam);
router.put('/:id', isAuthenticated, updateRam);
router.delete('/:id', isAuthenticated, deleteRam);

module.exports = router;