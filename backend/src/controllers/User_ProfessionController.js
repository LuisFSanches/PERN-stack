const { Create_Profession } = require("../models/Profession");
const { Create_User_Profession } = require("../models/User_Profession");
const jwtGenerator = require("../utils/jwtGenerator");
const auth = require("../middlewares/auth");

const db = require("../database/config/database");

module.exports = {
  async index(req, auth, res) {
    const { profession_name } = req.query;

    const profession = await db.query(
      "SELECT * FROM _professions WHERE name=$1",
      [profession_name]
    );

    const profession_id = profession.rows[0].id_profession;

    const users_profession = await db.query(
      "SELECT user_id FROM user_profession WHERE profession_id IN ($1) ",
      [profession_id]
    );

    const users_id = [];
    for (var i = 0; i < users_profession.rows.length; i++) {
      const id = parseInt(users_profession.rows[i].user_id);
      users_id.push(id);
    }

    const selected_users = await db.query(
      "SELECT * FROM _user WHERE id_user IN ($1, $2)",
      users_id
    );

    return res.json(selected_users.rows);
  },

  async store(req, res) {
    const user_id = req.params.id;
    const { profession } = req.body;

    //CHECKING THE LIST OF PROFESSIONS
    const newprofession = await Create_Profession(profession);

    const professions = await db.query(
      "SELECT * FROM _professions WHERE name = $1",
      [profession]
    );

    //CHECKING THE USER
    const user = await db.query(
      "SELECT * FROM user_profession WHERE user_id =$1",
      [user_id]
    );

    if (user.rows.length !== 0) {
      console.log("Usuário já cadastrado");
      return res.json("Usuário já cadastrado");
    }

    const profession_id = professions.rows[0].id_profession;
    //CREATING THE USER
    const user_profession = await Create_User_Profession(
      user_id,
      profession_id
    );

    // GENERATING THE TOKEN
    const token = jwtGenerator(user_id);
    return res.json(token);
  },
};

//const user_profession = Create_User_Profession()
