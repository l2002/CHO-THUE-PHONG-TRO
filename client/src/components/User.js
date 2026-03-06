import { useSelector } from "react-redux";
import defaultAvatar from "../assets/avatar-facebook-mac-dinh-2.jpg";
import { blobToBase64 } from "../ultils/Common/toBase64";

const User = () => {
  const { currentData } = useSelector((state) => state.user);

  return (
    <>
      {currentData && Object.keys(currentData).length > 0 && (
        <div className="flex items-center">
          <img
            className="w-10 h-10 object-cover rounded-full border-2 border-white shadow-md"
            src={blobToBase64(currentData?.avatar) || defaultAvatar}
            alt="avatar"
          />
          <div className="flex flex-col">
            <span>
              Xin chào,{" "}
              <span className="font-semibold">{currentData?.name}</span>
            </span>
            <span>
              Mã tài khoản:{" "}
              <span className="font-medium">
                {currentData?.id?.match(/\d/g).join("").slice(0, 6)}
              </span>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
