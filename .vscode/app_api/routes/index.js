const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
   code: String,
   name: String,
   length: Number,
   start: Date,
   resort: String,
   perPerson: Number,
   image: String,
   description: String
});

mongoose.model('Trip', tripSchema, 'trips');
const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');

router.get('/trips', ctrlTrips.tripsList);
router.get('/trips/:tripId', ctrlTrips.tripsFindById);

module.exports = router;
