import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./index";

function App() {
   const [scrolling, setScrolling] = React.useState(false);

   React.useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setScrolling(true);
         } else {
            setScrolling(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);
   return (
      <>
         <Header scrolling={scrolling} />
         <div className="bg-gray-200">
            <Outlet />
         </div>
         <Footer />
      </>
   );
}

export default App;
