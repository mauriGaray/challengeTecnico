const pool = require("./config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const doLogin = async (email, password, res) => {
  const query = "SELECT * FROM users WHERE email = ?";
  pool.query(query, [email], (error, results, fields) => {
    if (error) {
      res.status(500).json({ status: "code 500", message: error.message });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ status: "code 404", message: "Email not found" });
      return;
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (bcryptError, isMatch) => {
      if (bcryptError) {
        console.error("An error has occurred: ", bcryptError);
        res
          .status(500)
          .json({ status: "code 500", message: "An error has occurred" });
        return;
      }

      if (isMatch) {
        const payload = {
          email: email,
          role: "user",
        };
        const token = jwt.sign(payload, "123456789", {
          expiresIn: "3h",
        });
        res.status(200).json({ message: "login successful", token: token });
      } else {
        res
          .status(401)
          .json({ status: "code 401", message: "Invalid credentials" });
      }
    });
  });
};

const doRegister = async (firstName, lastName, email, hashPassword, res) => {
  const query =
    "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
  pool.query(
    query,
    [firstName, lastName, email, hashPassword],
    (error, results, fields) => {
      if (error) {
        console.error("Error inserting into database:", error);
        res.status(500).send("Internal server error");
        return;
      }
      res.status(200).send("User created");
    }
  );
};

module.exports = { doLogin, doRegister };
