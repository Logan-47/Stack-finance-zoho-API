const axios = require('../axios');

const createInvoice = async (req, res) => {
  try {
    const { authorization } = req.headers;

    const newInvoice = {
      ...req.body,
    };
    const response = await axios.post(
      '/invoices',
      { data: [newInvoice] },
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
  createInvoice,
};
