const jwtGenerator = require("../utils/jwtGenerator");

const bcrypt = require("bcryptjs");
const db = require("../database/config/database");

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
    const user = await db.query("SELECT * FROM _user WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.json("Email incorrect");
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.json("Password Incorrect");
    }

    const token = jwtGenerator(user.rows[0].id_user);
    return res.json(token);
  },
};
