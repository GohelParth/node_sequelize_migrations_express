const express = require('express');
const cors = require('cors');
require('dotenv').config();
const oto_routes = require('./src/One_To_One/OTO.routes');
const otm_routes = require('./src/One_To_Many/OTM.routes');
const mtm_routes = require('./src/Many_To_Many/MTM.routes');

const { LINK } = require('./src/Utils/intarnalLikns');

const { OTO_BASE_URL, OTM_BASE_URL, MTM_BASE_URL } = LINK;

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(OTO_BASE_URL, oto_routes);

app.use(OTM_BASE_URL, otm_routes);

app.use(MTM_BASE_URL, mtm_routes);

app.listen(PORT, () => {
    console.log(`server created at ${PORT}!`);
})