const axios = require('../axios');

const getRecords = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const response = await axios.get(`/${req.params.recordName}`, {
      headers: {
        Authorization: authorization,
      },
    });

    res.send(response.data);
  } catch (error) {
    console.log(error.response.data);
    res.send(error);
  }
};

module.exports = getRecords;
