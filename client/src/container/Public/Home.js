import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { Search, Nagivation } from "./index";
import { Contact, Intro } from "../../components";
import { useSelector } from "react-redux";
import { path } from "../../ultils/constant";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <div className="w-full flex flex-col items-center h-full gap-4">
      <Header />
      <Nagivation />
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
