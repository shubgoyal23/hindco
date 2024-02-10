import React from "react";

function Footer() {
   return (
      <footer className="relative w-full p-10 ">
         <div className="absolute inset-0 bg-cover bg-center brightness-50 bg-[url(/footer.jpg)] "></div>

         <div className="relative flex flex-col md:flex-row gap-10 justify-between items-center text-white py-10 mb-6">
            <div className="flex-1 flex justify-center items-center flex-col text-center">
               <h3 className="text-4xl mb-4 text-white">Fresh Harvest</h3>
               <p>
                  About Us: Your go-to for the freshest, 100% organic produce.
               </p>
            </div>
            <div className="flex-1 flex justify-center items-center flex-col text-center">
               <h3 className="text-xl underline mb-4 text-gray-200 underline-offset-4">
                  Quick Links
               </h3>
               <ul className="text-lime-400">
                  <li>
                     <a>Shipping & Returns</a>
                  </li>
                  <li>
                     <a>Privacy Policy</a>
                  </li>
                  <li>
                     <a>Our Products</a>
                  </li>
                  <li>
                     <a>Special Offers</a>
                  </li>
               </ul>
            </div>
            <div className="flex-1 flex justify-center items-center flex-col text-center">
               <h3 className="text-xl underline mb-4 text-gray-200 underline-offset-4">
                  Contact Information
               </h3>
               <ul className="text-lime-400">
                  <li>Email: info@freshharvest.com</li>
                  <li>Phone: 1-800-FRESH-VEG</li>
                  <li>Address: 123 Organic St., City, Country</li>
               </ul>
            </div>
            <div className="flex-1 flex justify-center items-center flex-col text-center">
               <h3 className="text-xl underline mb-4 text-gray-200 underline-offset-4">
                  Subscribe
               </h3>
               <p className="text-xs text-gray-500">
                  Subscribe to our newsletter for exclusive offers and updates:
               </p>
               <form
                  className="flex border-2 border-lime-400 rounded-md mt-2 w-full"
                  onSubmit={(e) => e.preventDefault()}
               >
                  <input
                     className="w-[80%] bg-transparent outline-none ml-2 h-10"
                     type="email"
                     placeholder="Enter your email"
                  />
                  <button className="w-[20%] bg-lime-400" type="submit">
                     <i className="fa-solid fa-arrow-right"></i>
                  </button>
               </form>
            </div>
         </div>
         <div className=" relative flex flex-col md:flex-row gap-2 justify-between items-center text-white">
            <p>
               &copy; 2024{" "}
               <span className="text-lime-400 hover:underline cursor-pointer">
                  Fresh Harvest
               </span>
               . All rights reserved.
            </p>
            <p>
               <a className="text-lime-400 px-2 cursor-pointer">
                  <i className="fa-brands fa-twitter"></i>
               </a>
               <a className="text-lime-400 px-2 cursor-pointer">
                  <i className="fa-brands fa-facebook"></i>
               </a>
               <a className="text-lime-400 px-2 cursor-pointer">
                  <i className="fa-brands fa-instagram"></i>
               </a>
            </p>
         </div>
      </footer>
   );
}

export default Footer;
