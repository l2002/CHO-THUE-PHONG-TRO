import { useCallback, useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { Button, User } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { path } from "../../ultils/constant";
import { useSelector, useDispatch } from "react-redux";
import menuMange from "../../ultils/menuManage";
import * as actions from "../../store/actions";

const { LoginIcon, PersonAddAltIcon, PostAddIcon, LogoutIcon } = icons;

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const headerRef = useRef();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const goLogin = useCallback((flag) => {
    navigate(`/${path.LOGIN}`, { state: { flag } });
  }, []);

  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  }, [searchParams.get("page")]);

  return (
    <div ref={headerRef} className="w-3/5">
      <div className="w-full flex items-center justify-between bg-[#f5f5f5]">
        <Link to={"/"}>
          <img
            className="w-[240px] h-[70px] object-contain"
            src={logo}
            alt="logo"
          />
        </Link>

        <div className="flex items-center gap-1">
          {!isLoggedIn && (
            <div className="flex items-center gap-1">
              <small>Phongtro123 xin chào!</small>
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
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center gap-3 relative">
              <User />
              <Button
                text={"Quản lý tài khoản"}
                textColor="text-white"
                bgColor="bg-blue-700"
                px="px-5"
                onClick={() => {
                  setIsShowMenu((prev) => !prev);
                }}
              />
              {isShowMenu && (
                <div className="absolute min-w-200 top-full right-0 bg-white shadow-md rounded-md p-4 flex flex-col">
                  {menuMange.map((item) => {
                    return (
                      <Link
                        className="cursor-pointer hover:text-orange-500 text-blue-500 border-b border-gray-200 p-2 flex items-center gap-1"
                        key={item.id}
                        to={item?.path}
                      >
                        {item?.icon}
                        {item.text}
                      </Link>
                    );
                  })}
                  <span
                    className="cursor-pointer hover:text-orange-500 text-blue-500 p-2 flex items-center gap-1"
                    onClick={() => {
                      setIsShowMenu(false);
                      dispatch(actions.logout());
                    }}
                  >
                    <LogoutIcon />
                    Đăng xuất
                  </span>
                </div>
              )}
            </div>
          )}
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
