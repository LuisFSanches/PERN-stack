const db = require("../database/config/database");
async function Create_Profession(name) {
  await db.connect();
  await db.query(
    "INSERT INTO _professions(name) VALUES($1) ON CONFLICT (name) DO NOTHING",
    [name]
  );
}
module.exports = {
  Create_Profession: Create_Profession,
};
