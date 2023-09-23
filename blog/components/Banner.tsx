import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5">
      <div>
        <h1 className="text-7xl p-4"> House of Ferns</h1>
        <h2 className="p-4 mt-5 md:mt-0">Where Ferns Tell Their Story</h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        React | NextJs | Js | CSS | Remote Work | Citrix
      </p>
    </div>
  );
};

export default Banner;
