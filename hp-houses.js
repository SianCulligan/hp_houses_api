'use strict';

const express = require('express');
const cors = require('cors');
const pg = require('pg');

const PORT = process.env.PORT;
const app = express();
app.use(cors());

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', err => console.error(err));

app.get('/', (request, response) => {
  response.send(`It's alllllive!`);
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


