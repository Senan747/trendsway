import React, { useEffect, useState } from 'react';

function App() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await fetch('https://api.trendyol.com//sapigw/brands');
      const data = await response.json();
      setBrands(data.brands);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h1>Brands</h1>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
