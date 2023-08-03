import React from "react";
import { Link } from "react-router-dom";

function Please() {
  return (
    <div className="max-w-[800px] max-h-[900px] flex flex-col bg-gega-pink px-32 py-20 animate-pulse duration-300 rounded-xl">
      <h1 className="mb-20 text-3xl font-bold text-gega-grey ">Please</h1>
      <div className="mb-5">
        <Link to={"/login"}>
          <button className="border-none px-4 py-2 mr-4 bg-gega-earth-red rounded-[10px] text-gega-grey">
            Login
          </button>
        </Link>
      </div>
      <h1>Or</h1>
      <div className="mt-5">
        <Link to={"/register"}>
          <button className="border-none px-4 py-2 mr-4 bg-gega-earth-red rounded-[10px] text-gega-grey">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Please;
