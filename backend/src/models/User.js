const db = require("../database/config/database");

async function Create_User(name, email, password) {
  await db.connect();
  await db.query("INSERT INTO _user(name, email, password) VALUES($1,$2,$3)", [
    name,
    email,
    password,
  ]);
}
module.exports = {
  Create_User: Create_User,
};
