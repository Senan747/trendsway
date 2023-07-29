import React, { useState, useContext } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { useUserData } from "../UserDataContext";

function Navbar() {
  const { userData } = useUserData();
   
  const [activeMenu, setActiveMenu] = useState("");
  const dropDown = (menu) => {
    setActiveMenu(menu);
  };
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
        <span>Hello, {userData.username}!</span>
      ) : (          <div className="flex flex-row items-center mr-6 text-white">
                    <Link to={"/login"}>
              <button className="border-none px-3 py-1 mr-4 bg-gega-earth-red rounded-[10px]">
                Log in
              </button>
            </Link>
            <Link to={"/register"}>
              <p className="text-gega-earth-red underline">Sing up</p>
            </Link> </div>
      )}
         
        </div>
      </div>
      <div className="pt-5">
        <ul className="flex flex-row justify-around border-b-2 border-gega-rose">
          <li
            className={`flex flex-col relative items-center cursor-pointer`}
            onMouseEnter={() => dropDown("blush")}
            onMouseLeave={() => dropDown("")}
          >
            <div className="max-w-[30px] max-h-[30px]">
              <img src="blush.svg" alt="" className="w-full h-full" />
            </div>
            <p className="text-center">Blush</p>
          </li>

          <li
            className="flex flex-col items-center"
            onMouseEnter={() => dropDown("nail-polish")}
            onMouseLeave={() => dropDown("")}
          >
            <div className="max-w-[30px] max-h-[30px]">
              <img src="nailpolish.png" alt="" className="w-full h-full" />
            </div>
            <p className="text-center">Nail polish</p>
          </li>
          <li
            className="flex flex-col items-center"
            onMouseEnter={() => dropDown("mascara")}
            onMouseLeave={() => dropDown("")}
          >
            <div className="max-w-[30px] max-h-[30px]">
              <img src="mascara.png" alt="" className="w-full h-full" />
            </div>
            <p className="text-center">Mascara</p>
          </li>
          <li
            className="flex flex-col items-center"
            onMouseEnter={() => dropDown("lipstick")}
            onMouseLeave={() => dropDown("")}
          >
            <div className="max-w-[30px] max-h-[30px]">
              <img src="lipstick.png" alt="" className="w-full h-full" />
            </div>
            <p className="text-center">Lipstick</p>
          </li>
          <li
            className="flex flex-col items-center"
            onMouseEnter={() => dropDown("lip-liner")}
            onMouseLeave={() => dropDown("")}
          >
            <div className="max-w-[30px] max-h-[30px]">
              <img src="lipliner.png" alt="" className="w-full h-full" />
            </div>
            <p className="text-center">Lip liner</p>
          </li>
          <li
            className="flex flex-col items-center"
            onMouseEnter={() => dropDown("foundation")}
            onMouseLeave={() => dropDown("")}
          >
            <div className="max-w-[30px] max-h-[30px]">
              <img src="foundation.png" alt="" className="w-full h-full" />
            </div>
            <p className="text-center">Foundation</p>
          </li>
          <li
            className="flex flex-col items-center"
            onMouseEnter={() => dropDown("eyeshadow")}
            onMouseLeave={() => dropDown("")}
          >
            <div className="max-w-[30px] max-h-[30px]">
              <img src="eyeshadow.png" alt="" className="w-full h-full" />
            </div>
            <p className="text-center">Eyeshadow</p>
          </li>
          <li
            className="flex flex-col items-center"
            onMouseEnter={() => dropDown("eyeliner")}
            onMouseLeave={() => dropDown("")}
          >
            <div className="max-w-[30px] max-h-[30px]">
              <img src="eyeliner.png" alt="" className="w-full h-full" />
            </div>
            <p className="text-center">Eyeliner</p>
          </li>
          <li
            className="flex flex-col items-center"
            onMouseEnter={() => dropDown("eyebrow")}
            onMouseLeave={() => dropDown("")}
          >
            <div className="max-w-[30px] max-h-[30px]">
              <img src="eyebrow.png" alt="" className="w-full h-full" />
            </div>
            <p className="text-center">Eyebrow</p>
          </li>
          <li
            className="flex flex-col items-center"
            onMouseEnter={() => dropDown("bronzer")}
            onMouseLeave={() => dropDown("")}
          >
            <div className="max-w-[30px] max-h-[30px]">
              <img src="bronzer.png" alt="" className="w-full h-full" />
            </div>
            <p className="text-center">Bronzer</p>
          </li>
        </ul>
        {activeMenu === "blush" && (
          <div
            className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse ml-10"
            onMouseEnter={() => dropDown("blush")}
            onMouseLeave={() => dropDown("")}
          >
            <div className=" flex flex-row">
              <ul className="flex flex-col mr-10">
                <li>Powder</li>
                <li>Cream</li>
              </ul>
              <ul className="flex flex-col">
                <li>Vegan</li>
                <li>Gluten free</li>
                <li>Canadian</li>
                <li>Natural</li>
                <li>Non-GMO</li>
                <li>Purpicks</li>
                <li>USDA organic</li>
                <li>Organic</li>
                <li>Certclean</li>
                <li>EWG verified</li>
                <li>Hypoallergenic</li>
                <li>No talc</li>
              </ul>
            </div>
          </div>
        )}
        {activeMenu === "nail-polish" && (
          <div
            className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red ml-[150px] animate-pulse"
            onMouseEnter={() => dropDown("nail-polish")}
            onMouseLeave={() => dropDown("")}
          >
            <div className=" flex flex-row">
              <ul className="flex flex-col mr-10">
                <li>Vegan</li>
                <li>Canadian</li>
                <li>Natural</li>
                <li>Gluten free</li>
                <li>Fair trade</li>
                <li>Sugar free</li>
                <li>Non-GMO</li>
                <li>Dairy free</li>
              </ul>
            </div>
          </div>
        )}
        {activeMenu === "mascara" && (
          <div
            className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse ml-[330px]"
            onMouseEnter={() => dropDown("mascara")}
            onMouseLeave={() => dropDown("")}
          >
            <div className=" flex flex-row">
              <ul className="flex flex-col mr-10">
                <li>Natural</li>
                <li>Gluten free</li>
                <li>Vegan</li>
                <li>Canadian</li>
                <li>Organic</li>
                <li>Purpicks</li>
                <li>EWG verified</li>
                <li>Hypoallergenic</li>
                <li>No talc</li>
                <li>Ecocert</li>
                <li>USDA organic</li>
                <li>Certclean</li>
              </ul>
            </div>
          </div>
        )}
        {activeMenu === "lipstick" && (
          <div
            className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse ml-[450px]"
            onMouseEnter={() => dropDown("lipstick")}
            onMouseLeave={() => dropDown("")}
          >
            <div className=" flex flex-row">
              <ul className="flex flex-col mr-10">
                <li>Lipstick</li>
                <li>Lip gloss</li>
                <li>Liquid</li>
                <li>Lip stain</li>
              </ul>

              <ul>
                <li>Canadian</li>
                <li>Natural</li>
                <li>Gluten free</li>
                <li>Non-GMO</li>
                <li>Peanut free product</li>
                <li>Vegan</li>
                <li>Cruelty free</li>
                <li>Organic</li>
                <li>Purpicks</li>
                <li>Certclean</li>
                <li>Chemical free</li>
                <li>EWG verified</li>
                <li>Hypoallergenic</li>
                <li>No talc</li>
              </ul>
            </div>
          </div>
        )}
        {activeMenu === "lip-liner" && (
          <div
            className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse ml-[550px]"
            onMouseEnter={() => dropDown("lip-liner")}
            onMouseLeave={() => dropDown("")}
          >
            <div className=" flex flex-row">
              <ul className="flex flex-col mr-10">
                <li>Pencil</li>
              </ul>
              <ul>
                <li>Natural</li>
                <li>Vegan</li>
                <li>Gluten free</li>
                <li>Canadian</li>
                <li>Purpicks</li>
                <li>EWG verified</li>
                <li>Hypoallergenic</li>
                <li>No talc</li>
                <li>Cruelty free</li>
              </ul>
            </div>
          </div>
        )}
        {activeMenu === "foundation" && (
          <div
            className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse ml-[670px]"
            onMouseEnter={() => dropDown("foundation")}
            onMouseLeave={() => dropDown("")}
          >
            <div className=" flex flex-row">
              <ul className="flex flex-col mr-10">
                <li>Concealer</li>
                <li>Liquid</li>
                <li>Contour</li>
                <li>BB CC</li>
                <li>Cream</li>
                <li>Mineral</li>
                <li>Powder</li>
                <li>Highlighter</li>
              </ul>
              <ul className="flex flex-col mr-10">
                <li>Vegan</li>
                <li>Canadian</li>
                <li>Natural</li>
                <li>Gluten free</li>
                <li>Purpicks</li>
                <li>Certclean</li>
                <li>EWG verified</li>
                <li>Hypoallergenic</li>
                <li>No talc</li>
                <li>Water free</li>
                <li>Cruelty free</li>
                <li>Alcohol free</li>
                <li>Oil free</li>
                <li>Silicone free</li>
              </ul>
            </div>
          </div>
        )}
        {activeMenu === "eyeshadow" && (
          <div
            className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse ml-[850px]"
            onMouseEnter={() => dropDown("eyeshadow")}
            onMouseLeave={() => dropDown("")}
          >
            <div className="flex flex-row">
              <ul className="flex flex-col mr-10">
                <li>Palette</li>
                <li>Pencil</li>
                <li>-</li>
                <li>Cream</li>
              </ul>
              <ul className="flex flex-col mr-10">
                <li>Vegan</li>
                <li>Canadian</li>
                <li>Natural</li>
                <li>Gluten free</li>
                <li>Non-GMO</li>
                <li>Purpicks</li>
                <li>Certclean</li>
                <li>EWG verified</li>
                <li>Organic</li>
                <li>USDA organic</li>
                <li>Hypoallergenic</li>
                <li>No talc</li>
                <li>Ecocert</li>
              </ul>
            </div>
          </div>
        )}
        {activeMenu === "eyeliner" && (
          <div
            className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse ml-[1000px]"
            onMouseEnter={() => dropDown("eyeliner")}
            onMouseLeave={() => dropDown("")}
          >
            <div className=" flex flex-row">
              <ul className="flex flex-col mr-10">
                <li>Liquid</li>
                <li>Pencil</li>
                <li>Gel</li>
                <li>Cream</li>
              </ul>
              <ul className="flex flex-col mr-10">
                <li>Vegan</li>
                <li>Natural</li>
                <li>Canadian</li>
                <li>Gluten free</li>
                <li>Organic</li>
                <li>Purpicks</li>
                <li>Certclean</li>
                <li>EWG verified</li>
                <li>Hypoallergenic</li>
                <li>No talc</li>
                <li>Ecocert</li>
              </ul>
            </div>
          </div>
        )}
        {activeMenu === "eyebrow" && (
          <div
            className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse ml-[1150px]"
            onMouseEnter={() => dropDown("eyebrow")}
            onMouseLeave={() => dropDown("")}
          >
            <div className=" flex flex-row">
              <ul className="flex flex-col pr-3">
                <li>Pencil</li>
              </ul>
              <ul className="">
                <li>EWG verified</li>
                <li>Purpicks</li>
              </ul>
            </div>
          </div>
        )}
        {activeMenu === "bronzer" && (
          <div
            className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse ml-[1350px]"
            onMouseEnter={() => dropDown("bronzer")}
            onMouseLeave={() => dropDown("")}
          >
            <div className="flex flex-row">
              <ul className="mr-4">
                <li>Pencil</li>
              </ul>
              <ul>
                <li>EWG verified</li>
                <li>Purpicks</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default Navbar;
