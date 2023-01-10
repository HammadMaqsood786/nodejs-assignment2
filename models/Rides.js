const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RidesSchema = new Schema({
    pickup: {
        type: { lat: Number, long: Number },
        required: true
    },
    carName: {
        type: String,
        required: true
    }
    // destination: { lat: Number, long: Number }

})

const Rides = mongoose.model('Rides', RidesSchema);

module.exports = Rides;