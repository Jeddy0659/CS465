const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({});
        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json({ message: 'Database error', error: err });
    }
};

const tripsFindById = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.tripId);
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        return res.status(200).json(trip);
    } catch (err) {
        return res.status(400).json({ message: 'Invalid ID', error: err });
    }
};

module.exports = { tripsList, tripsFindById };
