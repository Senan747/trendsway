import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../UserDataContext";
import { SlBasket } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";

import Logout from "./Logout";

function Navbar() {
  const { userData, showLogout, setShowLogout, detailShow } = useUserData();
  const { productData } = useUserData();
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(false);

  let navigate = useNavigate();
  const brandList = [
    "almay",
    "alva",
    "anna sui",
    "annabelle",
    "benefit",
    "boosh",
    "burt's bees",
    "butter london",
    "c'est moi",
    "cargo cosmetics",
    "china glaze",
    "clinique",
    "coastal classic creation",
    "colourpop",
    "covergirl",
    "dalish",
    "deciem",
    "dior",
    "dr. hauschka",
    "e.l.f.",
    "essie",
    "fenty",
    "glossier",
    "green people",
    "iman",
    "l'oreal",
    "lotus cosmetics usa",
    "maia's mineral galaxy",
    "marcelle",
    "marienatie",
    "maybelline",
    "milani",
    "mineral fusion",
    "misa",
    "mistura",
    "moov",
    "nudus",
    "nyx",
    "orly",
    "pacifica",
    "penny lane organics",
    "physicians formula",
    "piggy paint",
    "pure anada",
    "rejuva minerals",
    "revlon",
    "sally b's skin yummies",
    "salon perfect",
    "sante",
    "sinful colours",
    "smashbox",
    "stila",
    "suncoat",
    "w3llpeople",
    "wet n wild",
    "zorah",
    "zorah biocosmetiques",
  ];

  const handleClick = (result) => {
    const brandUrl = `/brands/${result.replace(/\s+/g, "+")}`;
    navigate(brandUrl);
  };

  const handleSearch = (query) => {
    if (query === "") {
      setSearchResults([]);
    } else {
      setShow(false);
      const filteredBrands = brandList.filter((brand) =>
        brand.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredBrands);
    }
  };

  const pleaseRef = useRef(null); 
  useEffect(() => {
    function handleClickOutside(event) {
      if (pleaseRef.current && !pleaseRef.current.contains(event.target)) {
        setShow(true);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="max-h-[200px] bg-gega-pink flex flex-row items-center justify-between ">
        <div className="max-h-[150px] max-w-[150px] ">
          <Link to="/">
            <img
              src="/logo.png"
              alt=""
              className="w-full h-full cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="mr-10" ref={pleaseRef}>
            <input
              type="search"
              className="border-1 w-[300px] outline-none rounded-[10px] py-[6px] px-3"
              placeholder="search brand"
              onChange={(e) => handleSearch(e.target.value)}
            />

            {!show && searchResults.length > 0 && (
              <ul className="bg-gega-white absolute w-[300px] max-h-[300px] overflow-auto">
                {searchResults.map((result, index) => (
                  <li
                    key={index}
                    onClick={() => handleClick(result)}
                    className="py-1 px-2 cursor-pointer"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {userData || detailShow ? (
            <div className="min-w-[300px] flex flex-row justify-around items-center">
              <p className="text-gega-white text-xl">
                Hello, {userData.username}!
              </p>
              <Link to="/basket" className="relative">
                <SlBasket className="text-3xl text-gega-white" />
                <div className="text-sm absolute bottom-3 left-5 text-gega-white bg-gega-red rounded-[100%] px-[5px]">
                  {productData && productData.length}
                </div>
              </Link>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setShowLogout(!showLogout)}
              >
                <FiLogOut />
                <span>Logout</span>
              </div>
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
          {showLogout && (
            <div className="flex items-center justify-center">
              <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-10" />
              <div className="fixed z-20 top-[22%] left-[30%]">
                <Logout />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
