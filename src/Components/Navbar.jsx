import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../UserDataContext";
import { TbBasketFilled } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import Logout from "./Logout";

function Navbar() {
  const { userData, showLogout, setShowLogout, setShowHomburger } =
    useUserData();
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
    <div className="max-w-screen bg-gega-pink flex flex-row items-center justify-around">
      <div className="flex flex-row justify-between items-center">
        <HiOutlineMenuAlt1
          className="text-2xl font-semibold hidden max-md:block cursor-pointer"
          onClick={() => setShowHomburger(true)}
        />
        <Link to="/" className="">
          <div className=" md:max-w-full md:ml-5 bg-cover">
            <img
              src="/logo.png"
              alt=""
              className="max-h-[100px] max-w-[100px] cursor-pointer bg-contain"
            />
          </div>{" "}
        </Link>
        <div className="md:mr-10" ref={pleaseRef}>
          <input
            type="search"
            className="border-1 w-full md:w-[300px] outline-none rounded-[10px] py-[6px] px-3"
            placeholder="Search brand"
            onChange={(e) => handleSearch(e.target.value)}
          />{" "}
          {!show && searchResults.length > 0 && (
            <ul className="bg-gega-white absolute w-full md:w-[300px] max-md:w-[170px] max-h-[300px] overflow-auto">
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
      </div>
      <div className="flex flex-col items-center justify-between">
        <div>
          {userData ? (
            <>
              <div className="min-w-full md:min-w-[300px] flex flex-col md:flex-row justify-between items-center">
                <p className="text-gega-white text-xl mb-4 md:mb-0 max-md:text-sm">
                  Hello, {userData.username}!
                </p>
                <div
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setShowLogout(!showLogout)}
                >
                  <FiLogOut />
                  <span>Logout</span>
                </div>
              </div>
              <div className="fixed z-10 top-[80%] max-md:right-[10%] right-[10%]">
                <Link to="/basket" className="relative ">
                  <TbBasketFilled className="text-6xl text-gega-white bg-gega-red p-3 rounded-full" />
                  <div className="text-xs absolute bottom-8 left-10 text-gega-red bg-gega-white rounded-full px-[5px]">
                    {productData && productData.length}
                  </div>
                </Link>
              </div>
            </>
          ) : (
            <div className="flex flex-row items-center text-white">
              <Link to="/login">
                <button className="border-none px-3 py-1 bg-gega-earth-red rounded-[10px] max-md:text-xs mx-2">
                  Log in
                </button>
              </Link>
              <Link to="/register">
                <p className="text-gega-earth-red underline max-md:text-xs">Sign up</p>
              </Link>{" "}
            </div>
          )}
          {showLogout && (
            <div className="">
              <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-10" />
              <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen z-20">
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
