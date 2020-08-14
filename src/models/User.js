const db = require("../database/config/database");

async function Create(name, email, password) {
  await db.connect();
  await db.query("INSERT INTO _user(name, email, password) VALUES($1,$2,$3)", [
    name,
    email,
    password,
  ]);
  await db.end();
}
module.exports = {
  Create: Create,
};
