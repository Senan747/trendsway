import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";


function LoginPanel(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [user, setUser] = useState([]);

  const getData = () => {
    fetch("http://localhost:3004/users")
      .then((response) => response.json())
      .then((result) => setUser(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLogin = () => {
    const evet = user.find(
      (user) => user.username === username && user.password === password
    );
    if (evet) {
      navigate("/");
      setLoginStatus("success");
    } else {
      setLoginStatus("failure");
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setLoginStatus(null);
  };

  return (
    <div>
      {loginStatus === "success" ? (
        <div>Login oldu</div>
      ) : loginStatus === "failure" ? (
        <div>
          Login olmadı
          <button onClick={handleReset}>Return Login</button>
        </div>
      ) : (
        <div>
          <form className="login-panel-container" noValidate autoComplete="off">
            <input
              required
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              required
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} variant="contained" color="primary">
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginPanel;