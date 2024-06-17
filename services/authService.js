const loginUser = async (req, res) => {
  const { email, password } = req.body;
  //
  //
  //
  res.send("loggedin");
};
const CreateUser = async (req, res) => {
  const { email, password, name } = req.body;
  //
  //
  //
  res.send("Create");
};

module.exports = { loginUser, CreateUser };
