const Ram = require('../models/ram');

// GET ALL
exports.getAllRams = async (req, res) => {
  try {
    const rams = await Ram.find();
    res.status(200).json(rams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET BY ID
exports.getRamById = async (req, res) => {
  try {
    const ram = await Ram.findById(req.params.id);
    if (!ram) {
      return res.status(404).json({ message: 'RAM item not found' });
    }
    res.status(200).json(ram);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE
exports.createRam = async (req, res) => {
  try {
    const newRam = new Ram(req.body);
    const savedRam = await newRam.save();
    res.status(201).json(savedRam);
    console.log('New RAM item created:', savedRam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE
exports.updateRam = async (req, res) => {
  try {
    const updatedRam = await Ram.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true,
        runValidators: true
       }
    );

    if (!updatedRam) {
      return res.status(404).json({ message: 'RAM item not found' });
    }

    res.status(200).json(updatedRam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
exports.deleteRam = async (req, res) => {
  try {
    const deletedRam = await Ram.findByIdAndDelete(req.params.id);
    if (!deletedRam) {
      return res.status(404).json({ message: 'RAM item not found' });
    }
    res.status(200).json({ message: 'RAM item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
