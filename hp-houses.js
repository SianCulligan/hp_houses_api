'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const pg = require('pg');
const data = require('./hphouse.json')


const PORT = process.env.PORT;
const app = express();
app.use(cors());

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', err => console.error(err));

//SAVE - USE AS REFERENCE, THIS WILL TRAVERSE THE OBJECT
// app.get('/', (request, response) => {
//   response.send(data[0].rival);
// });

app.get('/', (request, response) => {
    response.send(data);
  });

//helper functions (error catching)
function errorHandler(error, request, response) {
  response.status(500).send(error);
}

//server "listener"
client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Server up on port ${PORT}`))
  });


