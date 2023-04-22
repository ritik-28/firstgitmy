const getExpenses = (req, where) => {
  return req.user.getExpenses();
};

module.exports = { getExpenses };
