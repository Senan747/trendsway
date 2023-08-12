import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../UserDataContext";
import { SlBasket } from "react-icons/sl";

function Navbar() {
  const { userData } = useUserData();
  const [searchResults, setSearchResults] = useState([]);
  let inputRef = useRef();
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
    const filteredBrands = brandList.filter((brand) =>
      brand.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredBrands);
  };

  return (
    <div>
      <div className="max-h-[200px] bg-gega-pink flex flex-row items-center justify-between ">
        <div className="max-h-[150px] max-w-[150px] ">
          <img src="/logo.png" alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="mr-10">
            <input
              type="search"
              className="border-1 w-[300px] outline-none rounded-[10px] py-[6px] px-3"
              placeholder="search brand"
              ref={inputRef}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchResults.length > 0 && (
              <ul className="bg-gega-white absolute">
                {searchResults.map((result, index) => (
                  <li key={index} onClick={() => handleClick(result)}>
                    {result}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {userData ? (
            <div className="min-w-[300px] flex flex-row justify-around items-center">
              <p className="text-gega-white text-xl">
                Hello, {userData.username}!
              </p>
              <Link to="/basket">
                <SlBasket className="text-xl" />
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
    </div>
  );
}

export default Navbar;
