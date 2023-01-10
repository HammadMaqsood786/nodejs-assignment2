console.log("ALLAHU AKBAR");

const express = require('express');
const app = express();
const db = require('./config/db');

db.connection
    .once('open', () => console.log("connected to db"))
    .on('error', (err) => console.log("error connecting db===>", err))

//API ki dukan khulla rakhny k tariqa  
// process.env.PORT = deployment hosting (live) port
// 3000 = local port

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running successfully");
})

app.use(express.json());

app.use('/', require('./routes/index.js'))

// app.use('/post', (req, res) => {

//     res.send([
//         {
//             userName: "Hammad",
//             message: "Assalam o Allaikum",

//         }
//     ])


// });
