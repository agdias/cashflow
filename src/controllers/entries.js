const Entry = require('../models/Entry');

// @desc    Create new Entry
// @route   POST /api/v1/entries
// @access  Private

exports.createEntry = async (req, res, next) => {
   const entry = await  Entry.create(req.body);
   res.status(201).json({
    success: true,
    data: entry
   })
}

exports.getEntries = async (req, res, next) => {
    const entries = await Entry.find();
    res.status(200).json({
        success: true,
        data: entries
    })
}