const jwtGenerator = require("../utils/jwtGenerator");

const bcrypt = require("bcryptjs");
const db = require("../database/config/database");

module.exports = {
  async auth(req, res) {
    return res.json(true);
  },

  async login(req, res) {
    const { email, password } = req.body;
    const user = await db.query("SELECT * FROM _user WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Email incorrect");
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(401).json("Password Incorrect");
    }

    const token = jwtGenerator(user.rows[0].id_user);
    return res.json({ token });
  },
};
