import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

import user_logo from "../../assets/images/usuario-icon.png";
import "../../components/form/style.css";
// import { Container } from './styles';

function LoginForm({ history }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("token", response.data.token);

      history.push("/dashboard");
    } catch {
      setErrorMessage("Email ou senha incorretos");
    }
  }
  const { email, password } = inputs;
  return (
    <div className="register">
      <form className="form-container" onSubmit={handleLogin}>
        <fieldset>
          <img src={user_logo} alt="" />
          <h1>Login</h1>
          <h2>{errorMessage}</h2>
          <div className="field-group">
            <div className="field">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="field">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              />
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
