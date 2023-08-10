import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useUserData } from '../UserDataContext';

function Stars() {
    const { rating } = useUserData();
    const stars = [];
    let rate = Math.round(rating);

    for (let i = 0; i < rate; i++) {
      stars.push(
        <AiFillStar key={`filled_${i}`} className="text-gega-star text-xl" />
      );
    }

    for (let i = 0; i < 5 - rate; i++) {
      stars.push(
        <AiOutlineStar
          key={`outlined_${i}`}
          className="text-gega-star text-xl"
        />
      );
    }
    return stars;
}

export default Stars