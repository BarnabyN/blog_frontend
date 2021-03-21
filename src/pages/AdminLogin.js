import React from "react";
import { useHistory } from "react-router-dom";
import dbstring from "../constants.js";
import CustomNavbar from "../components/CustomNavbar.js";
import "../styles/AdminLogin.css";
import SubmitButton from "../elements/SubmitButton";

export default function AdminLogin() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    // If logged in: Redirect to create post page
    if (token) {
      history.push("/admin/newpost");
    }
  }, [token]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(dbstring + "/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.success === false) {
          setErrorMessage(res.message);
        } else {
          setErrorMessage("");
          localStorage.setItem("token", res.token);
          history.push("/admin");
        }
      });
  }

  return (
    <div className="react-wrapper">
      <CustomNavbar />

      <div className="content">
        {" "}
        <h2>Log In</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <SubmitButton type="submit" text="Go" />

          <br />
          {errorMessage}
        </form>
      </div>
    </div>
  );
}
