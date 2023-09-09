import React, { useState } from "react";
import { useUserData } from "../UserDataContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { showLogout, setShowLogout, setUserData, setProductData } =
    useUserData();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserData(null);
    setProductData(null);
    navigate("/");
    setShowLogout(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[600px] h-[400px] bg-gega-cameo rounded-[30px]">
      <h2 className="text-2xl text-gega-earth-red font-medium mb-20">
        Are you sure you want to logout?
      </h2>
      <div className="flex flex-row justify-around w-[300px]">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-gega-rose text-gega-white rounded hover:bg-gega-rose-dark"
        >
          Yes
        </button>
        <button
          onClick={() => setShowLogout(!showLogout)}
          className="px-4 py-2 bg-gray-300 text-gega-black rounded hover:bg-gray-500 hover:text-gega-white"
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Logout;
