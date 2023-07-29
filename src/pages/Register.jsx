import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../UserDataContext";

function Register() {
  const { setUserData } = useUserData();
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = { username, password };
    setUserData(userData);

    navigate("/");
  };

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
          <form
            action=""
            className="flex flex-col gap-3 items-start ml-[70px]"
            onSubmit={handleSubmit}
          >
            <label htmlFor="Username">Username</label>
            <input
              type="Username"
              name=""
              id=""
              className="border-b-2 outline-none"
              placeholder="user"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              id=""
              className="border-b-2 w-[230px] outline-none"
              placeholder="Enter characters"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Repeat password</label>
            <input
              type="password"
              name=""
              id=""
              className="border-b-2 w-[230px] outline-none"
              placeholder="Enter characters"
              required
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <button
              className=" py-2 px-5 mt-4 rounded-md text-gega-white bg-gega-rose"
              type="submit"
            >
              Sign-up
            </button>
            <Link to="/login">
              <p className="underline text-gega-rose">
                Do you have an account?
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
