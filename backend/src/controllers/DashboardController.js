const db = require("../database/config/database");

module.exports = {
  async index(req, res) {
    const user = await db.query("SELECT name FROM _user WHERE id_user=$1", [
      req.user,
    ]);
    const user_name = user.rows[0].name;
    //console.log(user_name);
    res.json(`Seja bem vindo ${user_name}`);
  },
};
