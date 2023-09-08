import React from "react";
import { Link } from "react-router-dom";

function HomburgerMenu() {
  return (
    <div>
      <ul>
        <li>Blush</li>
        <li>Nail polish</li>
        <li> Mascara</li>
        <li>Lipstick</li>
        <li>Lip liner</li>
        <li>Foundation</li>
        <li>Eyeshadow</li>
        <li>Eyeliner</li>
        <li>Eyebrow</li>
        <li>Bronzer</li>
      </ul>
      <ul>
        <li>
          {activeMenu === "blush" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse"
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
        </li>
        <li>
          {" "}
          {activeMenu === "nail-polish" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red  animate-pulse"
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
        </li>
        <li>
          {activeMenu === "mascara" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse"
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
        </li>
        <li>
          {activeMenu === "lipstick" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse"
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
        </li>
        <li>
          {activeMenu === "lip-liner" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse"
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
        </li>
        <li>
          {activeMenu === "foundation" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse"
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
        </li>
        <li>
          {activeMenu === "eyeshadow" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse"
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
        </li>
        <li>
          {activeMenu === "eyeliner" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse]"
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
        </li>
        <li>
          {activeMenu === "eyebrow" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse]"
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
        </li>
        <li>
          {activeMenu === "bronzer" && (
            <div
              className="flex items-start justify-start border-2 border-t-0 border-gega-rose absolute bg-gega-soft p-6 cursor-pointer text-gega-earth-red animate-pulse ml-[-100px]"
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
        </li>
      </ul>
    </div>
  );
}

export default HomburgerMenu;
