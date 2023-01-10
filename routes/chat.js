const express = require('express');
const router = express.Router();

const data = {
    message1: "Assalam o Allaikum",
    message2: "Wallaikum Assalam"
}

router.get('/getChats', (req, res) => {
    res.send({
        users: "Hammad & Junaid",
        data: data,
    })
})

router.post('/addChats', (req, res) => {
    // posting/adding Data to Database
    const data = req.body;
    res.send({
        message: "Data stored successfully",
        data: data,
    })
})

router.put('/updateChat', (req, res) => {
    
    // Updating Data 

    res.send({
        messsage: "Data updated successfully", 
        data: data
    })
})

router.delete('/deleteChat', (req, res) =>{
    // Deleting data
    res.send({
        message: 'Data deleted successfully',
        data: data
    })
})

// fetch("http://localhost:3000/chat/deleteChat", { method: 'DELETE'}) 

// .then(res => res.json())
// .then(res => console.log("response", res))
// .catch(error => console.log("error", error))


module.exports = router;