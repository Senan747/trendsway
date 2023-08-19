import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useUserData } from "../UserDataContext";

function Comment() {
  const [stars, setStars] = useState([false, false, false, false, false]);
  const { showComment, setShowComment } = useUserData();
  const { showThanks, setShowThanks } = useUserData();
  const [value, setValue] = useState();

  const handleStarClick = (index) => {
    const newStars = stars.map((star, i) => (i <= index ? true : false));
    setStars(newStars);
  };

  const handleNotficition = () => {
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 2500);
  };

  return (
    <div className="max-w-[400px] max-height-[600px] mx-4 p-6 rounded-lg shadow-lg bg-gega-white">
      <h1 className="mb-6">
        Do you want to provide information about the website?
      </h1>
      <form action="">
        <input
          type="text"
          className="border-1 h-20 w-80 rounded-md pl-4"
          placeholder="Write something about us"
          required
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex flex-row my-4">
          {stars.map((isFilled, index) => (
            <span key={index} onMouseEnter={() => handleStarClick(index)}>
              {isFilled ? (
                <AiFillStar className="text-gega-star text-2xl" />
              ) : (
                <AiOutlineStar className="text-gega-star text-2xl" />
              )}
            </span>
          ))}
        </div>
        <div className="w-full flex flex-row justify-between">
          <button
            className="bg-gega-white border-1 border-pink-700 text-pink-500 hover:bg-pink-700 hover:text-gega-white  font-bold py-2 px-4 rounded mr-2"
            onClick={() => {
              setShowComment(false);
            }}
          >
            Later
          </button>
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              if (value) {
                setShowComment(false);
                setShowThanks(true);
                handleNotficition();
              }
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Comment;
