const axios = require('../axios');
const catchAsync = require('../utils/catchAsync');

const getAllNotes = catchAsync(async (req, res) => {
  const { authorization } = req.headers;
  const response = await axios.get('/Notes', {
    headers: {
      Authorization: authorization,
    },
  });

  res.status(response.status).send(response.data);
});

const getNote = catchAsync(async (req, res) => {
  const { authorization } = req.headers;
  const { noteId } = req.params;
  const response = await axios.get(`/Notes/${noteId}`, {
    headers: {
      Authorization: authorization,
    },
  });

  res.status(response.status).send(response.data);
});

const getRecordNotes = catchAsync(async (req, res) => {
  const { authorization } = req.headers;
  const { moduleName, recordId } = req.params;
  const response = await axios.get(`/${moduleName}/${recordId}/Notes`, {
    headers: {
      Authorization: authorization,
    },
  });

  res.status(response.status).send(response.data);
});

const createNote = catchAsync(async (req, res) => {
  const { authorization } = req.headers;
  const newNote = { ...req.body };
  const response = await axios.post(
    `/Notes`,
    {
      data: [newNote],
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
  getAllNotes,
  getNote,
  getRecordNotes,
  createNote,
};
