const axios = require('../axios');

const getAllUsers = async (req, res) => {
  try {
    const { authorization } = await req.headers;
    const response = await axios.get('users', {
      headers: {
        Authorization: authorization,
      },
    });

    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
};

const createUser = async (req, res) => {
  try {
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
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  getAllUsers,
  createUser,
};
