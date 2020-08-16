import React from "react";
import { Link } from "react-router-dom";
import user_logo from "../../../assets/images/usuario-icon.png";
import "./style.css";
// import { Container } from './styles';

function Login_form() {
  return (
    <div className="register">
      <form className="form-container">
        <fieldset>
          <img src={user_logo} alt="" />
          <h1>Login</h1>

          <div className="field-group">
            <div className="field">
              <label htmlFor="">Email:</label>
              <input type="email" name="name" />
            </div>

            <div className="field">
              <label htmlFor="">Password:</label>
              <input type="text" name="name" />
            </div>
          </div>
          <div className="button">
            <button type="Submit">Entrar</button>
            <p>
              <Link to="/register">
                Ainda não é cadastrado <strong> Cadastre-se agora?</strong>
              </Link>
            </p>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login_form;
