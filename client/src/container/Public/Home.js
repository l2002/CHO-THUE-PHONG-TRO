import Header from "./Header";
import { Outlet } from "react-router-dom";
import Nagivation from "./Nagivation";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center h-full border border-red-500">
      <Header />
      <Nagivation />
      <div className="w-1100 flex flex-col items-center justify-start mt-3">
        {/* Hiển thị các Route con nằm trong Route cha */}
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
