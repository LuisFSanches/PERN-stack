const { Create_User } = require("../models/User");
const { Create_Profession } = require("../models/Profession");
const jwtGenerator = require("../utils/jwtGenerator");

const bcrypt = require("bcryptjs");

const db = require("../database/config/database");

module.exports = {
  async index(req, res) {},

  async store(req, res) {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const hashed_password = await bcrypt.hash(password, salt);

    const user = await db.query("SELECT * FROM _user WHERE email= $1", [email]);

    if (user.rows.length !== 0) {
      return res.json("Email já cadastrado");
    }
    const newuser = await db.query(
      "INSERT INTO _user(name, email, password) VALUES ($1,$2,$3) RETURNING *",
      [name, email, hashed_password]
    );

    const token = jwtGenerator(newuser.rows[0].id_user);

    return res.json({ token });
  },
};
