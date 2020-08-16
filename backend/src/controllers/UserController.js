const { Create_User } = require("../models/User");
const { Create_Profession } = require("../models/Profession");

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
    const newuser = Create_User(name, email, hashed_password);
    return res.json("Siga para a próxima página de cadastro");
  },
};
