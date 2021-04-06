const express = require('express');
const router = express.Router();

const route = require('./routes');

const routes = route({ router });

const services = Object.freeze({ routes });

module.exports = services;

module.exports = {
    routes,
};

module.exports = router;
