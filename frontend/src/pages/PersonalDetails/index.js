import React, { useState } from "react";
import user_logo from "../../assets/images/usuario-icon.png";
import "../../components/form/style.css";
// import { Container } from './styles';

import { api } from "../../services/api";

function PersonalDetails({ history }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { name, email, password } = inputs;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputs({ ...inputs, name: name, email: email, password: password });
    const response = await api.post("/register", {
      name: name,
      email: email,
      password: password,
    });
    localStorage.setItem("token", response.data.token);
    console.log(response.data);
    history.push("/dashboard");
  };

  return (
    <div className="register">
      <form className="form-container" onSubmit={handleSubmit}>
        <fieldset>
          <img src={user_logo} alt="" />
          <h1>Registre-se</h1>

          <div className="field-group">
            <div className="field">
              <label htmlFor="">Nome:</label>
              <input
                type="text"
                name="name"
                onChange={(e) => onChange(e)}
                value={name}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                name="email"
                onChange={(e) => onChange(e)}
                value={email}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                onChange={(e) => onChange(e)}
                value={password}
                required
              />
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

export default PersonalDetails;
