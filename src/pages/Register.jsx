import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../UserDataContext";

function Register() {
  const { setUserData } = useUserData();
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3004/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-row h-screen">
      <div className="w-[700px] bg-cover">
        <img src="danla.jpg" alt="" className="h-full w-full" />
      </div>
      <div className="flex flex-col justify-start">
        <div className="w-[150px] h-[100px]">
          <img src="logo.png" alt="" className="w-full h-full" />
        </div>
        <div className="w-[400px] h-[200px] relative top-0">
          <h1 className="text-5xl text-gega-pink font-Fira font-bold absolute top-[80px] left-[70px]">
            Register
          </h1>
        </div>
        <div>
          <div
            className="flex flex-col gap-3 items-start ml-[70px]"
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="border-b-2 outline-none"
              placeholder="enter email"
              required
              onChange={(e) => handleChange(e)}
              value={formData.email}
            />
            <label htmlFor="username">Username</label>
            <input
              type="text" 
              className="border-b-2 w-[230px] outline-none"
              placeholder="Enter username"
              required
              onChange={(e) => handleChange(e)}
              value={formData.username}
            />
            <label htmlFor="password">Repeat password</label>
            <input
              type="password"
              className="border-b-2 w-[230px] outline-none"
              placeholder="Enter characters"
              required
              onChange={(e) => handleChange(e)}
              value={formData.password}
            />
            <button className=" py-2 px-5 mt-4 rounded-md text-gega-white bg-gega-rose" onClick={e => handleSubmit(e)}>
              Sign-up
            </button>
            <Link to="/login">
              <p className="underline text-gega-rose">
                Do you have an account?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
