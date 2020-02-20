'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const pg = require('pg');

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', err => console.error(err));

app.get('/', (request, response) => {
  response.send('/hphouse.json');
});

//helper functions (error catching)
function errorHandler(error, request, response) {
  response.status(500).send(error);
}

function startServer() {
    app.listen(process.env.PORT, () => console.log(`Server running on ${PORT}`));
  }
  
  startServer();
  


