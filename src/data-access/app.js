const dotenv = require('dotenv');
const mysql = require('mysql2');

const connect = require('./connection');

const connects = connect({ dotenv, mysql });

const services = Object.freeze({ connects });

module.exports = services;

module.exports = { connects };
