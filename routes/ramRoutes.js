
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
router.post('/',  createRam);
router.put('/:id',  updateRam);
router.delete('/:id', deleteRam);

module.exports = router;
