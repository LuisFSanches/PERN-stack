const db = require("../database/config/database");
async function Create_User_Profession(user_id, profession_id) {
  await db.connect();
  await db.query(
    "INSERT INTO user_profession(user_id, profession_id) VALUES($1, $2)",
    [user_id, profession_id]
  );
}
module.exports = {
  Create_User_Profession: Create_User_Profession,
};
