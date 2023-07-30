import React from "react";
import { Link } from "react-router-dom";

function Please() {
  return (
    <div>
      <h1>Please</h1>
      <div>
        <Link to={"/login"}>
          <button className="border-none px-3 py-1 mr-4 bg-gega-earth-red rounded-[10px]">
            Login
          </button>
        </Link>
      </div>
      <h1>Or</h1>
      <div>
        <Link to={"/register"}>
          <button className="border-none px-3 py-1 mr-4 bg-gega-earth-red rounded-[10px]">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Please;
