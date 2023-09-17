import React from "react";

function HomeDesignPart() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row items-center p-10 m-10 max-h-[800px] max-w-[1200px] my-28 max-md:my-8 max-md:m-5 max-md:p-5">
        <div className="flex flex-col">
          <div className="max-h-[400px] max-w-[500px] mb-5">
            <img src="makeup.png" alt="" className="w-full h-full bg-cover" />
          </div>
          <div className="max-h-[400px] max-w-[300px]">
            <img src="cosmetic.jpg" alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="m-5">
          <div className="max-w-[600px] max-h-full">
            <img src="three.jpg" alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="max-h-[400px] max-w-[500px] mb-5">
            <img src="Four.jpg" alt="" className="w-full h-full bg-cover" />
          </div>
          <div className="max-h-[400px] max-w-[300px]">
            <img src="five.jpg" alt="" className="w-full h-full bg-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDesignPart;
