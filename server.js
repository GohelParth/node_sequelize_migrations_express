const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./src/Routes/routes');
const { LINK } = require('./src/Utils/intarnalLikns');

const { BASE_URL } = LINK;

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(BASE_URL, routes);

app.listen(PORT, () => {
    console.log(`server created at ${PORT}!`);
})