const { connects } = require('../app');
const models = require('../sequelize/models');

const query = require('./query');

const userDB = query({ connects, models });

module.exports = userDB;
