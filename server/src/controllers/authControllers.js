const { doLogin, doRegister } = require("../models/users.model");
const bcrypt = require("bcrypt");
const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    await doLogin(email, password, res);
  } catch (error) {
    console.error("An error occurred:", error);
    res.json({ status: "code 500", message: error.message });
  }
};

const registerController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    let registerResult = await doRegister(
      firstName,
      lastName,
      email,
      hashPassword,
      res
    );
  } catch (error) {
    res.status(500).json({ status: "code 500", message: error.message });
    console.error("An error occurred:", error);
  }
};

module.exports = {
  loginController,
  registerController,
};
