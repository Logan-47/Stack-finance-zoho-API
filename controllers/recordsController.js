const axios = require('../axios');
const catchAsync = require('../utils/catchAsync');

const getRecords = catchAsync(async (req, res) => {
  const { authorization } = req.headers;
  const { moduleName } = req.params;
  const response = await axios.get(`/${moduleName}`, {
    headers: {
      Authorization: authorization,
    },
  });

  res.status(response.status).send(response.data);
});

const addrecord = catchAsync(async (req, res) => {
  const { authorization } = req.headers;
  const newRecord = { ...req.body };
  const { moduleName } = req.params;
  const response = await axios.post(
    `/${moduleName}`,
    {
      data: [newRecord],
    },
    {
      headers: {
        Authorization: authorization,
      },
    }
  );

  res.status(response.status).send(response.data);
});

module.exports = {
  addrecord,
  getRecords,
};
