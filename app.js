const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MensRanking = require('./model/mens.js');

require('./database/connection.js');
require('./model/mens.js');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.render('index');
});


app.post('/mens', async (req, res) => { 
    try {
        const addmensrecordes = new MensRanking(req.body);
        console.log(req.body);
        const insertmen = await addmensrecordes.save();
        res.send(insertmen); 
        res.status(201).send("Player added successfully"); // Add a success response
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving data'); 
    }
});



app.get('/mens', async (req, res) => { 
    try {
         const getmensrecordes = await MensRanking.find();
        res.send(getmensrecordes); 
        res.status(201).send("Player added successfully"); // Add a success response
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving data'); 
    }
});








app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
}); 
