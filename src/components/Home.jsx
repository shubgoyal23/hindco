import React from "react";
import { Card, CardTwo } from "./index";
import { vegetables, benefitsArray } from "../VegitbleArray";
function Home() {
   return (
      <>
         <main className="flex flex-col justify-center items-center text-center text-white pt-20 mb-0 md:p-20 lg:p-24 p-8 w-full h-screen min-h-[500px] bg-center brightness-90 bg-cover bg-no-repeat bg-[url(/main.jpg)]">
            <h1 className="text-8xl font-serif">100% organic</h1>
            <h2 className="text-gray-200">
               Experience the Pure Essence of Nature: 100% Organic Goodness
               Await!
            </h2>
            <button className="mt-10 border-2 font-bold border-white px-6 py-2 w-content rounded-full hover:border-lime-400 hover:bg-lime-400">
               Shop Now
            </button>
         </main>

         <section className="flex justify-center items-center flex-wrap gap-10 my-20 p-6">
            {vegetables.map((vegi) => (
               <Card key={vegi.id} {...vegi} />
            ))}
         </section>

         <div className="relative flex flex-col justify-center items-center text-center text-white pt-20 md:p-20 lg:p-24 p-8 w-full h-72">
            <div className="absolute inset-0 bg-cover bg-center bg-[url(/section-bg.jpg)] brightness-50"></div>
            <div className="relative z-10">
               <h3 className="text-4xl font-serif brightness-100 uppercase">
                  Fresh and Non GMO Products
               </h3>
               <p className="text-gray-400 z-10">
                  Experience the Bountiful Harvest: Handpicked Freshness,
                  Crafted with Non-GMO Excellence, Straight from Nature's Heart!
               </p>
            </div>
         </div>

         <section className="flex justify-center items-center flex-wrap gap-10 mt-20 pb-20 p-6">
            {benefitsArray.map((benifit) => (
               <CardTwo key={benifit.name} {...benifit} />
            ))}
         </section>
      </>
   );
}

export default Home;
