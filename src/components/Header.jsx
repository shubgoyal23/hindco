import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header({ scrolling }) {
   const [navbar, setNavbar] = useState(false);
   return (
      <header
         className={`w-full h-20 flex justify-between items-center px-6 lg:px-20 fixed top-0 z-20 transition-all duration-300 ease-in ${
            scrolling
               ? "bg-white shadow-lg"
               : !navbar
               ? "bg-transparent"
               : "backdrop-blur-sm bg-white/60"
         }`}
      >
         <Link to={"/"}>
            <h1
               className={`text-3xl font-bold ${
                  !scrolling ? "text-white" : "text-lime-400"
               }`}
            >
               Fresh Harvest
            </h1>
         </Link>
         <button
            className={`md:hidden text-xl ${
               !scrolling ? "text-white" : "text-lime-600"
            }`}
            onClick={() => setNavbar((prev) => !prev)}
         >
            <i className={`fa-solid ${navbar ? "fa-xmark" : "fa-bars"}`}></i>
         </button>
         <nav
            className={`flex justify-center absolute md:static w-full h-screen md:h-20 md:w-auto top-20 transition-all duration-500 ease-in md:left-0 ${
               navbar
                  ? "backdrop-blur-sm bg-white/60 left-0"
                  : "bg-transparent -left-[800px]"
            } ${
               scrolling
                  ? "text-lime-600"
                  : navbar
                  ? "text-lime-800"
                  : "text-white"
            }`}
         >
            <ul
               className={`flex flex-col items-center md:justify-center md:flex-row gap-6 text-xl font-medium pt-8 md:pt-0`}
            >
               <li>
                  <NavLink
                     to="/"
                     className={({ isActive }) =>
                        `${isActive ? "text-amber-500 font-bold" : ""}`
                     }
                     onClick={()=> setNavbar(false)}
                  >
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/shop"
                     className={({ isActive }) =>
                        `${isActive ? "text-amber-500 font-bold" : ""}`
                     }
                     onClick={()=> setNavbar(false)}
                  >
                     Shop
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/about"
                     className={({ isActive }) =>
                        `${isActive ? "text-amber-500 font-bold" : ""}`
                     }
                     onClick={()=> setNavbar(false)}
                  >
                     About
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/contact"
                     className={({ isActive }) =>
                        `${isActive ? "text-amber-500 font-bold" : ""}`
                     }
                     onClick={()=> setNavbar(false)}
                  >
                     Contact
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/social"
                     className={({ isActive }) =>
                        `${isActive ? "text-amber-500 font-bold" : ""}`
                     }
                     onClick={()=> setNavbar(false)}
                  >
                     Follow Us
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
