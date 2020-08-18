import React from "react";
import user_logo from "../../assets/images/usuario-icon.png";
import "../../components/form/style.css";
// import { Container } from './styles';

function UserProfession() {
  return (
    <div className="register">
      <form className="form-container">
        <fieldset>
          <img src={user_logo} alt="" />
          <h1>Registre-se</h1>

          <div className="field-group">
            <div className="field">
              <label htmlFor="">Profissão:</label>
              <input type="text" name="name" />
            </div>
          </div>
          <div className="button">
            <button type="Submit">Cadastrar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default UserProfession;
