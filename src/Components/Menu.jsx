import React, { useState, useContext } from "react";
import { Link, BrowserRouter } from "react-router-dom";

function Menu() {
  const [activeMenu, setActiveMenu] = useState();
  const dropDown = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="pt-5">
      <ul className="min-w-screen flex flex-row flex-wrap justify-around border-b-2 border-gega-rose gap-5 px-2">
        <div>
          <li
            className="flex flex-col relative items-center cursor-pointer max-md:hover:border-2 border-gega-earth-red p-1 animate-pulse rounded-[10px]"
            onMouseEnter={() => dropDown("blush")}
            onMouseLeave={() => dropDown("")}
          >
            <Link to="/result/blush">
              <div className="flex items-center justify-center flex-col">
                <div className="max-w-[30px] max-h-[30px]">
                  <img
                    src="/blush.svg"
                    alt=""
                    className=" text-center w-full h-full"
                  />
                </div>
                <p className="text-center">Blush</p>
              </div>
            </Link>
          </li>
          <div>
            {activeMenu === "blush" && (
              <div
                className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse  max-md:hidden"
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
                      <Link to="/result/blush/vegan-bytag">Vegan</Link>
                    </li>
                    <li>
                      <Link to="/result/blush/gluten+free-bytag">
                        Gluten free
                      </Link>
                    </li>
                    <li>
                      <Link to="/result/blush/canadian-bytag">Canadian</Link>
                    </li>
                    <li>
                      <Link to="/result/blush/natural-bytag">Natural</Link>
                    </li>
                    <li>
                      <Link to="/result/blush/non+gmo-bytag">Non-GMO</Link>
                    </li>
                    <li>
                      <Link to="/result/blush/purpicks-bytag">Purpicks</Link>
                    </li>
                    <li>
                      <Link to="/result/blush/usda+organic-bytag">
                        USDA organic
                      </Link>
                    </li>
                    <li>
                      <Link to="/result/blush/organic-bytag">Organic</Link>
                    </li>
                    <li>
                      <Link to="/result/blush/certclean-bytag">Certclean</Link>
                    </li>
                    <li>
                      <Link to="/result/blush/ewg+verified-bytag">
                        EWG verified
                      </Link>
                    </li>
                    <li>
                      <Link to="/result/blush/hypoallergenic-bytag">
                        Hypoallergenic
                      </Link>
                    </li>
                    <li>
                      <Link to="/result/blush/no+talc-bytag">No talc</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          {" "}
          <li
            className="flex flex-col items-center justify-center cursor-pointer max-md:hover:border-2 border-gega-earth-red p-1 animate-pulse rounded-[10px]"
            onMouseEnter={() => dropDown("nail-polish")}
            onMouseLeave={() => dropDown("")}
          >
            {" "}
            <Link to="/result/nail+polish">
              <div className="flex items-center justify-center flex-col">
                <div className="max-w-[30px] max-h-[30px]  flex items-center justify-center">
                  <img src="/nailpolish.png" alt="" />
                </div>
                <p className="text-center">Nail polish</p>{" "}
              </div>
            </Link>
          </li>
          {activeMenu === "nail-polish" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse  max-md:hidden"
              onMouseEnter={() => dropDown("nail-polish")}
              onMouseLeave={() => dropDown("")}
            >
              <div className="flex flex-row">
                <ul className="flex flex-col mr-10">
                  <li>
                    <Link to="/result/nail+polish/vegan-bytag">Vegan</Link>
                  </li>
                  <li>
                    <Link to="/result/nail+polish/canadian-bytag">
                      Canadian
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/nail+polish/natural-bytag">Natural</Link>
                  </li>
                  <li>
                    <Link to="/result/nail+polish/gluten+free-bytag">
                      Gluten free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/nail+polish/fair+trade-bytag">
                      Fair trade
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/nail+polish/sugar+free-bytag">
                      Sugar free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/nail+polish/non+gmo-bytag">Non-GMO</Link>
                  </li>
                  <li>
                    <Link to="/result/nail+polish/dairy+free-bytag">
                      Dairy free
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <li
            className="flex flex-col items-center max-md:hover:border-2 border-gega-earth-red p-1 animate-pulse rounded-[10px]"
            onMouseEnter={() => dropDown("mascara")}
            onMouseLeave={() => dropDown("")}
          >
            <Link to="/result/mascara">
              <div className="flex items-center justify-center flex-col">
                <div className="max-w-[30px] max-h-[30px]">
                  <img
                    src="/mascara.png"
                    alt=""
                    className
                    text-center="w-full h-full"
                  />
                </div>
                <p className="text-center">Mascara</p>
              </div>
            </Link>
          </li>
          {activeMenu === "mascara" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse  max-md:hidden"
              onMouseEnter={() => dropDown("mascara")}
              onMouseLeave={() => dropDown("")}
            >
              <div className="flex flex-row">
                <ul className="flex flex-col mr-10">
                  <li>
                    <Link to="/result/mascara/natural-bytag">Natural</Link>
                  </li>
                  <li>
                    <Link to="/result/mascara/gluten+free-bytag">
                      Gluten free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/mascara/vegan-bytag">Vegan</Link>
                  </li>
                  <li>
                    <Link to="/result/mascara/canadian-bytag">Canadian</Link>
                  </li>
                  <li>
                    <Link to="/result/mascara/organic-bytag">Organic</Link>
                  </li>
                  <li>
                    <Link to="/result/mascara/purpicks-bytag">Purpicks</Link>
                  </li>
                  <li>
                    <Link to="/result/mascara/ewg+verified-bytag">
                      EWG verified
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/mascara/hypoallergenic-bytag">
                      Hypoallergenic
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/mascara/no+talc-bytag">No talc</Link>
                  </li>
                  <li>
                    <Link to="/result/mascara/ecocert-bytag">Ecocert</Link>
                  </li>
                  <li>
                    <Link to="/result/mascara/usda+organic-bytag">
                      USDA organic
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/mascara/certclean-bytag">Certclean</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <li
            className="flex flex-col items-center max-md:hover:border-2 border-gega-earth-red p-1 animate-pulse rounded-[10px]"
            onMouseEnter={() => dropDown("lipstick")}
            onMouseLeave={() => dropDown("")}
          >
            <Link to="/result/lipstick">
              <div className="flex items-center justify-center flex-col">
                <div className="max-w-[30px] max-h-[30px]">
                  <img
                    src="/lipstick.png"
                    alt=""
                    classNam
                    text-center
                    e="w-full h-full"
                  />
                </div>
                <p className="text-center">Lipstick</p>
              </div>
            </Link>
          </li>
          {activeMenu === "lipstick" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse  max-md:hidden"
              onMouseEnter={() => dropDown("lipstick")}
              onMouseLeave={() => dropDown("")}
            >
              <div className="flex flex-row">
                <ul className="flex flex-col mr-10">
                  <li>
                    <Link to="/result/lipstick/lipstick">Lipstick</Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/lip+gloss">Lip gloss</Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/liquid">Liquid</Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/lip+stain">Lip stain</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/result/lipstick/canadian-bytag">Canadian</Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/natural-bytag">Natural</Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/gluten+free-bytag">
                      Gluten free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/non+gmo-bytag">Non-GMO</Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/peanut-free-bytag">
                      Peanut free product
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/vegan-bytag">Vegan</Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/cruelty+free-bytag">
                      Cruelty free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/organic-bytag">Organic</Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/purpicks-bytag">Purpicks</Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/certclean-bytag">Certclean</Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/chemical+free-bytag">
                      Chemical free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/ewg+verified-bytag">
                      EWG verified
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/hypoallergenic-bytag">
                      Hypoallergenic
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/lipstick/no+talc-bytag">No talc</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <li
            className="flex flex-col items-center max-md:hover:border-2 border-gega-earth-red p-1 animate-pulse rounded-[10px]"
            onMouseEnter={() => dropDown("lip-liner")}
            onMouseLeave={() => dropDown("")}
          >
            <Link to="/result/lip+liner">
              <div className="flex items-center justify-center flex-col">
                <div className="max-w-[30px] max-h-[30px]">
                  <img
                    src="/lipliner.png"
                    alt=""
                    classNam
                    text-center
                    e="w-full h-full"
                  />
                </div>
                <p className="text-center">Lip liner</p>
              </div>
            </Link>
          </li>
          {activeMenu === "lip-liner" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse max-md:hidden"
              onMouseEnter={() => dropDown("lip-liner")}
              onMouseLeave={() => dropDown("")}
            >
              <div className="flex flex-row">
                <ul className="flex flex-col mr-10">
                  <li>
                    <Link to="/result/lip+liner/pencil">Pencil</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/result/lip+liner/natural-bytag">Natural</Link>
                  </li>
                  <li>
                    <Link to="/result/lip+liner/vegan-bytag">Vegan</Link>
                  </li>
                  <li>
                    <Link to="/result/lip+liner/gluten+free-bytag">
                      Gluten free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/lip+liner/canadian-bytag">Canadian</Link>
                  </li>
                  <li>
                    <Link to="/result/lip+liner/purpicks-bytag">Purpicks</Link>
                  </li>
                  <li>
                    <Link to="/result/lip+liner/ewg+verified-bytag">
                      EWG verified
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/lip+liner/hypoallergenic-bytag">
                      Hypoallergenic
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/lip+liner/no+talc-bytag">No talc</Link>
                  </li>
                  <li>
                    <Link to="/result/lip+liner/cruelty+free-bytag">
                      Cruelty free
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <li
            className="flex flex-col items-center max-md:hover:border-2 border-gega-earth-red p-1 animate-pulse rounded-[10px]"
            onMouseEnter={() => dropDown("foundation")}
            onMouseLeave={() => dropDown("")}
          >
            <Link to="/result/foundation">
              <div className="flex items-center justify-center flex-col">
                {" "}
                <div className="max-w-[30px] max-h-[30px]">
                  <img
                    src="/foundation.png"
                    alt=""
                    classN
                    text-center
                    ame="w-full h-full"
                  />
                </div>
                <p className="text-center">Foundation</p>
              </div>
            </Link>
          </li>
          {activeMenu === "foundation" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse max-md:hidden"
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
                    <Link to="/result/foundation/bb+cc">BB CC</Link>
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
                    <Link to="/result/foundation/vegan-bytag">Vegan</Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/canadian-bytag">Canadian</Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/natural-bytag">Natural</Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/gluten+free-bytag">
                      Gluten free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/purpicks-bytag">Purpicks</Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/certclean-bytag">
                      Certclean
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/ewg+verified-bytag">
                      EWG verified
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/hypoallergenic-bytag">
                      Hypoallergenic
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/no+talc-bytag">No talc</Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/water+free-bytag">
                      Water free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/cruelty+free-bytag">
                      Cruelty free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/alcohol+free-bytag">
                      Alcohol free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/oil+free-bytag">Oil free</Link>
                  </li>
                  <li>
                    <Link to="/result/foundation/silicone-free-bytag">
                      Silicone free
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <li
            className="flex flex-col items-center max-md:hover:border-2 border-gega-earth-red p-1 animate-pulse rounded-[10px]"
            onMouseEnter={() => dropDown("eyeshadow")}
            onMouseLeave={() => dropDown("")}
          >
            <Link to="/result/eyeshadow">
              <div className="flex items-center justify-center flex-col">
                {" "}
                <div className="max-w-[30px] max-h-[30px]">
                  <img
                    src="/eyeshadow.png"
                    alt=""
                    classNa
                    text-center
                    me="w-full h-full"
                  />
                </div>
                <p className="text-center">Eyeshadow</p>
              </div>
            </Link>
          </li>
          {activeMenu === "eyeshadow" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse max-md:hidden"
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
                    <Link to="/result/eyeshadow/vegan-bytag">Vegan</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeshadow/canadian-bytag">Canadian</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeshadow/natural-bytag">Natural</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeshadow/gluten+free-bytag">
                      Gluten free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/eyeshadow/non+gmo-bytag">Non-GMO</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeshadow/purpicks-bytag">Purpicks</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeshadow/certclean-bytag">
                      Certclean
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/eyeshadow/ewg+verified-bytag">
                      EWG verified
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/eyeshadow/organic-bytag">Organic</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeshadow/usda+organic-bytag">
                      USDA organic
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/eyeshadow/hypoallergenic-bytag">
                      Hypoallergenic
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/eyeshadow/no+talc-bytag">No talc</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeshadow/ecocert-bytag">Ecocert</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <li
            className="flex flex-col items-center max-md:hover:border-2 border-gega-earth-red p-1 animate-pulse rounded-[10px]"
            onMouseEnter={() => dropDown("eyeliner")}
            onMouseLeave={() => dropDown("")}
          >
            <Link to="/result/eyeliner">
              <div className="flex items-center justify-center flex-col">
                <div className="max-w-[30px] max-h-[30px]">
                  <img
                    src="/eyeliner.png"
                    alt=""
                    classNam
                    text-center
                    e="w-full h-full"
                  />
                </div>
                <p className="text-center">Eyeliner</p>
              </div>
            </Link>
          </li>
          {activeMenu === "eyeliner" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse max-md:hidden"
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
                    <Link to="/result/eyeliner/vegan-bytag">Vegan</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeliner/natural-bytag">Natural</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeliner/canadian-bytag">Canadian</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeliner/gluten+free-bytag">
                      Gluten free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/eyeliner/organic-bytag">Organic</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeliner/purpicks-bytag">Purpicks</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeliner/certclean-bytag">Certclean</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeliner/ewg+verified-bytag">
                      EWG verified
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/eyeliner/hypoallergenic-bytag">
                      Hypoallergenic
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/eyeliner/no+talc-bytag">No talc</Link>
                  </li>
                  <li>
                    <Link to="/result/eyeliner/ecocert-bytag">Ecocert</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <li
            className="flex flex-col items-center max-md:hover:border-2 border-gega-earth-red p-1 animate-pulse rounded-[10px]"
            onMouseEnter={() => dropDown("eyebrow")}
            onMouseLeave={() => dropDown("")}
          >
            <Link to="/result/eyebrow">
              <div className="flex items-center justify-center flex-col">
                {" "}
                <div className="max-w-[30px] max-h-[30px]">
                  <img
                    src="/eyebrow.png"
                    alt=""
                    className
                    text-center="w-full h-full"
                  />
                </div>
                <p className="text-center">Eyebrow</p>
              </div>
            </Link>
          </li>
          {activeMenu === "eyebrow" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse max-md:hidden"
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
                    <Link to="/result/eyebrow/ewg+verified-bytag">
                      EWG verified
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/eyebrow/purpicks-bytag">Purpicks</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div>
          <li
            className="flex flex-col items-center max-md:hover:border-2 border-gega-earth-red p-1 animate-pulse rounded-[10px]"
            onMouseEnter={() => dropDown("bronzer")}
            onMouseLeave={() => dropDown("")}
          >
            <Link to="/result/bronzer">
              <div className="flex items-center justify-center flex-col">
                <div className="max-w-[30px] max-h-[30px]">
                  <img
                    src="/bronzer.png"
                    alt=""
                    className
                    text-center="w-full h-full"
                  />
                </div>
                <p className="text-center">Bronzer</p>
              </div>
            </Link>
          </li>
          {activeMenu === "bronzer" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse  max-md:hidden ml-[-100px]"
              onMouseEnter={() => dropDown("bronzer")}
              onMouseLeave={() => dropDown("")}
            >
              <div className="flex flex-row">
                <ul className="flex flex-col pr-3">
                  <li>
                    <Link to="/result/bronzer/powder">Powder</Link>
                  </li>
                </ul>
                <ul className="">
                  <li>
                    <Link to="/result/bronzer/gluten+free-bytag">
                      Gluten free
                    </Link>
                  </li>
                  <li>
                    <Link to="/result/bronzer/canadian-bytag">Canadian</Link>
                  </li>
                  <li>
                    <Link to="/result/bronzer/natural-bytag">Natural</Link>
                  </li>
                  <li>
                    <Link to="/result/bronzer/organic-bytag">Organic</Link>
                  </li>
                  <li>
                    <Link to="/result/bronzer/vegan-bytag">Vegan</Link>
                  </li>
                  <li>
                    <Link to="/result/bronzer/purpicks-bytag">Purpicks</Link>
                  </li>
                  <li>
                    <Link to="/result/bronzer/ewg+verified-bytag">
                      EWG verified
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Menu;
