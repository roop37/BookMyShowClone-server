const loginUser = async (req, res) => {
  const { email, password } = req.body;
  //
  //
  const a = 2;
  c = a + 2;
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
