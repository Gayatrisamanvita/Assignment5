const Data = require('../models/dataModel');

// @desc    Get all data
// @route   GET /api/data
// @access  Public
const getData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add new data
// @route   POST /api/data
// @access  Public
const addData = async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: 'Please provide all fields' });
  }

  const newData = new Data({
    name,
    description,
  });

  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getData,
  addData,
};
