import React, { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import Please from "./Please";
import { useUserData } from "../UserDataContext";
import Stars from "./Stars";
import { RingLoader } from "react-spinners";

function Products() {
  const [products, setProducts] = useState([]);
  const { userData } = useUserData();
  const { setProductData } = useUserData();
  const { setProduct } = useUserData();
  const { setRating } = useUserData();
  const [show, setShow] = useState(false);
  const [showNotification, setShowNotfication] = useState(false);
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
        url = `http://makeup-api.herokuapp.com/api/v1/products.json?rating_less_than=5`;
        break;
      default:
        url = "";
        break;
    }

    if (PGT) {
      url += `&price_greater_than=${PGT}`;
    }
    if (PLT) {
      url += `&price_less_than=${PLT}`;
    }
    if (RGT) {
      url += `&rating_greater_than=${RGT}`;
    }
    if (RLT) {
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

  const handleProductClick = ({ product, e }) => {
    console.log("senan");
    if (userData !== null) {
      setProductData((prevData) => [...prevData, product]);
      handleNotfication();
    } else {
      setShow(true);
      e.stopPropagation();
    }
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

  const handleNotfication = () => {
    setShowNotfication(true);
    setTimeout(() => {
      setShowNotfication(false);
    }, 2500);
  };

  const handleRating = (rating) => {
    setRating(rating);
  };

  return (
    <div className="mx-auto flex flex-col items-center pt-[30px]">
      {location.pathname.includes("rating") ||
      location.pathname.includes(category) ||
      location.pathname.includes(type) ||
      location.pathname.includes(tag) ||
      location.pathname.includes("result") ? (
        <div className="flex flex-row flex-wrap gap-5 w-full max-md:w-full justify-around items-center mb-[50px] ">
          <div className="flex flex-row justify-around items-center flex-wrap px-4 py-2 bg-gega-soft max-md:w-[300px] rounded-[5px]">
            <p>price greater than</p>
            <input
              type="number"
              className="w-[60px] ml-2 p-1 rounded-[5px]"
              placeholder="5"
              onChange={(e) => setPGT(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-around items-center flex-wrap px-4 py-2 bg-gega-soft max-md:w-[300px] rounded-[5px]">
            <p>price less than</p>
            <input
              type="number"
              className="w-[60px] ml-2 p-1 rounded-[5px]"
              placeholder="5"
              onChange={(e) => setPLT(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-around items-center flex-wrap px-4 py-2 bg-gega-soft max-md:w-[300px] rounded-[5px]">
            <p>rating greater than</p>
            <select
              name=""
              id=""
              onChange={(e) => setRGT(e.target.value)}
              className="p-1 rounded-[5px]"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="flex flex-row justify-around items-center flex-wrap px-4 py-2 bg-gega-soft max-md:w-[300px] rounded-[5px]">
            <p>rating less than</p>
            <select
              name=""
              id=""
              onChange={(e) => setRLT(e.target.value)}
              className="p-1 rounded-[5px] ml-2"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      ) : null}
      <ul className="flex flex-wrap flex-row justify-around items-start gap-10 max-md:gap-2">
        {products.length > 0 ? (
          products.map(
            (product) =>
              product.image_link && (
                <li
                  key={product.id}
                  className="border p-4 mb-10 rounded-lg shadow-md max-w-[300px] min-h-[400px] max-md:max-w-[170px] max-md:min-h-[300px] max-md:m-0 relative z-0"
                  onClick={() => setProduct(product)}
                >
                  <img
                    src={product.image_link}
                    alt={product.name}
                    className="w-40 h-40 object-cover mx-auto mb-4 max-md:w-20 max-md:h-20"
                  />
                  <Link to="/product">
                    {" "}
                    <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:underline max-md:text-sm">
                      {product.name
                        ? product.name.slice(0, 40) + "..."
                        : product.name}
                    </h3>
                  </Link>

                  <p className="text-gray-600 mb-2 max-md:text-xs">
                    {product.description
                      ? product.description.slice(0, 30) + "..."
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
                      <ul className="flex flex-wrap space-x-2 max-h-6 overflow-auto">
                        {product.product_colors.map((color) => (
                          <li
                            className="w-6 h-6 rounded-full"
                            style={{ backgroundColor: color.hex_value }}
                            title={color.colour_name}
                          />
                        ))}
                      </ul>
                      <div
                        className="rounded-[100%] min-w-[50px] h-[50px] cursor-pointer absolute bottom-0 right-0 flex items-center justify-center hover:bg-gega-light-grey duration-300"
                        onClick={(e) => {
                          handleProductClick({ product, e });
                        }}
                      >
                        <SlBasket className="text-xl w-full cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </li>
              )
          )
        ) : (
          <div className="m-40">
            <RingLoader />
          </div>
        )}
      </ul>

      <div ref={pleaseRef}>
        {show && (
          <>
            <div
              className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-10"
              onClick={() => setShow(false)}
            />
            <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen z-20">
              <div className="bg-gega-light">
                <Please />
              </div>
            </div>
          </>
        )}
      </div>

      <div>
        {showNotification && (
          <div className="fixed top-0 left-0 w-screen h-[90vh] flex items-end justify-center z-20">
            <div className="w-[300px] bg-gega-rose text-gega-white text-xl text-center py-3 rounded-lg animate-pulse">
              Product was added to basket
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
