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
