const getUsers = (req, res) => {
  res.status(200).send("Welcome to my server ");
};

const createUser = (req, res) => {
  res.status(201).send("Your mesage has been saved");
};

const updateUser = (req, res) => {
  res.status(200).send("Your mesage has been updated");
};

const deleteUser = (req, res) => {
  res.status(200).send("Your message has been deleted");
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
