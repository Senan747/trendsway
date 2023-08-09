import React, { useState, useContext } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { useUserData } from "../UserDataContext";
import { SlBasket } from "react-icons/sl";

function Navbar() {
  const { userData } = useUserData();

  return (
    <div>
      <div className="max-h-[200px] bg-gega-pink flex flex-row items-center justify-between ">
        <div className="max-h-[150px] max-w-[150px] ">
          <img src="../logo.png" alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="mr-10">
            <input
              type="search"
              className="border-1 w-[300px] rounded-[10px] py-1 px-3"
              placeholder="search"
            />
          </div>

          {userData ? (
            <div className="min-w-[300px] flex flex-row justify-around items-center">
              <p className="text-gega-white text-xl">Hello, {userData.username}!</p>
              <Link to="/basket">
                <SlBasket className="text-xl"/>
              </Link>
              
            </div>

            
          ) : (
            <div className="flex flex-row items-center mr-6 text-white">
              <Link to={"/login"}>
                <button className="border-none px-3 py-1 mr-4 bg-gega-earth-red rounded-[10px]">
                  Log in
                </button>
              </Link>
              <Link to={"/register"}>
                <p className="text-gega-earth-red underline">Sing up</p>
              </Link>{" "}
            </div>
          )}
        </div>
      </div>
      
      {/* </BrowserRouter> */}
    </div>
  );
}

export default Navbar;
