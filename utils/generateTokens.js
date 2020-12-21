const dotenv = require('dotenv');

dotenv.config({ path: '../config.env' });
const fs = require('fs');
const axios = require('axios');

// eslint-disable-next-line
const { grant_type, client_id, client_secret, code } = JSON.parse(
  fs.readFileSync(`${__dirname}/client.json`, 'utf-8')
);

const url = `https://accounts.zoho.in/oauth/v2/token?grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${process.env.ZOHO_REDIRECT_URI}&code=${code}`;

const generateToken = async () => {
  try {
    const response = await axios.post(url);
    console.log(response.data);
  } catch (error) {
    console.log(error.data);
  }
};

generateToken();
