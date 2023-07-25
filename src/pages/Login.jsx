import React from "react";

function Login() {
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
          <h1 className="text-5xl text-gega-pink font-Fira font-bold absolute top-[80px] left-[70px] ">
            Login
          </h1>
        </div>
        <div>
          <form action="" className="flex flex-col gap-3 items-start ml-[70px]">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name=""
              id=""
              className="border-b-2 outline-none"
              placeholder="example@domain.com"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              id=""
              className="border-b-2 w-[230px] outline-none"
              placeholder="Enter 8 or more characters"
              required
            />
            <button className=" py-2 px-5 mt-4 rounded-md text-gega-white bg-gega-rose">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
