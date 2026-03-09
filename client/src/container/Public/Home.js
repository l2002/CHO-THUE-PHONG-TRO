import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { Search, Nagivation } from "./index";
import { Contact, Intro } from "../../components";
import { useSelector } from "react-redux";
import { path } from "../../ultils/constant";
import { useEffect, useRef } from "react";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset >= 134) {
        navRef.current.style.cssText = `
          position:fixed;
          top:0;
          left:0;
          right:0;
          z-index:50;
        `;
      } else {
        navRef.current.style.cssText = `
          width:100%
        `;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="w-full flex flex-col items-center h-full gap-6">
      <Header />
      <div ref={navRef} className="w-full">
        <Nagivation />
      </div>
      {isLoggedIn &&
        location.pathname !== `/${path.CONTACT}` &&
        !location.pathname?.includes(path.DETAIL) && <Search />}
      <div className="w-4/5 lg:w-3/5 flex flex-col items-start justify-start mt-3">
        {/* Hiển thị các Route con nằm trong Route cha */}
        <Outlet />
      </div>
      <Intro />
      <Contact />
    </div>
  );
};

export default Home;
