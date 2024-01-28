const express = require('express');
const {
    createEntry,
    getEntries
} = require('../controllers/entries')
const router = express.Router();
router
  .route('/')
  .post(createEntry)
  .get(getEntries)

module.exports = router;