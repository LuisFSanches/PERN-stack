import React from "react";
import user_logo from "../../../assets/images/usuario-icon.png";
import "./style.css";
// import { Container } from './styles';

function Register_form() {
  return (
    <div className="register">
      <form className="form-container">
        <fieldset>
          <img src={user_logo} alt="" />
          <h1>Registre-se</h1>

          <div className="field-group">
            <div className="field">
              <label htmlFor="">Nome:</label>
              <input type="text" name="name" />
            </div>

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
            <button type="Submit">Próximo</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Register_form;
