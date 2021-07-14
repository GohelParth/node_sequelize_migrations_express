const express = require('express');
const route = express.Router();
const userControllers = require('../Controllers/userControllers');
const { LINK } = require('../Utils/intarnalLikns');

//endpoint url
const { ONE_TO_ONE_URL } = LINK;

// Controllers 
const { one_To_one } = userControllers;

//define route 
route.get(ONE_TO_ONE_URL, one_To_one)

module.exports = route;