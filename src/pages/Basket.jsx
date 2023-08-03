import React from "react";
import { useUserData } from "../UserDataContext";

function Basket() {
  const { userData } = useUserData();

  return (
    <div>
      <div className="flex flex-row justify-between items-center py-5 px-20 bg-gega-pink">
        <p className="text-gega-white text-3xl font-bold">Hello <span className="text-gega-rose">{userData.username}</span>, Thanks for choosing us!</p>
        <div className="max-h-[150px] max-w-[150px] ">
          <img src="../logo.png" alt="" className="w-full h-full" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Basket;
