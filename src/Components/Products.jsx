import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [rating, setRating] = useState('');

  useEffect(() => {
    const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?rating_less_than=5';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mx-auto p-4">
    <ul className="flex flex-wrap flex-row justify-around">
      {products.map((product) => (
          product.image_link !== null ? (
            <li key={product.id} className="border p-4 mb-10 rounded-lg shadow-md max-w-[300px]">
              <img src={product.image_link} alt={product.name} className="w-40 h-40 object-cover mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">
                {product.description.length > 70 ? (
                   product.description.slice(0, 70)) + '...' : product.description
                }
                
              </p>
              { product.rating  }
              <ul>
                
              </ul>
              <p className="text-lg font-semibold">
                {product.price_sign} {product.price} {product.currency}
              </p>
              <ul className="flex flex-wrap space-x-2">
                {product.product_colors.map((color, index) => (
                  <li
                    key={index}
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color.hex_value }}
                    title={color.colour_name}
                  />
                ))}
              </ul>
              <a href={product.product_link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                View Product
              </a>
            </li>
          ) : null
      ))}
    </ul>
  </div>
  );
}

export default Products;
