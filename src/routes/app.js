const express = require('express');
const routes = express.Router();

routes.get('/', (req, res, next) => {
    res
        .status(200)
        .json({ message: `Server is running in ${process.env.NODE_ENV} mode.` });
});

routes.use('/users', require('./users/app'));

module.exports = routes;
