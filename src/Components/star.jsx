import React, { useRef, useState, useEffect } from 'react';

const RatingStars = () => {
  const rateRef = useRef(null);
  const [rate, setRate] = useState(null);
  const [isShine, setIsShine] = useState(false);
  const [stars, setStars] = useState(0);
  const [halfStar, setHalfStar] = useState(false);
  const [span, setSpan] = useState('');
  const [counts, setCounts] = useState(5);

  useEffect(() => {
    const updateStars = () => {
      setIsShine(true);
      setStars(Math.floor(rate));

      setCounts(5 - Math.floor(rate));

      if (rate - Math.floor(rate) === 0.5) {
        setCounts((prevCounts) => prevCounts - 1);
        setHalfStar(true);
        setSpan(
          '<i class="fa-solid fa-star-half-stroke bright-half"></i>'
        );
      } else {
        setHalfStar(false);
        setSpan('');
      }
    };

    updateStars();
  }, [rate]);

  const handleRateChange = (event) => {
    setRate(parseFloat(event.target.value));
  };

  return (
    <div className="total">
      <div className="input">
        <input
          type="number"
          min="1"
          max="5"
          step="0.5"
          value={rate}
          onChange={handleRateChange}
        />
      </div>
      <div>
        <ul className="shine-stars">
          <li>
            {Array.from({ length: stars }).map((index) => (
              <span key={index} className={isShine ? 'shine' : ''}>
                <i className="fa-solid fa-star"></i>
              </span>
            ))}
            <span
              dangerouslySetInnerHTML={{ __html: span }}
              className={`bright-half ${halfStar ? 'shine' : ''}`}
            ></span>
          </li>
          <li>
            {Array.from({ length: counts }).map((_, index) => (
              <span key={index}>
                <i className="fa-regular fa-star"></i>
              </span>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RatingStars;
