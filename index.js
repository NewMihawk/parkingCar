const express = require('express');
const app = express();
const mongoose = require('mongoose')
const ParkRoute = require('./routes/park')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/parking-v1', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true 
})
.then(() => console.log('Hurry Database Connected'))
.catch((err) => console.log(err,'err'))

app.get('', (req, res) => {
  res.send({ message: "It's OK", version: '1.0' });
});


app.use('/api', ParkRoute)


app.listen(3000)