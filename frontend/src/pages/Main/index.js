import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import user_logo from "../../assets/images/usuario-icon.png";
import "../../components/form/style.css";
// import { Container } from './styles';

function LoginForm({ history }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  async function handleLogin(e) {
    e.preventDefault();
    const response = await api.post("/login", {
      email: inputs.email,
      password: inputs.password,
    });

    console.log(response.data.email);
    history.push("/dashboard");
  }

  return (
    <div className="register">
      <form className="form-container" onSubmit={handleLogin}>
        <fieldset>
          <img src={user_logo} alt="" />
          <h1>Login</h1>

          <div className="field-group">
            <div className="field">
              <label htmlFor="">Email:</label>
              <input type="email" name="email" onChange={""} />
            </div>

            <div className="field">
              <label htmlFor="">Password:</label>
              <input type="password" name="passord" onChange={""} />
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

export default LoginForm;
