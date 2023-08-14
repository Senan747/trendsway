import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function ForMore() {
  return (
    <div className="w-[95%] flex items-end justify-end">
      <div className="cursor-pointer font-semibold">
        <Link to="/rating" className="flex items-center justify-around ml">
          <div>For more</div>
          <div>
            <AiOutlineArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ForMore;
