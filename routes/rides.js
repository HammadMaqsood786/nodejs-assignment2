const express = require('express');
const router = express.Router();
const Rides = require('../models/Rides');

router.get('/getRide', async (req, res) => {

    const rides = await Rides.find()

    res.send({
        message: 'Success', data: rides
    })
})

router.post('/addRide', async (req, res) => {

    const data = req.body

    try {
        const rideData = new Rides(data)
        await rideData.save()

        res.send({ message: 'Data stored successfully' })
    } catch (e) {
        res.send({ error: e.message })
    }
})

// router.put('/updateRide', async (req, res) => {

//     const data = req.body

//     try {
//         const rideData = new Rides(data)
//         await rideData.updateOne(data)

//         res.send({ message: 'Data updated successfully' })
//     } catch (e) {
//         res.send({ error: e.message })
//     }
// })

// fetch('http://localhost:3000/rides/addRides', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         pickup: { lat: 24, long: 21 },
//         carName: 'Yaris'
//     })
// }) 

// .then(res => res.json())
// .then(res => console.log("response", res))
// .catch(error => console.log("error", error))

module.exports = router;