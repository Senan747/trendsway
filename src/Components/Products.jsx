import React, { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import Please from "./Please";
import { useUserData } from "../UserDataContext";
import { useProductData } from "../ProductDataContext";
import Stars from "./Stars";

function Products() {
  const [products, setProducts] = useState([]);
  const { userData } = useUserData();
  const { setProductData } = useProductData();
  const { setProduct } = useUserData();
  const { setRating } = useUserData();
  const [show, setShow] = useState(false);
  const [showNotficition, setShowNotficiton] = useState(false);
  let location = useLocation();
  const { category } = useParams();
  const { type } = useParams();
  const { tag } = useParams();

  useEffect(() => {
    let url;
    if (location.pathname.includes(category)) {
      url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=&product_type=${type}&product_category=${category}`;
    } else if (location.pathname.includes(tag)) {
      url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=&product_type=${type}&product_tags=${tag}`;
    } else if (location.pathname.includes(type)) {
      url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=&product_type=${type}`;
    } else {
      url =
        "http://makeup-api.herokuapp.com/api/v1/products.json?rating_less_than=5";
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        location.pathname.includes("rating") ||
        location.pathname.includes("result")
          ? setProducts(data)
          : setProducts(data.slice(0, 8));
      });
  }, [location.pathname, type, category]);

  const handleRating = (rating) => {
    setRating(rating);
  };

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

  return (
    <div className="mx-auto p-4 flex flex-col items-end mt-[100px]">
      <ul className="flex flex-wrap flex-row justify-around items-start">
        {products.map((product) =>
          product.image_link ? (
            <Link to="/product">
              <li
                key={product.id}
                className="border p-4 mb-10 rounded-lg shadow-md max-w-[300px] min-h-[500px] cursor-pointer"
                onClick={() => setProduct(product)}
              >
                <img
                  src={product.image_link}
                  alt={product.name}
                  className="w-40 h-40 object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
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
                        className="rounded-[100%] hover:bg-gega-light-grey duration-30"
                        onClick={() => {
                          handleProductClick(product);
                          handleNotficition();
                        }}
                      >
                        <SlBasket className="mr-[10px] text-5xl py-2" />
                      </div>
                    ) : (
                      <div
                        className="rounded-[100%] hover:bg-gega-light-grey duration-300"
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
            </Link>
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
            <div className="fixed top-[22%] left-[38%] z-20">
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
      <div className="w-[100px] cursor-pointer mr-[50px] font-semibold">
        {location.pathname.includes("rating") ||
        location.pathname.includes("product") ||
        location.pathname.includes("result") ? (
          <div>
            
          </div>
        ) : (
          <Link to="/rating" className="flex items-center justify-around ml">
            <p>For more</p>
            <AiOutlineArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Products;
