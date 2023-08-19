import React, { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import Please from "./Please";
import { useUserData } from "../UserDataContext";
import Stars from "./Stars";

function Products() {
  const [products, setProducts] = useState([]);
  const { userData } = useUserData();
  const { setProductData } = useUserData();
  const { setProduct } = useUserData();
  const { setRating } = useUserData();
  const [show, setShow] = useState(false);
  const [showNotficition, setShowNotficiton] = useState(false);
  let location = useLocation();
  const { category } = useParams();
  const { type } = useParams();
  const { tag } = useParams();
  const { brandName } = useParams();
  const [PGT, setPGT] = useState();
  const [PLT, setPLT] = useState();
  const [RGT, setRGT] = useState();
  const [RLT, setRLT] = useState();

  useEffect(() => {
    let url;

    switch (true) {
      case location.pathname === "/rating":
        url = `http://makeup-api.herokuapp.com/api/v1/products.json?`;
        break;
      case location.pathname.includes(category):
        url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=&product_type=${type}&product_category=${category}`;
        break;
      case location.pathname.includes(tag):
        url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=&product_type=${type}&product_tags=${tag}`;
        break;
      case location.pathname.includes(type):
        url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=&product_type=${type}`;
        break;
      case location.pathname.includes(brandName):
        url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`;
        break;
      case location.pathname === "/":
        url =
          `http://makeup-api.herokuapp.com/api/v1/products.json?rating_less_than=5`;
        break;
      default:
        url = "";
        break;
    }

    if (PGT) {
      url += `&price_greater_than=${PGT}`;
    } else if (PLT) {
      url += `&price_less_than=${PLT}`;
    } else if (RGT) {
      url += `&rating_greater_than=${RGT}`;
    } else if (RLT) {
      url += `&rating_less_than=${RLT}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        location.pathname.includes("rating") ||
        location.pathname.includes("result") ||
        location.pathname.includes("brand")
          ? setProducts(data)
          : setProducts(data.slice(0, 8));
      })
      .catch("error: ", Error);
  }, [location.pathname, type, category, tag, brandName, PGT, PLT, RGT, RLT]);

  const handleProductClick = (product) => {
    setProductData((prevData) => [...prevData, product]);
  };

  const pleaseRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (pleaseRef.current && !pleaseRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleNotficition = () => {
    setShowNotficiton(true);
    setTimeout(() => {
      setShowNotficiton(false);
    }, 2500);
  };

  const handleRating = (rating) => {
    setRating(rating);
  };

  return (
    <div className="mx-auto p-4 flex flex-col items-center mt-[50px]">
      {location.pathname.includes("rating") ||
      location.pathname.includes(brandName) ||
      location.pathname.includes(category) ||
      location.pathname.includes(type) ||
      location.pathname.includes(tag) ||
      location.pathname.includes("result") ? (
        <div className="flex flex-row w-full justify-around items-center mb-[50px]">
          <div className="flex flex-row space-between items-center px-4 py-2 bg-gega-soft">
            <p>price greater than</p>
            <input
              type="number"
              className="w-[60px] ml-2"
              placeholder="5"
              onChange={(e) => setPGT(e.target.value)}
            />
          </div>
          <div className="flex flex-row space-between items-center px-4 py-2 bg-gega-soft">
            <p>price less than</p>
            <input
              type="number"
              className="w-[60px] ml-2"
              placeholder="5"
              onChange={(e) => setPLT(e.target.value)}
            />
          </div>
          <div className="flex flex-row space-between items-center px-4 py-2 bg-gega-soft">
            <p>rating greater than</p>
            <select name="" id="" onChange={(e) => setRGT(e.target.value)}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="flex flex-row space-between items-center px-4 py-2 bg-gega-soft">
            <p>rating less than</p>
            <select name="" id="" onChange={(e) => setRLT(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      ) : null}
      <ul className="flex flex-wrap flex-row justify-around items-start">
        {products.map((product) =>
          product.image_link ? (
            <li
              key={product.id}
              className="border p-4 mb-10 rounded-lg shadow-md max-w-[300px] min-h-[500px]"
              onClick={() => setProduct(product)}
            >
              <img
                src={product.image_link}
                alt={product.name}
                className="w-40 h-40 object-cover mx-auto mb-4"
              />
              <Link to="/product">
                {" "}
                <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:underline">
                  {product.name}
                </h3>
              </Link>

              <p className="text-gray-600 mb-2">
                {product.description
                  ? product.description.slice(0, 70) + "..."
                  : product.description}
              </p>
              <div className="flex-end">
                <ul className="flex space-x-1">
                  {handleRating(product.rating)}
                  <Stars />
                </ul>
                <div className="text-lg font-semibold flex flex-row">
                  <p className="mr-1">{product.price}</p>
                  <p>
                    {product.price_sign === null ? "$" : product.price_sign}
                  </p>
                </div>

                <div className="flex flex-row items-end justify-between">
                  <ul className="flex flex-wrap space-x-2">
                    {product.product_colors.map((color) => (
                      <li
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color.hex_value }}
                        title={color.colour_name}
                      />
                    ))}
                  </ul>
                  {userData !== null ? (
                    <div
                      className="rounded-[100%] hover:bg-gega-light-grey duration-30 cursor-pointer"
                      onClick={() => {
                        handleProductClick(product);
                        handleNotficition();
                      }}
                    >
                      <SlBasket className="mr-[10px] text-5xl py-2" />
                    </div>
                  ) : (
                    <div
                      className="rounded-[100%] hover:bg-gega-light-grey duration-300 cursor-pointer"
                      onClick={(event) => {
                        setShow(true);
                        event.stopPropagation();
                      }}
                    >
                      <SlBasket className="mr-[10px] text-5xl py-2" />
                    </div>
                  )}
                </div>
              </div>
            </li>
          ) : null
        )}
      </ul>
      <div ref={pleaseRef}>
        {show && (
          <>
            <div
              className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-10"
              onClick={() => setShow(false)}
            />
            <div className="fixed top-[22%] left-[38%] z-20" ref={pleaseRef}>
              <Please className="bg-gega-light" />
            </div>
          </>
        )}
      </div>
      <div>
        {showNotficition && (
          <div className="w-screen h-screen fixed">
            <div className="fixed w-[300px] bg-gega-rose text-gega-white text-xl text-center top-[89%] left-[38%] z-20 py-3 rounded-lg animate-pulse">
              Product was added to basket
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
