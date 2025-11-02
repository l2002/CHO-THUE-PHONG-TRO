import { useCallback } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../component";
import icons from "../../ultils/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultils/constant";

const { LoginIcon } = icons;
const { PersonAddAltIcon } = icons;
const { PostAddIcon } = icons;

function Header() {
  const navigate = useNavigate();

  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, []);

  return (
    <div className="w-1100">
      <div className="w-full flex items-center justify-between bg-red-300">
        <img
          className="w-[240px] h-[70px] object-contain"
          src={logo}
          alt="logo"
        />
        <div className="flex items-center gap-1">
          <Button
            text={"Đăng ký"}
            textColor="text-[#212529]"
            bgColor="bg-white"
            IcAfter={PersonAddAltIcon}
          />
          <Button
            text={"Đăng nhập"}
            textColor="text-[#212529]"
            bgColor="bg-white"
            IcAfter={LoginIcon}
            onClick={goLogin}
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
