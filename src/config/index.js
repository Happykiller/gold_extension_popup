const path = __dirname+'/../../.env.local';

const dotenv = require('dotenv').config().parsed;
const dotenvlocal = require('dotenv').config({ path, override: true }).parsed;

exports.config = (config) => {
  const merged = Object.assign({}, config, dotenv, dotenvlocal);
  return {
    APP_MODE: merged?.APP_MODE??'dev',
    APP_PORT: merged?.APP_PORT??'8080'
  }
};