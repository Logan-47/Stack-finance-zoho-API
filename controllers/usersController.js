const axios = require('../axios');
const catchAsync = require('../utils/catchAsync');

const getAllUsers = catchAsync(async (req, res) => {
  const { authorization } = await req.headers;
  const response = await axios.get('users', {
    headers: {
      Authorization: authorization,
    },
  });

  res.status(response.status).send(response.data);
});

const getUser = catchAsync(async (req, res) => {
  const { authorization } = await req.headers;
  const { userId } = req.params;

  const response = await axios(`/users/${userId}`, {
    headers: {
      Authorization: authorization,
    },
  });

  res.status(response.status).send(response.data);
});

const createUser = catchAsync(async (req, res) => {
  const { authorization } = await req.headers;
  const newUser = { ...req.body };
  const response = await axios.post(
    '/users',
    {
      users: [newUser],
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
  getUser,
  getAllUsers,
  createUser,
};
