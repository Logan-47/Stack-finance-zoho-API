// gets rid of try catch block in controllers
// return a function, this function will execute when endpoint is called.
const catchAsync = (fn) => (req, res) => {
  fn(req, res).catch((err) => res.status(400).send(err));
};

module.exports = catchAsync;
