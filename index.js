const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const ParkRoute = require('./routes/park')


app.get('', (req, res) => {
  res.send({ message: "It's OK", version: '1.0' });
});

app.use('/api', ParkRoute)


app.listen(3000)