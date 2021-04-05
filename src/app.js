const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({
    path: process.NODE_ENV === 'test' ? '.env.testing' : '.env'
});

const app = express();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.info(`The Server is running on port 🚀🚀🚀 ${PORT} 🚀🚀🚀`);
});

app.use('/', (req, res, next) => {
    res.status(200).json({ message: `Server is running in ${process.env.NODE_ENV} mode.` });
});

module.exports = app;
