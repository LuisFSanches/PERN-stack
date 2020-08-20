const express = require("express");
const User = require("./controllers/UserController");
const User_Profession = require("./controllers/User_ProfessionController");
const Login = require("./controllers/SessionController");
const Dashboard = require("./controllers/DashboardController");

const authorization = require("./middlewares/auth");
const routes = express.Router();

routes.post("/register", User.store);
routes.get("/users", User.index);

routes.post("/register/2/:id", User_Profession.store);
routes.get("/users-profession", User_Profession.index);

routes.post("/login", Login.login);
routes.get("/is-verify", authorization, Login.auth);

routes.get("/dashboard", authorization, Dashboard.index);

module.exports = routes;
