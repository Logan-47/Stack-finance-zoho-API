const axios = require('../axios');

const createPaymentOrder = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const newOrder = { ...req.body };
    const response = await axios.post(
      '/Purchase_Orders',
      {
        data: [newOrder],
      },
      {
        headers: {
          Authorization: authorization,
        },
      }
    );

    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  createPaymentOrder,
};
