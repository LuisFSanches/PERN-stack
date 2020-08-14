const { Create } = require("../models/User");

const name = "Marcio";
const email = "Marcio-Fernando@hotmail.com";
const password = "123456";
Create(name, email, password);
