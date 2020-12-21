const axios = require('axios');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config({ path: '../config.env' });

const { client_id, client_secret } = JSON.parse(
  fs.readFileSync(`${__dirname}/client.json`, 'utf-8')
);

const url = `https://accounts.zoho.in/oauth/v2/token?refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${client_id}&client_secret=${client_secret}&grant_type=refresh_token`;

const refreshToken = async (req, res) => {
  try {
    const response = await axios.post(url);
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = refreshToken;
