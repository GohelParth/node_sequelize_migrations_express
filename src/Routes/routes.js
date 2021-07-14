const express = require('express');
const route = express.Router();
const userControllers = require('../Controllers/userControllers');
const { LINK } = require('../Utils/intarnalLikns');

const { USER_URL } = LINK;

const { getUser } = userControllers;

route.get(USER_URL, getUser)

module.exports = route;