const express = require('express');

const Login = require('../Controllers/LogingController')

const route = express.Router();

route.post("/",Login);

module.exports = route
