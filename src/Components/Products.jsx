import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container mx-auto p-4">
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
          product.image_link !== null ? (
            <li key={product.id} className="border p-4 rounded-lg shadow-md">
              <img src={product.image_link} alt={product.name} className="w-40 h-40 object-cover mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
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
