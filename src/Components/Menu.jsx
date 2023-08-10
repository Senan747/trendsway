import React, { useState, useContext } from "react";
import { Link, BrowserRouter } from "react-router-dom";

function Menu() {
  const [activeMenu, setActiveMenu] = useState("");
  const dropDown = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="pt-5">
      <ul className="flex flex-row justify-around border-b-2 border-gega-rose">
        <Link to="/result/blush">
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
        </Link>
        <Link to="/result/nail-polish">
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
        </Link>
        <Link to="/result/mascara">
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
        </Link>
        <Link to="/result/lipstick">
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
        </Link>
        <Link to="/result/lip-liner">
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
        </Link>
        <Link to="/result/foundation">
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
        </Link>
        <Link to="/result/eyeshadow">
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
        </Link>
        <Link to="/result/eyeliner">
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
        </Link>
        <Link to="/result/eyebrow">
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
        </Link>
        <Link to="/result/bronzer">
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
        </Link>
      </ul>
      {activeMenu === "blush" && (
        <div
          className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse ml-10"
          onMouseEnter={() => dropDown("blush")}
          onMouseLeave={() => dropDown("")}
        >
          <div className=" flex flex-row">
            <ul className="flex flex-col mr-10">
              <li>
                <Link to="/result/blush/powder">Powder</Link>
              </li>
              <li>
                <Link to="/result/blush/cream">Cream</Link>
              </li>
            </ul>
            <ul className="flex flex-col">
              <li>
                <Link to="/result/blush/vegan">Vegan</Link>
              </li>
              <li>
                <Link to="/result/blush/gluten-free">Gluten free</Link>
              </li>
              <li>
                <Link to="/result/blush/canadian">Canadian</Link>
              </li>
              <li>
                <Link to="/result/blush/natural">Natural</Link>
              </li>
              <li>
                <Link to="/result/blush/non-gmo">Non-GMO</Link>
              </li>
              <li>
                <Link to="/result/blush/purpicks">Purpicks</Link>
              </li>
              <li>
                <Link to="/result/blush/usda-organic">USDA organic</Link>
              </li>
              <li>
                <Link to="/result/blush/organic">Organic</Link>
              </li>
              <li>
                <Link to="/result/blush/certclean">Certclean</Link>
              </li>
              <li>
                <Link to="/result/blush/ewg-verified">EWG verified</Link>
              </li>
              <li>
                <Link to="/result/blush/hypoallergenic">Hypoallergenic</Link>
              </li>
              <li>
                <Link to="/result/blush/no-talc">No talc</Link>
              </li>
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
          <div className="flex flex-row">
            <ul className="flex flex-col mr-10">
              <li>
                <Link to="/result/nail-polish/vegan">Vegan</Link>
              </li>
              <li>
                <Link to="/result/nail-polish/canadian">Canadian</Link>
              </li>
              <li>
                <Link to="/result/nail-polish/natural">Natural</Link>
              </li>
              <li>
                <Link to="/result/nail-polish/gluten-free">Gluten free</Link>
              </li>
              <li>
                <Link to="/result/nail-polish/fair-trade">Fair trade</Link>
              </li>
              <li>
                <Link to="/result/nail-polish/sugar-free">Sugar free</Link>
              </li>
              <li>
                <Link to="/result/nail-polish/non-gmo">Non-GMO</Link>
              </li>
              <li>
                <Link to="/result/nail-polish/dairy-free">Dairy free</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "mascara" && (
        <div
          className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse ml-[330px]"
          onMouseEnter={() => dropDown("mascara")}
          onMouseLeave={() => dropDown("")}
        >
          <div className="flex flex-row">
            <ul className="flex flex-col mr-10">
              <li>
                <Link to="/result/mascara/natural">Natural</Link>
              </li>
              <li>
                <Link to="/result/mascara/gluten-free">Gluten free</Link>
              </li>
              <li>
                <Link to="/result/mascara/vegan">Vegan</Link>
              </li>
              <li>
                <Link to="/result/mascara/canadian">Canadian</Link>
              </li>
              <li>
                <Link to="/result/mascara/organic">Organic</Link>
              </li>
              <li>
                <Link to="/result/mascara/purpicks">Purpicks</Link>
              </li>
              <li>
                <Link to="/result/mascara/ewg-verified">EWG verified</Link>
              </li>
              <li>
                <Link to="/result/mascara/hypoallergenic">Hypoallergenic</Link>
              </li>
              <li>
                <Link to="/result/mascara/no-talc">No talc</Link>
              </li>
              <li>
                <Link to="/result/mascara/ecocert">Ecocert</Link>
              </li>
              <li>
                <Link to="/result/mascara/usda-organic">USDA organic</Link>
              </li>
              <li>
                <Link to="/result/mascara/certclean">Certclean</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {activeMenu === "lipstick" && (
        <div
          className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse ml-[450px]"
          onMouseEnter={() => dropDown("lipstick")}
          onMouseLeave={() => dropDown("")}
        >
          <div className="flex flex-row">
            <ul className="flex flex-col mr-10">
              <li>
                <Link to="/result/lipstick/lipstick">Lipstick</Link>
              </li>
              <li>
                <Link to="/result/lipstick/lip-gloss">Lip gloss</Link>
              </li>
              <li>
                <Link to="/result/lipstick/liquid">Liquid</Link>
              </li>
              <li>
                <Link to="/result/lipstick/lip-stain">Lip stain</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/result/lipstick/canadian">Canadian</Link>
              </li>
              <li>
                <Link to="/result/lipstick/natural">Natural</Link>
              </li>
              <li>
                <Link to="/result/lipstick/gluten-free">Gluten free</Link>
              </li>
              <li>
                <Link to="/result/lipstick/non-gmo">Non-GMO</Link>
              </li>
              <li>
                <Link to="/result/lipstick/peanut-free">
                  Peanut free product
                </Link>
              </li>
              <li>
                <Link to="/result/lipstick/vegan">Vegan</Link>
              </li>
              <li>
                <Link to="/result/lipstick/cruelty-free">Cruelty free</Link>
              </li>
              <li>
                <Link to="/result/lipstick/organic">Organic</Link>
              </li>
              <li>
                <Link to="/result/lipstick/purpicks">Purpicks</Link>
              </li>
              <li>
                <Link to="/result/lipstick/certclean">Certclean</Link>
              </li>
              <li>
                <Link to="/result/lipstick/chemical-free">Chemical free</Link>
              </li>
              <li>
                <Link to="/result/lipstick/ewg-verified">EWG verified</Link>
              </li>
              <li>
                <Link to="/result/lipstick/hypoallergenic">Hypoallergenic</Link>
              </li>
              <li>
                <Link to="/result/lipstick/no-talc">No talc</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "lip-liner" && (
        <div
          className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse ml-[550px]"
          onMouseEnter={() => dropDown("lip-liner")}
          onMouseLeave={() => dropDown("")}
        >
          <div className="flex flex-row">
            <ul className="flex flex-col mr-10">
              <li>
                <Link to="/result/lip-liner/pencil">Pencil</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/result/lip-liner/natural">Natural</Link>
              </li>
              <li>
                <Link to="/result/lip-liner/vegan">Vegan</Link>
              </li>
              <li>
                <Link to="/result/lip-liner/gluten-free">Gluten free</Link>
              </li>
              <li>
                <Link to="/result/lip-liner/canadian">Canadian</Link>
              </li>
              <li>
                <Link to="/result/lip-liner/purpicks">Purpicks</Link>
              </li>
              <li>
                <Link to="/result/lip-liner/ewg-verified">EWG verified</Link>
              </li>
              <li>
                <Link to="/result/lip-liner/hypoallergenic">
                  Hypoallergenic
                </Link>
              </li>
              <li>
                <Link to="/result/lip-liner/no-talc">No talc</Link>
              </li>
              <li>
                <Link to="/result/lip-liner/cruelty-free">Cruelty free</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "foundation" && (
        <div
          className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse ml-[670px]"
          onMouseEnter={() => dropDown("foundation")}
          onMouseLeave={() => dropDown("")}
        >
          <div className="flex flex-row">
            <ul className="flex flex-col mr-10">
              <li>
                <Link to="/result/foundation/concealer">Concealer</Link>
              </li>
              <li>
                <Link to="/result/foundation/liquid">Liquid</Link>
              </li>
              <li>
                <Link to="/result/foundation/contour">Contour</Link>
              </li>
              <li>
                <Link to="/result/foundation/bb-cc">BB CC</Link>
              </li>
              <li>
                <Link to="/result/foundation/cream">Cream</Link>
              </li>
              <li>
                <Link to="/result/foundation/mineral">Mineral</Link>
              </li>
              <li>
                <Link to="/result/foundation/powder">Powder</Link>
              </li>
              <li>
                <Link to="/result/foundation/highlighter">Highlighter</Link>
              </li>
            </ul>
            <ul className="flex flex-col mr-10">
              <li>
                <Link to="/result/foundation/vegan">Vegan</Link>
              </li>
              <li>
                <Link to="/result/foundation/canadian">Canadian</Link>
              </li>
              <li>
                <Link to="/result/foundation/natural">Natural</Link>
              </li>
              <li>
                <Link to="/result/foundation/gluten-free">Gluten free</Link>
              </li>
              <li>
                <Link to="/result/foundation/purpicks">Purpicks</Link>
              </li>
              <li>
                <Link to="/result/foundation/certclean">Certclean</Link>
              </li>
              <li>
                <Link to="/result/foundation/ewg-verified">EWG verified</Link>
              </li>
              <li>
                <Link to="/result/foundation/hypoallergenic">
                  Hypoallergenic
                </Link>
              </li>
              <li>
                <Link to="/result/foundation/no-talc">No talc</Link>
              </li>
              <li>
                <Link to="/result/foundation/water-free">Water free</Link>
              </li>
              <li>
                <Link to="/result/foundation/cruelty-free">Cruelty free</Link>
              </li>
              <li>
                <Link to="/result/foundation/alcohol-free">Alcohol free</Link>
              </li>
              <li>
                <Link to="/result/foundation/oil-free">Oil free</Link>
              </li>
              <li>
                <Link to="/result/foundation/silicone-free">Silicone free</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "eyeshadow" && (
        <div
          className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse ml-[850px]"
          onMouseEnter={() => dropDown("eyeshadow")}
          onMouseLeave={() => dropDown("")}
        >
          <div className="flex flex-row">
            <ul className="flex flex-col mr-10">
              <li>
                <Link to="/result/eyeshadow/palette">Palette</Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/pencil">Pencil</Link>
              </li>
              <li>-</li>
              <li>
                <Link to="/result/eyeshadow/cream">Cream</Link>
              </li>
            </ul>
            <ul className="flex flex-col mr-10">
              <li>
                <Link to="/result/eyeshadow/vegan">Vegan</Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/canadian">Canadian</Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/natural">Natural</Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/gluten-free">Gluten free</Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/non-gmo">Non-GMO</Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/purpicks">Purpicks</Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/certclean">Certclean</Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/ewg-verified">EWG verified</Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/organic">Organic</Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/usda-organic">USDA organic</Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/hypoallergenic">
                  Hypoallergenic
                </Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/no-talc">No talc</Link>
              </li>
              <li>
                <Link to="/result/eyeshadow/ecocert">Ecocert</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "eyeliner" && (
        <div
          className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse ml-[1000px]"
          onMouseEnter={() => dropDown("eyeliner")}
          onMouseLeave={() => dropDown("")}
        >
          <div className="flex flex-row">
            <ul className="flex flex-col mr-10">
              <li>
                <Link to="/result/eyeliner/liquid">Liquid</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/pencil">Pencil</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/gel">Gel</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/cream">Cream</Link>
              </li>
            </ul>
            <ul className="flex flex-col mr-10">
              <li>
                <Link to="/result/eyeliner/vegan">Vegan</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/natural">Natural</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/canadian">Canadian</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/gluten-free">Gluten free</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/organic">Organic</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/purpicks">Purpicks</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/certclean">Certclean</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/ewg-verified">EWG verified</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/hypoallergenic">Hypoallergenic</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/no-talc">No talc</Link>
              </li>
              <li>
                <Link to="/result/eyeliner/ecocert">Ecocert</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "eyebrow" && (
        <div
          className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse ml-[1150px]"
          onMouseEnter={() => dropDown("eyebrow")}
          onMouseLeave={() => dropDown("")}
        >
          <div className="flex flex-row">
            <ul className="flex flex-col pr-3">
              <li>
                <Link to="/result/eyebrow/pencil">Pencil</Link>
              </li>
            </ul>
            <ul className="">
              <li>
                <Link to="/result/eyebrow/ewg-verified">EWG verified</Link>
              </li>
              <li>
                <Link to="/result/eyebrow/purpicks">Purpicks</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
