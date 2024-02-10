import React from "react";

function Card({ name, description, image }) {
   return (
      <div className="w-full md:w-[40%] lg:w-[30%] bg-white rounded-lg overflow-hidden mx-4 md:m-0 drop-shadow-xl">
         <div className="h-60 mb-6">
            <img src={image} alt={name} className="h-full w-full object-cover" />
         </div>
         <div className="px-6">
            <h3 className="text-2xl font-semibold font-serif">{name}</h3>
            <p className="text-gray-700 text-lg">{description}</p>
         </div>
         <button className="ml-6 my-10 px-10 py-2 w-content border-2 rounded-full bg-lime-500 text-white font-semibold shadow-lg">Add To Cart</button>
      </div>
   );
}

export default Card;
