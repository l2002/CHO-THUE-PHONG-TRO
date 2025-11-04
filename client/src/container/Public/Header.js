import { useCallback } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../component";
import icons from "../../ultils/icons";
import { useNavigate, Link } from "react-router-dom";
import { path } from "../../ultils/constant";

const { LoginIcon } = icons;
const { PersonAddAltIcon } = icons;
const { PostAddIcon } = icons;

function Header() {
  const navigate = useNavigate();

  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  return (
    <div className="w-1100">
      <div className="w-full flex items-center justify-between bg-red-300">
        <Link to={"/"}>
          <img
            className="w-[240px] h-[70px] object-contain"
            src={logo}
            alt="logo"
          />
        </Link>

        <div className="flex items-center gap-1">
          <Button
            text={"Đăng ký"}
            textColor="text-[#212529]"
            bgColor="bg-white"
            IcAfter={PersonAddAltIcon}
            onClick={() => {
              goLogin(true);
            }}
          />
          <Button
            text={"Đăng nhập"}
            textColor="text-[#212529]"
            bgColor="bg-white"
            IcAfter={LoginIcon}
            onClick={() => {
              goLogin(false);
            }}
          />
          <Button
            text={"Đăng tin"}
            textColor="text-white"
            bgColor="bg-[#FF5723]"
            IcAfter={PostAddIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
