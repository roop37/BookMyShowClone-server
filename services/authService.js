const User = require("../models/user");
const bycrypt = require("bcryptjs");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ prompt: "User Not found" });

  const validPassword = await bycrypt.compare(password, user.password);

  if (!validPassword)
    return res.status(400).json({ prompt: "Invalid Password" });

  const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1d" });
  res.json({ token, user });
};

const CreateUser = async (req, res) => {
  const { email, password, name } = req.body;
};

module.exports = { loginUser, CreateUser };
