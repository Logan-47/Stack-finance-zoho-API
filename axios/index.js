const axios = require('axios');

const instance = axios.create({
  baseURL: `${process.env.API_DOMAIN}/crm/v2`,
});

module.exports = instance;
