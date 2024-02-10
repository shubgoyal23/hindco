import React from "react";

function CardTwo({ name, description, icon }) {
   return (
      <div className="w-full md:w-[40%] lg:w-[30%] bg-white rounded-lg overflow-hidden mx-4 md:m-0 drop-shadow-xl p-6">
         <div className="text-lime-500 text-xl mb-4">
         <i className={`fa-solid ${icon}`}></i>
         </div>
         <div className="">
            <h3 className="text-2xl font-semibold font-serif">{name}</h3>
            <p className="text-gray-700 text-lg">{description}</p>
         </div>
      </div>
   );
}

export default CardTwo;
