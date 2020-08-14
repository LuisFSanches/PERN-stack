const db = require("./config/database");

async function dropTables() {
  await db.connect();
  await db.query("DROP TABLE social");
  await db.end();
  console.log("Tabela(s) deletada");
}

async function createTables() {
  await db.connect();
  await db.query(
    "CREATE TABLE _user(id_user SERIAL PRIMARY KEY,name VARCHAR(100), email TEXT, password TEXT) "
  );
  await db.query(
    "CREATE TABLE _professions(id_profession SERIAL PRIMARY KEY, name TEXT)"
  );
  await db.query(
    "CREATE TABLE user_profession(id SERIAL PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES _user(id_user), profession_id INT, FOREIGN KEY(profession_id) REFERENCES _professions(id_profession))"
  );
  console.log("Tabela(s) criada");
}

//createTables();
