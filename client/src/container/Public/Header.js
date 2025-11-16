import { useCallback } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate, Link } from "react-router-dom";
import { path } from "../../ultils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const { LoginIcon } = icons;
const { PersonAddAltIcon } = icons;
const { PostAddIcon } = icons;
const { LogoutIcon } = icons;

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const goLogin = useCallback((flag) => {
    navigate(`/${path.LOGIN}`, { state: { flag } });
  }, []);

  return (
    <div className="w-3/5">
      <div className="w-full flex items-center justify-between bg-red-300">
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
            <div className="flex items-center gap-1">
              <small>Ten !</small>
              <Button
                text={"Đăng xuất"}
                textColor="text-white"
                bgColor="bg-red-700"
                IcAfter={LogoutIcon}
                onClick={() => dispatch(actions.logout())}
              />
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
