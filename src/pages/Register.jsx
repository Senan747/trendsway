import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../UserDataContext";
import CircularProgress from "@material-ui/core/CircularProgress";

function Register() {
  const { setUserData } = useUserData();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://trendsway-data.onrender.com/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUserData({
          username: formData.username,
          password: formData.password,
        });
        navigate("/");
        console.log(data);
      } else {
        console.error("Failed to register");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="w-[700px] bg-cover max-[930px]:hidden">
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
            className="flex flex-col gap-7 items-start ml-[70px]"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              name="username"
              required
              onChange={(e) => {
                handleChange(e);
              }}
              className="border-b-2 w-[230px] outline-none"
            ></input>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              name="email"
              required
              onChange={(e) => handleChange(e)}
              className="border-b-2 w-[230px] outline-none"
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              name="password"
              required
              onChange={(e) => {
                handleChange(e);
              }}
              className="border-b-2 w-[230px] outline-none"
            ></input>
            <button
              className="py-2 px-5 mt-4 rounded-md text-gega-white bg-gega-rose w-[30%]"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Sign-up"
              )}
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
